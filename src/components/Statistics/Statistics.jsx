import { StatisticsList, StatisticsElem } from './Statistics.styled';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  const currentState = { good, neutral, bad };
  const keys = Object.keys(currentState);
  const totalFeedback = total(currentState);
  return (
    <StatisticsList>
      {totalFeedback ? (
        <>
          {keys.map(key => (
            <StatisticsElem key={key}>
              {key} : {currentState[key]}
            </StatisticsElem>
          ))}
          <StatisticsElem>total : {totalFeedback}</StatisticsElem>
          <StatisticsElem>
            positive feedback : {positivePercentage(totalFeedback, good)}
          </StatisticsElem>
        </>
      ) : (
        'No given feedback'
      )}
    </StatisticsList>
  );
}

export default Statistics;
