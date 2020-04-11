
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
const period = () => {
  if (input.periodType === 'days') {
    return input.timeToElapse * 1;
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

const impactInDays = () => {
  const currentlyInfected = input.reportedCases * 10;
  const infectionsByRequestedTime = currentlyInfected * factor();
  const { periodType } = input;
  const timeToElapse = period();
  const output = {
    impact: {
      currentlyInfected, infectionsByRequestedTime, periodType, timeToElapse
    }
  };
  return output;
};
impactInDays();

const severeInDays = () => {
  const currentlyInfected = input.reportedCases * 50;
  const infectionsByRequestedTime = currentlyInfected * factor();
  const output = {
    data: { input },
    impact: impactInDays(),
    severeImpact: {
      currentlyInfected, infectionsByRequestedTime
    }
  };
  return output;
};
severeInDays();

const impactInWeeks = () => {
  const currentlyInfected = input.reportedCases * 10;
  const infectionsByRequestedTime = currentlyInfected * factor();
  const { periodType } = input;
  const timeToElapse = period();
  const output = {
    impact: {
      currentlyInfected, infectionsByRequestedTime, periodType, timeToElapse
    }
  };
  return output;
};
impactInWeeks();

const severeInWeeks = () => {
  const currentlyInfected = input.reportedCases * 50;
  const infectionsByRequestedTime = currentlyInfected * factor();
  const output = {
    data: { input },
    impact: impactInWeeks(),
    severeImpact: {
      currentlyInfected, infectionsByRequestedTime
    }
  };
  return output;
};
severeInWeeks();

const impactInMths = () => {
  const currentlyInfected = input.reportedCases * 10;
  const infectionsByRequestedTime = currentlyInfected * factor();
  const { periodType } = input;
  const timeToElapse = period();
  const output = {
    impact: {
      currentlyInfected, infectionsByRequestedTime, periodType, timeToElapse
    }
  };
  return output;
};
impactInMths();

const severeInMths = () => {
  const currentlyInfected = input.reportedCases * 50;
  const infectionsByRequestedTime = currentlyInfected * factor();
  const output = {
    data: { input },
    impact: impactInMths(),
    severeImpact: {
      currentlyInfected, infectionsByRequestedTime
    }
  };
  return output;
};
severeInMths();

export default covid19ImpactEstimator;
