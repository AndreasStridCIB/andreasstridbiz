import React, { createContext, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme, useMediaQuery } from "@mui/material";

interface GlobalContextProps {
  navigateToUrl: (url: string) => void;
  navigateInPage: (id: string, yOffset?: number) => void;
  openExternalUrl: (url: string) => void;
  isMobile: boolean;
}

interface GlobalProviderProps {
  children: ReactNode;
}

const initial_state: GlobalContextProps = {
  navigateToUrl: () => {},
  navigateInPage: () => {},
  openExternalUrl: () => {},
  isMobile: false,
};

export const GlobalContext = createContext<GlobalContextProps>(initial_state);

export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigateInPage = (id: string, yOffset?: number) => {
    if (yOffset !== undefined) {
      // Scroll to specific Y coordinate
      window.scrollTo({
        top: yOffset,
        behavior: "smooth",
      });
    } else {
      // Original behavior - scroll to element by ID
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const navigateToUrl = (url: string) => {
    navigate(url);
  };

  const openExternalUrl = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <GlobalContext.Provider
      value={{
        navigateToUrl,
        navigateInPage,
        openExternalUrl,
        isMobile,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
