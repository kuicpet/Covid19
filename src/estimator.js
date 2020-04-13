
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
