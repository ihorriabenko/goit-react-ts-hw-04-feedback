import { FB } from '../../types/feedback';
import Section from '../Section/Section';
import s from './feedback.module.css';

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
      <button className={s.btn} onClick={() => feedbackCounter(el as keyof FB)}>
        {el}
      </button>
    </li>
  ));

  return (
    <Section type='h2' title='Please leave feedback'>
      <ul className={s.list}>{elements}</ul>
    </Section>
  );
};

export default Feedback;
