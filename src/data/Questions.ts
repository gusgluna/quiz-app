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
    prompt: "Who is the creator of JavaScript?",
    optionA: "Bill Gates",
    optionB: "Tim Berners-Lee",
    optionC: "Brendan Eich",
    optionD: "Richard Stallman",
    asnwer: "optionC",
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
  {
    prompt: "What company created React?",
    optionA: "Google",
    optionB: "Facebook",
    optionC: "Oracle",
    optionD: "IBM",
    asnwer: "optionB",
  },
];