import React from "react";
import { createContext, useContext, useState, ReactNode } from "react";

type QuizProviderProps = {
  children: ReactNode;
};

type QuizContext = {
  gameState: string;
  setGameState: (value: string) => void;
  userName: string;
  setUserName: (value: string) => void;
  score: number;
  setScore: (value: number) => void;
};

const QuizContext = createContext({} as QuizContext);

export function useQuizContext() {
  return useContext(QuizContext);
}

export function QuizContextProvider({ children }: QuizProviderProps) {
  const [gameState, setGameState] = useState("menu");
  const [userName, setUserName] = useState("");
  const [score, setScore] = useState(0);

  return (
    <QuizContext.Provider value={{
      gameState,
      setGameState,
      userName,
      setUserName,
      score,
      setScore,
    }}>
      {children}
    </QuizContext.Provider>);

}