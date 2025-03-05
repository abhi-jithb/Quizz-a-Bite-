export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  coins: number;
}

export interface Level {
  id: number;
  title: string;
  questions: Question[];
  requiredCoins: number;
}

export interface GameState {
  currentLevel: number;
  totalCoins: number;
  isLevelComplete: boolean;
  currentQuestionIndex: number;
  correctAnswers: number;
  setCurrentLevel: (level: number) => void;
  addCoins: (amount: number) => void;
  setLevelComplete: (complete: boolean) => void;
  setCurrentQuestionIndex: (index: number) => void;
  setCorrectAnswers: (answers: number) => void;
  resetGame: () => void;
}