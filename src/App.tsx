import { useState } from 'react';
import Feedback from './components/Feedback/Feedback';
import Statistics from './components/Statistics/Statistics';
import { FB } from './types/feedback';
import Section from './components/Section/Section';
import Notification from './components/Notification/Notification';

const App: React.FC = (): JSX.Element => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const feedbackCounter = (btnContent: keyof FB): void => {
    setFeedback((prev) => ({
      ...prev,
      [btnContent]: prev[btnContent] + 1,
    }));
  };

  const countTotalFeedback = () => {
    return Object.values(feedback).reduce((acc, el) => {
      return acc + el;
    }, 0);
  };

  const countPositiveFeedback = (): number => {
    const { good, neutral, bad } = feedback;
    const total = good + neutral + bad;

    return (good / total) * 100 > 0 ? Math.round((good / total) * 100) : 0;
  };

  const total = countTotalFeedback();

  return (
    <div className='app'>
      <Feedback feedback={feedback} feedbackCounter={feedbackCounter} />
      <Section type='h2' title='Statistics'>
        {!total ? (
          <Notification text={'There is no feedback'} />
        ) : (
          <Statistics
            feedback={feedback}
            total={countTotalFeedback()}
            positiveFeedback={countPositiveFeedback()}
          />
        )}
      </Section>
    </div>
  );
};

export default App;
