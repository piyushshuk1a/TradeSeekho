import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ModeContextType {
  isSimulationMode: boolean;
  toggleMode: () => void;
  setMode: (mode: boolean) => void;
}

const ModeContext = createContext<ModeContextType | undefined>(undefined);

export const ModeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isSimulationMode, setIsSimulationMode] = useState<boolean>(true);

  const toggleMode = () => {
    setIsSimulationMode((prev) => !prev);
  };

  const setMode = (mode: boolean) => {
    setIsSimulationMode(mode);
  };

  return (
    <ModeContext.Provider value={{ isSimulationMode, toggleMode, setMode }}>
      {children}
    </ModeContext.Provider>
  );
};

export const useMode = (): ModeContextType => {
  const context = useContext(ModeContext);
  if (!context) {
    throw new Error('useMode must be used within a ModeProvider');
  }
  return context;
};

