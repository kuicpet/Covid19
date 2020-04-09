/* eslint-disable max-len */
const covid19ImpactEstimator = (data) => data;
const data = {
  region: {
    name: 'Africa',
    avgAge: 19.7,
    avgDailyIncomeInUSD: 5,
    avgDailyIncomePopulation: 0.71
  },
  periodType: 'days',
  timeToElapse: 58,
  reportedCases: 674,
  population: 66622705,
  totalHospitalBeds: 1380614
};
const estimates = () => {
  const currentlyInfected = data.reportedCases * 10;
  const infectionsByRequestedTime = currentlyInfected * 512;
  const periodType = 'days';
  const timeToElapse = 58;
  const severeCasesByRequestedTime = infectionsByRequestedTime * 0.15;
  const output = {
    data: {},
    impact: {
      currentlyInfected, infectionsByRequestedTime, periodType, timeToElapse, severeCasesByRequestedTime
    },
    severeImpact: { currentlyInfected: data.reportedCases * 50 }
  };
  return output;
};
estimates();
export default covid19ImpactEstimator;
