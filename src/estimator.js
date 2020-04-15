/* eslint-disable no-shadow */
/* eslint-disable max-len */

const covid19ImpactEstimator = (data) => {
  // eslint-disable-next-line object-curly-newline
  const {
    periodType,
    timeToElapse,
    reportedCases,
    totalHospitalBeds,
    region
  } = data;

  const getNormalisedDays = (periodType, days) => {
    switch (periodType) {
      case 'weeks':
        return days * 7;
      case 'months':
        return days * 30;
      default:
        return days;
    }
  };

  const getCurrentlyInfected = (reportedCases, isSevere = false) => {
    const estimatedFactor = isSevere ? 50 : 10;
    return reportedCases * estimatedFactor;
  };

  const getInfectionsByDay = (currentlyInfected, days) => {
    let factor = Math.trunc(days / 3);
    factor = 2 ** factor;

    return currentlyInfected * factor;
  };

  const getPercentOf = (num, percent) => (num * percent) / 100;

  const getAvailableHospitalBeds = (totalBeds, availability) => getPercentOf(totalBeds, availability);

  const getDollarsInFlight = (infectionsByRequestedTime, days, region) => (infectionsByRequestedTime
        * region.avgDailyIncomePopulation
        * region.avgDailyIncomeInUSD)
      / days;

  const days = getNormalisedDays(periodType, timeToElapse);

  const currentlyInfected = Math.trunc(getCurrentlyInfected(reportedCases));
  const severeCurrentlyInfected = Math.trunc(
    getCurrentlyInfected(reportedCases, true)
  );

  const calculateRemainingData = (infected, period) => {
    const infectionsByRequestedTime = Math.trunc(
      getInfectionsByDay(infected, period)
    );
    const severeCasesByRequestedTime = Math.trunc(
      getPercentOf(infectionsByRequestedTime, 15)
    );
    const hospitalBedsByRequestedTime = Math.trunc(
      getAvailableHospitalBeds(totalHospitalBeds, 35)
        - severeCasesByRequestedTime
    );
    const casesForICUByRequestedTime = Math.trunc(
      getPercentOf(infectionsByRequestedTime, 5)
    );
    const casesForVentilatorsByRequestedTime = Math.trunc(
      getPercentOf(infectionsByRequestedTime, 2)
    );
    const dollarsInFlight = Math.trunc(
      getDollarsInFlight(infectionsByRequestedTime, period, region)
    );

    return {
      currentlyInfected: infected,
      infectionsByRequestedTime,
      severeCasesByRequestedTime,
      hospitalBedsByRequestedTime,
      casesForICUByRequestedTime,
      casesForVentilatorsByRequestedTime,
      dollarsInFlight
    };
  };

  return {
    data,
    impact: calculateRemainingData(currentlyInfected, days),
    severeImpact: calculateRemainingData(severeCurrentlyInfected, days)
  };
};

export default covid19ImpactEstimator;
