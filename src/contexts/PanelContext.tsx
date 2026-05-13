import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

const PanelContext = createContext({
  isPanelOpen: false,
  setPanelOpen: (_: boolean) => {},
});

export const usePanelContext = () => useContext(PanelContext);

export function PanelProvider({ children }: { children: ReactNode }) {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  return (
    <PanelContext.Provider value={{ isPanelOpen, setPanelOpen: setIsPanelOpen }}>
      {children}
    </PanelContext.Provider>
  );
}
