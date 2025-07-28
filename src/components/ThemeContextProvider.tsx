import { createContext, useState, type ReactNode } from "react";

type ThemeContextProps = {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
};

interface CurrentUserContextType {
  username: string;
}
export const ThemeContext = createContext<ThemeContextProps | null>(null);
const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState("light");
  const name = "Smitha";

  return <ThemeContext value={{ theme, setTheme }}>{children}</ThemeContext>;
};

export default ThemeContextProvider;
