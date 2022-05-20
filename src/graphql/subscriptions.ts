/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateChemical = /* GraphQL */ `
  subscription OnCreateChemical {
    onCreateChemical {
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
export const onUpdateChemical = /* GraphQL */ `
  subscription OnUpdateChemical {
    onUpdateChemical {
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
export const onDeleteChemical = /* GraphQL */ `
  subscription OnDeleteChemical {
    onDeleteChemical {
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
export const onCreateElement = /* GraphQL */ `
  subscription OnCreateElement {
    onCreateElement {
      name
      weight
      id
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateElement = /* GraphQL */ `
  subscription OnUpdateElement {
    onUpdateElement {
      name
      weight
      id
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteElement = /* GraphQL */ `
  subscription OnDeleteElement {
    onDeleteElement {
      name
      weight
      id
      createdAt
      updatedAt
    }
  }
`;
export const onCreateToldoc = /* GraphQL */ `
  subscription OnCreateToldoc {
    onCreateToldoc {
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
export const onUpdateToldoc = /* GraphQL */ `
  subscription OnUpdateToldoc {
    onUpdateToldoc {
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
export const onDeleteToldoc = /* GraphQL */ `
  subscription OnDeleteToldoc {
    onDeleteToldoc {
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
export const onCreateSpecies = /* GraphQL */ `
  subscription OnCreateSpecies {
    onCreateSpecies {
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
export const onUpdateSpecies = /* GraphQL */ `
  subscription OnUpdateSpecies {
    onUpdateSpecies {
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
export const onDeleteSpecies = /* GraphQL */ `
  subscription OnDeleteSpecies {
    onDeleteSpecies {
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
export const onCreateRoute = /* GraphQL */ `
  subscription OnCreateRoute {
    onCreateRoute {
      name
      adjustmentFactor
      id
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateRoute = /* GraphQL */ `
  subscription OnUpdateRoute {
    onUpdateRoute {
      name
      adjustmentFactor
      id
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteRoute = /* GraphQL */ `
  subscription OnDeleteRoute {
    onDeleteRoute {
      name
      adjustmentFactor
      id
      createdAt
      updatedAt
    }
  }
`;
