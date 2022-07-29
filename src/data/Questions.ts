type QuestionType = {
  prompt: string;
  optionA: string;
  optionB: string;
  optionC: string;
  optionD: string;
  asnwer: string;
};

export const Questions: QuestionType[] = [
  {
    prompt: "What is my name?",
    optionA: "John",
    optionB: "Jake",
    optionC: "Gus",
    optionD: "Pedro",
    asnwer: "optionD",
  },
  {
    prompt: "Which of this is not a programming language?",
    optionA: "Python",
    optionB: "JavaScript",
    optionC: "MC-03",
    optionD: "Java",
    asnwer: "optionC",
  },
  {
    prompt: "Which of this is not a javascript framework?",
    optionA: "React",
    optionB: "Angular",
    optionC: "Vue",
    optionD: "Java",
    asnwer: "optionD",
  },
];