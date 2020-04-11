
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
  timeToElapse: 58,
  reportedCases: 674,
  population: 66622705,
  totalHospitalBeds: 1380614
};
const period = () => {
  if (input.periodType === 'days') {
    return input.timeToElapse;
  } if (input.periodType === 'weeks') {
    return input.timeToElapse * 7;
  } if (input.periodType === 'months') {
    return input.timeToElapse * 30;
  }
  return 0;
};
period();

const factor = () => {
  const x = input.timeToElapse / 3;
  const y = (2 ** Math.trunc(x));
  return y;
};
factor();

const beds = () => {
  const a = input.totalHospitalBeds * 0.35;
  const b = (Math.trunc(a));
  return b;
};
beds();

const estimates = () => {
  const impactCurrentlyInfected = input.reportedCases * 10;
  const impactInfectionsByRequestedTime = impactCurrentlyInfected * factor();
  const severeCurrentlyInfected = input.reportedCases * 50;
  const severeInfectionsByRequestedTime = severeCurrentlyInfected * factor();
  const output = {
    input,
    impact: {
      currentlyInfected: impactCurrentlyInfected,
      infectionsByRequestedTime: impactInfectionsByRequestedTime
    },
    severeImpact: {
      currentlyInfected: severeCurrentlyInfected,
      infectionsByRequestedTime: severeInfectionsByRequestedTime
    }
  };
  return output;
};
estimates();

export default covid19ImpactEstimator;
