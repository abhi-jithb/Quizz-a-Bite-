import React from 'react';
import { motion } from 'framer-motion';
import { Coins } from 'lucide-react';
import { useGameStore } from '../store';

export const CoinCounter: React.FC = () => {
  const totalCoins = useGameStore((state) => state.totalCoins);

  return (
    <motion.div 
      className="fixed top-4 right-4 bg-yellow-400 rounded-full px-4 py-2 flex items-center gap-2"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
    >
      <Coins className="text-yellow-800" size={24} />
      <span className="font-bold text-yellow-800">{totalCoins}</span>
    </motion.div>
  );
};