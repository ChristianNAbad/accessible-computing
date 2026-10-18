import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Hero } from "@/components/sections/hero";
import { MESSAGING } from "@/lib/constants";

describe("Hero", () => {
  it("renders the main heading with tagline", () => {
    render(<Hero />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/Marketing That/i);
    expect(heading).toHaveTextContent(/Shows Its Work/i);
  });

  it("renders the eyebrow badge", () => {
    render(<Hero />);
    expect(screen.getByText(MESSAGING.eyebrow)).toBeInTheDocument();
  });

  it("renders CTA buttons", () => {
    render(<Hero />);
    expect(screen.getByText("Our Services")).toBeInTheDocument();
    expect(screen.getByText("Get In Touch")).toBeInTheDocument();
  });

  it("renders all stats", () => {
    render(<Hero />);
    expect(screen.getByText("Years Building for the Web")).toBeInTheDocument();
    expect(screen.getByText("Consumer Brands Run on The Edge")).toBeInTheDocument();
    expect(screen.getByText("Enterprise Clients Served")).toBeInTheDocument();
  });

  it("has proper aria-labelledby on section", () => {
    render(<Hero />);
    const section = document.getElementById("hero");
    expect(section).toHaveAttribute("aria-labelledby", "hero-heading");
  });
});
