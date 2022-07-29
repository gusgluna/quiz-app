import "../App.css";
import { useQuizContext } from '../context/QuizContext';

function MainMenu() {
  const { setUserName, setGameState } = useQuizContext();

  return (
    <div className='Menu'>
      <label>Enter Your Name:</label>
      <input
        type="text"
        placeholder="E.g. John Doe"
        onChange={(event) => {
          setUserName(event.target.value);
        }}
      />
      <button
        onClick={() => {
          setGameState("playing");
        }}
      >
        Start Quiz
      </button>
    </div>
  );
}

export default MainMenu;