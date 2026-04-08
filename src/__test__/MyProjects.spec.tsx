import { render, screen } from "@testing-library/react";
import MyProjects from "../components/MyProjects";
import ThemeContextProvider from "../components/ThemeContextProvider";

describe("Testing Myproject component", () => {
  beforeEach(() =>
    render(
      <ThemeContextProvider>
        <MyProjects />
      </ThemeContextProvider>
    )
  );

  it("Initial state of the component", () => {
    const projectRow = screen.getByTestId("projectItems");
    expect(projectRow).toBeInTheDocument();
    expect(projectRow.children).toHaveLength(5);
  });
});
