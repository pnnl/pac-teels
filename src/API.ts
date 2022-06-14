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
  tclo?: TCLO | null;
  tdlo?: TDLO | null;
  lc50?: LC50 | null;
  lclo?: LCLO | null;
  ld50?: LD50 | null;
  ldlo?: LDLO | null;
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

export type TCLO = {
  __typename: "TCLO";
  dosePPM?: number | null;
  doseMGM3?: number | null;
  species?: string | null;
  exposureTime?: number | null;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type TDLO = {
  __typename: "TDLO";
  dose?: number | null;
  route?: string | null;
  species?: string | null;
  exposureTime?: number | null;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type LC50 = {
  __typename: "LC50";
  dosePPM?: number | null;
  doseMGM3?: number | null;
  species?: string | null;
  exposureTime?: number | null;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type LCLO = {
  __typename: "LCLO";
  dosePPM?: number | null;
  doseMGM3?: number | null;
  species?: string | null;
  exposureTime?: number | null;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type LD50 = {
  __typename: "LD50";
  dose?: number | null;
  species?: string | null;
  route?: string | null;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type LDLO = {
  __typename: "LDLO";
  dose?: number | null;
  species?: string | null;
  route?: string | null;
  id: string;
  createdAt: string;
  updatedAt: string;
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

export type CreateTCLOInput = {
  dosePPM?: number | null;
  doseMGM3?: number | null;
  species?: string | null;
  exposureTime?: number | null;
  id?: string | null;
};

export type ModelTCLOConditionInput = {
  dosePPM?: ModelFloatInput | null;
  doseMGM3?: ModelFloatInput | null;
  species?: ModelStringInput | null;
  exposureTime?: ModelFloatInput | null;
  and?: Array<ModelTCLOConditionInput | null> | null;
  or?: Array<ModelTCLOConditionInput | null> | null;
  not?: ModelTCLOConditionInput | null;
};

export type UpdateTCLOInput = {
  dosePPM?: number | null;
  doseMGM3?: number | null;
  species?: string | null;
  exposureTime?: number | null;
  id: string;
};

export type DeleteTCLOInput = {
  id: string;
};

export type CreateTDLOInput = {
  dose?: number | null;
  route?: string | null;
  species?: string | null;
  exposureTime?: number | null;
  id?: string | null;
};

export type ModelTDLOConditionInput = {
  dose?: ModelFloatInput | null;
  route?: ModelStringInput | null;
  species?: ModelStringInput | null;
  exposureTime?: ModelFloatInput | null;
  and?: Array<ModelTDLOConditionInput | null> | null;
  or?: Array<ModelTDLOConditionInput | null> | null;
  not?: ModelTDLOConditionInput | null;
};

export type UpdateTDLOInput = {
  dose?: number | null;
  route?: string | null;
  species?: string | null;
  exposureTime?: number | null;
  id: string;
};

export type DeleteTDLOInput = {
  id: string;
};

export type CreateLC50Input = {
  dosePPM?: number | null;
  doseMGM3?: number | null;
  species?: string | null;
  exposureTime?: number | null;
  id?: string | null;
};

export type ModelLC50ConditionInput = {
  dosePPM?: ModelFloatInput | null;
  doseMGM3?: ModelFloatInput | null;
  species?: ModelStringInput | null;
  exposureTime?: ModelFloatInput | null;
  and?: Array<ModelLC50ConditionInput | null> | null;
  or?: Array<ModelLC50ConditionInput | null> | null;
  not?: ModelLC50ConditionInput | null;
};

export type UpdateLC50Input = {
  dosePPM?: number | null;
  doseMGM3?: number | null;
  species?: string | null;
  exposureTime?: number | null;
  id: string;
};

export type DeleteLC50Input = {
  id: string;
};

export type CreateLCLOInput = {
  dosePPM?: number | null;
  doseMGM3?: number | null;
  species?: string | null;
  exposureTime?: number | null;
  id?: string | null;
};

export type ModelLCLOConditionInput = {
  dosePPM?: ModelFloatInput | null;
  doseMGM3?: ModelFloatInput | null;
  species?: ModelStringInput | null;
  exposureTime?: ModelFloatInput | null;
  and?: Array<ModelLCLOConditionInput | null> | null;
  or?: Array<ModelLCLOConditionInput | null> | null;
  not?: ModelLCLOConditionInput | null;
};

export type UpdateLCLOInput = {
  dosePPM?: number | null;
  doseMGM3?: number | null;
  species?: string | null;
  exposureTime?: number | null;
  id: string;
};

export type DeleteLCLOInput = {
  id: string;
};

export type CreateLD50Input = {
  dose?: number | null;
  species?: string | null;
  route?: string | null;
  id?: string | null;
};

export type ModelLD50ConditionInput = {
  dose?: ModelFloatInput | null;
  species?: ModelStringInput | null;
  route?: ModelStringInput | null;
  and?: Array<ModelLD50ConditionInput | null> | null;
  or?: Array<ModelLD50ConditionInput | null> | null;
  not?: ModelLD50ConditionInput | null;
};

export type UpdateLD50Input = {
  dose?: number | null;
  species?: string | null;
  route?: string | null;
  id: string;
};

export type DeleteLD50Input = {
  id: string;
};

export type CreateLDLOInput = {
  dose?: number | null;
  species?: string | null;
  route?: string | null;
  id?: string | null;
};

export type ModelLDLOConditionInput = {
  dose?: ModelFloatInput | null;
  species?: ModelStringInput | null;
  route?: ModelStringInput | null;
  and?: Array<ModelLDLOConditionInput | null> | null;
  or?: Array<ModelLDLOConditionInput | null> | null;
  not?: ModelLDLOConditionInput | null;
};

export type UpdateLDLOInput = {
  dose?: number | null;
  species?: string | null;
  route?: string | null;
  id: string;
};

export type DeleteLDLOInput = {
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

export type ModelTCLOFilterInput = {
  dosePPM?: ModelFloatInput | null;
  doseMGM3?: ModelFloatInput | null;
  species?: ModelStringInput | null;
  exposureTime?: ModelFloatInput | null;
  and?: Array<ModelTCLOFilterInput | null> | null;
  or?: Array<ModelTCLOFilterInput | null> | null;
  not?: ModelTCLOFilterInput | null;
};

export type ModelTCLOConnection = {
  __typename: "ModelTCLOConnection";
  items: Array<TCLO | null>;
  nextToken?: string | null;
};

export type ModelTDLOFilterInput = {
  dose?: ModelFloatInput | null;
  route?: ModelStringInput | null;
  species?: ModelStringInput | null;
  exposureTime?: ModelFloatInput | null;
  and?: Array<ModelTDLOFilterInput | null> | null;
  or?: Array<ModelTDLOFilterInput | null> | null;
  not?: ModelTDLOFilterInput | null;
};

export type ModelTDLOConnection = {
  __typename: "ModelTDLOConnection";
  items: Array<TDLO | null>;
  nextToken?: string | null;
};

export type ModelLC50FilterInput = {
  dosePPM?: ModelFloatInput | null;
  doseMGM3?: ModelFloatInput | null;
  species?: ModelStringInput | null;
  exposureTime?: ModelFloatInput | null;
  and?: Array<ModelLC50FilterInput | null> | null;
  or?: Array<ModelLC50FilterInput | null> | null;
  not?: ModelLC50FilterInput | null;
};

export type ModelLC50Connection = {
  __typename: "ModelLC50Connection";
  items: Array<LC50 | null>;
  nextToken?: string | null;
};

export type ModelLCLOFilterInput = {
  dosePPM?: ModelFloatInput | null;
  doseMGM3?: ModelFloatInput | null;
  species?: ModelStringInput | null;
  exposureTime?: ModelFloatInput | null;
  and?: Array<ModelLCLOFilterInput | null> | null;
  or?: Array<ModelLCLOFilterInput | null> | null;
  not?: ModelLCLOFilterInput | null;
};

export type ModelLCLOConnection = {
  __typename: "ModelLCLOConnection";
  items: Array<LCLO | null>;
  nextToken?: string | null;
};

export type ModelLD50FilterInput = {
  dose?: ModelFloatInput | null;
  species?: ModelStringInput | null;
  route?: ModelStringInput | null;
  and?: Array<ModelLD50FilterInput | null> | null;
  or?: Array<ModelLD50FilterInput | null> | null;
  not?: ModelLD50FilterInput | null;
};

export type ModelLD50Connection = {
  __typename: "ModelLD50Connection";
  items: Array<LD50 | null>;
  nextToken?: string | null;
};

export type ModelLDLOFilterInput = {
  dose?: ModelFloatInput | null;
  species?: ModelStringInput | null;
  route?: ModelStringInput | null;
  and?: Array<ModelLDLOFilterInput | null> | null;
  or?: Array<ModelLDLOFilterInput | null> | null;
  not?: ModelLDLOFilterInput | null;
};

export type ModelLDLOConnection = {
  __typename: "ModelLDLOConnection";
  items: Array<LDLO | null>;
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
    tclo?: {
      __typename: "TCLO";
      dosePPM?: number | null;
      doseMGM3?: number | null;
      species?: string | null;
      exposureTime?: number | null;
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    tdlo?: {
      __typename: "TDLO";
      dose?: number | null;
      route?: string | null;
      species?: string | null;
      exposureTime?: number | null;
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    lc50?: {
      __typename: "LC50";
      dosePPM?: number | null;
      doseMGM3?: number | null;
      species?: string | null;
      exposureTime?: number | null;
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    lclo?: {
      __typename: "LCLO";
      dosePPM?: number | null;
      doseMGM3?: number | null;
      species?: string | null;
      exposureTime?: number | null;
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    ld50?: {
      __typename: "LD50";
      dose?: number | null;
      species?: string | null;
      route?: string | null;
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    ldlo?: {
      __typename: "LDLO";
      dose?: number | null;
      species?: string | null;
      route?: string | null;
      id: string;
      createdAt: string;
      updatedAt: string;
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
    tclo?: {
      __typename: "TCLO";
      dosePPM?: number | null;
      doseMGM3?: number | null;
      species?: string | null;
      exposureTime?: number | null;
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    tdlo?: {
      __typename: "TDLO";
      dose?: number | null;
      route?: string | null;
      species?: string | null;
      exposureTime?: number | null;
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    lc50?: {
      __typename: "LC50";
      dosePPM?: number | null;
      doseMGM3?: number | null;
      species?: string | null;
      exposureTime?: number | null;
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    lclo?: {
      __typename: "LCLO";
      dosePPM?: number | null;
      doseMGM3?: number | null;
      species?: string | null;
      exposureTime?: number | null;
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    ld50?: {
      __typename: "LD50";
      dose?: number | null;
      species?: string | null;
      route?: string | null;
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    ldlo?: {
      __typename: "LDLO";
      dose?: number | null;
      species?: string | null;
      route?: string | null;
      id: string;
      createdAt: string;
      updatedAt: string;
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
    tclo?: {
      __typename: "TCLO";
      dosePPM?: number | null;
      doseMGM3?: number | null;
      species?: string | null;
      exposureTime?: number | null;
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    tdlo?: {
      __typename: "TDLO";
      dose?: number | null;
      route?: string | null;
      species?: string | null;
      exposureTime?: number | null;
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    lc50?: {
      __typename: "LC50";
      dosePPM?: number | null;
      doseMGM3?: number | null;
      species?: string | null;
      exposureTime?: number | null;
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    lclo?: {
      __typename: "LCLO";
      dosePPM?: number | null;
      doseMGM3?: number | null;
      species?: string | null;
      exposureTime?: number | null;
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    ld50?: {
      __typename: "LD50";
      dose?: number | null;
      species?: string | null;
      route?: string | null;
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    ldlo?: {
      __typename: "LDLO";
      dose?: number | null;
      species?: string | null;
      route?: string | null;
      id: string;
      createdAt: string;
      updatedAt: string;
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

export type CreateTCLOMutationVariables = {
  input: CreateTCLOInput;
  condition?: ModelTCLOConditionInput | null;
};

export type CreateTCLOMutation = {
  createTCLO?: {
    __typename: "TCLO";
    dosePPM?: number | null;
    doseMGM3?: number | null;
    species?: string | null;
    exposureTime?: number | null;
    id: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateTCLOMutationVariables = {
  input: UpdateTCLOInput;
  condition?: ModelTCLOConditionInput | null;
};

export type UpdateTCLOMutation = {
  updateTCLO?: {
    __typename: "TCLO";
    dosePPM?: number | null;
    doseMGM3?: number | null;
    species?: string | null;
    exposureTime?: number | null;
    id: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteTCLOMutationVariables = {
  input: DeleteTCLOInput;
  condition?: ModelTCLOConditionInput | null;
};

export type DeleteTCLOMutation = {
  deleteTCLO?: {
    __typename: "TCLO";
    dosePPM?: number | null;
    doseMGM3?: number | null;
    species?: string | null;
    exposureTime?: number | null;
    id: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateTDLOMutationVariables = {
  input: CreateTDLOInput;
  condition?: ModelTDLOConditionInput | null;
};

export type CreateTDLOMutation = {
  createTDLO?: {
    __typename: "TDLO";
    dose?: number | null;
    route?: string | null;
    species?: string | null;
    exposureTime?: number | null;
    id: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateTDLOMutationVariables = {
  input: UpdateTDLOInput;
  condition?: ModelTDLOConditionInput | null;
};

export type UpdateTDLOMutation = {
  updateTDLO?: {
    __typename: "TDLO";
    dose?: number | null;
    route?: string | null;
    species?: string | null;
    exposureTime?: number | null;
    id: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteTDLOMutationVariables = {
  input: DeleteTDLOInput;
  condition?: ModelTDLOConditionInput | null;
};

export type DeleteTDLOMutation = {
  deleteTDLO?: {
    __typename: "TDLO";
    dose?: number | null;
    route?: string | null;
    species?: string | null;
    exposureTime?: number | null;
    id: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateLC50MutationVariables = {
  input: CreateLC50Input;
  condition?: ModelLC50ConditionInput | null;
};

export type CreateLC50Mutation = {
  createLC50?: {
    __typename: "LC50";
    dosePPM?: number | null;
    doseMGM3?: number | null;
    species?: string | null;
    exposureTime?: number | null;
    id: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateLC50MutationVariables = {
  input: UpdateLC50Input;
  condition?: ModelLC50ConditionInput | null;
};

export type UpdateLC50Mutation = {
  updateLC50?: {
    __typename: "LC50";
    dosePPM?: number | null;
    doseMGM3?: number | null;
    species?: string | null;
    exposureTime?: number | null;
    id: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteLC50MutationVariables = {
  input: DeleteLC50Input;
  condition?: ModelLC50ConditionInput | null;
};

export type DeleteLC50Mutation = {
  deleteLC50?: {
    __typename: "LC50";
    dosePPM?: number | null;
    doseMGM3?: number | null;
    species?: string | null;
    exposureTime?: number | null;
    id: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateLCLOMutationVariables = {
  input: CreateLCLOInput;
  condition?: ModelLCLOConditionInput | null;
};

export type CreateLCLOMutation = {
  createLCLO?: {
    __typename: "LCLO";
    dosePPM?: number | null;
    doseMGM3?: number | null;
    species?: string | null;
    exposureTime?: number | null;
    id: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateLCLOMutationVariables = {
  input: UpdateLCLOInput;
  condition?: ModelLCLOConditionInput | null;
};

export type UpdateLCLOMutation = {
  updateLCLO?: {
    __typename: "LCLO";
    dosePPM?: number | null;
    doseMGM3?: number | null;
    species?: string | null;
    exposureTime?: number | null;
    id: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteLCLOMutationVariables = {
  input: DeleteLCLOInput;
  condition?: ModelLCLOConditionInput | null;
};

export type DeleteLCLOMutation = {
  deleteLCLO?: {
    __typename: "LCLO";
    dosePPM?: number | null;
    doseMGM3?: number | null;
    species?: string | null;
    exposureTime?: number | null;
    id: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateLD50MutationVariables = {
  input: CreateLD50Input;
  condition?: ModelLD50ConditionInput | null;
};

export type CreateLD50Mutation = {
  createLD50?: {
    __typename: "LD50";
    dose?: number | null;
    species?: string | null;
    route?: string | null;
    id: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateLD50MutationVariables = {
  input: UpdateLD50Input;
  condition?: ModelLD50ConditionInput | null;
};

export type UpdateLD50Mutation = {
  updateLD50?: {
    __typename: "LD50";
    dose?: number | null;
    species?: string | null;
    route?: string | null;
    id: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteLD50MutationVariables = {
  input: DeleteLD50Input;
  condition?: ModelLD50ConditionInput | null;
};

export type DeleteLD50Mutation = {
  deleteLD50?: {
    __typename: "LD50";
    dose?: number | null;
    species?: string | null;
    route?: string | null;
    id: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateLDLOMutationVariables = {
  input: CreateLDLOInput;
  condition?: ModelLDLOConditionInput | null;
};

export type CreateLDLOMutation = {
  createLDLO?: {
    __typename: "LDLO";
    dose?: number | null;
    species?: string | null;
    route?: string | null;
    id: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateLDLOMutationVariables = {
  input: UpdateLDLOInput;
  condition?: ModelLDLOConditionInput | null;
};

export type UpdateLDLOMutation = {
  updateLDLO?: {
    __typename: "LDLO";
    dose?: number | null;
    species?: string | null;
    route?: string | null;
    id: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteLDLOMutationVariables = {
  input: DeleteLDLOInput;
  condition?: ModelLDLOConditionInput | null;
};

export type DeleteLDLOMutation = {
  deleteLDLO?: {
    __typename: "LDLO";
    dose?: number | null;
    species?: string | null;
    route?: string | null;
    id: string;
    createdAt: string;
    updatedAt: string;
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
    tclo?: {
      __typename: "TCLO";
      dosePPM?: number | null;
      doseMGM3?: number | null;
      species?: string | null;
      exposureTime?: number | null;
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    tdlo?: {
      __typename: "TDLO";
      dose?: number | null;
      route?: string | null;
      species?: string | null;
      exposureTime?: number | null;
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    lc50?: {
      __typename: "LC50";
      dosePPM?: number | null;
      doseMGM3?: number | null;
      species?: string | null;
      exposureTime?: number | null;
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    lclo?: {
      __typename: "LCLO";
      dosePPM?: number | null;
      doseMGM3?: number | null;
      species?: string | null;
      exposureTime?: number | null;
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    ld50?: {
      __typename: "LD50";
      dose?: number | null;
      species?: string | null;
      route?: string | null;
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    ldlo?: {
      __typename: "LDLO";
      dose?: number | null;
      species?: string | null;
      route?: string | null;
      id: string;
      createdAt: string;
      updatedAt: string;
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

export type GetTCLOQueryVariables = {
  id: string;
};

export type GetTCLOQuery = {
  getTCLO?: {
    __typename: "TCLO";
    dosePPM?: number | null;
    doseMGM3?: number | null;
    species?: string | null;
    exposureTime?: number | null;
    id: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListTCLOSQueryVariables = {
  filter?: ModelTCLOFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListTCLOSQuery = {
  listTCLOS?: {
    __typename: "ModelTCLOConnection";
    items: Array<{
      __typename: "TCLO";
      dosePPM?: number | null;
      doseMGM3?: number | null;
      species?: string | null;
      exposureTime?: number | null;
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetTDLOQueryVariables = {
  id: string;
};

export type GetTDLOQuery = {
  getTDLO?: {
    __typename: "TDLO";
    dose?: number | null;
    route?: string | null;
    species?: string | null;
    exposureTime?: number | null;
    id: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListTDLOSQueryVariables = {
  filter?: ModelTDLOFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListTDLOSQuery = {
  listTDLOS?: {
    __typename: "ModelTDLOConnection";
    items: Array<{
      __typename: "TDLO";
      dose?: number | null;
      route?: string | null;
      species?: string | null;
      exposureTime?: number | null;
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetLC50QueryVariables = {
  id: string;
};

export type GetLC50Query = {
  getLC50?: {
    __typename: "LC50";
    dosePPM?: number | null;
    doseMGM3?: number | null;
    species?: string | null;
    exposureTime?: number | null;
    id: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListLC50sQueryVariables = {
  filter?: ModelLC50FilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListLC50sQuery = {
  listLC50s?: {
    __typename: "ModelLC50Connection";
    items: Array<{
      __typename: "LC50";
      dosePPM?: number | null;
      doseMGM3?: number | null;
      species?: string | null;
      exposureTime?: number | null;
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetLCLOQueryVariables = {
  id: string;
};

export type GetLCLOQuery = {
  getLCLO?: {
    __typename: "LCLO";
    dosePPM?: number | null;
    doseMGM3?: number | null;
    species?: string | null;
    exposureTime?: number | null;
    id: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListLCLOSQueryVariables = {
  filter?: ModelLCLOFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListLCLOSQuery = {
  listLCLOS?: {
    __typename: "ModelLCLOConnection";
    items: Array<{
      __typename: "LCLO";
      dosePPM?: number | null;
      doseMGM3?: number | null;
      species?: string | null;
      exposureTime?: number | null;
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetLD50QueryVariables = {
  id: string;
};

export type GetLD50Query = {
  getLD50?: {
    __typename: "LD50";
    dose?: number | null;
    species?: string | null;
    route?: string | null;
    id: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListLD50sQueryVariables = {
  filter?: ModelLD50FilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListLD50sQuery = {
  listLD50s?: {
    __typename: "ModelLD50Connection";
    items: Array<{
      __typename: "LD50";
      dose?: number | null;
      species?: string | null;
      route?: string | null;
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetLDLOQueryVariables = {
  id: string;
};

export type GetLDLOQuery = {
  getLDLO?: {
    __typename: "LDLO";
    dose?: number | null;
    species?: string | null;
    route?: string | null;
    id: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListLDLOSQueryVariables = {
  filter?: ModelLDLOFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListLDLOSQuery = {
  listLDLOS?: {
    __typename: "ModelLDLOConnection";
    items: Array<{
      __typename: "LDLO";
      dose?: number | null;
      species?: string | null;
      route?: string | null;
      id: string;
      createdAt: string;
      updatedAt: string;
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
    tclo?: {
      __typename: "TCLO";
      dosePPM?: number | null;
      doseMGM3?: number | null;
      species?: string | null;
      exposureTime?: number | null;
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    tdlo?: {
      __typename: "TDLO";
      dose?: number | null;
      route?: string | null;
      species?: string | null;
      exposureTime?: number | null;
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    lc50?: {
      __typename: "LC50";
      dosePPM?: number | null;
      doseMGM3?: number | null;
      species?: string | null;
      exposureTime?: number | null;
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    lclo?: {
      __typename: "LCLO";
      dosePPM?: number | null;
      doseMGM3?: number | null;
      species?: string | null;
      exposureTime?: number | null;
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    ld50?: {
      __typename: "LD50";
      dose?: number | null;
      species?: string | null;
      route?: string | null;
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    ldlo?: {
      __typename: "LDLO";
      dose?: number | null;
      species?: string | null;
      route?: string | null;
      id: string;
      createdAt: string;
      updatedAt: string;
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
    tclo?: {
      __typename: "TCLO";
      dosePPM?: number | null;
      doseMGM3?: number | null;
      species?: string | null;
      exposureTime?: number | null;
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    tdlo?: {
      __typename: "TDLO";
      dose?: number | null;
      route?: string | null;
      species?: string | null;
      exposureTime?: number | null;
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    lc50?: {
      __typename: "LC50";
      dosePPM?: number | null;
      doseMGM3?: number | null;
      species?: string | null;
      exposureTime?: number | null;
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    lclo?: {
      __typename: "LCLO";
      dosePPM?: number | null;
      doseMGM3?: number | null;
      species?: string | null;
      exposureTime?: number | null;
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    ld50?: {
      __typename: "LD50";
      dose?: number | null;
      species?: string | null;
      route?: string | null;
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    ldlo?: {
      __typename: "LDLO";
      dose?: number | null;
      species?: string | null;
      route?: string | null;
      id: string;
      createdAt: string;
      updatedAt: string;
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
    tclo?: {
      __typename: "TCLO";
      dosePPM?: number | null;
      doseMGM3?: number | null;
      species?: string | null;
      exposureTime?: number | null;
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    tdlo?: {
      __typename: "TDLO";
      dose?: number | null;
      route?: string | null;
      species?: string | null;
      exposureTime?: number | null;
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    lc50?: {
      __typename: "LC50";
      dosePPM?: number | null;
      doseMGM3?: number | null;
      species?: string | null;
      exposureTime?: number | null;
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    lclo?: {
      __typename: "LCLO";
      dosePPM?: number | null;
      doseMGM3?: number | null;
      species?: string | null;
      exposureTime?: number | null;
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    ld50?: {
      __typename: "LD50";
      dose?: number | null;
      species?: string | null;
      route?: string | null;
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    ldlo?: {
      __typename: "LDLO";
      dose?: number | null;
      species?: string | null;
      route?: string | null;
      id: string;
      createdAt: string;
      updatedAt: string;
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

export type OnCreateTCLOSubscription = {
  onCreateTCLO?: {
    __typename: "TCLO";
    dosePPM?: number | null;
    doseMGM3?: number | null;
    species?: string | null;
    exposureTime?: number | null;
    id: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateTCLOSubscription = {
  onUpdateTCLO?: {
    __typename: "TCLO";
    dosePPM?: number | null;
    doseMGM3?: number | null;
    species?: string | null;
    exposureTime?: number | null;
    id: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteTCLOSubscription = {
  onDeleteTCLO?: {
    __typename: "TCLO";
    dosePPM?: number | null;
    doseMGM3?: number | null;
    species?: string | null;
    exposureTime?: number | null;
    id: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreateTDLOSubscription = {
  onCreateTDLO?: {
    __typename: "TDLO";
    dose?: number | null;
    route?: string | null;
    species?: string | null;
    exposureTime?: number | null;
    id: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateTDLOSubscription = {
  onUpdateTDLO?: {
    __typename: "TDLO";
    dose?: number | null;
    route?: string | null;
    species?: string | null;
    exposureTime?: number | null;
    id: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteTDLOSubscription = {
  onDeleteTDLO?: {
    __typename: "TDLO";
    dose?: number | null;
    route?: string | null;
    species?: string | null;
    exposureTime?: number | null;
    id: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreateLC50Subscription = {
  onCreateLC50?: {
    __typename: "LC50";
    dosePPM?: number | null;
    doseMGM3?: number | null;
    species?: string | null;
    exposureTime?: number | null;
    id: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateLC50Subscription = {
  onUpdateLC50?: {
    __typename: "LC50";
    dosePPM?: number | null;
    doseMGM3?: number | null;
    species?: string | null;
    exposureTime?: number | null;
    id: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteLC50Subscription = {
  onDeleteLC50?: {
    __typename: "LC50";
    dosePPM?: number | null;
    doseMGM3?: number | null;
    species?: string | null;
    exposureTime?: number | null;
    id: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreateLCLOSubscription = {
  onCreateLCLO?: {
    __typename: "LCLO";
    dosePPM?: number | null;
    doseMGM3?: number | null;
    species?: string | null;
    exposureTime?: number | null;
    id: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateLCLOSubscription = {
  onUpdateLCLO?: {
    __typename: "LCLO";
    dosePPM?: number | null;
    doseMGM3?: number | null;
    species?: string | null;
    exposureTime?: number | null;
    id: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteLCLOSubscription = {
  onDeleteLCLO?: {
    __typename: "LCLO";
    dosePPM?: number | null;
    doseMGM3?: number | null;
    species?: string | null;
    exposureTime?: number | null;
    id: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreateLD50Subscription = {
  onCreateLD50?: {
    __typename: "LD50";
    dose?: number | null;
    species?: string | null;
    route?: string | null;
    id: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateLD50Subscription = {
  onUpdateLD50?: {
    __typename: "LD50";
    dose?: number | null;
    species?: string | null;
    route?: string | null;
    id: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteLD50Subscription = {
  onDeleteLD50?: {
    __typename: "LD50";
    dose?: number | null;
    species?: string | null;
    route?: string | null;
    id: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreateLDLOSubscription = {
  onCreateLDLO?: {
    __typename: "LDLO";
    dose?: number | null;
    species?: string | null;
    route?: string | null;
    id: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateLDLOSubscription = {
  onUpdateLDLO?: {
    __typename: "LDLO";
    dose?: number | null;
    species?: string | null;
    route?: string | null;
    id: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteLDLOSubscription = {
  onDeleteLDLO?: {
    __typename: "LDLO";
    dose?: number | null;
    species?: string | null;
    route?: string | null;
    id: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};
