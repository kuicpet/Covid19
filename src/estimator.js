
/* eslint-disable max-len */
const covid19ImpactEstimator = () => {
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

  const days = period(data.periodType, data.timeToElapse);
  const getCurrentlyInfected = (severe = false) => {
    const estimatedFactor = severe ? 50 : 10;
    return data.reportedCases * estimatedFactor;
  };
  getCurrentlyInfected();

  const getInfectionsByDay = (currentlyInfected) => {
    const power = Math.trunc(data.timeToElapse / 3);
    const factor = 2 ** power;
    return currentlyInfected * factor;
  };
  getInfectionsByDay();

  const currentlyInfected = Math.trunc(getCurrentlyInfected(data.reportedCases));
  const severeCurrentlyReported = Math.trunc(getCurrentlyInfected(data.reportedCases, true));
  const infectionsByRequestedTime = Math.trunc(getInfectionsByDay(currentlyInfected, days));
  const severeInfectionsByRequestedTime = Math.trunc(getInfectionsByDay(currentlyInfected, days));
  const output = () => ({
    data,
    impact: { currentlyInfected, infectionsByRequestedTime },
    svereImpact: { severeCurrentlyReported, severeInfectionsByRequestedTime }
  });
  output();
};
export default covid19ImpactEstimator;
