export const convertPACValue = ({ molecularWeight, PACValues, unit }) => {
    // Y mg/m3 = (x)(molecularWeight)/24.45
    //   X ppm = (Y mg/m3)(24.45)/(molecular weight)
    let localPACValues = {};
    for (const [key, value] of Object.entries(PACValues)) {
        let parsedValue = parseFloat(value as string)
        if (unit === "mg/m3") {
            let mgm3 = (parsedValue * molecularWeight) / 24.45;
            localPACValues[key] = mgm3?.toFixed(2).toString();
        } else if (unit === "ppm") {
            let ppm = (parsedValue * 24.45) / (molecularWeight);
            localPACValues[key] = ppm.toFixed(2).toString();
        }
    }

    return localPACValues
}

export const convertIndividualPACValue = ({molecularWeight, PACValue, unit}) => {
    let parsedValue = parseFloat(PACValue as string)
    let returnValue;
    if (unit === "mg/m3") {
        returnValue = (parsedValue * molecularWeight) / 24.45;
    } else if (unit === 'ppm') {
        returnValue = (parsedValue * 24.45) / (molecularWeight);
    }
    return returnValue.toFixed(2).toString();
}