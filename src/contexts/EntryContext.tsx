import React, { createContext, useContext, useState } from 'react';
import entries, { Entry } from 'const/entries';

export type EntryContextType = {
  entry: Entry;
  setEntry: (entry: Entry) => void;
};

export const EntryContext = createContext<EntryContextType | null>(null);

export const EntryProvider = ({ children }: { children: React.ReactNode }) => {
  const [entry, setEntry] = useState<Entry>(entries[0]);

  return <EntryContext.Provider value={{ entry, setEntry }}>{children}</EntryContext.Provider>;
};

export const useEntryContext = () => useContext(EntryContext);
