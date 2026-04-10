import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Hero } from "@/components/sections/hero";

describe("Hero", () => {
  it("renders the main heading with tagline", () => {
    render(<Hero />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/Making You/i);
    expect(heading).toHaveTextContent(/Accessible/i);
  });

  it("renders the experience badge", () => {
    render(<Hero />);
    expect(screen.getByText(/30\+ Years/i)).toBeInTheDocument();
  });

  it("renders CTA buttons", () => {
    render(<Hero />);
    expect(screen.getByText("Our Services")).toBeInTheDocument();
    expect(screen.getByText("Get In Touch")).toBeInTheDocument();
  });

  it("renders all stats", () => {
    render(<Hero />);
    expect(screen.getByText("Years Experience")).toBeInTheDocument();
    expect(screen.getByText("Pages Made Accessible")).toBeInTheDocument();
    expect(screen.getByText("Enterprise Clients")).toBeInTheDocument();
  });

  it("has proper aria-labelledby on section", () => {
    render(<Hero />);
    const section = document.getElementById("hero");
    expect(section).toHaveAttribute("aria-labelledby", "hero-heading");
  });
});
