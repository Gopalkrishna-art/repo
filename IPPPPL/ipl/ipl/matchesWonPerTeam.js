function matchesWonPerTeam(matches) {
    return matches.reduce((years, match) => {
        if (years[match.season] === undefined) {
            years[match.season] = {};
        }
        if (years[match.season][match.winner]) {
            years[match.season][match.winner] += 1;
        } else {
            years[match.season][match.winner] = 1;
        }
        console.log(years);
        return years;

    }, {});

}
module.exports = matchesWonPerTeam;