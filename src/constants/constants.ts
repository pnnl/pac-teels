export const UNIT_OPTIONS = [
  ["ppm"],
  ["mg/m"]
];

/** Stubbed Data Section **/
export const PHYSICAL_PROPERTY_MAP = new Map([
    ["key1", { property: "Molecular Weight", value: 70.906 }],
    ["key2", { property: "State", value: "Gas" }],
    ["key3", { property: "Melting Point (°C)", value: "-101.5 °C" }],
    ["key4", { property: "Boiling Point (°C)", value: "-34.04 °C" }],
    ["key5", { property: "VP (°C)", value: "25 °C" }]
  ]);

  export const CHEMICAL_IDENTITY = {
    CAS: "7782-505",
    chemFormula: "Cl2",
    UNumber: "1017",
    Synonyms: `CHLORINE; BERTHOLITE; CHLORE (DOT FRENCH); CHLORINE MOL.;
      CHLORINE MOLECULE (CL2); CLORO (DOT SPANISH); CHLORINE; BERTHOLITE;
      CHLORE (DOT FRENCH); CHLORINE MOL.; CHLORINE MOLECULE (CL2); CLORO (DOT SPANISH);CHLORINE; BERTHOLITE;
      CHLORE (DOT FRENCH); CHLORINE MOL.; CHLORINE MOLECULE (CL2); CLORO (DOT SPANISH);CHLORINE; BERTHOLITE;
      CHLORE (DOT FRENCH); CHLORINE MOL.; CHLORINE MOLECULE (CL2); CLORO (DOT SPANISH);CHLORINE; BERTHOLITE;
      CHLORE (DOT FRENCH); CHLORINE MOL.; CHLORINE MOLECULE (CL2); CLORO (DOT SPANISH);`
  };

  export const HEALTH_CODE_NUMBERS = new Map([
    [
      "key1",
      {
        healthCode: 4.03,
        organ: "Eye",
        description: "acute effects other than irritation"
      }
    ],
    [
      "key2",
      {
        healthCode: 4.04,
        organ: "Nose",
        description: "acute effects other than irritation"
      }
    ],
    [
      "key3",
      {
        healthCode: 4.06,
        organ: "Brain",
        description: "acute effects other than irritation"
      }
    ],
    [
      "key4",
      {
        healthCode: 4.03,
        organ: "Heart, cardiovasular system",
        description: "acute effects"
      }
    ],
    [
      "key5",
      { healthCode: 4.02, organ: "Nervous system toxin", description: "acute effects" }
    ],
    [
      "key6",
      { healthCode: 4.08, organ: "Central nervous system", description: "acute effects" }
    ],
    [
      "key7",
      {
        healthCode: 4.01,
        organ: "Respiratory toxin",
        description: "acute effects other than severe or moderate irritation"
      }
    ],
    [
      "key8",
      {
        healthCode: 4.06,
        organ: "Respiratory irritant",
        description: "acute,severe or moderate but not mild irritant effects"
      }
    ],
    ["key9", { healthCode: 4.09, organ: "Eye irritant", description: "severe" }],
    ["key10", { healthCode: 4.09, organ: "Skin irritant", description: "severe" }]
  ]);

  export const STUBBED_HOMEPAGE_ITEMS = new Map([
    [
      "7782-50-5",
      {
        name: "Adipic acid, diethylene glycol, trimethylolpropane, phthalic anhydride, toluenediisocyanate polymer, isocyanate terminated"
      }
    ]
  ]);