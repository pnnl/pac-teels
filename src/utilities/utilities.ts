export const convertPACValue = ({ molecularWeight, PACValues, unit }) => {
    // Y mg/m3 = (x)(molecularWeight)/24.45
    //   X ppm = (Y mg/m3)(24.45)/(molecular weight)
    let localPACValues = {};
    for (const [key, value] of Object.entries(PACValues)) {
        let parsedValue = parseFloat(value as string)
        if (unit === "mg/m3") {
            let mgm3 = (parsedValue * molecularWeight) / 24.45;
            localPACValues[key] = mgm3?.toFixed(2).toString();
            console.log({ localPACValues, mgm3 })
        } else if (unit === "ppm") {
            let ppm = (parsedValue * 24.45) / (molecularWeight)
            localPACValues[key] = ppm.toFixed(2).toString();
        }
    }

    return localPACValues
}