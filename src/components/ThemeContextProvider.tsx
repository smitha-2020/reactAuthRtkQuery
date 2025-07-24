import { createContext, useState, type ReactNode } from "react";
export const ThemeContext = createContext("light");
const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [value, setValue] = useState("Smitha");

  return <ThemeContext value={value}>{children}</ThemeContext>;
};

export default ThemeContextProvider;
