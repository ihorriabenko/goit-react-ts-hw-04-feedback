import { FB } from '../../types/feedback';
import Section from '../Section/Section';

interface FeedbackProps {
  feedback: FB;
  feedbackCounter: (btnContent: keyof FB) => void;
}

const Feedback: React.FC<FeedbackProps> = ({
  feedback,
  feedbackCounter,
}): JSX.Element => {
  const elements = Object.keys(feedback).map((el) => (
    <li key={el}>
      <button type='button' onClick={() => feedbackCounter(el as keyof FB)}>
        {el}
      </button>
    </li>
  ));

  return (
    <Section type='h2' title='Statistics'>
      <ul>{elements}</ul>
    </Section>
  );
};

export default Feedback;
