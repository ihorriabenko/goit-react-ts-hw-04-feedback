import { FB } from '../../types/feedback';
import Section from '../Section/Section';
import Notification from '../Notification/Notification';

interface StatisticsProps {
  feedback: FB;
  countPositiveFeedback: () => number;
}

const Statistics: React.FC<StatisticsProps> = ({
  feedback,
  countPositiveFeedback,
}): JSX.Element => {
  return (
    <Section type='h2' title='Statistics'>
      {feedback.total === 0 ? (
        <Notification text={'There is no feedback'} />
      ) : (
        <ul>
          <li>
            <p>Good: {feedback.good}</p>
          </li>
          <li>
            <p>Neutral: {feedback.neutral}</p>
          </li>
          <li>
            <p>Bad: {feedback.bad}</p>
          </li>
          <li>
            <p>Total: {feedback.total}</p>
          </li>
          <li>
            <p>Positive feedback: {countPositiveFeedback()} %</p>
          </li>
        </ul>
      )}
    </Section>
  );
};

export default Statistics;
