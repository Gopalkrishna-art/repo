 // Importing the csv and filesources
 const fs = require("fs");
 const csv= require("csvtojson");
 
 // Importing funtions
 const writeData=require('./ipl/writeData')
 const matchesPlayedPerYear=require('./ipl/matchesPlayedPerYear');
 const matchesWonPerTeam= require('./ipl/matchesWonPerTeam');
 const extraRuns2016= require('./ipl/extraRuns2016');
 const topEconomicalBowlers= require('./ipl/topEconomicalBowlers');
 
 // Receiving datafiles
 const MATCHES_FILE_PATH="./data/matches.csv";
 const DELIVERIES_FILE_PATH="./data/deliveries.csv";
 
 //Output file paths
 const writePathMatchesPlayedPerYear = './public/matchesPlayedPerYear.json';
 const writePathMatchesWonPerTeam = './public/matchesWonPerTeam.json';
 const writePathExtraRuns2016 = './public/extraRuns2016.json';
 const writePathTopEconomicalBowlers = './public/topEconomicalBowlers.json';
 
 async function getData() {
   const matchesDataPromise = csv().fromFile(MATCHES_FILE_PATH);
   const deliveriesDataPromise = csv().fromFile(DELIVERIES_FILE_PATH);
 
   const megaPromise = Promise.all([matchesDataPromise, deliveriesDataPromise]);
   const [matchesData, deliveriesData] = await megaPromise;
 
   // MatchesPlayedPerYear
   const matchesPlayedResult = matchesPlayedPerYear(matchesData);
   writeData(writePathMatchesPlayedPerYear, matchesPlayedResult);
 
   // MatchesWonPerTeam
   const matchesWinPerTeamResult = matchesWonPerTeam(matchesData);
   writeData(writePathMatchesWonPerTeam, matchesWinPerTeamResult);
 
   // ExtraRuns2016
   const extraRunsResult = extraRuns2016(deliveriesData, matchesData);
   writeData(writePathExtraRuns2016, extraRunsResult);
 
   // TopEconomicalBowlers
   const economicalBowlersResult = topEconomicalBowlers(deliveriesData, matchesData);
   writeData(writePathTopEconomicalBowlers, economicalBowlersResult);
 }
 getData().catch((err) => console.log(err));
 
 

test('Matches played',()=>{
    expect(writeData().toEqual(
        {"2008":58,"2009":57,"2010":60,"2011":73,"2012":74,"2013":76,"2014":60,"2015":59,"2016":60,"2017":59}
    )
})