
const covid19ImpactEstimator = (data) => {
  const {
    periodType,
    timeToElapse,
    reportedCases
  } = data;
  const getNormalisedDays = (days) => {
    switch (periodType) {
      case 'weeks':
        return days * 7;
      case 'months':
        return days * 30;
      default:
        return days;
    }
  };
  const getInfectionsByDay = (currentlyInfected, days) => {
    const power = (Math.trunc(days / 3));
    const factor = 2 ** power;
    return currentlyInfected * factor;
  };
  const days = getNormalisedDays(periodType, timeToElapse);
  const currentlyInfected = Math.trunc(reportedCases * 10);
  const severeCurrentlyInfected = Math.trunc(reportedCases * 50);
  const infectionsByRequestedTime = Math.trunc(currentlyInfected * getInfectionsByDay(days));
  // eslint-disable-next-line max-len
  const severeInfectionsByRequestedTime = Math.trunc(severeCurrentlyInfected * getInfectionsByDay(days));
  return {
    data,
    impact: { currentlyInfected, infectionsByRequestedTime },
    severeImpact: { severeCurrentlyInfected, severeInfectionsByRequestedTime }
  };
};
export default covid19ImpactEstimator;
