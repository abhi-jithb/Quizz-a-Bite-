import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Trophy, X, Check } from 'lucide-react';
import { CoinCounter } from './components/CoinCounter';
import { Question } from './components/Question';
import { useGameStore } from './store';
import { levels, calculateTitle } from './data';
import Footer from './components/Footer';

function App() {
  const { 
    currentLevel, 
    totalCoins,
    correctAnswers,
    currentQuestionIndex,
    setCurrentQuestionIndex,
    setCorrectAnswers,
    addCoins,
    setCurrentLevel 
  } = useGameStore();
  
  const [showExplanation, setShowExplanation] = useState(false);
  const [explanation, setExplanation] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);
  const [showLevelComplete, setShowLevelComplete] = useState(false);

  const currentLevelData = levels[currentLevel - 1];
  const currentQuestion = currentLevelData?.questions[currentQuestionIndex];

  const createCoinAnimation = () => {
    const coin = document.createElement('div');
    coin.className = 'fixed w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-yellow-800 font-bold z-50';
    coin.textContent = '+' + currentQuestion.coins;
    
    coin.style.left = '50%';
    coin.style.bottom = '20%';
    coin.style.transform = 'translateX(-50%)';
    
    document.body.appendChild(coin);

    const keyframes = [
      { transform: 'translate(-50%, 0)', opacity: 1 },
      { transform: 'translate(-50%, -100px)', opacity: 0 }
    ];

    const animation = coin.animate(keyframes, {
      duration: 1000,
      easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
    });

    animation.onfinish = () => {
      coin.remove();
    };
  };

  const handleAnswer = (isCorrect: boolean) => {
    setIsCorrect(isCorrect);
    
    if (isCorrect) {
      addCoins(currentQuestion.coins);
      createCoinAnimation();
      setCorrectAnswers(correctAnswers + 1);
    }

    setExplanation(currentQuestion.explanation);
    setShowExplanation(true);

    setTimeout(() => {
      setShowExplanation(false);
      if (currentQuestionIndex < currentLevelData.questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setShowLevelComplete(true);
        setTimeout(() => {
          setShowLevelComplete(false);
          if (currentLevel < levels.length) {
            setCurrentLevel(currentLevel + 1);
            setCurrentQuestionIndex(0);
            setCorrectAnswers(0);
          }
        }, 3000);
      }
    }, 2000);
  };

  const levelCompleteMessages = [
    "Amazing work! You've mastered the basics of mental wellness!",
    "Fantastic progress! Your emotional intelligence is growing!",
    "Outstanding achievement! You're becoming a mental wellness expert!",
    "Incredible journey! Your understanding of mental health is remarkable!",
    "Phenomenal completion! You're now a mental wellness champion!"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 p-4">
      <CoinCounter />
      
      <div className="max-w-4xl mx-auto pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Brain className="text-purple-600" size={32} />
            <h1 className="text-4xl font-bold text-purple-600">Quizz-a-Bite</h1>
          </div>
          <div className="space-y-2">
            <p className="text-xl text-purple-700 font-semibold">{currentLevelData.title}</p>
            <p className="text-gray-600">Level {currentLevel}</p>
            {currentLevelData.requiredCoins > 0 && (
              <p className="text-sm text-gray-500">
                Required Coins: {currentLevelData.requiredCoins}
              </p>
            )}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {showLevelComplete ? (
            <motion.div
              key="level-complete"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="bg-white p-8 rounded-xl shadow-lg text-center"
            >
              <Trophy className="mx-auto text-yellow-500 mb-4" size={64} />
              <h2 className="text-2xl font-bold text-green-600 mb-2">
                Level {currentLevel} Complete!
              </h2>
              <h3 className="text-xl font-semibold text-purple-600 mb-4">
                You've earned the title: {calculateTitle(correctAnswers)}
              </h3>
              <p className="text-lg text-gray-700">
                {levelCompleteMessages[currentLevel - 1]}
              </p>
              <p className="text-sm text-gray-500 mt-4">
                Correct Answers: {correctAnswers} / 10
              </p>
            </motion.div>
          ) : showExplanation ? (
            <motion.div
              key="explanation"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="bg-white p-6 rounded-xl shadow-lg text-center"
            >
              {isCorrect ? (
                <Check className="mx-auto text-green-500 mb-4" size={48} />
              ) : (
                <X className="mx-auto text-red-500 mb-4" size={48} />
              )}
              <p className={`text-lg ${isCorrect ? 'text-green-600' : 'text-red-600'} mb-4`}>
                {isCorrect ? 'Correct!' : 'Not quite right'}
              </p>
              <p className="text-gray-700">{explanation}</p>
            </motion.div>
          ) : currentQuestion ? (
            <Question
              key={currentQuestion.id}
              question={currentQuestion}
              onAnswer={handleAnswer}
            />
          ) : (
            <motion.div
              key="complete"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center"
            >
              <h2 className="text-2xl font-bold text-green-600">
                Congratulations! You've completed all levels!
              </h2>
              <p className="text-lg text-gray-700 mt-4">
                You've gained valuable insights into mental wellness practices!
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <Footer />
    </div>
  );
}

export default App;