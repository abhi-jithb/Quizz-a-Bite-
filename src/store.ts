import { create } from 'zustand';
import { GameState } from './types';

export const useGameStore = create<GameState>((set) => ({
  currentLevel: 1,
  totalCoins: 0,
  isLevelComplete: false,
  currentQuestionIndex: 0,
  correctAnswers: 0,
  setCurrentLevel: (level) => set({ currentLevel: level }),
  addCoins: (amount) => set((state) => ({ totalCoins: state.totalCoins + amount })),
  setLevelComplete: (complete) => set({ isLevelComplete: complete }),
  setCurrentQuestionIndex: (index) => set({ currentQuestionIndex: index }),
  setCorrectAnswers: (answers) => set({ correctAnswers: answers }),
  resetGame: () => set({ 
    currentLevel: 1, 
    totalCoins: 0, 
    isLevelComplete: false, 
    currentQuestionIndex: 0,
    correctAnswers: 0
  }),
}));