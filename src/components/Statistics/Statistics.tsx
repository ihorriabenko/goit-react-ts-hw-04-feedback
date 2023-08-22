import { FB } from '../../types/feedback';
import Section from '../Section/Section';
import Notification from '../Notification/Notification';

interface StatisticsProps {
  feedback: FB;
  countPositiveFeedback: () => number;
}

const Statistics: React.FC<StatisticsProps> = ({
  feedback: { good, neutral, bad },
  countPositiveFeedback,
}): JSX.Element => {
  const positiveFeedback = countPositiveFeedback();

  return (
    <Section type='h2' title='Statistics'>
      {positiveFeedback === 0 ? (
        <Notification text={'There is no feedback'} />
      ) : (
        <ul>
          <li>
            <p>Good: {good}</p>
          </li>
          <li>
            <p>Neutral: {neutral}</p>
          </li>
          <li>
            <p>Bad: {bad}</p>
          </li>
          <li>
            <p>Total: {good + neutral + bad}</p>
          </li>
          <li>
            <p>Positive feedback: {positiveFeedback} %</p>
          </li>
        </ul>
      )}
    </Section>
  );
};

export default Statistics;
