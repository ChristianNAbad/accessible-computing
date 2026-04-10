"use client";

import { useState } from "react";
import { Send, Phone, MapPin, ExternalLink } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { COMPANY } from "@/lib/constants";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(data)),
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-section-alt px-6 py-24 lg:py-32"
      aria-labelledby="contact-heading"
    >
      <div className="section-number" aria-hidden="true">
        04
      </div>

      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="text-center">
            <h2
              id="contact-heading"
              className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl"
            >
              Let&apos;s <span className="gradient-text">Connect</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Have a project in mind? Need an accessibility audit? We&apos;d
              love to hear from you.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          {/* Form */}
          <ScrollReveal direction="left">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-sm font-medium"
                >
                  Name <span aria-hidden="true">*</span>
                  <span className="sr-only">(required)</span>
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className="mt-2 block w-full rounded-lg border border-border bg-card px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-sm font-medium"
                >
                  Email <span aria-hidden="true">*</span>
                  <span className="sr-only">(required)</span>
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="mt-2 block w-full rounded-lg border border-border bg-card px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-phone"
                  className="block text-sm font-medium"
                >
                  Phone <span className="text-muted-foreground">(optional)</span>
                </label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  className="mt-2 block w-full rounded-lg border border-border bg-card px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-medium"
                >
                  Message <span aria-hidden="true">*</span>
                  <span className="sr-only">(required)</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  className="mt-2 block w-full resize-y rounded-lg border border-border bg-card px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-primary px-8 text-sm font-bold text-white transition-all hover:bg-primary-light hover:shadow-lg disabled:opacity-50"
              >
                {status === "sending" ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="h-4 w-4" aria-hidden="true" />
                  </>
                )}
              </button>

              {status === "sent" && (
                <p className="text-sm font-medium text-green-600" role="status">
                  Message sent! We&apos;ll be in touch soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm font-medium text-accent" role="alert">
                  Something went wrong. Please try again or email us directly.
                </p>
              )}
            </form>
          </ScrollReveal>

          {/* Info */}
          <ScrollReveal direction="right">
            <div className="space-y-8 lg:pl-8">
              <div>
                <h3 className="text-lg font-bold">Get in Touch</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Whether you need a full website build, an accessibility audit,
                  or want to explore how agentic AI can accelerate your
                  development — we&apos;re here to help.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin
                    className="mt-0.5 h-5 w-5 text-primary"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-sm font-medium">Location</p>
                    <p className="text-sm text-muted-foreground">
                      {COMPANY.address}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone
                    className="mt-0.5 h-5 w-5 text-primary"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-sm font-medium">Phone</p>
                    <a
                      href={`tel:${COMPANY.phone.replace(/[^\d+]/g, "")}`}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {COMPANY.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ExternalLink
                    className="mt-0.5 h-5 w-5 text-primary"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-sm font-medium">LinkedIn</p>
                    <a
                      href={COMPANY.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      Christian Abad
                    </a>
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="text-sm font-bold uppercase tracking-widest">
                  Certifications
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {[
                    "Certified Scrum Master",
                    "ITIL Foundation",
                    "Six Sigma Green Belt",
                    "HubSpot Inbound",
                  ].map((cert) => (
                    <span
                      key={cert}
                      className="rounded-full bg-primary/5 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
