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

    return `${validateValue(yearValue, "year", "years")} ${validateValue(months, "month", "months")} of experience`;
}

const validateValue = (value, text, texts) => {
    if (value === 0) { return ""; }
    if (value === 1) { return `${value} ${text}`; }

    return `${value} ${texts}`;
}

export { formatExperience };