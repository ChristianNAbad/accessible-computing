import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { AboutStory } from "@/components/sections/about-story";

describe("AboutStory", () => {
  it("renders the section heading", () => {
    render(<AboutStory />);
    expect(
      screen.getByRole("heading", { name: /The Story/i })
    ).toBeInTheDocument();
  });

  it("mentions Bank of America", () => {
    render(<AboutStory />);
    expect(screen.getAllByText(/Bank of America/i).length).toBeGreaterThanOrEqual(1);
  });

  it("mentions agentic AI development", () => {
    render(<AboutStory />);
    expect(screen.getByText(/agentic AI development/i)).toBeInTheDocument();
  });

  it("mentions CannaBuddy", () => {
    render(<AboutStory />);
    expect(screen.getByText(/CannaBuddy.com/i)).toBeInTheDocument();
  });

  it("renders LinkedIn and Resume links", () => {
    render(<AboutStory />);
    expect(screen.getByText("LinkedIn")).toBeInTheDocument();
    expect(screen.getByText("Full Resume")).toBeInTheDocument();
  });

  it("renders timeline milestones", () => {
    render(<AboutStory />);
    expect(screen.getByText("Career Begins")).toBeInTheDocument();
    expect(screen.getByText("Accessible Computing Founded")).toBeInTheDocument();
    expect(screen.getByText(/AI & Agentic Era/i)).toBeInTheDocument();
  });
});
