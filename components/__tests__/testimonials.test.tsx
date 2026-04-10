import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Testimonials } from "@/components/sections/testimonials";

describe("Testimonials", () => {
  it("renders the section heading", () => {
    render(<Testimonials />);
    expect(
      screen.getByRole("heading", { name: /Client Voices/i })
    ).toBeInTheDocument();
  });

  it("renders testimonial quotes", () => {
    render(<Testimonials />);
    expect(screen.getByText(/exceptional work/i)).toBeInTheDocument();
    expect(screen.getByText("Michael Palermo")).toBeInTheDocument();
  });
});
