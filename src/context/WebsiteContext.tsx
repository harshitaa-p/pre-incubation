import { createContext, useContext, useState, ReactNode } from 'react';

export type WebsiteType = 'pre-incubation' | 'ai-automation' | 'fire-safety';

interface WebsiteContextType {
  currentWebsite: WebsiteType;
  setCurrentWebsite: (website: WebsiteType) => void;
}

const WebsiteContext = createContext<WebsiteContextType | undefined>(undefined);

export function WebsiteProvider({ children }: { children: ReactNode }) {
  const [currentWebsite, setCurrentWebsite] = useState<WebsiteType>('pre-incubation');

  return (
    <WebsiteContext.Provider value={{ currentWebsite, setCurrentWebsite }}>
      {children}
    </WebsiteContext.Provider>
  );
}

export function useWebsite() {
  const context = useContext(WebsiteContext);
  if (context === undefined) {
    throw new Error('useWebsite must be used within a WebsiteProvider');
  }
  return context;
}
