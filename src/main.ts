/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-ignore
import App from "./App.svelte";
import Amplify from "aws-amplify";
import AWSAppSyncClient, { AUTH_TYPE } from "aws-appsync";

const app = new App({
  target: document.body,
  props: {
    title: "PACTEELS"
  }
});

Amplify.configure({
  aws_cognito_region: process.env.REGION,
  aws_user_pools_id: process.env.USER_POOL_ID,
  aws_user_pools_web_client_id: process.env.APP_CLIENT_ID,
  auth: {
    type: AUTH_TYPE.API_KEY,
    apiKey: process.env.APPSYNC_APIKEY
  }
});

export default app;
