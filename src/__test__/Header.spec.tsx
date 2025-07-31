import { expect, test, it, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "../components/Header";

describe("Testing MyProjects component", () => {
  it("test the Myprojects compoent heading", () => {
    render(<Header />);
    const heading = screen.getByTestId("name");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/KAMATH$/);
  });
});
