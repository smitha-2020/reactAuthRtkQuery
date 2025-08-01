import { expect, it, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "../components/Header";

describe("Testing Header component", () => {
  it("test the Header compoent heading", () => {
    render(<Header />);
    const heading = screen.getByTestId("name");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/KAMATH$/);
  });
});
