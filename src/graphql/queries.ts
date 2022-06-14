/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getChemical = /* GraphQL */ `
  query GetChemical($id: ID!) {
    getChemical(id: $id) {
      id
      casNumber
      chemicalFormula
      unNumber
      createdAt
      updatedAt
      name
      pac1
      pac2
      pac3
      pac1Source
      pac2Source
      pac3Source
      teel1
      teel2
      teel3
      teel1Source
      teel2Source
      teel3Source
      isAsphyxiant
      molecularWeight
      originalUnit
      compoundAdjustmentFactor
      isYChemical
      aegl1
      aegl2
      aegl3
      erpg1
      erpg2
      erpg3
      tlvstel
      weelstel
      makstel
      relstel
      pelstel
      eegl60
      loc
      concentrationLimit
      tlvtwa
      weeltwa
      maktwa
      reltwa
      peltwa
      weelceiling
      makceiling
      relceiling
      pelceiling
      eegl30
      idlh
      element {
        name
        createdAt
        updatedAt
        weight
        id
      }
      toldoc {
        createdAt
        updatedAt
        toxicOrLethal
        exposureMethod
        threshold
        dosePPM
        doseMGM3
        id
      }
      tclo {
        dosePPM
        doseMGM3
        species
        exposureTime
        id
        createdAt
        updatedAt
      }
      tdlo {
        dose
        route
        species
        exposureTime
        id
        createdAt
        updatedAt
      }
      lc50 {
        dosePPM
        doseMGM3
        species
        exposureTime
        id
        createdAt
        updatedAt
      }
      lclo {
        dosePPM
        doseMGM3
        species
        exposureTime
        id
        createdAt
        updatedAt
      }
      ld50 {
        dose
        species
        route
        id
        createdAt
        updatedAt
      }
      ldlo {
        dose
        species
        route
        id
        createdAt
        updatedAt
      }
    }
  }
`;
export const listChemicals = /* GraphQL */ `
  query ListChemicals(
    $filter: ModelChemicalFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChemicals(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        casNumber
        chemicalFormula
        unNumber
        createdAt
        updatedAt
        name
        pac1
        pac2
        pac3
        pac1Source
        pac2Source
        pac3Source
        teel1
        teel2
        teel3
        teel1Source
        teel2Source
        teel3Source
        isAsphyxiant
        molecularWeight
        originalUnit
        compoundAdjustmentFactor
        isYChemical
        aegl1
        aegl2
        aegl3
        erpg1
        erpg2
        erpg3
        tlvstel
        weelstel
        makstel
        relstel
        pelstel
        eegl60
        loc
        concentrationLimit
        tlvtwa
        weeltwa
        maktwa
        reltwa
        peltwa
        weelceiling
        makceiling
        relceiling
        pelceiling
        eegl30
        idlh
      }
      nextToken
    }
  }
`;
export const getElement = /* GraphQL */ `
  query GetElement($id: ID!) {
    getElement(id: $id) {
      name
      createdAt
      updatedAt
      weight
      id
    }
  }
`;
export const listElements = /* GraphQL */ `
  query ListElements($filter: ModelElementFilterInput, $limit: Int, $nextToken: String) {
    listElements(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        name
        createdAt
        updatedAt
        weight
        id
      }
      nextToken
    }
  }
`;
export const getToldoc = /* GraphQL */ `
  query GetToldoc($id: ID!) {
    getToldoc(id: $id) {
      createdAt
      updatedAt
      toxicOrLethal
      exposureMethod
      threshold
      dosePPM
      doseMGM3
      species {
        createdAt
        updatedAt
        name
        meanBodyWeight
        meanBreathingRate
        exposureTime
        id
      }
      route {
        createdAt
        updatedAt
        name
        adjustmentFactor
        id
      }
      id
    }
  }
`;
export const listToldocs = /* GraphQL */ `
  query ListToldocs($filter: ModelToldocFilterInput, $limit: Int, $nextToken: String) {
    listToldocs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        createdAt
        updatedAt
        toxicOrLethal
        exposureMethod
        threshold
        dosePPM
        doseMGM3
        id
      }
      nextToken
    }
  }
`;
export const getSpecies = /* GraphQL */ `
  query GetSpecies($id: ID!) {
    getSpecies(id: $id) {
      createdAt
      updatedAt
      name
      meanBodyWeight
      meanBreathingRate
      exposureTime
      id
    }
  }
`;
export const listSpecies = /* GraphQL */ `
  query ListSpecies($filter: ModelSpeciesFilterInput, $limit: Int, $nextToken: String) {
    listSpecies(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        createdAt
        updatedAt
        name
        meanBodyWeight
        meanBreathingRate
        exposureTime
        id
      }
      nextToken
    }
  }
`;
export const getRoute = /* GraphQL */ `
  query GetRoute($id: ID!) {
    getRoute(id: $id) {
      createdAt
      updatedAt
      name
      adjustmentFactor
      id
    }
  }
`;
export const listRoutes = /* GraphQL */ `
  query ListRoutes($filter: ModelRouteFilterInput, $limit: Int, $nextToken: String) {
    listRoutes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        createdAt
        updatedAt
        name
        adjustmentFactor
        id
      }
      nextToken
    }
  }
`;
export const getTCLO = /* GraphQL */ `
  query GetTCLO($id: ID!) {
    getTCLO(id: $id) {
      dosePPM
      doseMGM3
      species
      exposureTime
      id
      createdAt
      updatedAt
    }
  }
`;
export const listTCLOS = /* GraphQL */ `
  query ListTCLOS($filter: ModelTCLOFilterInput, $limit: Int, $nextToken: String) {
    listTCLOS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        dosePPM
        doseMGM3
        species
        exposureTime
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTDLO = /* GraphQL */ `
  query GetTDLO($id: ID!) {
    getTDLO(id: $id) {
      dose
      route
      species
      exposureTime
      id
      createdAt
      updatedAt
    }
  }
`;
export const listTDLOS = /* GraphQL */ `
  query ListTDLOS($filter: ModelTDLOFilterInput, $limit: Int, $nextToken: String) {
    listTDLOS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        dose
        route
        species
        exposureTime
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getLC50 = /* GraphQL */ `
  query GetLC50($id: ID!) {
    getLC50(id: $id) {
      dosePPM
      doseMGM3
      species
      exposureTime
      id
      createdAt
      updatedAt
    }
  }
`;
export const listLC50s = /* GraphQL */ `
  query ListLC50s($filter: ModelLC50FilterInput, $limit: Int, $nextToken: String) {
    listLC50s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        dosePPM
        doseMGM3
        species
        exposureTime
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getLCLO = /* GraphQL */ `
  query GetLCLO($id: ID!) {
    getLCLO(id: $id) {
      dosePPM
      doseMGM3
      species
      exposureTime
      id
      createdAt
      updatedAt
    }
  }
`;
export const listLCLOS = /* GraphQL */ `
  query ListLCLOS($filter: ModelLCLOFilterInput, $limit: Int, $nextToken: String) {
    listLCLOS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        dosePPM
        doseMGM3
        species
        exposureTime
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getLD50 = /* GraphQL */ `
  query GetLD50($id: ID!) {
    getLD50(id: $id) {
      dose
      species
      route
      id
      createdAt
      updatedAt
    }
  }
`;
export const listLD50s = /* GraphQL */ `
  query ListLD50s($filter: ModelLD50FilterInput, $limit: Int, $nextToken: String) {
    listLD50s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        dose
        species
        route
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getLDLO = /* GraphQL */ `
  query GetLDLO($id: ID!) {
    getLDLO(id: $id) {
      dose
      species
      route
      id
      createdAt
      updatedAt
    }
  }
`;
export const listLDLOS = /* GraphQL */ `
  query ListLDLOS($filter: ModelLDLOFilterInput, $limit: Int, $nextToken: String) {
    listLDLOS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        dose
        species
        route
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
