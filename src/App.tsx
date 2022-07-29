import MainMenu from "./components/MainMenu";
import Quiz from "./components/Quiz";
import EndScreen from "./components/EndScreen";
import { useQuizContext } from "./context/QuizContext";
import './App.css';


function App() {
  const { gameState } = useQuizContext();

  return (
    <div className="App">
      <h1>Quiz App</h1>
      {gameState === "menu" && <MainMenu />}
      {gameState === "playing" && <Quiz />}
      {gameState === "finished" && <EndScreen />}
    </div>
  );
}

export default App;
