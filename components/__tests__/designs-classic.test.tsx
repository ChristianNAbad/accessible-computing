import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ClassicSite } from "@/components/variants/classic/classic-site";
import { COMPANY, SERVICES, PORTFOLIO } from "@/lib/constants";

describe("Classic design concept", () => {
  it("renders the live homepage composition inside the concept shell", () => {
    render(<ClassicSite />);
    expect(screen.getByRole("main")).toHaveAttribute("id", "main-content");
    // The testimonial cards also use <footer> for attribution, so pick the
    // site footer: the last contentinfo, which carries the company name.
    const footers = screen.getAllByRole("contentinfo");
    expect(footers.at(-1)).toHaveTextContent(COMPANY.name);
    expect(screen.getByRole("navigation", { name: /main navigation/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });

  it("renders every service and portfolio item from constants", () => {
    render(<ClassicSite />);
    for (const service of SERVICES) {
      expect(screen.getAllByText(service.title).length).toBeGreaterThan(0);
    }
    for (const project of PORTFOLIO) {
      expect(screen.getAllByText(project.client).length).toBeGreaterThan(0);
    }
  });
});
