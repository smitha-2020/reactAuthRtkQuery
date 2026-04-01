import { render, screen } from "@testing-library/react";
import Skills from "../components/Skills";
import ThemeContextProvider from "../components/ThemeContextProvider";

describe("Skills component", () => {
  beforeEach(() =>
    render(
      <ThemeContextProvider>
        <Skills />
      </ThemeContextProvider>
    )
  );

  it("renders the skills grid", () => {
    const skillsRow = screen.getByTestId("skillsItems");
    expect(skillsRow).toBeInTheDocument();
    expect(skillsRow.children).toHaveLength(10);
  });
});
