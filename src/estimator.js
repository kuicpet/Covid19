
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
  if (input.periodType === 'months') {
    return input.timeToElapse * 30;
  } if (input.periodType === 'weeks') {
    return input.timeToElapse * 7;
  } if (input.periodType === 'days') {
    return input.timeToElapse * 1;
  }
  return 0;
};
period();
const impact = () => {
  const currentlyInfected = input.reportedCases * 10;
  const infectionsByRequestedTime = currentlyInfected * 512;
  const periodType = 'days';
  const timeToElapse = period();
  const output = {
    impact: {
      currentlyInfected, infectionsByRequestedTime, periodType, timeToElapse
    }
  };
  return output;
};
impact();

const severe = () => {
  const currentlyInfected = input.reportedCases * 50;
  const infectionsByRequestedTime = currentlyInfected * 512;
  const periodType = 'days';
  const timeToElapse = period();
  const output = {
    data: { input },
    impact: impact(),
    severeImpact: {
      currentlyInfected, infectionsByRequestedTime, periodType, timeToElapse
    }
  };
  return output;
};
severe();
export default covid19ImpactEstimator;
