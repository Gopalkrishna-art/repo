
const topEconomicalBowlers = (deliveries, matches, season= '2015') => {
    let seasonId = {};
    matches.forEach(match => {
      if (match.season === season) {
        seasonId[match.id] = match;
      }
    });
    const allBowlers = deliveries.reduce((allBowlers, delivery) => {
      if (seasonId[delivery.match_id]) {
        if (allBowlers[delivery.bowler] === undefined) {
          allBowlers[delivery.bowler] = {
            runs: 0,
            balls: 0
          };
        }
        allBowlers[delivery.bowler]["runs"] +=
          parseInt(delivery.wide_runs) +
          parseInt(delivery.noball_runs) +
          parseInt(delivery.batsman_runs);
        allBowlers[delivery.bowler]["balls"] += 1;
        allBowlers[delivery.bowler]["economy"] = (
          (allBowlers[delivery.bowler]["runs"] /
            allBowlers[delivery.bowler]["balls"]) *
          6
        ).toFixed(2);
      }
      console.log(allBowlers); 
      return allBowlers;
      
    }, {});
    const topEconomicBowlers = Object.entries(allBowlers)
      .sort((a, b) => a[1].economy - b[1].economy)
      .slice(0, 10)
      .reduce((topEconomicBowlers, bowler) => {
        topEconomicBowlers[bowler[0]] = parseFloat(bowler[1].economy);
        return topEconomicBowlers;
      }, {});
      console.log(topEconomicBowlers);
    return topEconomicBowlers;
  };
  module.exports = topEconomicalBowlers;

