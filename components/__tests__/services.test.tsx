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
    expect(screen.getByText("Search")).toBeInTheDocument();
    expect(screen.getByText("Content")).toBeInTheDocument();
    expect(screen.getByText("Email")).toBeInTheDocument();
    expect(screen.getByText("Paid")).toBeInTheDocument();
    expect(screen.getByText("AI-Search Visibility")).toBeInTheDocument();
    expect(screen.getByText("Ecommerce Sites")).toBeInTheDocument();
  });

  it("has proper aria-labelledby on section", () => {
    render(<Services />);
    const section = document.getElementById("services");
    expect(section).toHaveAttribute("aria-labelledby", "services-heading");
  });
});
