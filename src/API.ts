/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateChemicalInput = {
  id?: string | null;
  casNumber?: string | null;
  chemicalFormula?: string | null;
  unNumber?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  name?: string | null;
  pac1?: number | null;
  pac2?: number | null;
  pac3?: number | null;
  pac1Source?: string | null;
  pac2Source?: string | null;
  pac3Source?: string | null;
  teel1?: number | null;
  teel2?: number | null;
  teel3?: number | null;
  teel1Source?: string | null;
  teel2Source?: string | null;
  teel3Source?: string | null;
  isAsphyxiant?: boolean | null;
  molecularWeight?: number | null;
  originalUnit?: string | null;
  compoundAdjustmentFactor?: number | null;
  isYChemical?: boolean | null;
  aegl1?: number | null;
  aegl2?: number | null;
  aegl3?: number | null;
  erpg1?: number | null;
  erpg2?: number | null;
  erpg3?: number | null;
  tlvstel?: number | null;
  weelstel?: number | null;
  makstel?: number | null;
  relstel?: number | null;
  pelstel?: number | null;
  eegl60?: number | null;
  loc?: number | null;
  concentrationLimit?: number | null;
  tlvtwa?: number | null;
  weeltwa?: number | null;
  maktwa?: number | null;
  reltwa?: number | null;
  peltwa?: number | null;
  weelceiling?: number | null;
  makceiling?: number | null;
  relceiling?: number | null;
  pelceiling?: number | null;
  eegl30?: number | null;
  idlh?: number | null;
};

export type ModelChemicalConditionInput = {
  casNumber?: ModelStringInput | null;
  chemicalFormula?: ModelStringInput | null;
  unNumber?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  name?: ModelStringInput | null;
  pac1?: ModelFloatInput | null;
  pac2?: ModelFloatInput | null;
  pac3?: ModelFloatInput | null;
  pac1Source?: ModelStringInput | null;
  pac2Source?: ModelStringInput | null;
  pac3Source?: ModelStringInput | null;
  teel1?: ModelFloatInput | null;
  teel2?: ModelFloatInput | null;
  teel3?: ModelFloatInput | null;
  teel1Source?: ModelStringInput | null;
  teel2Source?: ModelStringInput | null;
  teel3Source?: ModelStringInput | null;
  isAsphyxiant?: ModelBooleanInput | null;
  molecularWeight?: ModelFloatInput | null;
  originalUnit?: ModelStringInput | null;
  compoundAdjustmentFactor?: ModelFloatInput | null;
  isYChemical?: ModelBooleanInput | null;
  aegl1?: ModelFloatInput | null;
  aegl2?: ModelFloatInput | null;
  aegl3?: ModelFloatInput | null;
  erpg1?: ModelFloatInput | null;
  erpg2?: ModelFloatInput | null;
  erpg3?: ModelFloatInput | null;
  tlvstel?: ModelFloatInput | null;
  weelstel?: ModelFloatInput | null;
  makstel?: ModelFloatInput | null;
  relstel?: ModelFloatInput | null;
  pelstel?: ModelFloatInput | null;
  eegl60?: ModelFloatInput | null;
  loc?: ModelFloatInput | null;
  concentrationLimit?: ModelFloatInput | null;
  tlvtwa?: ModelFloatInput | null;
  weeltwa?: ModelFloatInput | null;
  maktwa?: ModelFloatInput | null;
  reltwa?: ModelFloatInput | null;
  peltwa?: ModelFloatInput | null;
  weelceiling?: ModelFloatInput | null;
  makceiling?: ModelFloatInput | null;
  relceiling?: ModelFloatInput | null;
  pelceiling?: ModelFloatInput | null;
  eegl30?: ModelFloatInput | null;
  idlh?: ModelFloatInput | null;
  and?: Array<ModelChemicalConditionInput | null> | null;
  or?: Array<ModelChemicalConditionInput | null> | null;
  not?: ModelChemicalConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelFloatInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type ModelBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type Chemical = {
  __typename: "Chemical";
  id: string;
  casNumber?: string | null;
  chemicalFormula?: string | null;
  unNumber?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  name?: string | null;
  pac1?: number | null;
  pac2?: number | null;
  pac3?: number | null;
  pac1Source?: string | null;
  pac2Source?: string | null;
  pac3Source?: string | null;
  teel1?: number | null;
  teel2?: number | null;
  teel3?: number | null;
  teel1Source?: string | null;
  teel2Source?: string | null;
  teel3Source?: string | null;
  isAsphyxiant?: boolean | null;
  molecularWeight?: number | null;
  originalUnit?: string | null;
  compoundAdjustmentFactor?: number | null;
  isYChemical?: boolean | null;
  aegl1?: number | null;
  aegl2?: number | null;
  aegl3?: number | null;
  erpg1?: number | null;
  erpg2?: number | null;
  erpg3?: number | null;
  tlvstel?: number | null;
  weelstel?: number | null;
  makstel?: number | null;
  relstel?: number | null;
  pelstel?: number | null;
  eegl60?: number | null;
  loc?: number | null;
  concentrationLimit?: number | null;
  tlvtwa?: number | null;
  weeltwa?: number | null;
  maktwa?: number | null;
  reltwa?: number | null;
  peltwa?: number | null;
  weelceiling?: number | null;
  makceiling?: number | null;
  relceiling?: number | null;
  pelceiling?: number | null;
  eegl30?: number | null;
  idlh?: number | null;
  element?: Element | null;
  toldoc?: Toldoc | null;
};

export type Element = {
  __typename: "Element";
  name?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  weight?: number | null;
  id: string;
};

export type Toldoc = {
  __typename: "Toldoc";
  createdAt?: string | null;
  updatedAt?: string | null;
  toxicOrLethal?: string | null;
  exposureMethod?: string | null;
  threshold?: string | null;
  dosePPM?: number | null;
  doseMGM3?: number | null;
  species?: Species | null;
  route?: Route | null;
  id: string;
};

export type Species = {
  __typename: "Species";
  createdAt?: string | null;
  updatedAt?: string | null;
  name?: string | null;
  meanBodyWeight?: number | null;
  meanBreathingRate?: number | null;
  exposureTime?: string | null;
  id: string;
};

export type Route = {
  __typename: "Route";
  createdAt?: string | null;
  updatedAt?: string | null;
  name?: string | null;
  adjustmentFactor?: number | null;
  id: string;
};

export type UpdateChemicalInput = {
  id: string;
  casNumber?: string | null;
  chemicalFormula?: string | null;
  unNumber?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  name?: string | null;
  pac1?: number | null;
  pac2?: number | null;
  pac3?: number | null;
  pac1Source?: string | null;
  pac2Source?: string | null;
  pac3Source?: string | null;
  teel1?: number | null;
  teel2?: number | null;
  teel3?: number | null;
  teel1Source?: string | null;
  teel2Source?: string | null;
  teel3Source?: string | null;
  isAsphyxiant?: boolean | null;
  molecularWeight?: number | null;
  originalUnit?: string | null;
  compoundAdjustmentFactor?: number | null;
  isYChemical?: boolean | null;
  aegl1?: number | null;
  aegl2?: number | null;
  aegl3?: number | null;
  erpg1?: number | null;
  erpg2?: number | null;
  erpg3?: number | null;
  tlvstel?: number | null;
  weelstel?: number | null;
  makstel?: number | null;
  relstel?: number | null;
  pelstel?: number | null;
  eegl60?: number | null;
  loc?: number | null;
  concentrationLimit?: number | null;
  tlvtwa?: number | null;
  weeltwa?: number | null;
  maktwa?: number | null;
  reltwa?: number | null;
  peltwa?: number | null;
  weelceiling?: number | null;
  makceiling?: number | null;
  relceiling?: number | null;
  pelceiling?: number | null;
  eegl30?: number | null;
  idlh?: number | null;
};

export type DeleteChemicalInput = {
  id: string;
};

export type CreateElementInput = {
  name?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  weight?: number | null;
  id?: string | null;
};

export type ModelElementConditionInput = {
  name?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  weight?: ModelFloatInput | null;
  and?: Array<ModelElementConditionInput | null> | null;
  or?: Array<ModelElementConditionInput | null> | null;
  not?: ModelElementConditionInput | null;
};

export type UpdateElementInput = {
  name?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  weight?: number | null;
  id: string;
};

export type DeleteElementInput = {
  id: string;
};

export type CreateToldocInput = {
  createdAt?: string | null;
  updatedAt?: string | null;
  toxicOrLethal?: string | null;
  exposureMethod?: string | null;
  threshold?: string | null;
  dosePPM?: number | null;
  doseMGM3?: number | null;
  id?: string | null;
};

export type ModelToldocConditionInput = {
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  toxicOrLethal?: ModelStringInput | null;
  exposureMethod?: ModelStringInput | null;
  threshold?: ModelStringInput | null;
  dosePPM?: ModelFloatInput | null;
  doseMGM3?: ModelFloatInput | null;
  and?: Array<ModelToldocConditionInput | null> | null;
  or?: Array<ModelToldocConditionInput | null> | null;
  not?: ModelToldocConditionInput | null;
};

export type UpdateToldocInput = {
  createdAt?: string | null;
  updatedAt?: string | null;
  toxicOrLethal?: string | null;
  exposureMethod?: string | null;
  threshold?: string | null;
  dosePPM?: number | null;
  doseMGM3?: number | null;
  id: string;
};

export type DeleteToldocInput = {
  id: string;
};

export type CreateSpeciesInput = {
  createdAt?: string | null;
  updatedAt?: string | null;
  name?: string | null;
  meanBodyWeight?: number | null;
  meanBreathingRate?: number | null;
  exposureTime?: string | null;
  id?: string | null;
};

export type ModelSpeciesConditionInput = {
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  name?: ModelStringInput | null;
  meanBodyWeight?: ModelFloatInput | null;
  meanBreathingRate?: ModelFloatInput | null;
  exposureTime?: ModelStringInput | null;
  and?: Array<ModelSpeciesConditionInput | null> | null;
  or?: Array<ModelSpeciesConditionInput | null> | null;
  not?: ModelSpeciesConditionInput | null;
};

export type UpdateSpeciesInput = {
  createdAt?: string | null;
  updatedAt?: string | null;
  name?: string | null;
  meanBodyWeight?: number | null;
  meanBreathingRate?: number | null;
  exposureTime?: string | null;
  id: string;
};

export type DeleteSpeciesInput = {
  id: string;
};

export type CreateRouteInput = {
  createdAt?: string | null;
  updatedAt?: string | null;
  name?: string | null;
  adjustmentFactor?: number | null;
  id?: string | null;
};

export type ModelRouteConditionInput = {
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  name?: ModelStringInput | null;
  adjustmentFactor?: ModelFloatInput | null;
  and?: Array<ModelRouteConditionInput | null> | null;
  or?: Array<ModelRouteConditionInput | null> | null;
  not?: ModelRouteConditionInput | null;
};

export type UpdateRouteInput = {
  createdAt?: string | null;
  updatedAt?: string | null;
  name?: string | null;
  adjustmentFactor?: number | null;
  id: string;
};

export type DeleteRouteInput = {
  id: string;
};

export type ModelChemicalFilterInput = {
  id?: ModelIDInput | null;
  casNumber?: ModelStringInput | null;
  chemicalFormula?: ModelStringInput | null;
  unNumber?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  name?: ModelStringInput | null;
  pac1?: ModelFloatInput | null;
  pac2?: ModelFloatInput | null;
  pac3?: ModelFloatInput | null;
  pac1Source?: ModelStringInput | null;
  pac2Source?: ModelStringInput | null;
  pac3Source?: ModelStringInput | null;
  teel1?: ModelFloatInput | null;
  teel2?: ModelFloatInput | null;
  teel3?: ModelFloatInput | null;
  teel1Source?: ModelStringInput | null;
  teel2Source?: ModelStringInput | null;
  teel3Source?: ModelStringInput | null;
  isAsphyxiant?: ModelBooleanInput | null;
  molecularWeight?: ModelFloatInput | null;
  originalUnit?: ModelStringInput | null;
  compoundAdjustmentFactor?: ModelFloatInput | null;
  isYChemical?: ModelBooleanInput | null;
  aegl1?: ModelFloatInput | null;
  aegl2?: ModelFloatInput | null;
  aegl3?: ModelFloatInput | null;
  erpg1?: ModelFloatInput | null;
  erpg2?: ModelFloatInput | null;
  erpg3?: ModelFloatInput | null;
  tlvstel?: ModelFloatInput | null;
  weelstel?: ModelFloatInput | null;
  makstel?: ModelFloatInput | null;
  relstel?: ModelFloatInput | null;
  pelstel?: ModelFloatInput | null;
  eegl60?: ModelFloatInput | null;
  loc?: ModelFloatInput | null;
  concentrationLimit?: ModelFloatInput | null;
  tlvtwa?: ModelFloatInput | null;
  weeltwa?: ModelFloatInput | null;
  maktwa?: ModelFloatInput | null;
  reltwa?: ModelFloatInput | null;
  peltwa?: ModelFloatInput | null;
  weelceiling?: ModelFloatInput | null;
  makceiling?: ModelFloatInput | null;
  relceiling?: ModelFloatInput | null;
  pelceiling?: ModelFloatInput | null;
  eegl30?: ModelFloatInput | null;
  idlh?: ModelFloatInput | null;
  and?: Array<ModelChemicalFilterInput | null> | null;
  or?: Array<ModelChemicalFilterInput | null> | null;
  not?: ModelChemicalFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelChemicalConnection = {
  __typename: "ModelChemicalConnection";
  items: Array<Chemical | null>;
  nextToken?: string | null;
};

export type ModelElementFilterInput = {
  name?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  weight?: ModelFloatInput | null;
  and?: Array<ModelElementFilterInput | null> | null;
  or?: Array<ModelElementFilterInput | null> | null;
  not?: ModelElementFilterInput | null;
};

export type ModelElementConnection = {
  __typename: "ModelElementConnection";
  items: Array<Element | null>;
  nextToken?: string | null;
};

export type ModelToldocFilterInput = {
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  toxicOrLethal?: ModelStringInput | null;
  exposureMethod?: ModelStringInput | null;
  threshold?: ModelStringInput | null;
  dosePPM?: ModelFloatInput | null;
  doseMGM3?: ModelFloatInput | null;
  and?: Array<ModelToldocFilterInput | null> | null;
  or?: Array<ModelToldocFilterInput | null> | null;
  not?: ModelToldocFilterInput | null;
};

export type ModelToldocConnection = {
  __typename: "ModelToldocConnection";
  items: Array<Toldoc | null>;
  nextToken?: string | null;
};

export type ModelSpeciesFilterInput = {
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  name?: ModelStringInput | null;
  meanBodyWeight?: ModelFloatInput | null;
  meanBreathingRate?: ModelFloatInput | null;
  exposureTime?: ModelStringInput | null;
  and?: Array<ModelSpeciesFilterInput | null> | null;
  or?: Array<ModelSpeciesFilterInput | null> | null;
  not?: ModelSpeciesFilterInput | null;
};

export type ModelSpeciesConnection = {
  __typename: "ModelSpeciesConnection";
  items: Array<Species | null>;
  nextToken?: string | null;
};

export type ModelRouteFilterInput = {
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  name?: ModelStringInput | null;
  adjustmentFactor?: ModelFloatInput | null;
  and?: Array<ModelRouteFilterInput | null> | null;
  or?: Array<ModelRouteFilterInput | null> | null;
  not?: ModelRouteFilterInput | null;
};

export type ModelRouteConnection = {
  __typename: "ModelRouteConnection";
  items: Array<Route | null>;
  nextToken?: string | null;
};

export type CreateChemicalMutationVariables = {
  input: CreateChemicalInput;
  condition?: ModelChemicalConditionInput | null;
};

export type CreateChemicalMutation = {
  createChemical?: {
    __typename: "Chemical";
    id: string;
    casNumber?: string | null;
    chemicalFormula?: string | null;
    unNumber?: string | null;
    createdAt?: string | null;
    updatedAt?: string | null;
    name?: string | null;
    pac1?: number | null;
    pac2?: number | null;
    pac3?: number | null;
    pac1Source?: string | null;
    pac2Source?: string | null;
    pac3Source?: string | null;
    teel1?: number | null;
    teel2?: number | null;
    teel3?: number | null;
    teel1Source?: string | null;
    teel2Source?: string | null;
    teel3Source?: string | null;
    isAsphyxiant?: boolean | null;
    molecularWeight?: number | null;
    originalUnit?: string | null;
    compoundAdjustmentFactor?: number | null;
    isYChemical?: boolean | null;
    aegl1?: number | null;
    aegl2?: number | null;
    aegl3?: number | null;
    erpg1?: number | null;
    erpg2?: number | null;
    erpg3?: number | null;
    tlvstel?: number | null;
    weelstel?: number | null;
    makstel?: number | null;
    relstel?: number | null;
    pelstel?: number | null;
    eegl60?: number | null;
    loc?: number | null;
    concentrationLimit?: number | null;
    tlvtwa?: number | null;
    weeltwa?: number | null;
    maktwa?: number | null;
    reltwa?: number | null;
    peltwa?: number | null;
    weelceiling?: number | null;
    makceiling?: number | null;
    relceiling?: number | null;
    pelceiling?: number | null;
    eegl30?: number | null;
    idlh?: number | null;
    element?: {
      __typename: "Element";
      name?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
      weight?: number | null;
      id: string;
    } | null;
    toldoc?: {
      __typename: "Toldoc";
      createdAt?: string | null;
      updatedAt?: string | null;
      toxicOrLethal?: string | null;
      exposureMethod?: string | null;
      threshold?: string | null;
      dosePPM?: number | null;
      doseMGM3?: number | null;
      id: string;
    } | null;
  } | null;
};

export type UpdateChemicalMutationVariables = {
  input: UpdateChemicalInput;
  condition?: ModelChemicalConditionInput | null;
};

export type UpdateChemicalMutation = {
  updateChemical?: {
    __typename: "Chemical";
    id: string;
    casNumber?: string | null;
    chemicalFormula?: string | null;
    unNumber?: string | null;
    createdAt?: string | null;
    updatedAt?: string | null;
    name?: string | null;
    pac1?: number | null;
    pac2?: number | null;
    pac3?: number | null;
    pac1Source?: string | null;
    pac2Source?: string | null;
    pac3Source?: string | null;
    teel1?: number | null;
    teel2?: number | null;
    teel3?: number | null;
    teel1Source?: string | null;
    teel2Source?: string | null;
    teel3Source?: string | null;
    isAsphyxiant?: boolean | null;
    molecularWeight?: number | null;
    originalUnit?: string | null;
    compoundAdjustmentFactor?: number | null;
    isYChemical?: boolean | null;
    aegl1?: number | null;
    aegl2?: number | null;
    aegl3?: number | null;
    erpg1?: number | null;
    erpg2?: number | null;
    erpg3?: number | null;
    tlvstel?: number | null;
    weelstel?: number | null;
    makstel?: number | null;
    relstel?: number | null;
    pelstel?: number | null;
    eegl60?: number | null;
    loc?: number | null;
    concentrationLimit?: number | null;
    tlvtwa?: number | null;
    weeltwa?: number | null;
    maktwa?: number | null;
    reltwa?: number | null;
    peltwa?: number | null;
    weelceiling?: number | null;
    makceiling?: number | null;
    relceiling?: number | null;
    pelceiling?: number | null;
    eegl30?: number | null;
    idlh?: number | null;
    element?: {
      __typename: "Element";
      name?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
      weight?: number | null;
      id: string;
    } | null;
    toldoc?: {
      __typename: "Toldoc";
      createdAt?: string | null;
      updatedAt?: string | null;
      toxicOrLethal?: string | null;
      exposureMethod?: string | null;
      threshold?: string | null;
      dosePPM?: number | null;
      doseMGM3?: number | null;
      id: string;
    } | null;
  } | null;
};

export type DeleteChemicalMutationVariables = {
  input: DeleteChemicalInput;
  condition?: ModelChemicalConditionInput | null;
};

export type DeleteChemicalMutation = {
  deleteChemical?: {
    __typename: "Chemical";
    id: string;
    casNumber?: string | null;
    chemicalFormula?: string | null;
    unNumber?: string | null;
    createdAt?: string | null;
    updatedAt?: string | null;
    name?: string | null;
    pac1?: number | null;
    pac2?: number | null;
    pac3?: number | null;
    pac1Source?: string | null;
    pac2Source?: string | null;
    pac3Source?: string | null;
    teel1?: number | null;
    teel2?: number | null;
    teel3?: number | null;
    teel1Source?: string | null;
    teel2Source?: string | null;
    teel3Source?: string | null;
    isAsphyxiant?: boolean | null;
    molecularWeight?: number | null;
    originalUnit?: string | null;
    compoundAdjustmentFactor?: number | null;
    isYChemical?: boolean | null;
    aegl1?: number | null;
    aegl2?: number | null;
    aegl3?: number | null;
    erpg1?: number | null;
    erpg2?: number | null;
    erpg3?: number | null;
    tlvstel?: number | null;
    weelstel?: number | null;
    makstel?: number | null;
    relstel?: number | null;
    pelstel?: number | null;
    eegl60?: number | null;
    loc?: number | null;
    concentrationLimit?: number | null;
    tlvtwa?: number | null;
    weeltwa?: number | null;
    maktwa?: number | null;
    reltwa?: number | null;
    peltwa?: number | null;
    weelceiling?: number | null;
    makceiling?: number | null;
    relceiling?: number | null;
    pelceiling?: number | null;
    eegl30?: number | null;
    idlh?: number | null;
    element?: {
      __typename: "Element";
      name?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
      weight?: number | null;
      id: string;
    } | null;
    toldoc?: {
      __typename: "Toldoc";
      createdAt?: string | null;
      updatedAt?: string | null;
      toxicOrLethal?: string | null;
      exposureMethod?: string | null;
      threshold?: string | null;
      dosePPM?: number | null;
      doseMGM3?: number | null;
      id: string;
    } | null;
  } | null;
};

export type CreateElementMutationVariables = {
  input: CreateElementInput;
  condition?: ModelElementConditionInput | null;
};

export type CreateElementMutation = {
  createElement?: {
    __typename: "Element";
    name?: string | null;
    createdAt?: string | null;
    updatedAt?: string | null;
    weight?: number | null;
    id: string;
  } | null;
};

export type UpdateElementMutationVariables = {
  input: UpdateElementInput;
  condition?: ModelElementConditionInput | null;
};

export type UpdateElementMutation = {
  updateElement?: {
    __typename: "Element";
    name?: string | null;
    createdAt?: string | null;
    updatedAt?: string | null;
    weight?: number | null;
    id: string;
  } | null;
};

export type DeleteElementMutationVariables = {
  input: DeleteElementInput;
  condition?: ModelElementConditionInput | null;
};

export type DeleteElementMutation = {
  deleteElement?: {
    __typename: "Element";
    name?: string | null;
    createdAt?: string | null;
    updatedAt?: string | null;
    weight?: number | null;
    id: string;
  } | null;
};

export type CreateToldocMutationVariables = {
  input: CreateToldocInput;
  condition?: ModelToldocConditionInput | null;
};

export type CreateToldocMutation = {
  createToldoc?: {
    __typename: "Toldoc";
    createdAt?: string | null;
    updatedAt?: string | null;
    toxicOrLethal?: string | null;
    exposureMethod?: string | null;
    threshold?: string | null;
    dosePPM?: number | null;
    doseMGM3?: number | null;
    species?: {
      __typename: "Species";
      createdAt?: string | null;
      updatedAt?: string | null;
      name?: string | null;
      meanBodyWeight?: number | null;
      meanBreathingRate?: number | null;
      exposureTime?: string | null;
      id: string;
    } | null;
    route?: {
      __typename: "Route";
      createdAt?: string | null;
      updatedAt?: string | null;
      name?: string | null;
      adjustmentFactor?: number | null;
      id: string;
    } | null;
    id: string;
  } | null;
};

export type UpdateToldocMutationVariables = {
  input: UpdateToldocInput;
  condition?: ModelToldocConditionInput | null;
};

export type UpdateToldocMutation = {
  updateToldoc?: {
    __typename: "Toldoc";
    createdAt?: string | null;
    updatedAt?: string | null;
    toxicOrLethal?: string | null;
    exposureMethod?: string | null;
    threshold?: string | null;
    dosePPM?: number | null;
    doseMGM3?: number | null;
    species?: {
      __typename: "Species";
      createdAt?: string | null;
      updatedAt?: string | null;
      name?: string | null;
      meanBodyWeight?: number | null;
      meanBreathingRate?: number | null;
      exposureTime?: string | null;
      id: string;
    } | null;
    route?: {
      __typename: "Route";
      createdAt?: string | null;
      updatedAt?: string | null;
      name?: string | null;
      adjustmentFactor?: number | null;
      id: string;
    } | null;
    id: string;
  } | null;
};

export type DeleteToldocMutationVariables = {
  input: DeleteToldocInput;
  condition?: ModelToldocConditionInput | null;
};

export type DeleteToldocMutation = {
  deleteToldoc?: {
    __typename: "Toldoc";
    createdAt?: string | null;
    updatedAt?: string | null;
    toxicOrLethal?: string | null;
    exposureMethod?: string | null;
    threshold?: string | null;
    dosePPM?: number | null;
    doseMGM3?: number | null;
    species?: {
      __typename: "Species";
      createdAt?: string | null;
      updatedAt?: string | null;
      name?: string | null;
      meanBodyWeight?: number | null;
      meanBreathingRate?: number | null;
      exposureTime?: string | null;
      id: string;
    } | null;
    route?: {
      __typename: "Route";
      createdAt?: string | null;
      updatedAt?: string | null;
      name?: string | null;
      adjustmentFactor?: number | null;
      id: string;
    } | null;
    id: string;
  } | null;
};

export type CreateSpeciesMutationVariables = {
  input: CreateSpeciesInput;
  condition?: ModelSpeciesConditionInput | null;
};

export type CreateSpeciesMutation = {
  createSpecies?: {
    __typename: "Species";
    createdAt?: string | null;
    updatedAt?: string | null;
    name?: string | null;
    meanBodyWeight?: number | null;
    meanBreathingRate?: number | null;
    exposureTime?: string | null;
    id: string;
  } | null;
};

export type UpdateSpeciesMutationVariables = {
  input: UpdateSpeciesInput;
  condition?: ModelSpeciesConditionInput | null;
};

export type UpdateSpeciesMutation = {
  updateSpecies?: {
    __typename: "Species";
    createdAt?: string | null;
    updatedAt?: string | null;
    name?: string | null;
    meanBodyWeight?: number | null;
    meanBreathingRate?: number | null;
    exposureTime?: string | null;
    id: string;
  } | null;
};

export type DeleteSpeciesMutationVariables = {
  input: DeleteSpeciesInput;
  condition?: ModelSpeciesConditionInput | null;
};

export type DeleteSpeciesMutation = {
  deleteSpecies?: {
    __typename: "Species";
    createdAt?: string | null;
    updatedAt?: string | null;
    name?: string | null;
    meanBodyWeight?: number | null;
    meanBreathingRate?: number | null;
    exposureTime?: string | null;
    id: string;
  } | null;
};

export type CreateRouteMutationVariables = {
  input: CreateRouteInput;
  condition?: ModelRouteConditionInput | null;
};

export type CreateRouteMutation = {
  createRoute?: {
    __typename: "Route";
    createdAt?: string | null;
    updatedAt?: string | null;
    name?: string | null;
    adjustmentFactor?: number | null;
    id: string;
  } | null;
};

export type UpdateRouteMutationVariables = {
  input: UpdateRouteInput;
  condition?: ModelRouteConditionInput | null;
};

export type UpdateRouteMutation = {
  updateRoute?: {
    __typename: "Route";
    createdAt?: string | null;
    updatedAt?: string | null;
    name?: string | null;
    adjustmentFactor?: number | null;
    id: string;
  } | null;
};

export type DeleteRouteMutationVariables = {
  input: DeleteRouteInput;
  condition?: ModelRouteConditionInput | null;
};

export type DeleteRouteMutation = {
  deleteRoute?: {
    __typename: "Route";
    createdAt?: string | null;
    updatedAt?: string | null;
    name?: string | null;
    adjustmentFactor?: number | null;
    id: string;
  } | null;
};

export type GetChemicalQueryVariables = {
  id: string;
};

export type GetChemicalQuery = {
  getChemical?: {
    __typename: "Chemical";
    id: string;
    casNumber?: string | null;
    chemicalFormula?: string | null;
    unNumber?: string | null;
    createdAt?: string | null;
    updatedAt?: string | null;
    name?: string | null;
    pac1?: number | null;
    pac2?: number | null;
    pac3?: number | null;
    pac1Source?: string | null;
    pac2Source?: string | null;
    pac3Source?: string | null;
    teel1?: number | null;
    teel2?: number | null;
    teel3?: number | null;
    teel1Source?: string | null;
    teel2Source?: string | null;
    teel3Source?: string | null;
    isAsphyxiant?: boolean | null;
    molecularWeight?: number | null;
    originalUnit?: string | null;
    compoundAdjustmentFactor?: number | null;
    isYChemical?: boolean | null;
    aegl1?: number | null;
    aegl2?: number | null;
    aegl3?: number | null;
    erpg1?: number | null;
    erpg2?: number | null;
    erpg3?: number | null;
    tlvstel?: number | null;
    weelstel?: number | null;
    makstel?: number | null;
    relstel?: number | null;
    pelstel?: number | null;
    eegl60?: number | null;
    loc?: number | null;
    concentrationLimit?: number | null;
    tlvtwa?: number | null;
    weeltwa?: number | null;
    maktwa?: number | null;
    reltwa?: number | null;
    peltwa?: number | null;
    weelceiling?: number | null;
    makceiling?: number | null;
    relceiling?: number | null;
    pelceiling?: number | null;
    eegl30?: number | null;
    idlh?: number | null;
    element?: {
      __typename: "Element";
      name?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
      weight?: number | null;
      id: string;
    } | null;
    toldoc?: {
      __typename: "Toldoc";
      createdAt?: string | null;
      updatedAt?: string | null;
      toxicOrLethal?: string | null;
      exposureMethod?: string | null;
      threshold?: string | null;
      dosePPM?: number | null;
      doseMGM3?: number | null;
      id: string;
    } | null;
  } | null;
};

export type ListChemicalsQueryVariables = {
  filter?: ModelChemicalFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListChemicalsQuery = {
  listChemicals?: {
    __typename: "ModelChemicalConnection";
    items: Array<{
      __typename: "Chemical";
      id: string;
      casNumber?: string | null;
      chemicalFormula?: string | null;
      unNumber?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
      name?: string | null;
      pac1?: number | null;
      pac2?: number | null;
      pac3?: number | null;
      pac1Source?: string | null;
      pac2Source?: string | null;
      pac3Source?: string | null;
      teel1?: number | null;
      teel2?: number | null;
      teel3?: number | null;
      teel1Source?: string | null;
      teel2Source?: string | null;
      teel3Source?: string | null;
      isAsphyxiant?: boolean | null;
      molecularWeight?: number | null;
      originalUnit?: string | null;
      compoundAdjustmentFactor?: number | null;
      isYChemical?: boolean | null;
      aegl1?: number | null;
      aegl2?: number | null;
      aegl3?: number | null;
      erpg1?: number | null;
      erpg2?: number | null;
      erpg3?: number | null;
      tlvstel?: number | null;
      weelstel?: number | null;
      makstel?: number | null;
      relstel?: number | null;
      pelstel?: number | null;
      eegl60?: number | null;
      loc?: number | null;
      concentrationLimit?: number | null;
      tlvtwa?: number | null;
      weeltwa?: number | null;
      maktwa?: number | null;
      reltwa?: number | null;
      peltwa?: number | null;
      weelceiling?: number | null;
      makceiling?: number | null;
      relceiling?: number | null;
      pelceiling?: number | null;
      eegl30?: number | null;
      idlh?: number | null;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetElementQueryVariables = {
  id: string;
};

export type GetElementQuery = {
  getElement?: {
    __typename: "Element";
    name?: string | null;
    createdAt?: string | null;
    updatedAt?: string | null;
    weight?: number | null;
    id: string;
  } | null;
};

export type ListElementsQueryVariables = {
  filter?: ModelElementFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListElementsQuery = {
  listElements?: {
    __typename: "ModelElementConnection";
    items: Array<{
      __typename: "Element";
      name?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
      weight?: number | null;
      id: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetToldocQueryVariables = {
  id: string;
};

export type GetToldocQuery = {
  getToldoc?: {
    __typename: "Toldoc";
    createdAt?: string | null;
    updatedAt?: string | null;
    toxicOrLethal?: string | null;
    exposureMethod?: string | null;
    threshold?: string | null;
    dosePPM?: number | null;
    doseMGM3?: number | null;
    species?: {
      __typename: "Species";
      createdAt?: string | null;
      updatedAt?: string | null;
      name?: string | null;
      meanBodyWeight?: number | null;
      meanBreathingRate?: number | null;
      exposureTime?: string | null;
      id: string;
    } | null;
    route?: {
      __typename: "Route";
      createdAt?: string | null;
      updatedAt?: string | null;
      name?: string | null;
      adjustmentFactor?: number | null;
      id: string;
    } | null;
    id: string;
  } | null;
};

export type ListToldocsQueryVariables = {
  filter?: ModelToldocFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListToldocsQuery = {
  listToldocs?: {
    __typename: "ModelToldocConnection";
    items: Array<{
      __typename: "Toldoc";
      createdAt?: string | null;
      updatedAt?: string | null;
      toxicOrLethal?: string | null;
      exposureMethod?: string | null;
      threshold?: string | null;
      dosePPM?: number | null;
      doseMGM3?: number | null;
      id: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetSpeciesQueryVariables = {
  id: string;
};

export type GetSpeciesQuery = {
  getSpecies?: {
    __typename: "Species";
    createdAt?: string | null;
    updatedAt?: string | null;
    name?: string | null;
    meanBodyWeight?: number | null;
    meanBreathingRate?: number | null;
    exposureTime?: string | null;
    id: string;
  } | null;
};

export type ListSpeciesQueryVariables = {
  filter?: ModelSpeciesFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListSpeciesQuery = {
  listSpecies?: {
    __typename: "ModelSpeciesConnection";
    items: Array<{
      __typename: "Species";
      createdAt?: string | null;
      updatedAt?: string | null;
      name?: string | null;
      meanBodyWeight?: number | null;
      meanBreathingRate?: number | null;
      exposureTime?: string | null;
      id: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetRouteQueryVariables = {
  id: string;
};

export type GetRouteQuery = {
  getRoute?: {
    __typename: "Route";
    createdAt?: string | null;
    updatedAt?: string | null;
    name?: string | null;
    adjustmentFactor?: number | null;
    id: string;
  } | null;
};

export type ListRoutesQueryVariables = {
  filter?: ModelRouteFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListRoutesQuery = {
  listRoutes?: {
    __typename: "ModelRouteConnection";
    items: Array<{
      __typename: "Route";
      createdAt?: string | null;
      updatedAt?: string | null;
      name?: string | null;
      adjustmentFactor?: number | null;
      id: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type OnCreateChemicalSubscription = {
  onCreateChemical?: {
    __typename: "Chemical";
    id: string;
    casNumber?: string | null;
    chemicalFormula?: string | null;
    unNumber?: string | null;
    createdAt?: string | null;
    updatedAt?: string | null;
    name?: string | null;
    pac1?: number | null;
    pac2?: number | null;
    pac3?: number | null;
    pac1Source?: string | null;
    pac2Source?: string | null;
    pac3Source?: string | null;
    teel1?: number | null;
    teel2?: number | null;
    teel3?: number | null;
    teel1Source?: string | null;
    teel2Source?: string | null;
    teel3Source?: string | null;
    isAsphyxiant?: boolean | null;
    molecularWeight?: number | null;
    originalUnit?: string | null;
    compoundAdjustmentFactor?: number | null;
    isYChemical?: boolean | null;
    aegl1?: number | null;
    aegl2?: number | null;
    aegl3?: number | null;
    erpg1?: number | null;
    erpg2?: number | null;
    erpg3?: number | null;
    tlvstel?: number | null;
    weelstel?: number | null;
    makstel?: number | null;
    relstel?: number | null;
    pelstel?: number | null;
    eegl60?: number | null;
    loc?: number | null;
    concentrationLimit?: number | null;
    tlvtwa?: number | null;
    weeltwa?: number | null;
    maktwa?: number | null;
    reltwa?: number | null;
    peltwa?: number | null;
    weelceiling?: number | null;
    makceiling?: number | null;
    relceiling?: number | null;
    pelceiling?: number | null;
    eegl30?: number | null;
    idlh?: number | null;
    element?: {
      __typename: "Element";
      name?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
      weight?: number | null;
      id: string;
    } | null;
    toldoc?: {
      __typename: "Toldoc";
      createdAt?: string | null;
      updatedAt?: string | null;
      toxicOrLethal?: string | null;
      exposureMethod?: string | null;
      threshold?: string | null;
      dosePPM?: number | null;
      doseMGM3?: number | null;
      id: string;
    } | null;
  } | null;
};

export type OnUpdateChemicalSubscription = {
  onUpdateChemical?: {
    __typename: "Chemical";
    id: string;
    casNumber?: string | null;
    chemicalFormula?: string | null;
    unNumber?: string | null;
    createdAt?: string | null;
    updatedAt?: string | null;
    name?: string | null;
    pac1?: number | null;
    pac2?: number | null;
    pac3?: number | null;
    pac1Source?: string | null;
    pac2Source?: string | null;
    pac3Source?: string | null;
    teel1?: number | null;
    teel2?: number | null;
    teel3?: number | null;
    teel1Source?: string | null;
    teel2Source?: string | null;
    teel3Source?: string | null;
    isAsphyxiant?: boolean | null;
    molecularWeight?: number | null;
    originalUnit?: string | null;
    compoundAdjustmentFactor?: number | null;
    isYChemical?: boolean | null;
    aegl1?: number | null;
    aegl2?: number | null;
    aegl3?: number | null;
    erpg1?: number | null;
    erpg2?: number | null;
    erpg3?: number | null;
    tlvstel?: number | null;
    weelstel?: number | null;
    makstel?: number | null;
    relstel?: number | null;
    pelstel?: number | null;
    eegl60?: number | null;
    loc?: number | null;
    concentrationLimit?: number | null;
    tlvtwa?: number | null;
    weeltwa?: number | null;
    maktwa?: number | null;
    reltwa?: number | null;
    peltwa?: number | null;
    weelceiling?: number | null;
    makceiling?: number | null;
    relceiling?: number | null;
    pelceiling?: number | null;
    eegl30?: number | null;
    idlh?: number | null;
    element?: {
      __typename: "Element";
      name?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
      weight?: number | null;
      id: string;
    } | null;
    toldoc?: {
      __typename: "Toldoc";
      createdAt?: string | null;
      updatedAt?: string | null;
      toxicOrLethal?: string | null;
      exposureMethod?: string | null;
      threshold?: string | null;
      dosePPM?: number | null;
      doseMGM3?: number | null;
      id: string;
    } | null;
  } | null;
};

export type OnDeleteChemicalSubscription = {
  onDeleteChemical?: {
    __typename: "Chemical";
    id: string;
    casNumber?: string | null;
    chemicalFormula?: string | null;
    unNumber?: string | null;
    createdAt?: string | null;
    updatedAt?: string | null;
    name?: string | null;
    pac1?: number | null;
    pac2?: number | null;
    pac3?: number | null;
    pac1Source?: string | null;
    pac2Source?: string | null;
    pac3Source?: string | null;
    teel1?: number | null;
    teel2?: number | null;
    teel3?: number | null;
    teel1Source?: string | null;
    teel2Source?: string | null;
    teel3Source?: string | null;
    isAsphyxiant?: boolean | null;
    molecularWeight?: number | null;
    originalUnit?: string | null;
    compoundAdjustmentFactor?: number | null;
    isYChemical?: boolean | null;
    aegl1?: number | null;
    aegl2?: number | null;
    aegl3?: number | null;
    erpg1?: number | null;
    erpg2?: number | null;
    erpg3?: number | null;
    tlvstel?: number | null;
    weelstel?: number | null;
    makstel?: number | null;
    relstel?: number | null;
    pelstel?: number | null;
    eegl60?: number | null;
    loc?: number | null;
    concentrationLimit?: number | null;
    tlvtwa?: number | null;
    weeltwa?: number | null;
    maktwa?: number | null;
    reltwa?: number | null;
    peltwa?: number | null;
    weelceiling?: number | null;
    makceiling?: number | null;
    relceiling?: number | null;
    pelceiling?: number | null;
    eegl30?: number | null;
    idlh?: number | null;
    element?: {
      __typename: "Element";
      name?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
      weight?: number | null;
      id: string;
    } | null;
    toldoc?: {
      __typename: "Toldoc";
      createdAt?: string | null;
      updatedAt?: string | null;
      toxicOrLethal?: string | null;
      exposureMethod?: string | null;
      threshold?: string | null;
      dosePPM?: number | null;
      doseMGM3?: number | null;
      id: string;
    } | null;
  } | null;
};

export type OnCreateElementSubscription = {
  onCreateElement?: {
    __typename: "Element";
    name?: string | null;
    createdAt?: string | null;
    updatedAt?: string | null;
    weight?: number | null;
    id: string;
  } | null;
};

export type OnUpdateElementSubscription = {
  onUpdateElement?: {
    __typename: "Element";
    name?: string | null;
    createdAt?: string | null;
    updatedAt?: string | null;
    weight?: number | null;
    id: string;
  } | null;
};

export type OnDeleteElementSubscription = {
  onDeleteElement?: {
    __typename: "Element";
    name?: string | null;
    createdAt?: string | null;
    updatedAt?: string | null;
    weight?: number | null;
    id: string;
  } | null;
};

export type OnCreateToldocSubscription = {
  onCreateToldoc?: {
    __typename: "Toldoc";
    createdAt?: string | null;
    updatedAt?: string | null;
    toxicOrLethal?: string | null;
    exposureMethod?: string | null;
    threshold?: string | null;
    dosePPM?: number | null;
    doseMGM3?: number | null;
    species?: {
      __typename: "Species";
      createdAt?: string | null;
      updatedAt?: string | null;
      name?: string | null;
      meanBodyWeight?: number | null;
      meanBreathingRate?: number | null;
      exposureTime?: string | null;
      id: string;
    } | null;
    route?: {
      __typename: "Route";
      createdAt?: string | null;
      updatedAt?: string | null;
      name?: string | null;
      adjustmentFactor?: number | null;
      id: string;
    } | null;
    id: string;
  } | null;
};

export type OnUpdateToldocSubscription = {
  onUpdateToldoc?: {
    __typename: "Toldoc";
    createdAt?: string | null;
    updatedAt?: string | null;
    toxicOrLethal?: string | null;
    exposureMethod?: string | null;
    threshold?: string | null;
    dosePPM?: number | null;
    doseMGM3?: number | null;
    species?: {
      __typename: "Species";
      createdAt?: string | null;
      updatedAt?: string | null;
      name?: string | null;
      meanBodyWeight?: number | null;
      meanBreathingRate?: number | null;
      exposureTime?: string | null;
      id: string;
    } | null;
    route?: {
      __typename: "Route";
      createdAt?: string | null;
      updatedAt?: string | null;
      name?: string | null;
      adjustmentFactor?: number | null;
      id: string;
    } | null;
    id: string;
  } | null;
};

export type OnDeleteToldocSubscription = {
  onDeleteToldoc?: {
    __typename: "Toldoc";
    createdAt?: string | null;
    updatedAt?: string | null;
    toxicOrLethal?: string | null;
    exposureMethod?: string | null;
    threshold?: string | null;
    dosePPM?: number | null;
    doseMGM3?: number | null;
    species?: {
      __typename: "Species";
      createdAt?: string | null;
      updatedAt?: string | null;
      name?: string | null;
      meanBodyWeight?: number | null;
      meanBreathingRate?: number | null;
      exposureTime?: string | null;
      id: string;
    } | null;
    route?: {
      __typename: "Route";
      createdAt?: string | null;
      updatedAt?: string | null;
      name?: string | null;
      adjustmentFactor?: number | null;
      id: string;
    } | null;
    id: string;
  } | null;
};

export type OnCreateSpeciesSubscription = {
  onCreateSpecies?: {
    __typename: "Species";
    createdAt?: string | null;
    updatedAt?: string | null;
    name?: string | null;
    meanBodyWeight?: number | null;
    meanBreathingRate?: number | null;
    exposureTime?: string | null;
    id: string;
  } | null;
};

export type OnUpdateSpeciesSubscription = {
  onUpdateSpecies?: {
    __typename: "Species";
    createdAt?: string | null;
    updatedAt?: string | null;
    name?: string | null;
    meanBodyWeight?: number | null;
    meanBreathingRate?: number | null;
    exposureTime?: string | null;
    id: string;
  } | null;
};

export type OnDeleteSpeciesSubscription = {
  onDeleteSpecies?: {
    __typename: "Species";
    createdAt?: string | null;
    updatedAt?: string | null;
    name?: string | null;
    meanBodyWeight?: number | null;
    meanBreathingRate?: number | null;
    exposureTime?: string | null;
    id: string;
  } | null;
};

export type OnCreateRouteSubscription = {
  onCreateRoute?: {
    __typename: "Route";
    createdAt?: string | null;
    updatedAt?: string | null;
    name?: string | null;
    adjustmentFactor?: number | null;
    id: string;
  } | null;
};

export type OnUpdateRouteSubscription = {
  onUpdateRoute?: {
    __typename: "Route";
    createdAt?: string | null;
    updatedAt?: string | null;
    name?: string | null;
    adjustmentFactor?: number | null;
    id: string;
  } | null;
};

export type OnDeleteRouteSubscription = {
  onDeleteRoute?: {
    __typename: "Route";
    createdAt?: string | null;
    updatedAt?: string | null;
    name?: string | null;
    adjustmentFactor?: number | null;
    id: string;
  } | null;
};
