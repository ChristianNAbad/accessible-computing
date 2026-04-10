import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Services } from "@/components/sections/services";

describe("Services", () => {
  it("renders the section heading", () => {
    render(<Services />);
    expect(
      screen.getByRole("heading", { name: /What We Build/i })
    ).toBeInTheDocument();
  });

  it("renders all 6 service cards", () => {
    render(<Services />);
    expect(screen.getByText("Web Design & Development")).toBeInTheDocument();
    expect(screen.getByText("Custom Application Development")).toBeInTheDocument();
    expect(screen.getByText("Ecommerce Solutions")).toBeInTheDocument();
    expect(screen.getByText("Internet Marketing")).toBeInTheDocument();
    expect(screen.getByText("Accessibility Consulting")).toBeInTheDocument();
    expect(screen.getByText("AI & Agentic Development")).toBeInTheDocument();
  });

  it("has proper aria-labelledby on section", () => {
    render(<Services />);
    const section = document.getElementById("services");
    expect(section).toHaveAttribute("aria-labelledby", "services-heading");
  });
});
