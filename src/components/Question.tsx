import React from 'react';
import { motion } from 'framer-motion';
import { Question as QuestionType } from '../types';

interface Props {
  question: QuestionType;
  onAnswer: (isCorrect: boolean) => void;
}

export const Question: React.FC<Props> = ({ question, onAnswer }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="w-full max-w-lg mx-auto p-6 bg-white rounded-xl shadow-lg"
    >
      <h3 className="text-xl font-semibold mb-4">{question.text}</h3>
      <div className="space-y-3">
        {question.options.map((option, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full p-3 text-left bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => onAnswer(index === question.correctAnswer)}
          >
            {option}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};