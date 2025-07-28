import { createContext, type ReactNode } from "react";
export const ThemeContext = createContext("light");
const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const name: string = "Smitha";

  return <ThemeContext value={name}>{children}</ThemeContext>;
};

export default ThemeContextProvider;
