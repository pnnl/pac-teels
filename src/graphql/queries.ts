/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPACTEELDatabase = /* GraphQL */ `
  query GetPACTEELDatabase($Chemical_ID: String!, $Date: String!) {
    getPACTEELDatabase(Chemical_ID: $Chemical_ID, Date: $Date) {
      CAS_Number
      Chemical_Formula
      Chemical_ID
      Chemical_Name
      Date
      Status
      UN_Number
      aegl1
      aegl2
      aegl3
      compoundAdjustmentFactor
      concentrationLimit
      eegl30
      eegl60
      element
      erpg1
      erpg2
      erpg3
      idlh
      isAsphyxiant
      isYChemical
      lc50
      lclo
      ld50
      ldlo
      loc
      makceiling
      makstel
      maktwa
      molecularWeight
      originalUnit
      pac1
      pac1Source
      pac2
      pac2Source
      pac3
      pac3Source
      pelceiling
      pelstel
      peltwa
      relceiling
      relstel
      reltwa
      tclo
      tdlo
      teel1
      teel1Source
      teel2
      teel2Source
      teel3
      teel3Source
      tlvstel
      tlvtwa
      weelceiling
      weelstel
      weeltwa
      Boiling_Point
      Melting_Point
      state
      Vapor_Pressure
    }
  }
`;
export const listPACTEELDatabases = /* GraphQL */ `
  query ListPACTEELDatabases(
    $filter: TablePACTEELDatabaseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPACTEELDatabases(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        CAS_Number
        Chemical_Formula
        Chemical_ID
        Chemical_Name
        Date
        Status
        UN_Number
        aegl1
        aegl2
        aegl3
        compoundAdjustmentFactor
        concentrationLimit
        eegl30
        eegl60
        element
        erpg1
        erpg2
        erpg3
        idlh
        isAsphyxiant
        isYChemical
        lc50
        lclo
        ld50
        ldlo
        loc
        makceiling
        makstel
        maktwa
        molecularWeight
        originalUnit
        pac1
        pac1Source
        pac2
        pac2Source
        pac3
        pac3Source
        pelceiling
        pelstel
        peltwa
        relceiling
        relstel
        reltwa
        tclo
        tdlo
        teel1
        teel1Source
        teel2
        teel2Source
        teel3
        teel3Source
        tlvstel
        tlvtwa
        weelceiling
        weelstel
        weeltwa
        Boiling_Point
        Melting_Point
        state
        Vapor_Pressure
      }
      nextToken
    }
  }
`;
export const queryPACTEELDatabasesByCASNumberIndex = /* GraphQL */ `
  query QueryPACTEELDatabasesByCASNumberIndex(
    $Chemical_ID: String!
    $after: String
    $first: Int
  ) {
    queryPACTEELDatabasesByCASNumberIndex(
      Chemical_ID: $Chemical_ID
      after: $after
      first: $first
    ) {
      items {
        CAS_Number
        Chemical_Formula
        Chemical_ID
        Chemical_Name
        Date
        Status
        UN_Number
        aegl1
        aegl2
        aegl3
        compoundAdjustmentFactor
        concentrationLimit
        eegl30
        eegl60
        element
        erpg1
        erpg2
        erpg3
        idlh
        isAsphyxiant
        isYChemical
        lc50
        lclo
        ld50
        ldlo
        loc
        makceiling
        makstel
        maktwa
        molecularWeight
        originalUnit
        pac1
        pac1Source
        pac2
        pac2Source
        pac3
        pac3Source
        pelceiling
        pelstel
        peltwa
        relceiling
        relstel
        reltwa
        tclo
        tdlo
        teel1
        teel1Source
        teel2
        teel2Source
        teel3
        teel3Source
        tlvstel
        tlvtwa
        weelceiling
        weelstel
        weeltwa
        Boiling_Point
        Melting_Point
        state
        Vapor_Pressure
      }
      nextToken
    }
  }
`;
export const queryPACTEELDatabasesByChemicalFormulaIndex = /* GraphQL */ `
  query QueryPACTEELDatabasesByChemicalFormulaIndex(
    $Chemical_ID: String!
    $after: String
    $first: Int
  ) {
    queryPACTEELDatabasesByChemicalFormulaIndex(
      Chemical_ID: $Chemical_ID
      after: $after
      first: $first
    ) {
      items {
        CAS_Number
        Chemical_Formula
        Chemical_ID
        Chemical_Name
        Date
        Status
        UN_Number
        aegl1
        aegl2
        aegl3
        compoundAdjustmentFactor
        concentrationLimit
        eegl30
        eegl60
        element
        erpg1
        erpg2
        erpg3
        idlh
        isAsphyxiant
        isYChemical
        lc50
        lclo
        ld50
        ldlo
        loc
        makceiling
        makstel
        maktwa
        molecularWeight
        originalUnit
        pac1
        pac1Source
        pac2
        pac2Source
        pac3
        pac3Source
        pelceiling
        pelstel
        peltwa
        relceiling
        relstel
        reltwa
        tclo
        tdlo
        teel1
        teel1Source
        teel2
        teel2Source
        teel3
        teel3Source
        tlvstel
        tlvtwa
        weelceiling
        weelstel
        weeltwa
        Boiling_Point
        Melting_Point
        state
        Vapor_Pressure
      }
      nextToken
    }
  }
`;
export const queryPACTEELDatabasesByChemicalNameIndex = /* GraphQL */ `
  query QueryPACTEELDatabasesByChemicalNameIndex(
    $Chemical_ID: String!
    $after: String
    $first: Int
  ) {
    queryPACTEELDatabasesByChemicalNameIndex(
      Chemical_ID: $Chemical_ID
      after: $after
      first: $first
    ) {
      items {
        CAS_Number
        Chemical_Formula
        Chemical_ID
        Chemical_Name
        Date
        Status
        UN_Number
        aegl1
        aegl2
        aegl3
        compoundAdjustmentFactor
        concentrationLimit
        eegl30
        eegl60
        element
        erpg1
        erpg2
        erpg3
        idlh
        isAsphyxiant
        isYChemical
        lc50
        lclo
        ld50
        ldlo
        loc
        makceiling
        makstel
        maktwa
        molecularWeight
        originalUnit
        pac1
        pac1Source
        pac2
        pac2Source
        pac3
        pac3Source
        pelceiling
        pelstel
        peltwa
        relceiling
        relstel
        reltwa
        tclo
        tdlo
        teel1
        teel1Source
        teel2
        teel2Source
        teel3
        teel3Source
        tlvstel
        tlvtwa
        weelceiling
        weelstel
        weeltwa
        Boiling_Point
        Melting_Point
        state
        Vapor_Pressure
      }
      nextToken
    }
  }
`;
export const queryPACTEELDatabasesByStatusIndex = /* GraphQL */ `
  query QueryPACTEELDatabasesByStatusIndex(
    $Chemical_ID: String!
    $after: String
    $first: Int
  ) {
    queryPACTEELDatabasesByStatusIndex(
      Chemical_ID: $Chemical_ID
      after: $after
      first: $first
    ) {
      items {
        CAS_Number
        Chemical_Formula
        Chemical_ID
        Chemical_Name
        Date
        Status
        UN_Number
        aegl1
        aegl2
        aegl3
        compoundAdjustmentFactor
        concentrationLimit
        eegl30
        eegl60
        element
        erpg1
        erpg2
        erpg3
        idlh
        isAsphyxiant
        isYChemical
        lc50
        lclo
        ld50
        ldlo
        loc
        makceiling
        makstel
        maktwa
        molecularWeight
        originalUnit
        pac1
        pac1Source
        pac2
        pac2Source
        pac3
        pac3Source
        pelceiling
        pelstel
        peltwa
        relceiling
        relstel
        reltwa
        tclo
        tdlo
        teel1
        teel1Source
        teel2
        teel2Source
        teel3
        teel3Source
        tlvstel
        tlvtwa
        weelceiling
        weelstel
        weeltwa
        Boiling_Point
        Melting_Point
        state
        Vapor_Pressure
      }
      nextToken
    }
  }
`;
export const queryPACTEELDatabasesByUNNumberIndex = /* GraphQL */ `
  query QueryPACTEELDatabasesByUNNumberIndex(
    $Chemical_ID: String!
    $after: String
    $first: Int
  ) {
    queryPACTEELDatabasesByUNNumberIndex(
      Chemical_ID: $Chemical_ID
      after: $after
      first: $first
    ) {
      items {
        CAS_Number
        Chemical_Formula
        Chemical_ID
        Chemical_Name
        Date
        Status
        UN_Number
        aegl1
        aegl2
        aegl3
        compoundAdjustmentFactor
        concentrationLimit
        eegl30
        eegl60
        element
        erpg1
        erpg2
        erpg3
        idlh
        isAsphyxiant
        isYChemical
        lc50
        lclo
        ld50
        ldlo
        loc
        makceiling
        makstel
        maktwa
        molecularWeight
        originalUnit
        pac1
        pac1Source
        pac2
        pac2Source
        pac3
        pac3Source
        pelceiling
        pelstel
        peltwa
        relceiling
        relstel
        reltwa
        tclo
        tdlo
        teel1
        teel1Source
        teel2
        teel2Source
        teel3
        teel3Source
        tlvstel
        tlvtwa
        weelceiling
        weelstel
        weeltwa
        Boiling_Point
        Melting_Point
        state
        Vapor_Pressure
      }
      nextToken
    }
  }
`;
