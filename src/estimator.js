
/* eslint-disable max-len */
const covid19ImpactEstimator = (data) => data;

const input = {
  region: {
    name: 'Africa',
    avgAge: 19.7,
    avgDailyIncomeInUSD: 5,
    avgDailyIncomePopulation: 0.71
  },
  periodType: 'months',
  timeToElapse: 3,
  reportedCases: 2747,
  population: 92931687,
  totalHospitalBeds: 678874
};

const period = () => {
  if (input.periodType === 'months') return input.timeToElapse * 30;
  if (input.periodType === 'weeks') return input.timeToElapse * 7;
  if (input.periodType === 'days') return input.timeToElapse * 1;
  return 0;
};
period();

const factor = () => {
  const x = (Math.trunc(period() / 3));
  const y = (2 ** x);
  return y;
};
factor();
/* const beds = () => {
  const a = input.totalHospitalBeds * 0.35;
  const b = (Math.trunc(a));
  return b;
};
beds(); */

const impactEstimates = () => {
  const multiplier = factor();
  const impactCurrentlyInfected = input.reportedCases * 10;
  const impactInfectionsByRequestedTime = (impactCurrentlyInfected * multiplier);
  const severeCurrentlyInfected = input.reportedCases * 50;
  const severeInfectionsByRequestedTime = (severeCurrentlyInfected * multiplier);
  const output = {
    periodType: input.periodType,
    timeToElapse: period(),
    estimates: {
      impact: {
        currentlyInfected: impactCurrentlyInfected,
        infectionsByRequestedTime: impactInfectionsByRequestedTime
      },
      severeImpact: {
        currentlyInfected: severeCurrentlyInfected,
        infectionsByRequestedTime: severeInfectionsByRequestedTime
      }
    }
  };
  // console.log(output);
  return output;
};
impactEstimates();

export default covid19ImpactEstimator;
