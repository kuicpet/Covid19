
/* eslint-disable max-len */
const covid19ImpactEstimator = (data) => {
  const {
    periodType,
    timeToElapse,
    reportedCases
  } = data;

  const period = () => {
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

  const days = period(periodType, timeToElapse);
  const getCurrentlyInfected = (severe = false) => {
    const estimatedFactor = severe ? 50 : 10;
    return reportedCases * estimatedFactor;
  };
  getCurrentlyInfected();

  const getInfectionsByDay = (currentlyInfected) => {
    const power = Math.trunc(timeToElapse / 3);
    const factor = 2 ** power;
    return currentlyInfected * factor;
  };
  getInfectionsByDay();

  const currentlyInfected = Math.trunc(getCurrentlyInfected(reportedCases));
  const severeCurrentlyReported = Math.trunc(getCurrentlyInfected(reportedCases, true));
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
