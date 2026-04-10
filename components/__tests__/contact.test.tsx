import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Contact } from "@/components/sections/contact";

describe("Contact", () => {
  it("renders the section heading", () => {
    render(<Contact />);
    expect(
      screen.getByRole("heading", { name: /Let's Connect/i })
    ).toBeInTheDocument();
  });

  it("renders form fields with labels", () => {
    render(<Contact />);
    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Phone/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Message/i)).toBeInTheDocument();
  });

  it("renders the submit button", () => {
    render(<Contact />);
    expect(
      screen.getByRole("button", { name: /Send Message/i })
    ).toBeInTheDocument();
  });

  it("renders company phone number", () => {
    render(<Contact />);
    expect(screen.getByText("(704) 981-0185")).toBeInTheDocument();
  });

  it("renders certifications", () => {
    render(<Contact />);
    expect(screen.getByText("Certified Scrum Master")).toBeInTheDocument();
    expect(screen.getByText("Six Sigma Green Belt")).toBeInTheDocument();
  });
});
