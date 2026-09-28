import { describe, it, expect } from "vitest";
import { render, screen, within } from "@testing-library/react";
import { DashboardSite } from "@/components/variants/dashboard/dashboard-site";
import { StorefrontSite } from "@/components/variants/storefront/storefront-site";
import { BlueprintSite } from "@/components/variants/blueprint/blueprint-site";
import { SERVICES, PORTFOLIO } from "@/lib/constants";

const CASES = [
  {
    name: "Dashboard",
    Site: DashboardSite,
    heading: /Marketing that reports in/i,
    submit: /Request my free audit/i,
  },
  {
    name: "Storefront",
    Site: StorefrontSite,
    heading: /More orders/i,
    submit: /Send me the audit/i,
  },
  {
    name: "Blueprint",
    Site: BlueprintSite,
    heading: /Marketing,/i,
    submit: /Submit request/i,
  },
] as const;

describe.each(CASES)("$name design concept", ({ Site, heading, submit }) => {
  it("renders the hero heading as the page h1", () => {
    render(<Site />);
    expect(screen.getByRole("heading", { level: 1, name: heading })).toBeInTheDocument();
  });

  it("renders every service and portfolio item from constants", () => {
    render(<Site />);
    for (const service of SERVICES) {
      expect(screen.getAllByText(service.title).length).toBeGreaterThan(0);
    }
    for (const project of PORTFOLIO) {
      expect(screen.getAllByText(project.client).length).toBeGreaterThan(0);
    }
  });

  it("has a free-audit form with a website field and a submit control", () => {
    render(<Site />);
    const form = screen.getByRole("button", { name: submit }).closest("form");
    expect(form).not.toBeNull();
    const scope = within(form as HTMLFormElement);
    const name = scope.getByLabelText(/name/i);
    const email = scope.getByLabelText(/email/i);
    const message = scope.getByRole("textbox", { name: /number|selling|survey/i });
    const website = scope.getByLabelText(/url|website/i);
    expect(name).toBeRequired();
    expect(name).toHaveAttribute("name", "name");
    expect(email).toBeRequired();
    expect(email).toHaveAttribute("name", "email");
    expect(message).toBeRequired();
    expect(message).toHaveAttribute("name", "message");
    expect(website).toHaveAttribute("type", "url");
    expect(website).toHaveAttribute("name", "website");
  });

  it("exposes landmark structure: main, contentinfo, main navigation", () => {
    render(<Site />);
    expect(screen.getByRole("main")).toHaveAttribute("id", "main-content");
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
    expect(screen.getByRole("navigation", { name: /main navigation/i })).toBeInTheDocument();
  });
});
