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
