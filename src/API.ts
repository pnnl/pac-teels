/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreatePACTEELDatabaseInput = {
  CAS_Number?: string | null;
  Chemical_Formula?: string | null;
  Chemical_ID: string;
  Chemical_Name?: string | null;
  Date: string;
  Last_Reviewed?: string | null;
  Status?: string | null;
  UN_Number?: string | null;
  aegl1?: string | null;
  aegl2?: string | null;
  aegl3?: string | null;
  compoundAdjustmentFactor?: string | null;
  concentrationLimit?: string | null;
  eegl30?: string | null;
  eegl60?: string | null;
  element?: string | null;
  erpg1?: string | null;
  erpg2?: string | null;
  erpg3?: string | null;
  idlh?: string | null;
  isAsphyxiant?: boolean | null;
  isYChemical?: boolean | null;
  lc50?: string | null;
  lclo?: string | null;
  ld50?: string | null;
  ldlo?: string | null;
  loc?: string | null;
  makceiling?: string | null;
  makstel?: string | null;
  maktwa?: string | null;
  molecularWeight?: string | null;
  originalUnit?: string | null;
  pac1?: string | null;
  pac1Source?: string | null;
  pac2?: string | null;
  pac2Source?: string | null;
  pac3?: string | null;
  pac3Source?: string | null;
  pelceiling?: string | null;
  pelstel?: string | null;
  peltwa?: string | null;
  relceiling?: string | null;
  relstel?: string | null;
  reltwa?: string | null;
  tclo?: string | null;
  tdlo?: string | null;
  technical_justification?: string | null;
  teel1?: string | null;
  teel1Source?: string | null;
  teel2?: string | null;
  teel2Source?: string | null;
  teel3?: string | null;
  teel3Source?: string | null;
  tlvstel?: string | null;
  tlvtwa?: string | null;
  weelceiling?: string | null;
  weelstel?: string | null;
  weeltwa?: string | null;
  Boiling_Point?: string | null;
  Melting_Point?: string | null;
  state?: string | null;
  Vapor_Pressure?: string | null;
  VP_Temp?: string | null;
  version: number;
};

export type PACTEELDatabase = {
  __typename: "PACTEELDatabase";
  CAS_Number?: string | null;
  Chemical_Formula?: string | null;
  Chemical_ID: string;
  Chemical_Name?: string | null;
  Date: string;
  Last_Reviewed?: string | null;
  Status?: string | null;
  UN_Number?: string | null;
  aegl1?: string | null;
  aegl2?: string | null;
  aegl3?: string | null;
  compoundAdjustmentFactor?: string | null;
  concentrationLimit?: string | null;
  eegl30?: string | null;
  eegl60?: string | null;
  element?: string | null;
  erpg1?: string | null;
  erpg2?: string | null;
  erpg3?: string | null;
  idlh?: string | null;
  isAsphyxiant?: boolean | null;
  isYChemical?: boolean | null;
  lc50?: string | null;
  lclo?: string | null;
  ld50?: string | null;
  ldlo?: string | null;
  loc?: string | null;
  makceiling?: string | null;
  makstel?: string | null;
  maktwa?: string | null;
  molecularWeight?: string | null;
  originalUnit?: string | null;
  pac1?: string | null;
  pac1Source?: string | null;
  pac2?: string | null;
  pac2Source?: string | null;
  pac3?: string | null;
  pac3Source?: string | null;
  pelceiling?: string | null;
  pelstel?: string | null;
  peltwa?: string | null;
  relceiling?: string | null;
  relstel?: string | null;
  reltwa?: string | null;
  tclo?: string | null;
  tdlo?: string | null;
  technical_justification?: string | null;
  teel1?: string | null;
  teel1Source?: string | null;
  teel2?: string | null;
  teel2Source?: string | null;
  teel3?: string | null;
  teel3Source?: string | null;
  tlvstel?: string | null;
  tlvtwa?: string | null;
  weelceiling?: string | null;
  weelstel?: string | null;
  weeltwa?: string | null;
  Boiling_Point?: string | null;
  Melting_Point?: string | null;
  state?: string | null;
  Vapor_Pressure?: string | null;
  VP_Temp?: string | null;
  version: number;
};

export type DeletePACTEELDatabaseInput = {
  Chemical_ID: string;
  Date: string;
};

export type UpdatePACTEELDatabaseInput = {
  CAS_Number?: string | null;
  Chemical_Formula?: string | null;
  Chemical_ID: string;
  Chemical_Name?: string | null;
  Date: string;
  Last_Reviewed?: string | null;
  Status?: string | null;
  UN_Number?: string | null;
  aegl1?: string | null;
  aegl2?: string | null;
  aegl3?: string | null;
  compoundAdjustmentFactor?: string | null;
  concentrationLimit?: string | null;
  eegl30?: string | null;
  eegl60?: string | null;
  element?: string | null;
  erpg1?: string | null;
  erpg2?: string | null;
  erpg3?: string | null;
  idlh?: string | null;
  isAsphyxiant?: boolean | null;
  isYChemical?: boolean | null;
  lc50?: string | null;
  lclo?: string | null;
  ld50?: string | null;
  ldlo?: string | null;
  loc?: string | null;
  makceiling?: string | null;
  makstel?: string | null;
  maktwa?: string | null;
  molecularWeight?: string | null;
  originalUnit?: string | null;
  pac1?: string | null;
  pac1Source?: string | null;
  pac2?: string | null;
  pac2Source?: string | null;
  pac3?: string | null;
  pac3Source?: string | null;
  pelceiling?: string | null;
  pelstel?: string | null;
  peltwa?: string | null;
  relceiling?: string | null;
  relstel?: string | null;
  reltwa?: string | null;
  tclo?: string | null;
  tdlo?: string | null;
  technical_justification?: string | null;
  teel1?: string | null;
  teel1Source?: string | null;
  teel2?: string | null;
  teel2Source?: string | null;
  teel3?: string | null;
  teel3Source?: string | null;
  tlvstel?: string | null;
  tlvtwa?: string | null;
  weelceiling?: string | null;
  weelstel?: string | null;
  weeltwa?: string | null;
  Boiling_Point?: string | null;
  Melting_Point?: string | null;
  state?: string | null;
  Vapor_Pressure?: string | null;
  VP_Temp?: string | null;
  version: number;
};

export type TablePACTEELDatabaseFilterInput = {
  CAS_Number?: TableStringFilterInput | null;
  Chemical_Formula?: TableStringFilterInput | null;
  Chemical_ID?: TableStringFilterInput | null;
  Chemical_Name?: TableStringFilterInput | null;
  Date?: TableStringFilterInput | null;
  Last_Reviewed?: TableStringFilterInput | null;
  Status?: TableStringFilterInput | null;
  UN_Number?: TableStringFilterInput | null;
  aegl1?: string | null;
  aegl2?: string | null;
  aegl3?: string | null;
  compoundAdjustmentFactor?: string | null;
  concentrationLimit?: string | null;
  eegl30?: string | null;
  eegl60?: string | null;
  element?: string | null;
  erpg1?: string | null;
  erpg2?: string | null;
  erpg3?: string | null;
  idlh?: string | null;
  isAsphyxiant?: boolean | null;
  isYChemical?: boolean | null;
  lc50?: string | null;
  lclo?: string | null;
  ld50?: string | null;
  ldlo?: string | null;
  loc?: string | null;
  makceiling?: string | null;
  makstel?: string | null;
  maktwa?: string | null;
  molecularWeight?: string | null;
  originalUnit?: string | null;
  pac1?: string | null;
  pac1Source?: string | null;
  pac2?: string | null;
  pac2Source?: string | null;
  pac3?: string | null;
  pac3Source?: string | null;
  pelceiling?: string | null;
  pelstel?: string | null;
  peltwa?: string | null;
  relceiling?: string | null;
  relstel?: string | null;
  reltwa?: string | null;
  tclo?: string | null;
  tdlo?: string | null;
  technical_justification?: string | null;
  teel1?: string | null;
  teel1Source?: string | null;
  teel2?: string | null;
  teel2Source?: string | null;
  teel3?: string | null;
  teel3Source?: string | null;
  tlvstel?: string | null;
  tlvtwa?: string | null;
  weelceiling?: string | null;
  weelstel?: string | null;
  weeltwa?: string | null;
  Boiling_Point?: string | null;
  Melting_Point?: string | null;
  state?: string | null;
  Vapor_Pressure?: string | null;
  VP_Temp?: string | null;
  version?: TableNumberFilterInput | null;
};

export type TableStringFilterInput = {
  beginsWith?: string | null;
  between?: Array<string | null> | null;
  contains?: string | null;
  eq?: string | null;
  ge?: string | null;
  gt?: string | null;
  le?: string | null;
  lt?: string | null;
  ne?: string | null;
  notContains?: string | null;
};

export type TableNumberFilterInput = {
  beginsWith?: number | null;
  between?: Array<string | null> | null;
  contains?: number | null;
  eq?: number | null;
  ge?: number | null;
  gt?: number | null;
  le?: number | null;
  lt?: number | null;
  ne?: number | null;
  notContains?: number | null;
};

export type PACTEELDatabaseConnection = {
  __typename: "PACTEELDatabaseConnection";
  items?: Array<PACTEELDatabase | null> | null;
  nextToken?: string | null;
};

export type CreatePACTEELDatabaseMutationVariables = {
  input: CreatePACTEELDatabaseInput;
};

export type CreatePACTEELDatabaseMutation = {
  createPACTEELDatabase?: {
    __typename: "PACTEELDatabase";
    CAS_Number?: string | null;
    Chemical_Formula?: string | null;
    Chemical_ID: string;
    Chemical_Name?: string | null;
    Date: string;
    Last_Reviewed?: string | null;
    Status?: string | null;
    UN_Number?: string | null;
    aegl1?: string | null;
    aegl2?: string | null;
    aegl3?: string | null;
    compoundAdjustmentFactor?: string | null;
    concentrationLimit?: string | null;
    eegl30?: string | null;
    eegl60?: string | null;
    element?: string | null;
    erpg1?: string | null;
    erpg2?: string | null;
    erpg3?: string | null;
    idlh?: string | null;
    isAsphyxiant?: boolean | null;
    isYChemical?: boolean | null;
    lc50?: string | null;
    lclo?: string | null;
    ld50?: string | null;
    ldlo?: string | null;
    loc?: string | null;
    makceiling?: string | null;
    makstel?: string | null;
    maktwa?: string | null;
    molecularWeight?: string | null;
    originalUnit?: string | null;
    pac1?: string | null;
    pac1Source?: string | null;
    pac2?: string | null;
    pac2Source?: string | null;
    pac3?: string | null;
    pac3Source?: string | null;
    pelceiling?: string | null;
    pelstel?: string | null;
    peltwa?: string | null;
    references?: string | null;
    relceiling?: string | null;
    relstel?: string | null;
    reltwa?: string | null;
    tclo?: string | null;
    tdlo?: string | null;
    technical_justification?: string | null;
    teel1?: string | null;
    teel1Source?: string | null;
    teel2?: string | null;
    teel2Source?: string | null;
    teel3?: string | null;
    teel3Source?: string | null;
    tlvstel?: string | null;
    tlvtwa?: string | null;
    weelceiling?: string | null;
    weelstel?: string | null;
    weeltwa?: string | null;
    Boiling_Point?: string | null;
    Melting_Point?: string | null;
    state?: string | null;
    Vapor_Pressure?: string | null;
    VP_Temp?: string | null;
    version: number;
  } | null;
};

export type DeletePACTEELDatabaseMutationVariables = {
  input: DeletePACTEELDatabaseInput;
};

export type DeletePACTEELDatabaseMutation = {
  deletePACTEELDatabase?: {
    __typename: "PACTEELDatabase";
    CAS_Number?: string | null;
    Chemical_Formula?: string | null;
    Chemical_ID: string;
    Chemical_Name?: string | null;
    Date: string;
    Last_Reviewed?: string | null;
    Status?: string | null;
    UN_Number?: string | null;
    aegl1?: string | null;
    aegl2?: string | null;
    aegl3?: string | null;
    compoundAdjustmentFactor?: string | null;
    concentrationLimit?: string | null;
    eegl30?: string | null;
    eegl60?: string | null;
    element?: string | null;
    erpg1?: string | null;
    erpg2?: string | null;
    erpg3?: string | null;
    idlh?: string | null;
    isAsphyxiant?: boolean | null;
    isYChemical?: boolean | null;
    lc50?: string | null;
    lclo?: string | null;
    ld50?: string | null;
    ldlo?: string | null;
    loc?: string | null;
    makceiling?: string | null;
    makstel?: string | null;
    maktwa?: string | null;
    molecularWeight?: string | null;
    originalUnit?: string | null;
    pac1?: string | null;
    pac1Source?: string | null;
    pac2?: string | null;
    pac2Source?: string | null;
    pac3?: string | null;
    pac3Source?: string | null;
    pelceiling?: string | null;
    pelstel?: string | null;
    peltwa?: string | null;
    references?: string | null;
    relceiling?: string | null;
    relstel?: string | null;
    reltwa?: string | null;
    tclo?: string | null;
    tdlo?: string | null;
    technical_justification?: string | null;
    teel1?: string | null;
    teel1Source?: string | null;
    teel2?: string | null;
    teel2Source?: string | null;
    teel3?: string | null;
    teel3Source?: string | null;
    tlvstel?: string | null;
    tlvtwa?: string | null;
    weelceiling?: string | null;
    weelstel?: string | null;
    weeltwa?: string | null;
    Boiling_Point?: string | null;
    Melting_Point?: string | null;
    state?: string | null;
    Vapor_Pressure?: string | null;
    VP_Temp?: string | null;
    version: number;
  } | null;
};

export type UpdatePACTEELDatabaseMutationVariables = {
  input: UpdatePACTEELDatabaseInput;
};

export type UpdatePACTEELDatabaseMutation = {
  updatePACTEELDatabase?: {
    __typename: "PACTEELDatabase";
    CAS_Number?: string | null;
    Chemical_Formula?: string | null;
    Chemical_ID: string;
    Chemical_Name?: string | null;
    Date: string;
    Last_Reviewed?: string | null;
    Status?: string | null;
    UN_Number?: string | null;
    aegl1?: string | null;
    aegl2?: string | null;
    aegl3?: string | null;
    compoundAdjustmentFactor?: string | null;
    concentrationLimit?: string | null;
    eegl30?: string | null;
    eegl60?: string | null;
    element?: string | null;
    erpg1?: string | null;
    erpg2?: string | null;
    erpg3?: string | null;
    idlh?: string | null;
    isAsphyxiant?: boolean | null;
    isYChemical?: boolean | null;
    lc50?: string | null;
    lclo?: string | null;
    ld50?: string | null;
    ldlo?: string | null;
    loc?: string | null;
    makceiling?: string | null;
    makstel?: string | null;
    maktwa?: string | null;
    molecularWeight?: string | null;
    originalUnit?: string | null;
    pac1?: string | null;
    pac1Source?: string | null;
    pac2?: string | null;
    pac2Source?: string | null;
    pac3?: string | null;
    pac3Source?: string | null;
    pelceiling?: string | null;
    pelstel?: string | null;
    peltwa?: string | null;
    references?: string | null;
    relceiling?: string | null;
    relstel?: string | null;
    reltwa?: string | null;
    tclo?: string | null;
    tdlo?: string | null;
    technical_justification?: string | null;
    teel1?: string | null;
    teel1Source?: string | null;
    teel2?: string | null;
    teel2Source?: string | null;
    teel3?: string | null;
    teel3Source?: string | null;
    tlvstel?: string | null;
    tlvtwa?: string | null;
    weelceiling?: string | null;
    weelstel?: string | null;
    weeltwa?: string | null;
    Boiling_Point?: string | null;
    Melting_Point?: string | null;
    state?: string | null;
    Vapor_Pressure?: string | null;
    VP_Temp?: string | null;
    version: number;
  } | null;
};

export type GetPACTEELDatabaseQueryVariables = {
  Chemical_ID: string;
  Date: string;
};

export type GetPACTEELDatabaseQuery = {
  getPACTEELDatabase?: {
    __typename: "PACTEELDatabase";
    CAS_Number?: string | null;
    Chemical_Formula?: string | null;
    Chemical_ID: string;
    Chemical_Name?: string | null;
    Date: string;
    Last_Reviewed?: string | null;
    Status?: string | null;
    UN_Number?: string | null;
    aegl1?: string | null;
    aegl2?: string | null;
    aegl3?: string | null;
    compoundAdjustmentFactor?: string | null;
    concentrationLimit?: string | null;
    eegl30?: string | null;
    eegl60?: string | null;
    element?: string | null;
    erpg1?: string | null;
    erpg2?: string | null;
    erpg3?: string | null;
    idlh?: string | null;
    isAsphyxiant?: boolean | null;
    isYChemical?: boolean | null;
    lc50?: string | null;
    lclo?: string | null;
    ld50?: string | null;
    ldlo?: string | null;
    loc?: string | null;
    makceiling?: string | null;
    makstel?: string | null;
    maktwa?: string | null;
    molecularWeight?: string | null;
    originalUnit?: string | null;
    pac1?: string | null;
    pac1Source?: string | null;
    pac2?: string | null;
    pac2Source?: string | null;
    pac3?: string | null;
    pac3Source?: string | null;
    pelceiling?: string | null;
    pelstel?: string | null;
    peltwa?: string | null;
    references?: string | null;
    relceiling?: string | null;
    relstel?: string | null;
    reltwa?: string | null;
    tclo?: string | null;
    tdlo?: string | null;
    technical_justification?: string | null;
    teel1?: string | null;
    teel1Source?: string | null;
    teel2?: string | null;
    teel2Source?: string | null;
    teel3?: string | null;
    teel3Source?: string | null;
    tlvstel?: string | null;
    tlvtwa?: string | null;
    weelceiling?: string | null;
    weelstel?: string | null;
    weeltwa?: string | null;
    Boiling_Point?: string | null;
    Melting_Point?: string | null;
    state?: string | null;
    Vapor_Pressure?: string | null;
    VP_Temp?: string | null;
    version: number;
  } | null;
};

export type ListPACTEELDatabasesQueryVariables = {
  filter?: TablePACTEELDatabaseFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListPACTEELDatabasesQuery = {
  listPACTEELDatabases?: {
    __typename: "PACTEELDatabaseConnection";
    items?: Array<{
      __typename: "PACTEELDatabase";
      CAS_Number?: string | null;
      Chemical_Formula?: string | null;
      Chemical_ID: string;
      Chemical_Name?: string | null;
      Date: string;
      Last_Reviewed?: string | null;
      Status?: string | null;
      UN_Number?: string | null;
      aegl1?: string | null;
      aegl2?: string | null;
      aegl3?: string | null;
      compoundAdjustmentFactor?: string | null;
      concentrationLimit?: string | null;
      eegl30?: string | null;
      eegl60?: string | null;
      element?: string | null;
      erpg1?: string | null;
      erpg2?: string | null;
      erpg3?: string | null;
      idlh?: string | null;
      isAsphyxiant?: boolean | null;
      isYChemical?: boolean | null;
      lc50?: string | null;
      lclo?: string | null;
      ld50?: string | null;
      ldlo?: string | null;
      loc?: string | null;
      makceiling?: string | null;
      makstel?: string | null;
      maktwa?: string | null;
      molecularWeight?: string | null;
      originalUnit?: string | null;
      pac1?: string | null;
      pac1Source?: string | null;
      pac2?: string | null;
      pac2Source?: string | null;
      pac3?: string | null;
      pac3Source?: string | null;
      pelceiling?: string | null;
      pelstel?: string | null;
      peltwa?: string | null;
      references?: string | null;
      relceiling?: string | null;
      relstel?: string | null;
      reltwa?: string | null;
      tclo?: string | null;
      tdlo?: string | null;
      technical_justification?: string | null;
      teel1?: string | null;
      teel1Source?: string | null;
      teel2?: string | null;
      teel2Source?: string | null;
      teel3?: string | null;
      teel3Source?: string | null;
      tlvstel?: string | null;
      tlvtwa?: string | null;
      weelceiling?: string | null;
      weelstel?: string | null;
      weeltwa?: string | null;
      Boiling_Point?: string | null;
      Melting_Point?: string | null;
      state?: string | null;
      Vapor_Pressure?: string | null;
      VP_Temp?: string | null;
      version: number;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type QueryPACTEELDatabasesByCASNumberIndexQueryVariables = {
  Chemical_ID: string;
  after?: string | null;
  first?: number | null;
};

export type QueryPACTEELDatabasesByCASNumberIndexQuery = {
  queryPACTEELDatabasesByCASNumberIndex?: {
    __typename: "PACTEELDatabaseConnection";
    items?: Array<{
      __typename: "PACTEELDatabase";
      CAS_Number?: string | null;
      Chemical_Formula?: string | null;
      Chemical_ID: string;
      Chemical_Name?: string | null;
      Date: string;
      Last_Reviewed?: string | null;
      Status?: string | null;
      UN_Number?: string | null;
      aegl1?: string | null;
      aegl2?: string | null;
      aegl3?: string | null;
      compoundAdjustmentFactor?: string | null;
      concentrationLimit?: string | null;
      eegl30?: string | null;
      eegl60?: string | null;
      element?: string | null;
      erpg1?: string | null;
      erpg2?: string | null;
      erpg3?: string | null;
      idlh?: string | null;
      isAsphyxiant?: boolean | null;
      isYChemical?: boolean | null;
      lc50?: string | null;
      lclo?: string | null;
      ld50?: string | null;
      ldlo?: string | null;
      loc?: string | null;
      makceiling?: string | null;
      makstel?: string | null;
      maktwa?: string | null;
      molecularWeight?: string | null;
      originalUnit?: string | null;
      pac1?: string | null;
      pac1Source?: string | null;
      pac2?: string | null;
      pac2Source?: string | null;
      pac3?: string | null;
      pac3Source?: string | null;
      pelceiling?: string | null;
      pelstel?: string | null;
      peltwa?: string | null;
      references?: string | null;
      relceiling?: string | null;
      relstel?: string | null;
      reltwa?: string | null;
      tclo?: string | null;
      tdlo?: string | null;
      technical_justification?: string | null;
      teel1?: string | null;
      teel1Source?: string | null;
      teel2?: string | null;
      teel2Source?: string | null;
      teel3?: string | null;
      teel3Source?: string | null;
      tlvstel?: string | null;
      tlvtwa?: string | null;
      weelceiling?: string | null;
      weelstel?: string | null;
      weeltwa?: string | null;
      Boiling_Point?: string | null;
      Melting_Point?: string | null;
      state?: string | null;
      Vapor_Pressure?: string | null;
      VP_Temp?: string | null;
      version: number;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type QueryPACTEELDatabasesByChemicalFormulaIndexQueryVariables = {
  Chemical_ID: string;
  after?: string | null;
  first?: number | null;
};

export type QueryPACTEELDatabasesByChemicalFormulaIndexQuery = {
  queryPACTEELDatabasesByChemicalFormulaIndex?: {
    __typename: "PACTEELDatabaseConnection";
    items?: Array<{
      __typename: "PACTEELDatabase";
      CAS_Number?: string | null;
      Chemical_Formula?: string | null;
      Chemical_ID: string;
      Chemical_Name?: string | null;
      Date: string;
      Last_Reviewed?: string | null;
      Status?: string | null;
      UN_Number?: string | null;
      aegl1?: string | null;
      aegl2?: string | null;
      aegl3?: string | null;
      compoundAdjustmentFactor?: string | null;
      concentrationLimit?: string | null;
      eegl30?: string | null;
      eegl60?: string | null;
      element?: string | null;
      erpg1?: string | null;
      erpg2?: string | null;
      erpg3?: string | null;
      idlh?: string | null;
      isAsphyxiant?: boolean | null;
      isYChemical?: boolean | null;
      lc50?: string | null;
      lclo?: string | null;
      ld50?: string | null;
      ldlo?: string | null;
      loc?: string | null;
      makceiling?: string | null;
      makstel?: string | null;
      maktwa?: string | null;
      molecularWeight?: string | null;
      originalUnit?: string | null;
      pac1?: string | null;
      pac1Source?: string | null;
      pac2?: string | null;
      pac2Source?: string | null;
      pac3?: string | null;
      pac3Source?: string | null;
      pelceiling?: string | null;
      pelstel?: string | null;
      peltwa?: string | null;
      references?: string | null;
      relceiling?: string | null;
      relstel?: string | null;
      reltwa?: string | null;
      tclo?: string | null;
      tdlo?: string | null;
      technical_justification?: string | null;
      teel1?: string | null;
      teel1Source?: string | null;
      teel2?: string | null;
      teel2Source?: string | null;
      teel3?: string | null;
      teel3Source?: string | null;
      tlvstel?: string | null;
      tlvtwa?: string | null;
      weelceiling?: string | null;
      weelstel?: string | null;
      weeltwa?: string | null;
      Boiling_Point?: string | null;
      Melting_Point?: string | null;
      state?: string | null;
      Vapor_Pressure?: string | null;
      VP_Temp?: string | null;
      version: number;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type QueryPACTEELDatabasesByChemicalNameIndexQueryVariables = {
  Chemical_ID: string;
  after?: string | null;
  first?: number | null;
};

export type QueryPACTEELDatabasesByChemicalNameIndexQuery = {
  queryPACTEELDatabasesByChemicalNameIndex?: {
    __typename: "PACTEELDatabaseConnection";
    items?: Array<{
      __typename: "PACTEELDatabase";
      CAS_Number?: string | null;
      Chemical_Formula?: string | null;
      Chemical_ID: string;
      Chemical_Name?: string | null;
      Date: string;
      Last_Reviewed?: string | null;
      Status?: string | null;
      UN_Number?: string | null;
      aegl1?: string | null;
      aegl2?: string | null;
      aegl3?: string | null;
      compoundAdjustmentFactor?: string | null;
      concentrationLimit?: string | null;
      eegl30?: string | null;
      eegl60?: string | null;
      element?: string | null;
      erpg1?: string | null;
      erpg2?: string | null;
      erpg3?: string | null;
      idlh?: string | null;
      isAsphyxiant?: boolean | null;
      isYChemical?: boolean | null;
      lc50?: string | null;
      lclo?: string | null;
      ld50?: string | null;
      ldlo?: string | null;
      loc?: string | null;
      makceiling?: string | null;
      makstel?: string | null;
      maktwa?: string | null;
      molecularWeight?: string | null;
      originalUnit?: string | null;
      pac1?: string | null;
      pac1Source?: string | null;
      pac2?: string | null;
      pac2Source?: string | null;
      pac3?: string | null;
      pac3Source?: string | null;
      pelceiling?: string | null;
      pelstel?: string | null;
      peltwa?: string | null;
      references?: string | null;
      relceiling?: string | null;
      relstel?: string | null;
      reltwa?: string | null;
      tclo?: string | null;
      tdlo?: string | null;
      technical_justification?: string | null;
      teel1?: string | null;
      teel1Source?: string | null;
      teel2?: string | null;
      teel2Source?: string | null;
      teel3?: string | null;
      teel3Source?: string | null;
      tlvstel?: string | null;
      tlvtwa?: string | null;
      weelceiling?: string | null;
      weelstel?: string | null;
      weeltwa?: string | null;
      Boiling_Point?: string | null;
      Melting_Point?: string | null;
      state?: string | null;
      Vapor_Pressure?: string | null;
      VP_Temp?: string | null;
      version: number;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type QueryPACTEELDatabasesByStatusIndexQueryVariables = {
  Chemical_ID: string;
  after?: string | null;
  first?: number | null;
};

export type QueryPACTEELDatabasesByStatusIndexQuery = {
  queryPACTEELDatabasesByStatusIndex?: {
    __typename: "PACTEELDatabaseConnection";
    items?: Array<{
      __typename: "PACTEELDatabase";
      CAS_Number?: string | null;
      Chemical_Formula?: string | null;
      Chemical_ID: string;
      Chemical_Name?: string | null;
      Date: string;
      Last_Reviewed?: string | null;
      Status?: string | null;
      UN_Number?: string | null;
      aegl1?: string | null;
      aegl2?: string | null;
      aegl3?: string | null;
      compoundAdjustmentFactor?: string | null;
      concentrationLimit?: string | null;
      eegl30?: string | null;
      eegl60?: string | null;
      element?: string | null;
      erpg1?: string | null;
      erpg2?: string | null;
      erpg3?: string | null;
      idlh?: string | null;
      isAsphyxiant?: boolean | null;
      isYChemical?: boolean | null;
      lc50?: string | null;
      lclo?: string | null;
      ld50?: string | null;
      ldlo?: string | null;
      loc?: string | null;
      makceiling?: string | null;
      makstel?: string | null;
      maktwa?: string | null;
      molecularWeight?: string | null;
      originalUnit?: string | null;
      pac1?: string | null;
      pac1Source?: string | null;
      pac2?: string | null;
      pac2Source?: string | null;
      pac3?: string | null;
      pac3Source?: string | null;
      pelceiling?: string | null;
      pelstel?: string | null;
      peltwa?: string | null;
      references?: string | null;
      relceiling?: string | null;
      relstel?: string | null;
      reltwa?: string | null;
      tclo?: string | null;
      tdlo?: string | null;
      technical_justification?: string | null;
      teel1?: string | null;
      teel1Source?: string | null;
      teel2?: string | null;
      teel2Source?: string | null;
      teel3?: string | null;
      teel3Source?: string | null;
      tlvstel?: string | null;
      tlvtwa?: string | null;
      weelceiling?: string | null;
      weelstel?: string | null;
      weeltwa?: string | null;
      Boiling_Point?: string | null;
      Melting_Point?: string | null;
      state?: string | null;
      Vapor_Pressure?: string | null;
      VP_Temp?: string | null;
      version: number;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type QueryPACTEELDatabasesByUNNumberIndexQueryVariables = {
  Chemical_ID: string;
  after?: string | null;
  first?: number | null;
};

export type QueryPACTEELDatabasesByUNNumberIndexQuery = {
  queryPACTEELDatabasesByUNNumberIndex?: {
    __typename: "PACTEELDatabaseConnection";
    items?: Array<{
      __typename: "PACTEELDatabase";
      CAS_Number?: string | null;
      Chemical_Formula?: string | null;
      Chemical_ID: string;
      Chemical_Name?: string | null;
      Date: string;
      Last_Reviewed?: string | null;
      Status?: string | null;
      UN_Number?: string | null;
      aegl1?: string | null;
      aegl2?: string | null;
      aegl3?: string | null;
      compoundAdjustmentFactor?: string | null;
      concentrationLimit?: string | null;
      eegl30?: string | null;
      eegl60?: string | null;
      element?: string | null;
      erpg1?: string | null;
      erpg2?: string | null;
      erpg3?: string | null;
      idlh?: string | null;
      isAsphyxiant?: boolean | null;
      isYChemical?: boolean | null;
      lc50?: string | null;
      lclo?: string | null;
      ld50?: string | null;
      ldlo?: string | null;
      loc?: string | null;
      makceiling?: string | null;
      makstel?: string | null;
      maktwa?: string | null;
      molecularWeight?: string | null;
      originalUnit?: string | null;
      pac1?: string | null;
      pac1Source?: string | null;
      pac2?: string | null;
      pac2Source?: string | null;
      pac3?: string | null;
      pac3Source?: string | null;
      pelceiling?: string | null;
      pelstel?: string | null;
      peltwa?: string | null;
      references?: string | null;
      relceiling?: string | null;
      relstel?: string | null;
      reltwa?: string | null;
      tclo?: string | null;
      tdlo?: string | null;
      technical_justification?: string | null;
      teel1?: string | null;
      teel1Source?: string | null;
      teel2?: string | null;
      teel2Source?: string | null;
      teel3?: string | null;
      teel3Source?: string | null;
      tlvstel?: string | null;
      tlvtwa?: string | null;
      weelceiling?: string | null;
      weelstel?: string | null;
      weeltwa?: string | null;
      Boiling_Point?: string | null;
      Melting_Point?: string | null;
      state?: string | null;
      Vapor_Pressure?: string | null;
      VP_Temp?: string | null;
      version: number;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type OnCreatePACTEELDatabaseSubscriptionVariables = {
  CAS_Number?: string | null;
  Chemical_Formula?: string | null;
  Chemical_ID?: string | null;
  Chemical_Name?: string | null;
  Date?: string | null;
};

export type OnCreatePACTEELDatabaseSubscription = {
  onCreatePACTEELDatabase?: {
    __typename: "PACTEELDatabase";
    CAS_Number?: string | null;
    Chemical_Formula?: string | null;
    Chemical_ID: string;
    Chemical_Name?: string | null;
    Date: string;
    Last_Reviewed?: string | null;
    Status?: string | null;
    UN_Number?: string | null;
    aegl1?: string | null;
    aegl2?: string | null;
    aegl3?: string | null;
    compoundAdjustmentFactor?: string | null;
    concentrationLimit?: string | null;
    eegl30?: string | null;
    eegl60?: string | null;
    element?: string | null;
    erpg1?: string | null;
    erpg2?: string | null;
    erpg3?: string | null;
    idlh?: string | null;
    isAsphyxiant?: boolean | null;
    isYChemical?: boolean | null;
    lc50?: string | null;
    lclo?: string | null;
    ld50?: string | null;
    ldlo?: string | null;
    loc?: string | null;
    makceiling?: string | null;
    makstel?: string | null;
    maktwa?: string | null;
    molecularWeight?: string | null;
    originalUnit?: string | null;
    pac1?: string | null;
    pac1Source?: string | null;
    pac2?: string | null;
    pac2Source?: string | null;
    pac3?: string | null;
    pac3Source?: string | null;
    pelceiling?: string | null;
    pelstel?: string | null;
    peltwa?: string | null;
    references?: string | null;
    relceiling?: string | null;
    relstel?: string | null;
    reltwa?: string | null;
    tclo?: string | null;
    tdlo?: string | null;
    technical_justification?: string | null;
    teel1?: string | null;
    teel1Source?: string | null;
    teel2?: string | null;
    teel2Source?: string | null;
    teel3?: string | null;
    teel3Source?: string | null;
    tlvstel?: string | null;
    tlvtwa?: string | null;
    weelceiling?: string | null;
    weelstel?: string | null;
    weeltwa?: string | null;
    Boiling_Point?: string | null;
    Melting_Point?: string | null;
    state?: string | null;
    Vapor_Pressure?: string | null;
    VP_Temp?: string | null;
    version: number;
  } | null;
};

export type OnDeletePACTEELDatabaseSubscriptionVariables = {
  CAS_Number?: string | null;
  Chemical_Formula?: string | null;
  Chemical_ID?: string | null;
  Chemical_Name?: string | null;
  Date?: string | null;
};

export type OnDeletePACTEELDatabaseSubscription = {
  onDeletePACTEELDatabase?: {
    __typename: "PACTEELDatabase";
    CAS_Number?: string | null;
    Chemical_Formula?: string | null;
    Chemical_ID: string;
    Chemical_Name?: string | null;
    Date: string;
    Last_Reviewed?: string | null;
    Status?: string | null;
    UN_Number?: string | null;
    aegl1?: string | null;
    aegl2?: string | null;
    aegl3?: string | null;
    compoundAdjustmentFactor?: string | null;
    concentrationLimit?: string | null;
    eegl30?: string | null;
    eegl60?: string | null;
    element?: string | null;
    erpg1?: string | null;
    erpg2?: string | null;
    erpg3?: string | null;
    idlh?: string | null;
    isAsphyxiant?: boolean | null;
    isYChemical?: boolean | null;
    lc50?: string | null;
    lclo?: string | null;
    ld50?: string | null;
    ldlo?: string | null;
    loc?: string | null;
    makceiling?: string | null;
    makstel?: string | null;
    maktwa?: string | null;
    molecularWeight?: string | null;
    originalUnit?: string | null;
    pac1?: string | null;
    pac1Source?: string | null;
    pac2?: string | null;
    pac2Source?: string | null;
    pac3?: string | null;
    pac3Source?: string | null;
    pelceiling?: string | null;
    pelstel?: string | null;
    peltwa?: string | null;
    references?: string | null;
    relceiling?: string | null;
    relstel?: string | null;
    reltwa?: string | null;
    tclo?: string | null;
    tdlo?: string | null;
    technical_justification?: string | null;
    teel1?: string | null;
    teel1Source?: string | null;
    teel2?: string | null;
    teel2Source?: string | null;
    teel3?: string | null;
    teel3Source?: string | null;
    tlvstel?: string | null;
    tlvtwa?: string | null;
    weelceiling?: string | null;
    weelstel?: string | null;
    weeltwa?: string | null;
    Boiling_Point?: string | null;
    Melting_Point?: string | null;
    state?: string | null;
    Vapor_Pressure?: string | null;
    VP_Temp?: string | null;
    version: number;
  } | null;
};

export type OnUpdatePACTEELDatabaseSubscriptionVariables = {
  CAS_Number?: string | null;
  Chemical_Formula?: string | null;
  Chemical_ID?: string | null;
  Chemical_Name?: string | null;
  Date?: string | null;
};

export type OnUpdatePACTEELDatabaseSubscription = {
  onUpdatePACTEELDatabase?: {
    __typename: "PACTEELDatabase";
    CAS_Number?: string | null;
    Chemical_Formula?: string | null;
    Chemical_ID: string;
    Chemical_Name?: string | null;
    Date: string;
    Last_Reviewed?: string | null;
    Status?: string | null;
    UN_Number?: string | null;
    aegl1?: string | null;
    aegl2?: string | null;
    aegl3?: string | null;
    compoundAdjustmentFactor?: string | null;
    concentrationLimit?: string | null;
    eegl30?: string | null;
    eegl60?: string | null;
    element?: string | null;
    erpg1?: string | null;
    erpg2?: string | null;
    erpg3?: string | null;
    idlh?: string | null;
    isAsphyxiant?: boolean | null;
    isYChemical?: boolean | null;
    lc50?: string | null;
    lclo?: string | null;
    ld50?: string | null;
    ldlo?: string | null;
    loc?: string | null;
    makceiling?: string | null;
    makstel?: string | null;
    maktwa?: string | null;
    molecularWeight?: string | null;
    originalUnit?: string | null;
    pac1?: string | null;
    pac1Source?: string | null;
    pac2?: string | null;
    pac2Source?: string | null;
    pac3?: string | null;
    pac3Source?: string | null;
    pelceiling?: string | null;
    pelstel?: string | null;
    references?: string | null;
    peltwa?: string | null;
    relceiling?: string | null;
    relstel?: string | null;
    reltwa?: string | null;
    tclo?: string | null;
    tdlo?: string | null;
    technical_justification?: string | null;
    teel1?: string | null;
    teel1Source?: string | null;
    teel2?: string | null;
    teel2Source?: string | null;
    teel3?: string | null;
    teel3Source?: string | null;
    tlvstel?: string | null;
    tlvtwa?: string | null;
    weelceiling?: string | null;
    weelstel?: string | null;
    weeltwa?: string | null;
    Boiling_Point?: string | null;
    Melting_Point?: string | null;
    state?: string | null;
    Vapor_Pressure?: string | null;
    VP_Temp?: string | null;
    version: number;
  } | null;
};
