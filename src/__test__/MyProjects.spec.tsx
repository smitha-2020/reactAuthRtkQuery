import { render, screen } from "@testing-library/react";
import MyProjects from "../components/MyProjects";

describe("Testing Myproject component", () => {
  beforeEach(() => render(<MyProjects />));

  it("Initial state of the component", () => {
    const projectRow = screen.getByTestId("projectItems");
    expect(projectRow).toBeInTheDocument();
    expect(projectRow.children).toHaveLength(2);
    screen.debug();
  });
});
