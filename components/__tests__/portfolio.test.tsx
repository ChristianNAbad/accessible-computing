import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Portfolio } from "@/components/sections/portfolio";

describe("Portfolio", () => {
  it("renders the section heading", () => {
    render(<Portfolio />);
    expect(
      screen.getByRole("heading", { name: /Client Portfolio/i })
    ).toBeInTheDocument();
  });

  it("renders key client names", () => {
    render(<Portfolio />);
    expect(screen.getByText("Bank of America")).toBeInTheDocument();
    expect(screen.getByText("CannaBuddy.com")).toBeInTheDocument();
    expect(screen.getByText("DHS / USCIS")).toBeInTheDocument();
    expect(screen.getByText("PurelyFound.com")).toBeInTheDocument();
  });

  it("renders technology tags", () => {
    render(<Portfolio />);
    expect(screen.getByText("WCAG 1.0")).toBeInTheDocument();
    expect(screen.getByText("AI/Agentic")).toBeInTheDocument();
  });
});
