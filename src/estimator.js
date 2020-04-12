
/* eslint-disable max-len */
const covid19ImpactEstimator = (data) => data;
const data = {
  region: {
    name: 'Africa',
    avgAge: 19.7,
    avgDailyIncomeInUSD: 5,
    avgDailyIncomePopulation: 0.71
  },
  periodType: 'weeks',
  timeToElapse: 58,
  reportedCases: 674,
  population: 66622705,
  totalHospitalBeds: 1380614
};

const getNormalisedDays = (periodType, days) => {
  switch (periodType) {
    case 'weeks':
      return days * 7;
    case 'months':
      return days * 30;
    default:
      return days;
  }
};
const getCurrentlyInfected = (reportedCases, isSevere = false) => {
  const estimatedFactor = isSevere ? 50 : 10;
  return reportedCases * estimatedFactor;
};
const getInfectionsByDay = (currentlyInfected, days) => {
  let factor = Math.trunc(days / 3);
  factor = 2 ** factor;
  return currentlyInfected * factor;
};
const days = getNormalisedDays(data.periodType, data.timeToElapse);
const currentlyInfected = Math.trunc(getCurrentlyInfected(data.reportedCases));
const severeCurrentlyInfected = Math.trunc(
  getCurrentlyInfected(data.reportedCases, true)
);
const calculateRemainingData = (infected, period) => {
  const infectionsByRequestedTime = Math.trunc(
    getInfectionsByDay(infected, period)
  );
  return {
    etimates: {
      currentlyInfected: infected,
      infectionsByRequestedTime
    }
  };
};
const output = () => ({
  data,
  impact: calculateRemainingData(currentlyInfected, days),
  severeImpact: calculateRemainingData(severeCurrentlyInfected, days)
});
output();
export default covid19ImpactEstimator;
