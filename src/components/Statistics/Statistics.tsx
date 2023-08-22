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
  const total = good + neutral + bad;

  return (
    <Section type='h2' title='Statistics'>
      {total === 0 ? (
        <ul className='list'>
        <Notification text={'There is no feedback'} />
        </ul>
      ) : (
        <ul className='list'>
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
            <p>Positive feedback: {countPositiveFeedback()} %</p>
          </li>
        </ul>
      )}
    </Section>
  );
};

export default Statistics;
