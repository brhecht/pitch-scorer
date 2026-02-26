import React, { createContext, useState, useEffect, useContext } from 'react';

const ScoreContext = createContext();

export const useScores = () => useContext(ScoreContext);

export const ScoreProvider = ({ children }) => {
  const initialScores = {
    Market: 5,
    Team: 5,
    Product: 5,
    Traction: 5,
    Vision: 5,
  };

  const [scores, setScores] = useState(() => {
    // Check if we are in a browser environment before accessing localStorage
    if (typeof window !== 'undefined') {
      const savedScores = localStorage.getItem('founderPitchScores');
      return savedScores ? JSON.parse(savedScores) : initialScores;
    }
    return initialScores;
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('founderPitchScores', JSON.stringify(scores));
    }
  }, [scores]);

  const updateScore = (category, value) => {
    setScores((prev) => ({
      ...prev,
      [category]: Number(value),
    }));
  };

  const calculateResults = () => {
    const total = Object.values(scores).reduce((acc, curr) => acc + curr, 0);
    const percentage = (total / 50) * 100;

    const sortedCategories = Object.entries(scores).sort(([, a], [, b]) => a - b);
    // Find the lowest score
    const lowestScore = sortedCategories[0][1];
    // Get all categories with the lowest score
    const weakestLinks = sortedCategories
      .filter(([, score]) => score === lowestScore)
      .map(([category]) => category);

    return {
      percentage: Math.round(percentage),
      weakestLinks,
      total,
    };
  };

  return (
    <ScoreContext.Provider value={{ scores, updateScore, calculateResults }}>
      {children}
    </ScoreContext.Provider>
  );
};
