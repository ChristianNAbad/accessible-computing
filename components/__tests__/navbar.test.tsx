import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Navbar } from "@/components/layout/navbar";

describe("Navbar", () => {
  it("renders the company name link", () => {
    render(<Navbar />);
    expect(
      screen.getByRole("link", { name: /Accessible Computing.*Home/i })
    ).toBeInTheDocument();
  });

  it("renders all navigation links", () => {
    render(<Navbar />);
    expect(screen.getAllByText("Services").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("About").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("Portfolio").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("Blog").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("Contact").length).toBeGreaterThanOrEqual(1);
  });

  it("renders the mobile menu button", () => {
    render(<Navbar />);
    const menuButton = screen.getByRole("button", { name: /Open menu/i });
    expect(menuButton).toBeInTheDocument();
    expect(menuButton).toHaveAttribute("aria-expanded", "false");
  });

  it("has proper navigation landmark", () => {
    render(<Navbar />);
    expect(
      screen.getByRole("navigation", { name: "Main Navigation" })
    ).toBeInTheDocument();
  });
});
