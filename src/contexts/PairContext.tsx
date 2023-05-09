import React, { createContext, useContext, useState } from 'react';
import pairs, { Pair } from 'const/pairs';

export type PairContextType = {
  pair: Pair;
  setPair: (pair: Pair) => void;
};

export const PairContext = createContext<PairContextType | null>(null);

export const PairProvider = ({ children }: { children: React.ReactNode }) => {
  const [pair, setPair] = useState<Pair>(pairs[0]);

  return <PairContext.Provider value={{ pair, setPair }}>{children}</PairContext.Provider>;
};

export const usePairContext = () => useContext(PairContext);
