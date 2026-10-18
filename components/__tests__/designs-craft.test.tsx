import { describe, it, expect, vi, afterEach } from "vitest";
import { render, screen, within, fireEvent, waitFor } from "@testing-library/react";
import { CraftSite } from "@/components/variants/craft/craft-site";
import { MESSAGING, NAV_ITEMS, SERVICES, TESTIMONIALS } from "@/lib/constants";

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("The Craft design concept", () => {
  it("leads with the craft headline and the report promise", () => {
    render(<CraftSite />);
    const h1 = screen.getByRole("heading", { level: 1 });
    expect(h1.textContent?.replace(/\s+/g, " ").trim()).toBe("Marketing, practiced as a craft.");
    expect(screen.getByText("Growth you can read every month.")).toBeInTheDocument();
  });

  it("puts the audit panel in the hero: email and website required, name and message hidden", () => {
    render(<CraftSite />);
    const panel = document.getElementById("audit");
    expect(panel).not.toBeNull();
    const form = panel!.querySelector("form") as HTMLFormElement;
    const scope = within(form);
    expect(scope.getByLabelText(/work email/i)).toBeRequired();
    expect(scope.getByLabelText(/your website/i)).toBeRequired();
    expect(form.querySelector('input[type="hidden"][name="name"]')).not.toBeNull();
    expect(form.querySelector('input[type="hidden"][name="message"]')).not.toBeNull();
  });

  it("posts the site URL inside the message, since the API keeps only name, email and message", async () => {
    const fetchMock = vi.fn().mockResolvedValue({ ok: true });
    vi.stubGlobal("fetch", fetchMock);
    render(<CraftSite />);
    const form = document.getElementById("audit")!.querySelector("form") as HTMLFormElement;
    const scope = within(form);
    fireEvent.change(scope.getByLabelText(/work email/i), { target: { value: "owner@example.com" } });
    fireEvent.change(scope.getByLabelText(/your website/i), { target: { value: "https://example.com" } });
    fireEvent.submit(form);
    await waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(1));
    const body = JSON.parse(fetchMock.mock.calls[0][1].body as string);
    expect(body.email).toBe("owner@example.com");
    expect(body.message).toContain("https://example.com");
    expect(await scope.findByRole("status")).toHaveTextContent(MESSAGING.auditSent);
  });

  it("links every contents entry to a service plate that exists on the page", () => {
    render(<CraftSite />);
    const services = document.getElementById("services") as HTMLElement;
    const links = within(within(services).getByRole("list")).getAllByRole("link");
    expect(links).toHaveLength(SERVICES.length);
    for (const link of links) {
      const href = link.getAttribute("href") ?? "";
      expect(href.startsWith("#service-")).toBe(true);
      const target = document.getElementById(href.slice(1));
      expect(target, href).not.toBeNull();
      expect(target!.className).toContain("cr-plate");
    }
  });

  it("resolves every in-page navigation anchor", () => {
    render(<CraftSite />);
    for (const navItem of NAV_ITEMS) {
      if (!navItem.href.startsWith("#")) continue;
      expect(document.getElementById(navItem.href.slice(1)), navItem.href).not.toBeNull();
    }
    expect(document.getElementById("audit")).not.toBeNull();
  });

  it("names both forms for assistive technology", () => {
    render(<CraftSite />);
    expect(screen.getByRole("form", { name: /get your free visibility audit/i })).toBeInTheDocument();
    expect(screen.getByRole("form", { name: /write to us/i })).toBeInTheDocument();
  });

  it("labels the monthly report as a sample and keeps the founder to one line near the end", () => {
    render(<CraftSite />);
    const report = screen.getByRole("figure", { name: /illustrative sample of a monthly report/i });
    expect(within(report).getByText("Sample")).toBeInTheDocument();
    expect(within(report).getByText(/sample figures, not a client/i)).toBeInTheDocument();
    const main = screen.getByRole("main");
    const founder = screen.getByText(MESSAGING.founder);
    // The founder line sits after the last testimonial and before the contact section.
    const figures = document.querySelectorAll("figure");
    expect(figures).toHaveLength(TESTIMONIALS.length + 1); // the report figure plus one per testimonial
    const lastTestimonial = figures[figures.length - 1];
    expect(lastTestimonial.querySelector("blockquote")).not.toBeNull();
    const contact = document.getElementById("contact")!;
    expect(lastTestimonial.compareDocumentPosition(founder) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    expect(founder.compareDocumentPosition(contact) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    expect(main.contains(founder)).toBe(true);
    expect(founder.tagName).toBe("P");
  });
});
