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
export const onCreateTCLO = /* GraphQL */ `
  subscription OnCreateTCLO {
    onCreateTCLO {
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
export const onUpdateTCLO = /* GraphQL */ `
  subscription OnUpdateTCLO {
    onUpdateTCLO {
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
export const onDeleteTCLO = /* GraphQL */ `
  subscription OnDeleteTCLO {
    onDeleteTCLO {
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
export const onCreateTDLO = /* GraphQL */ `
  subscription OnCreateTDLO {
    onCreateTDLO {
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
export const onUpdateTDLO = /* GraphQL */ `
  subscription OnUpdateTDLO {
    onUpdateTDLO {
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
export const onDeleteTDLO = /* GraphQL */ `
  subscription OnDeleteTDLO {
    onDeleteTDLO {
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
export const onCreateLC50 = /* GraphQL */ `
  subscription OnCreateLC50 {
    onCreateLC50 {
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
export const onUpdateLC50 = /* GraphQL */ `
  subscription OnUpdateLC50 {
    onUpdateLC50 {
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
export const onDeleteLC50 = /* GraphQL */ `
  subscription OnDeleteLC50 {
    onDeleteLC50 {
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
export const onCreateLCLO = /* GraphQL */ `
  subscription OnCreateLCLO {
    onCreateLCLO {
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
export const onUpdateLCLO = /* GraphQL */ `
  subscription OnUpdateLCLO {
    onUpdateLCLO {
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
export const onDeleteLCLO = /* GraphQL */ `
  subscription OnDeleteLCLO {
    onDeleteLCLO {
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
export const onCreateLD50 = /* GraphQL */ `
  subscription OnCreateLD50 {
    onCreateLD50 {
      dose
      species
      route
      id
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateLD50 = /* GraphQL */ `
  subscription OnUpdateLD50 {
    onUpdateLD50 {
      dose
      species
      route
      id
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteLD50 = /* GraphQL */ `
  subscription OnDeleteLD50 {
    onDeleteLD50 {
      dose
      species
      route
      id
      createdAt
      updatedAt
    }
  }
`;
export const onCreateLDLO = /* GraphQL */ `
  subscription OnCreateLDLO {
    onCreateLDLO {
      dose
      species
      route
      id
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateLDLO = /* GraphQL */ `
  subscription OnUpdateLDLO {
    onUpdateLDLO {
      dose
      species
      route
      id
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteLDLO = /* GraphQL */ `
  subscription OnDeleteLDLO {
    onDeleteLDLO {
      dose
      species
      route
      id
      createdAt
      updatedAt
    }
  }
`;
