import { useState } from 'react';
import Feedback from './components/Feedback/Feedback';
import Statistics from './components/Statistics/Statistics';
import { FB } from './types/feedback';

const App: React.FC = (): JSX.Element => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
  });

  const increaseCounter = (btnContent: keyof FB) => {
    setFeedback((prev) => ({
      ...prev,
      [btnContent]: prev[btnContent] + 1,
      total: prev.total + 1,
    }));
  };

  const countFeedback = (e: React.MouseEvent<HTMLButtonElement>): void => {
    const button = e.target as HTMLButtonElement;

    switch (button.innerHTML) {
      case 'Good':
        increaseCounter('good');
        break;

      case 'Neutral':
        increaseCounter('neutral');
        break;

      case 'Bad':
        increaseCounter('bad');
        break;

      default:
        break;
    }
  };

  const countPositiveFeedback = (): number => {
    return Math.round((feedback.good / feedback.total) * 100) > 0
      ? Math.round((feedback.good / feedback.total) * 100)
      : 0;
  };

  return (
    <>
      <Feedback
        countFeedback={countFeedback}
      />
      <Statistics
        feedback={feedback}
        countPositiveFeedback={countPositiveFeedback}
      />
    </>
  );
};

export default App;
