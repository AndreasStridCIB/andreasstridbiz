import { createContext } from "react";

export interface GlobalContextProps {
  navigateToUrl: (url: string) => void;
  isMobile: boolean;
}

export const initial_state: GlobalContextProps = {
  navigateToUrl: () => {},
  isMobile: false,
};

export const GlobalContext = createContext<GlobalContextProps>(initial_state);
