import React, { createContext, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface GlobalContextProps {
  navigateToUrl: (url: string) => void;
  navigateInPage: (id: string) => void;
}

interface GlobalProviderProps {
  children: ReactNode;
}

const initial_state: GlobalContextProps = {
  navigateToUrl: () => {},
  navigateInPage: () => {},
};

export const GlobalContext = createContext<GlobalContextProps>(initial_state);

export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const navigate = useNavigate();

  const navigateToUrl = (url: string) => {
    navigate(url);
  };
  const navigateInPage = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <GlobalContext.Provider value={{ navigateToUrl, navigateInPage }}>
      {children}
    </GlobalContext.Provider>
  );
};
