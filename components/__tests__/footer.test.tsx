import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Footer } from "@/components/layout/footer";

describe("Footer", () => {
  it("renders the company name", () => {
    render(<Footer />);
    expect(screen.getAllByText(/Accessible Computing/i).length).toBeGreaterThanOrEqual(1);
  });

  it("renders the WCAG compliance badge", () => {
    render(<Footer />);
    expect(screen.getByText(/WCAG 2.2 AAA Compliant/i)).toBeInTheDocument();
  });

  it("renders the LinkedIn link", () => {
    render(<Footer />);
    expect(screen.getByText("LinkedIn")).toBeInTheDocument();
  });

  it("renders copyright with founding year", () => {
    render(<Footer />);
    expect(screen.getAllByText(/2005/i).length).toBeGreaterThanOrEqual(1);
  });

  it("renders navigation links", () => {
    render(<Footer />);
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });
});
