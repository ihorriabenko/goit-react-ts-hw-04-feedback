import { FB } from '../../types/feedback';

interface StatisticsProps {
  feedback: FB;
  total: number;
  positiveFeedback: number;
}

const Statistics: React.FC<StatisticsProps> = ({
  feedback: { good, neutral, bad },
  total,
  positiveFeedback,
}): JSX.Element => {
  return (
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
        <p>Total: {total}</p>
      </li>
      <li>
        <p>Positive feedback: {positiveFeedback} %</p>
      </li>
    </ul>
  );
};

export default Statistics;
