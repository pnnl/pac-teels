export const convertPACValue = ({ molecularWeight, PACValues, unit }) => {
    // Y mg/m3 = (x)(molecularWeight)/24.45
    //   X ppm = (Y mg/m3)(24.45)/(molecular weight)
    let localPACValues = {};
    for (const [key, value] of Object.entries(PACValues)) {
        let parsedValue = parseFloat(value as string)
        if (unit === "mg/m3") {
            let mgm3 = (parsedValue * molecularWeight) / 24.45;
            localPACValues[key] = parseFloat(mgm3?.toPrecision(2)).toString();
        } else if (unit === "ppm") {
            let ppm = (parsedValue * 24.45) / (molecularWeight);
            localPACValues[key] = parseFloat(ppm.toPrecision(2)).toString();
        }
    }

    return localPACValues
}

export const downloadChemicalsToCSV = ({ chemicals, columns, type }) => {
    let csv: any = [];
    let localChemicals: any[] = []
    for (const item of chemicals) {
        let localValues: any[] = []
        for (let data of Object.values(item)) {
            let handler = data
            localValues.push(handler)
        }
        localChemicals.push(localValues)
    }

    columns.join(','),

        csv.push(columns)
    csv.push(...localChemicals)
    let formattedCSV: any = []

    for (const item of csv) {
        formattedCSV += item + '\n'
    }
    let CSVFile = new Blob([formattedCSV], {
        type: "text/csv"
    });

    const url = window.URL.createObjectURL(CSVFile)

    // Creating an anchor(a) tag of HTML
    const a = document.createElement('a')

    // Passing the blob downloading url
    a.setAttribute('href', url)

    // Setting the anchor tag attribute for downloading
    // and passing the download file name

    let date = new Date()
    a.setAttribute('download', `${type}_${date.getMonth()}-${date.getDay()}-${date.getFullYear()}.csv`);

    // Performing a download with click
    a.click()

}
export const convertIndividualPACValue = ({ molecularWeight, PACValue, unit }) => {
    let parsedValue = parseFloat(PACValue as string)
    let returnValue;
    if (unit === "mg/m3") {
        returnValue = (parsedValue * molecularWeight) / 24.45;
    } else if (unit === 'ppm') {
        returnValue = (parsedValue * 24.45) / (molecularWeight);
    }
    return parseFloat(returnValue.toPrecision(2)).toString();
}