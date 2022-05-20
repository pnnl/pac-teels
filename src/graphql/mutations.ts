/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createChemical = /* GraphQL */ `
  mutation CreateChemical(
    $input: CreateChemicalInput!
    $condition: ModelChemicalConditionInput
  ) {
    createChemical(input: $input, condition: $condition) {
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
export const updateChemical = /* GraphQL */ `
  mutation UpdateChemical(
    $input: UpdateChemicalInput!
    $condition: ModelChemicalConditionInput
  ) {
    updateChemical(input: $input, condition: $condition) {
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
export const deleteChemical = /* GraphQL */ `
  mutation DeleteChemical(
    $input: DeleteChemicalInput!
    $condition: ModelChemicalConditionInput
  ) {
    deleteChemical(input: $input, condition: $condition) {
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
export const createElement = /* GraphQL */ `
  mutation CreateElement(
    $input: CreateElementInput!
    $condition: ModelElementConditionInput
  ) {
    createElement(input: $input, condition: $condition) {
      name
      weight
      id
      createdAt
      updatedAt
    }
  }
`;
export const updateElement = /* GraphQL */ `
  mutation UpdateElement(
    $input: UpdateElementInput!
    $condition: ModelElementConditionInput
  ) {
    updateElement(input: $input, condition: $condition) {
      name
      weight
      id
      createdAt
      updatedAt
    }
  }
`;
export const deleteElement = /* GraphQL */ `
  mutation DeleteElement(
    $input: DeleteElementInput!
    $condition: ModelElementConditionInput
  ) {
    deleteElement(input: $input, condition: $condition) {
      name
      weight
      id
      createdAt
      updatedAt
    }
  }
`;
export const createToldoc = /* GraphQL */ `
  mutation CreateToldoc(
    $input: CreateToldocInput!
    $condition: ModelToldocConditionInput
  ) {
    createToldoc(input: $input, condition: $condition) {
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
export const updateToldoc = /* GraphQL */ `
  mutation UpdateToldoc(
    $input: UpdateToldocInput!
    $condition: ModelToldocConditionInput
  ) {
    updateToldoc(input: $input, condition: $condition) {
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
export const deleteToldoc = /* GraphQL */ `
  mutation DeleteToldoc(
    $input: DeleteToldocInput!
    $condition: ModelToldocConditionInput
  ) {
    deleteToldoc(input: $input, condition: $condition) {
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
export const createSpecies = /* GraphQL */ `
  mutation CreateSpecies(
    $input: CreateSpeciesInput!
    $condition: ModelSpeciesConditionInput
  ) {
    createSpecies(input: $input, condition: $condition) {
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
export const updateSpecies = /* GraphQL */ `
  mutation UpdateSpecies(
    $input: UpdateSpeciesInput!
    $condition: ModelSpeciesConditionInput
  ) {
    updateSpecies(input: $input, condition: $condition) {
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
export const deleteSpecies = /* GraphQL */ `
  mutation DeleteSpecies(
    $input: DeleteSpeciesInput!
    $condition: ModelSpeciesConditionInput
  ) {
    deleteSpecies(input: $input, condition: $condition) {
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
export const createRoute = /* GraphQL */ `
  mutation CreateRoute($input: CreateRouteInput!, $condition: ModelRouteConditionInput) {
    createRoute(input: $input, condition: $condition) {
      name
      adjustmentFactor
      id
      createdAt
      updatedAt
    }
  }
`;
export const updateRoute = /* GraphQL */ `
  mutation UpdateRoute($input: UpdateRouteInput!, $condition: ModelRouteConditionInput) {
    updateRoute(input: $input, condition: $condition) {
      name
      adjustmentFactor
      id
      createdAt
      updatedAt
    }
  }
`;
export const deleteRoute = /* GraphQL */ `
  mutation DeleteRoute($input: DeleteRouteInput!, $condition: ModelRouteConditionInput) {
    deleteRoute(input: $input, condition: $condition) {
      name
      adjustmentFactor
      id
      createdAt
      updatedAt
    }
  }
`;
