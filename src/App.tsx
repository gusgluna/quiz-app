import { useState } from 'react';
import MainMenu from "./components/MainMenu";
import Quiz from "./components/Quiz";
import EndScreen from "./components/EndScreen";
import './App.css';
import { useQuizContext } from "./context/QuizContext";


function App() {
  const { gameState } = useQuizContext();

  return (
    <div className="App">
      <h1>Quiz App</h1>
      {gameState === "menu" && <MainMenu />}
      {gameState === "playing" && <Quiz />}
      {gameState === "endScreen" && <EndScreen />}
    </div>
  );
}

export default App;
