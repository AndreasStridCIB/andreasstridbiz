import React, { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme, useMediaQuery } from "@mui/material";
import { GlobalContext } from "./utils/globalContextTemplate";

interface GlobalProviderProps {
  children: ReactNode;
}

export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const navigateToUrl = (url: string) => {
    navigate(url);
  };

  return (
    <GlobalContext.Provider
      value={{
        navigateToUrl,
        isMobile,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
