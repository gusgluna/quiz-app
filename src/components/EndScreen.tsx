import { Questions } from '../data/Questions';
import { useQuizContext } from '../context/QuizContext';
import "../App.css";



function EndScreen() {

  const { score, setScore, setGameState, userName } = useQuizContext();

  const restartQuiz = () => {
    setScore(0);
    setGameState("menu");
  };

  return (
    <div className="EndScreen">
      <h1>Quiz Finished</h1>
      <h3>{userName}</h3>
      <h1>
        {score} / {Questions.length}
      </h1>
      <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
  );
}

export default EndScreen;