import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState<string>("");
  const resetTheme = () => {
    setTheme("");
  };

  return (
    <div>
      <div
        className={`text-capitalize h1 mb-4 w-100 text-center text-${theme}`}
      >
        {`${theme || "Default"} Theme`}
      </div>

      <Dropdown as={ButtonGroup} size="lg" className={`text-center`}>
        <Button
          className="text-capitalize"
          variant={theme ? theme : "secondary"}
        >
          {theme ? theme : "Default"}
        </Button>
        <Dropdown.Toggle split variant={theme ? theme : "secondary"} />
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => setTheme("primary")}>
            Primary
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setTheme("danger")}>
            Danger
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setTheme("success")}>
            Success
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item onClick={resetTheme}>Default Theme</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};
export default ThemeSwitcher;
