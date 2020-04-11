/* eslint-disable no-console */

/* eslint-disable max-len */
const covid19ImpactEstimator = (data) => data;

const input = {
  region: {
    name: 'Africa',
    avgAge: 19.7,
    avgDailyIncomeInUSD: 5,
    avgDailyIncomePopulation: 0.71
  },
  periodType: 'weeks',
  timeToElapse: 38,
  reportedCases: 2747,
  population: 92931687,
  totalHospitalBeds: 678874
};
const period = () => {
  const { timeToElapse } = input;
  if (input.periodType === 'months') return timeToElapse * 30;
  if (input.periodType === 'weeks') return timeToElapse * 7;
  if (input.periodType === 'days') return timeToElapse;
  return input;
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
  console.log(output);
  return output;
};
estimates();

export default covid19ImpactEstimator;
