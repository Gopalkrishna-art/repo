function matchesPlayedPerYear(matches) {
    return matches.reduce((years, match) => {
        if (years[match.season]) {
            years[match.season] += 1;
        } else {
            years[match.season] = 1;
        }
        console.log(years);
        return years;
    }, {});
}
module.exports = matchesPlayedPerYear;


