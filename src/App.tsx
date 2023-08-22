import { useState } from 'react';
import Feedback from './components/Feedback/Feedback';
import Statistics from './components/Statistics/Statistics';
import { FB } from './types/feedback';

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

  const countPositiveFeedback = (): number => {
    const { good, neutral, bad } = feedback;
    const total = good + neutral + bad;

    return (good / total) * 100 > 0 ? Math.round((good / total) * 100) : 0;
  };

  return (
    <div className='app'>
      <Feedback feedback={feedback} feedbackCounter={feedbackCounter} />
      <Statistics
        feedback={feedback}
        countPositiveFeedback={countPositiveFeedback}
      />
    </div>
  );
};

export default App;
