import {
  createContext,
  useState,
  useEffect,
  type ReactNode,
  useMemo,
} from "react";

type ThemeContextProps = {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  name: string;
};

export const ThemeContext = createContext<ThemeContextProps | null>(null);
const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState("dark");
  const name = "Smitha";

  const themeValue = useMemo(
    () => ({ theme, setTheme, name }),
    [theme, setTheme]
  );

  useEffect(() => {
    document.documentElement.dataset.bsTheme = theme;
  }, [theme]);

  return <ThemeContext value={themeValue}>{children}</ThemeContext>;
};

export default ThemeContextProvider;
