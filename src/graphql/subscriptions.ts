/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateChemical = /* GraphQL */ `
  subscription OnCreateChemical {
    onCreateChemical {
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
export const onUpdateChemical = /* GraphQL */ `
  subscription OnUpdateChemical {
    onUpdateChemical {
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
export const onDeleteChemical = /* GraphQL */ `
  subscription OnDeleteChemical {
    onDeleteChemical {
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
export const onCreateElement = /* GraphQL */ `
  subscription OnCreateElement {
    onCreateElement {
      name
      createdAt
      updatedAt
      weight
      id
    }
  }
`;
export const onUpdateElement = /* GraphQL */ `
  subscription OnUpdateElement {
    onUpdateElement {
      name
      createdAt
      updatedAt
      weight
      id
    }
  }
`;
export const onDeleteElement = /* GraphQL */ `
  subscription OnDeleteElement {
    onDeleteElement {
      name
      createdAt
      updatedAt
      weight
      id
    }
  }
`;
export const onCreateToldoc = /* GraphQL */ `
  subscription OnCreateToldoc {
    onCreateToldoc {
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
export const onUpdateToldoc = /* GraphQL */ `
  subscription OnUpdateToldoc {
    onUpdateToldoc {
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
export const onDeleteToldoc = /* GraphQL */ `
  subscription OnDeleteToldoc {
    onDeleteToldoc {
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
export const onCreateSpecies = /* GraphQL */ `
  subscription OnCreateSpecies {
    onCreateSpecies {
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
export const onUpdateSpecies = /* GraphQL */ `
  subscription OnUpdateSpecies {
    onUpdateSpecies {
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
export const onDeleteSpecies = /* GraphQL */ `
  subscription OnDeleteSpecies {
    onDeleteSpecies {
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
export const onCreateRoute = /* GraphQL */ `
  subscription OnCreateRoute {
    onCreateRoute {
      createdAt
      updatedAt
      name
      adjustmentFactor
      id
    }
  }
`;
export const onUpdateRoute = /* GraphQL */ `
  subscription OnUpdateRoute {
    onUpdateRoute {
      createdAt
      updatedAt
      name
      adjustmentFactor
      id
    }
  }
`;
export const onDeleteRoute = /* GraphQL */ `
  subscription OnDeleteRoute {
    onDeleteRoute {
      createdAt
      updatedAt
      name
      adjustmentFactor
      id
    }
  }
`;
