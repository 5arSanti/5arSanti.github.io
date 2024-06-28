const formatExperience = (startYear, startMonth) => {
    const date = new Date();
    const currentYear = date.getFullYear();
    const currentMonth = date.getMonth() + 1;

    let years = currentYear - startYear;
    let months = currentMonth - startMonth;

    if (months < 0) {
        years -= 1;
        months += 12;
    }


    const yearValue = years;

    return `${validateValue(yearValue, "año", "años") ? validateValue(yearValue, "año", "años") + " y" : ""}  ${validateValue(months, "mes", "meses")} de experiencia`;
}

const validateValue = (value, text, texts) => {
    if (value === 0) { return false; }
    if (value === 1) { return `${value} ${text}`; }

    return `${value} ${texts}`;
}

export { formatExperience };