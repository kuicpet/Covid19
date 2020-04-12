
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

const impact = () => {
  if (input.periodType === 'months') {
    const days = input.timeToElapse * 30;
    const currentlyInfected = input.reportedCases * 10;
    const infectionsByRequestedTime = currentlyInfected * (2 ** (Math.trunc(days / 3)));
    return { currentlyInfected, infectionsByRequestedTime };
  }
  if (input.periodType === 'weeks') {
    const days = input.timeToElapse * 7;
    const currentlyInfected = input.reportedCases * 10;
    const infectionsByRequestedTime = currentlyInfected * (2 ** (Math.trunc(days / 3)));
    return { currentlyInfected, infectionsByRequestedTime };
  }
  if (input.periodType === 'days') {
    const days = input.timeToElapse;
    const currentlyInfected = input.reportedCases * 10;
    const infectionsByRequestedTime = currentlyInfected * (2 ** (Math.trunc(days / 3)));
    return { currentlyInfected, infectionsByRequestedTime };
  }
  return 0;
};
impact();
const severeImpact = () => {
  if (input.periodType === 'months') {
    const days = input.timeToElapse * 30;
    const currentlyInfected = input.reportedCases * 50;
    const infectionsByRequestedTime = currentlyInfected * (2 ** (Math.trunc(days / 3)));
    return { currentlyInfected, infectionsByRequestedTime };
  }
  if (input.periodType === 'weeks') {
    const days = input.timeToElapse * 7;
    const currentlyInfected = input.reportedCases * 50;
    const infectionsByRequestedTime = currentlyInfected * (2 ** (Math.trunc(days / 3)));
    return { currentlyInfected, infectionsByRequestedTime };
  }
  if (input.periodType === 'days') {
    const days = input.timeToElapse;
    const currentlyInfected = input.reportedCases * 50;
    const infectionsByRequestedTime = currentlyInfected * (2 ** (Math.trunc(days / 3)));
    return { currentlyInfected, infectionsByRequestedTime };
  }
  return 0;
};
severeImpact();

const output = () => {
  const estimates = {
    input,
    impact: impact(),
    severeImpact: severeImpact()
  };
  return estimates;
};
output();
export default covid19ImpactEstimator;
