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
export const updateChemical = /* GraphQL */ `
  mutation UpdateChemical(
    $input: UpdateChemicalInput!
    $condition: ModelChemicalConditionInput
  ) {
    updateChemical(input: $input, condition: $condition) {
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
export const deleteChemical = /* GraphQL */ `
  mutation DeleteChemical(
    $input: DeleteChemicalInput!
    $condition: ModelChemicalConditionInput
  ) {
    deleteChemical(input: $input, condition: $condition) {
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
export const createElement = /* GraphQL */ `
  mutation CreateElement(
    $input: CreateElementInput!
    $condition: ModelElementConditionInput
  ) {
    createElement(input: $input, condition: $condition) {
      name
      createdAt
      updatedAt
      weight
      id
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
      createdAt
      updatedAt
      weight
      id
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
      createdAt
      updatedAt
      weight
      id
    }
  }
`;
export const createToldoc = /* GraphQL */ `
  mutation CreateToldoc(
    $input: CreateToldocInput!
    $condition: ModelToldocConditionInput
  ) {
    createToldoc(input: $input, condition: $condition) {
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
export const updateToldoc = /* GraphQL */ `
  mutation UpdateToldoc(
    $input: UpdateToldocInput!
    $condition: ModelToldocConditionInput
  ) {
    updateToldoc(input: $input, condition: $condition) {
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
export const deleteToldoc = /* GraphQL */ `
  mutation DeleteToldoc(
    $input: DeleteToldocInput!
    $condition: ModelToldocConditionInput
  ) {
    deleteToldoc(input: $input, condition: $condition) {
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
export const createSpecies = /* GraphQL */ `
  mutation CreateSpecies(
    $input: CreateSpeciesInput!
    $condition: ModelSpeciesConditionInput
  ) {
    createSpecies(input: $input, condition: $condition) {
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
export const updateSpecies = /* GraphQL */ `
  mutation UpdateSpecies(
    $input: UpdateSpeciesInput!
    $condition: ModelSpeciesConditionInput
  ) {
    updateSpecies(input: $input, condition: $condition) {
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
export const deleteSpecies = /* GraphQL */ `
  mutation DeleteSpecies(
    $input: DeleteSpeciesInput!
    $condition: ModelSpeciesConditionInput
  ) {
    deleteSpecies(input: $input, condition: $condition) {
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
export const createRoute = /* GraphQL */ `
  mutation CreateRoute($input: CreateRouteInput!, $condition: ModelRouteConditionInput) {
    createRoute(input: $input, condition: $condition) {
      createdAt
      updatedAt
      name
      adjustmentFactor
      id
    }
  }
`;
export const updateRoute = /* GraphQL */ `
  mutation UpdateRoute($input: UpdateRouteInput!, $condition: ModelRouteConditionInput) {
    updateRoute(input: $input, condition: $condition) {
      createdAt
      updatedAt
      name
      adjustmentFactor
      id
    }
  }
`;
export const deleteRoute = /* GraphQL */ `
  mutation DeleteRoute($input: DeleteRouteInput!, $condition: ModelRouteConditionInput) {
    deleteRoute(input: $input, condition: $condition) {
      createdAt
      updatedAt
      name
      adjustmentFactor
      id
    }
  }
`;
export const createTCLO = /* GraphQL */ `
  mutation CreateTCLO($input: CreateTCLOInput!, $condition: ModelTCLOConditionInput) {
    createTCLO(input: $input, condition: $condition) {
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
export const updateTCLO = /* GraphQL */ `
  mutation UpdateTCLO($input: UpdateTCLOInput!, $condition: ModelTCLOConditionInput) {
    updateTCLO(input: $input, condition: $condition) {
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
export const deleteTCLO = /* GraphQL */ `
  mutation DeleteTCLO($input: DeleteTCLOInput!, $condition: ModelTCLOConditionInput) {
    deleteTCLO(input: $input, condition: $condition) {
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
export const createTDLO = /* GraphQL */ `
  mutation CreateTDLO($input: CreateTDLOInput!, $condition: ModelTDLOConditionInput) {
    createTDLO(input: $input, condition: $condition) {
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
export const updateTDLO = /* GraphQL */ `
  mutation UpdateTDLO($input: UpdateTDLOInput!, $condition: ModelTDLOConditionInput) {
    updateTDLO(input: $input, condition: $condition) {
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
export const deleteTDLO = /* GraphQL */ `
  mutation DeleteTDLO($input: DeleteTDLOInput!, $condition: ModelTDLOConditionInput) {
    deleteTDLO(input: $input, condition: $condition) {
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
export const createLC50 = /* GraphQL */ `
  mutation CreateLC50($input: CreateLC50Input!, $condition: ModelLC50ConditionInput) {
    createLC50(input: $input, condition: $condition) {
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
export const updateLC50 = /* GraphQL */ `
  mutation UpdateLC50($input: UpdateLC50Input!, $condition: ModelLC50ConditionInput) {
    updateLC50(input: $input, condition: $condition) {
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
export const deleteLC50 = /* GraphQL */ `
  mutation DeleteLC50($input: DeleteLC50Input!, $condition: ModelLC50ConditionInput) {
    deleteLC50(input: $input, condition: $condition) {
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
export const createLCLO = /* GraphQL */ `
  mutation CreateLCLO($input: CreateLCLOInput!, $condition: ModelLCLOConditionInput) {
    createLCLO(input: $input, condition: $condition) {
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
export const updateLCLO = /* GraphQL */ `
  mutation UpdateLCLO($input: UpdateLCLOInput!, $condition: ModelLCLOConditionInput) {
    updateLCLO(input: $input, condition: $condition) {
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
export const deleteLCLO = /* GraphQL */ `
  mutation DeleteLCLO($input: DeleteLCLOInput!, $condition: ModelLCLOConditionInput) {
    deleteLCLO(input: $input, condition: $condition) {
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
export const createLD50 = /* GraphQL */ `
  mutation CreateLD50($input: CreateLD50Input!, $condition: ModelLD50ConditionInput) {
    createLD50(input: $input, condition: $condition) {
      dose
      species
      route
      id
      createdAt
      updatedAt
    }
  }
`;
export const updateLD50 = /* GraphQL */ `
  mutation UpdateLD50($input: UpdateLD50Input!, $condition: ModelLD50ConditionInput) {
    updateLD50(input: $input, condition: $condition) {
      dose
      species
      route
      id
      createdAt
      updatedAt
    }
  }
`;
export const deleteLD50 = /* GraphQL */ `
  mutation DeleteLD50($input: DeleteLD50Input!, $condition: ModelLD50ConditionInput) {
    deleteLD50(input: $input, condition: $condition) {
      dose
      species
      route
      id
      createdAt
      updatedAt
    }
  }
`;
export const createLDLO = /* GraphQL */ `
  mutation CreateLDLO($input: CreateLDLOInput!, $condition: ModelLDLOConditionInput) {
    createLDLO(input: $input, condition: $condition) {
      dose
      species
      route
      id
      createdAt
      updatedAt
    }
  }
`;
export const updateLDLO = /* GraphQL */ `
  mutation UpdateLDLO($input: UpdateLDLOInput!, $condition: ModelLDLOConditionInput) {
    updateLDLO(input: $input, condition: $condition) {
      dose
      species
      route
      id
      createdAt
      updatedAt
    }
  }
`;
export const deleteLDLO = /* GraphQL */ `
  mutation DeleteLDLO($input: DeleteLDLOInput!, $condition: ModelLDLOConditionInput) {
    deleteLDLO(input: $input, condition: $condition) {
      dose
      species
      route
      id
      createdAt
      updatedAt
    }
  }
`;
