/**
 * Babel will compile modern JavaScript down to a format compatible with older browsers, but it will also increase your
 * final bundle size and build speed. Edit the `browserslist` property in the package.json file to define which
 * browsers Babel should target.
 *
 * Browserslist documentation: https://github.com/browserslist/browserslist#browserslist-
 */
const useBabel = true;

/**
 * This option controls whether or not development builds should be compiled with Babel. Change this to `true` if you
 * intend to test with older browsers during development, but it could significantly impact your build speed.
 */
const useBabelInDevelopment = false;

/**
 * Define paths to any stylesheets you wish to include at the top of the CSS bundle. Any styles compiled from svelte
 * will be added to the bundle after these. In other words, these are global styles for your svelte app. You can also
 * specify paths to SCSS or SASS files, and they will be compiled automatically.
 */
const stylesheets: string[] = [
  "./public/assets/globals.css"
  //  './public/assets/OpenSans.css',
  //  './public/assets/Material-Icons.css',
];

/**
 * Change this to `true` to generate source maps alongside your production bundle. This is useful for debugging, but
 * will increase total bundle size and expose your source code.
 */
const sourceMapsInProduction = false;

/*********************************************************************************************************************/
/**********                                             Webpack                                             **********/
/*********************************************************************************************************************/

import Webpack from "webpack";
import type WebpackDev from "webpack-dev-server";
import SveltePreprocess from "svelte-preprocess";
import Autoprefixer from "autoprefixer";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import CSSMinimizerPlugin from "css-minimizer-webpack-plugin";
import DotenvPlugin from "dotenv-webpack";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import fs from "fs";
import path from "path";
import CopyPlugin from "copy-webpack-plugin";
import dotenv from "dotenv";
import WebpackBar from "webpackbar";
import HtmlWebpackTagsPlugin from "html-webpack-tags-plugin";
import { merge } from "webpack-merge";

const output = dotenv.config();


const environmentReplacements = {};
for (const key in output.parsed) {
  if (process.env[key] === undefined) {
    environmentReplacements[`process.env.${key}`] = JSON.stringify(output.parsed[key]);
    continue;
  }
  environmentReplacements[`process.env.${key}`] = JSON.stringify(process.env[key]);
}

/* Default to local development if no env variable is set */
const mode = process.env.DEPLOYMENT_TYPE || "localDevelopment";
const isProduction = mode === "production";
const isDevelopment = !isProduction;

const currEnvFile = mode === "localDevelopment" ? "/.env.local" : mode === "production" ? "/.env.production" : "/.env";
const dotenv2 = require("dotenv").config({ path: __dirname + currEnvFile });

console.log({
  configuration: {
    mode,
    isProduction,
    isDevelopment
  }
});

/*********************************************************************************************************************/
/**********                                       Common Configuration                                      **********/
/*********************************************************************************************************************/

const commonConfig = merge([
  {
    entry: {
      bundle: [...stylesheets, "./src/main.ts"]
    },
    resolve: {
      alias: {
        // Note: Later in this config file, we'll automatically add paths from `tsconfig.compilerOptions.paths`
        svelte: path.resolve("node_modules", "svelte")
      },
      extensions: [".mjs", ".js", ".ts", ".svelte"],
      mainFields: ["svelte", "browser", "module", "main"],
      modules: [path.resolve(__dirname, "src"), "node_modules"]
    },
    output: {
      path: path.resolve(__dirname, "build"),
      publicPath: process.env.homepage ?? "/",
      filename: "assets/[name].[chunkhash].js",
      chunkFilename: "[name].[id].[chunkhash].js",
      clean: true
    },

    plugins: [
      new Webpack.DefinePlugin({
        "process.env": JSON.stringify(dotenv2.parsed),
      }),
      new MiniCssExtractPlugin({
        filename: "assets/[name].[contenthash].css"
      }),
      new Webpack.DefinePlugin(environmentReplacements),
      new WebpackBar(),
      new CopyPlugin({
        patterns: [
          { from: "./public/scripts", to: "scripts" },
          { from: "./public/assets", to: "assets" }
          //   { from: "./public/imgs", to: "imgs" }
        ]
      }),
      new HtmlWebpackPlugin({
        favicon: "./public/assets/favicon.png",
        title: "OpenWell",
        template: "./public/index.html",
        publicPath: process.env.homepage ?? "auto"
      }),

      // Add static js and css
      new HtmlWebpackTagsPlugin({
        tags: ["scripts/config.js", "assets/global.css", "assets/Material-Icons.css"]
      })
    ],
    stats: {
      chunks: false,
      chunkModules: false,
      modules: false,
      assets: true,
      entrypoints: false,
	  warnings: false,
    },
    module: {
      rules: [
        // Required to prevent errors from Svelte on Webpack 5+, omit on Webpack 4
        // See: https://github.com/sveltejs/svelte-loader#usage
        {
          test: /node_modules\/svelte\/.*\.mjs$/,
          resolve: {
            fullySpecified: false
          }
        },

        // Rule: SASS
        {
          test: /\.(scss|sass)$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader
            },
            "css-loader",
            {
              loader: "postcss-loader",
              options: {
                postcssOptions: {
                  plugins: [Autoprefixer]
                }
              }
            },
            "sass-loader"
          ]
        },

        // Rule: CSS
        {
          test: /\.css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader
            },
            "css-loader"
          ]
        },
        // Rule: TypeScript
        {
          test: /\.ts$/,
          use: "ts-loader",
          exclude: /node_modules/
        }
      ]
    },
    // @ts-ignore
    devServer: {
      hot: true,
      port: 3000,
      static: "public",
      proxy: {},
	  client: {
		logging: 'info',
		overlay: false
	  },
    }
  }
]);

/*********************************************************************************************************************/
/**********                                             Production                                          **********/
/*********************************************************************************************************************/

const productionConfig = merge([
  {
    module: {
      rules: [
        // Rule: Svelte
        {
          test: /\.svelte$/,
          use: {
            loader: "svelte-loader",
            options: {
              compilerOptions: {
                // Dev mode must be enabled for HMR to work!
                dev: false
              },
              emitCss: true,
              hotReload: false,

              preprocess: SveltePreprocess({
                postcss: {
                  plugins: [Autoprefixer]
                }
              })
            }
          }
        }
      ]
    },
    target: "browserslist",
    devtool: !sourceMapsInProduction ? false : "source-map"
  }
]);

/* Common config for localDev and development deployment */
const commonDevelopmentConfig = merge([
  {
    target: "web",
    devtool: "source-map"
  }
]);

/*********************************************************************************************************************/
/**********                                          Development Deployment                                 **********/
/*********************************************************************************************************************/

/* We don't want hot reloading on the deployed server */
const developmentConfig = merge([
  {
    module: {
      rules: [
        // Rule: Svelte
        {
          test: /\.svelte$/,
          use: {
            loader: "svelte-loader",
            options: {
              compilerOptions: {
                // Dev mode must be enabled for HMR to work!
                dev: true
              },
              emitCss: false,
              hotReload: false,

              preprocess: SveltePreprocess({
                postcss: {
                  plugins: [Autoprefixer]
                }
              })
            }
          }
        }
      ]
    }
  }
]);

/*********************************************************************************************************************/
/**********                                    Local Development Server                                     **********/
/*********************************************************************************************************************/

const localDevelopmentConfig = merge([
  {
    module: {
      rules: [
        // Rule: Svelte
        {
          test: /\.svelte$/,
          use: {
            loader: "svelte-loader",
            options: {
              compilerOptions: {
                // Dev mode must be enabled for HMR to work!
                dev: true
              },
              emitCss: false,
              hotReload: true,
              hotOptions: {
                // List of options and defaults: https://www.npmjs.com/package/svelte-loader-hot#usage
                noPreserveState: false,
                optimistic: true
              },
              preprocess: SveltePreprocess({
                postcss: {
                  plugins: [Autoprefixer]
                }
              })
            }
          }
        }
      ]
    }
  }
]);

const getConfig = mode => {
  switch (mode) {
    case "production":
      return merge([commonConfig, productionConfig, { mode: "production" }]);
    case "development":
      return merge([
        commonConfig,
        commonDevelopmentConfig,
        developmentConfig,
        { mode: "development" }
      ]);
    case "localDevelopment":
      return merge([
        commonConfig,
        commonDevelopmentConfig,
        localDevelopmentConfig,
        { mode: "development" }
      ]);
    default:
      throw new Error(
        "Error! Unrecognized mode passed in please us production, development, or localDevelopment in DEPLOYMENT_TYPE env variable."
      );
  }
};

const config: any = getConfig(mode);

/**
 * This interface combines configuration from `webpack` and `webpack-dev-server`. You can add or override properties
 * in this interface to change the config object type used above.
 */
export interface Configuration extends Webpack.Configuration, WebpackDev.Configuration {}

/*********************************************************************************************************************/
/**********                                             Production                                          **********/
/*********************************************************************************************************************/

// Configuration for production bundles
if (mode !== "localDevelopment") {
  // Clean the build directory for production builds
  config.plugins?.push(new CleanWebpackPlugin() as any);

  // Minify CSS files
  config.optimization?.minimizer?.push(
    new CSSMinimizerPlugin({
      parallel: true,
      minimizerOptions: {
        preset: [
          "default",
          {
            discardComments: { removeAll: !sourceMapsInProduction }
          }
        ]
      }
    }) as any
  );

  // Minify and treeshake JS
  if (config.optimization === undefined) {
    config.optimization = {};
  }

  config.optimization.minimize = true;

  // Splits node modules into their own files for caching
  config.optimization.runtimeChunk = "single";
  config.optimization.splitChunks = {
    chunks: "all",
    maxInitialRequests: Infinity,
    minSize: 0,
    cacheGroups: {
      vendor: {
        test: /[\\/]node_modules[\\/]/,
        name(module) {
          // get the name. E.g. node_modules/packageName/not/this/part.js
          // or node_modules/packageName
          const packageName = module.context.match(
            /[\\/]node_modules[\\/](.*?)([\\/]|$)/
          )[1];

          // npm package names are URL-safe, but some servers don't like @ symbols
          return `npm.${packageName.replace("@", "")}`;
        }
      }
    }
  };
}

/*********************************************************************************************************************/
/**********                                             Typescript                                          **********/
/*********************************************************************************************************************/

// Parse as JSON5 to add support for comments in tsconfig.json parsing.
require("require-json5").replace();

// Load path aliases from the tsconfig.json file
const tsconfigPath = path.resolve(__dirname, "tsconfig.json");
const tsconfig = fs.existsSync(tsconfigPath) ? require(tsconfigPath) : {};

if ("compilerOptions" in tsconfig && "paths" in tsconfig.compilerOptions) {
  const aliases = tsconfig.compilerOptions.paths;

  for (const alias in aliases) {
    const paths = aliases[alias].map((p: string) => path.resolve(__dirname, p));

    // Our tsconfig uses glob path formats, whereas webpack just wants directories
    // We'll need to transform the glob format into a format acceptable to webpack

    const wpAlias = alias.replace(/(\\|\/)\*$/, "");
    const wpPaths = paths.map((p: string) => p.replace(/(\\|\/)\*$/, ""));

    if (config.resolve && config.resolve.alias) {
      if (!(wpAlias in config.resolve.alias) && wpPaths.length) {
        config.resolve.alias[wpAlias] = wpPaths.length > 1 ? wpPaths : wpPaths[0];
      }
    }
  }
}

/*********************************************************************************************************************/
/**********                                             Babel                                               **********/
/*********************************************************************************************************************/

if (useBabel && (isProduction || useBabelInDevelopment)) {
  const loader = {
    loader: "babel-loader",
    options: {
      sourceType: "unambiguous",
      presets: [
        [
          // Docs: https://babeljs.io/docs/en/babel-preset-env
          "@babel/preset-env",
          {
            debug: false,
            corejs: { version: 3 },
            useBuiltIns: "usage"
          }
        ]
      ],
      plugins: ["@babel/plugin-transform-runtime"]
    }
  };

  // @ts-ignore

  config.module?.rules.unshift({
    test: /\.(?:m?js|ts)$/,
    include: [path.resolve(__dirname, "src"), path.resolve("node_modules", "svelte")],
    exclude: [/node_modules[/\\](css-loader|core-js|webpack|regenerator-runtime)/],
    use: loader
  });

  // @ts-ignore
  const svelte = config.module?.rules.find(rule => {
    if (typeof rule !== "object") return false;
    else if (Array.isArray(rule.use))
      return rule.use.includes(
        (e: any) => typeof e.loader === "string" && e.loader.startsWith("svelte-loader")
      );
    else if (typeof rule.use === "object")
      return rule.use.loader?.startsWith("svelte-loader") ?? false;
    return false;
  }) as Webpack.RuleSetRule;

  if (!svelte) {
    console.error("ERR: Could not find svelte-loader for babel injection!");
    process.exit(1);
  }

  if (!Array.isArray(svelte.use)) {
    svelte.use = [svelte.use as any];
  }

  svelte.use.unshift(loader);
}

export default config;
