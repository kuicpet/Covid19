
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
  const getCurrentlyInfected = (isSevere = false) => {
    const estimatedFactor = isSevere ? 50 : 10;
    return reportedCases * estimatedFactor;
  };
  const getInfectionsByDay = (currentlyInfected, days) => {
    const power = (Math.trunc(days / 3));
    const factor = 2 ** power;
    return currentlyInfected * factor;
  };
  const days = getNormalisedDays(periodType, timeToElapse);
  const currentlyInfected = Math.trunc(getCurrentlyInfected(reportedCases));
  const severeCurrentlyInfected = Math.trunc(
    getCurrentlyInfected(reportedCases, true)
  );
  const output = (infected, period) => {
    const infectionsByRequestedTime = Math.trunc(
      getInfectionsByDay(infected, period)
    );
    return {
      currentlyInfected: infected,
      infectionsByRequestedTime
    };
  };
  return {
    data,
    impact: output(currentlyInfected, days),
    severeImpact: output(severeCurrentlyInfected, days)
  };
};
export default covid19ImpactEstimator;
