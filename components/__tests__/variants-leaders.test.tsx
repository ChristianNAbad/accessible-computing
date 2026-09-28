import { describe, it, expect } from "vitest";
import { render, screen, within } from "@testing-library/react";
import { AnswerSite } from "@/components/variants/answer/answer-site";
import { ProofSite } from "@/components/variants/proof/proof-site";
import { ConversationSite } from "@/components/variants/conversation/conversation-site";
import { SERVICES, PORTFOLIO } from "@/lib/constants";

const CASES = [
  {
    name: "Answer",
    Site: AnswerSite,
    heading: /Be the answer/i,
    submit: /Send me the audit/i,
    messageLabel: /question should the audit answer/i,
  },
  {
    name: "Proof",
    Site: ProofSite,
    heading: /Your own marketing team/i,
    submit: /Get my free audit/i,
    messageLabel: /win look like/i,
  },
  {
    name: "Conversation",
    Site: ConversationSite,
    heading: /part of the conversation/i,
    submit: /Start the conversation/i,
    messageLabel: /what is stuck/i,
  },
] as const;

describe.each(CASES)("$name design concept", ({ Site, heading, submit, messageLabel }) => {
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

  it("has a full audit form whose fields carry the wire names the API expects", () => {
    render(<Site />);
    const form = screen.getByRole("button", { name: submit }).closest("form");
    expect(form).not.toBeNull();
    const scope = within(form as HTMLFormElement);
    const name = scope.getByLabelText(/^name/i);
    const email = scope.getByLabelText(/email/i);
    const message = scope.getByLabelText(messageLabel);
    const website = scope.getByLabelText(/website/i);
    expect(name).toBeRequired();
    expect(name).toHaveAttribute("name", "name");
    expect(email).toBeRequired();
    expect(email).toHaveAttribute("name", "email");
    expect(message).toBeRequired();
    expect(message).toHaveAttribute("name", "message");
    expect(website).toHaveAttribute("type", "url");
    expect(website).toHaveAttribute("name", "website");
  });

  it("speaks as a small agency with a dedicated account manager", () => {
    render(<Site />);
    expect(screen.getAllByText(/dedicated account manager/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Purely Found/).length).toBeGreaterThan(0);
  });

  it("exposes landmark structure: main, contentinfo, main navigation", () => {
    render(<Site />);
    expect(screen.getByRole("main")).toHaveAttribute("id", "main-content");
    expect(screen.getAllByRole("contentinfo").at(-1)).toHaveTextContent(/Accessible Computing/);
    expect(screen.getByRole("navigation", { name: /main navigation/i })).toBeInTheDocument();
  });
});

describe("Conversation hero form", () => {
  it("posts email and website plus hidden name and message so the API accepts it", () => {
    render(<ConversationSite />);
    const email = screen.getByLabelText(/^work email/i);
    const form = email.closest("form") as HTMLFormElement;
    const data = new FormData(form);
    expect(data.has("name")).toBe(true);
    expect(data.has("message")).toBe(true);
    expect(form.querySelector('input[name="website"]')).toHaveAttribute("required");
  });
});
