/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getChemical = /* GraphQL */ `
  query GetChemical($id: ID!) {
    getChemical(id: $id) {
      id
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
        weight
        id
        createdAt
        updatedAt
      }
      toldoc {
        toxicOrLethal
        exposureMethod
        threshold
        dosePPM
        doseMGM3
        id
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getElement = /* GraphQL */ `
  query GetElement($id: ID!) {
    getElement(id: $id) {
      name
      weight
      id
      createdAt
      updatedAt
    }
  }
`;
export const listElements = /* GraphQL */ `
  query ListElements($filter: ModelElementFilterInput, $limit: Int, $nextToken: String) {
    listElements(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        name
        weight
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getToldoc = /* GraphQL */ `
  query GetToldoc($id: ID!) {
    getToldoc(id: $id) {
      toxicOrLethal
      exposureMethod
      threshold
      dosePPM
      doseMGM3
      species {
        name
        meanBodyWeight
        meanBreathingRate
        exposureTime
        id
        createdAt
        updatedAt
      }
      route {
        name
        adjustmentFactor
        id
        createdAt
        updatedAt
      }
      id
      createdAt
      updatedAt
    }
  }
`;
export const listToldocs = /* GraphQL */ `
  query ListToldocs($filter: ModelToldocFilterInput, $limit: Int, $nextToken: String) {
    listToldocs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        toxicOrLethal
        exposureMethod
        threshold
        dosePPM
        doseMGM3
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSpecies = /* GraphQL */ `
  query GetSpecies($id: ID!) {
    getSpecies(id: $id) {
      name
      meanBodyWeight
      meanBreathingRate
      exposureTime
      id
      createdAt
      updatedAt
    }
  }
`;
export const listSpecies = /* GraphQL */ `
  query ListSpecies($filter: ModelSpeciesFilterInput, $limit: Int, $nextToken: String) {
    listSpecies(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        name
        meanBodyWeight
        meanBreathingRate
        exposureTime
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getRoute = /* GraphQL */ `
  query GetRoute($id: ID!) {
    getRoute(id: $id) {
      name
      adjustmentFactor
      id
      createdAt
      updatedAt
    }
  }
`;
export const listRoutes = /* GraphQL */ `
  query ListRoutes($filter: ModelRouteFilterInput, $limit: Int, $nextToken: String) {
    listRoutes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        name
        adjustmentFactor
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
