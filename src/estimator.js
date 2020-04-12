
/* eslint-disable max-len */
const covid19ImpactEstimator = (data) => data;

const input = {
  region: {
    name: 'Africa',
    avgAge: 19.7,
    avgDailyIncomeInUSD: 5,
    avgDailyIncomePopulation: 0.71
  },
  periodType: 'days',
  timeToElapse: 38,
  reportedCases: 2747,
  population: 92931687,
  totalHospitalBeds: 678874
};

const period = (periodType, timeToElapse) => {
  switch (periodType) {
    case 'months':
      return timeToElapse * 30;
    case 'weeks':
      return timeToElapse * 7;
    default:
      return timeToElapse;
  }
};
period();

const days = period(input.periodType, input.timeToElapse);
const getCurrentlyInfected = (reportedCases, severe = false) => {
  const estimatedFactor = severe ? 50 : 10;
  return reportedCases * estimatedFactor;
};
getCurrentlyInfected();

const getInfectionsByDay = (currentlyInfected, timeToElapse) => {
  const power = Math.trunc(timeToElapse / 3);
  const factor = 2 ** power;
  return currentlyInfected * factor;
};
getInfectionsByDay();

const currentlyInfected = Math.trunc(getCurrentlyInfected(input.reportedCases));
const severeCurrentlyReported = Math.trunc(getCurrentlyInfected(input.reportedCases, true));
const infectionsByRequestedTime = Math.trunc(getInfectionsByDay(currentlyInfected, days));
const severeInfectionsByRequestedTime = Math.trunc(getInfectionsByDay(currentlyInfected, days));
const output = () => ({
  input,
  impact: { currentlyInfected, infectionsByRequestedTime },
  svereImpact: { severeCurrentlyReported, severeInfectionsByRequestedTime }
});
output();

export default covid19ImpactEstimator;
