import Section from '../Section/Section';

interface FeedbackProps {
  countFeedback: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Feedback: React.FC<FeedbackProps> = ({
  countFeedback,
}): JSX.Element => {
  return (
    <Section type='h2' title='Please leave feedback'>
      <ul>
        <li>
          <button onClick={countFeedback}>Good</button>
        </li>
        <li>
          <button onClick={countFeedback}>Neutral</button>
        </li>
        <li>
          <button onClick={countFeedback}>Bad</button>
        </li>
      </ul>
    </Section>
  );
};

export default Feedback;
