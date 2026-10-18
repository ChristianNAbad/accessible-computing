import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { EditorialSite } from "@/components/variants/editorial/editorial-site";
import { BrutalistSite } from "@/components/variants/brutalist/brutalist-site";
import { TerminalSite } from "@/components/variants/terminal/terminal-site";
import { DashboardSite } from "@/components/variants/dashboard/dashboard-site";
import { StorefrontSite } from "@/components/variants/storefront/storefront-site";
import { BlueprintSite } from "@/components/variants/blueprint/blueprint-site";
import { ClassicSite } from "@/components/variants/classic/classic-site";
import { AnswerSite } from "@/components/variants/answer/answer-site";
import { ProofSite } from "@/components/variants/proof/proof-site";
import { ConversationSite } from "@/components/variants/conversation/conversation-site";
import { EDGE, EMAIL_PLATFORMS, MESSAGING, PLATFORMS } from "@/lib/constants";

const CONCEPTS = [
  ["Editorial", EditorialSite],
  ["Brutalist", BrutalistSite],
  ["Terminal", TerminalSite],
  ["Dashboard", DashboardSite],
  ["Storefront", StorefrontSite],
  ["Blueprint", BlueprintSite],
  ["Classic", ClassicSite],
  ["Answer", AnswerSite],
  ["Proof", ProofSite],
  ["Conversation", ConversationSite],
] as const;

/* Whitespace in JSX collapses, so compare on a normalized text body. */
function bodyText(container: HTMLElement) {
  return (container.textContent ?? "").replace(/\s+/g, " ");
}

// Prices and terms describe the client we want; they are internal and never
// reach a page. The Dashboard's sample tiles ($42.1k) are labeled sample data
// and are not a price, so the pattern looks for retainer and term language.
const INTERNAL_NUMBERS =
  /\$\s?2,?000|\b2,?000\b|two thousand|(?<![\d.,$])\$?2k\b|per month|setup fee|12[- ]month|twelve[- ]month|one[- ]year|\bannual\b|sixty[- ]day|60[- ]day|month three|month 3\b|three payments|three months|out after|\bcommitments?\b|\bcontracts?\b|notice period/i;

function count(text: string, needle: string) {
  return text.split(needle).length - 1;
}

describe.each(CONCEPTS)("%s concept speaks the shared language", (_name, Site) => {
  it("renders the agency positioning, The Edge, the fit line and the audit promise verbatim, each once", () => {
    const { container } = render(<Site />);
    const text = bodyText(container);
    // The identity sentences appear exactly once: a second copy reads as a
    // paste error, and a missing one breaks the shared language.
    for (const key of ["positioning", "edge", "manager", "team", "founder", "audit"] as const) {
      expect({ key, count: count(text, MESSAGING[key]) }).toEqual({ key, count: 1 });
    }
    expect(count(text, MESSAGING.fit)).toBeGreaterThanOrEqual(1);
  });

  it("names The Edge, every commerce platform and every email platform", () => {
    const { container } = render(<Site />);
    const text = bodyText(container);
    expect(text).toContain(EDGE.name);
    for (const platform of [...PLATFORMS, ...EMAIL_PLATFORMS]) {
      expect(text).toContain(platform);
    }
  });

  it("states no price or contract term", () => {
    const { container } = render(<Site />);
    expect(bodyText(container)).not.toMatch(INTERNAL_NUMBERS);
  });
});
