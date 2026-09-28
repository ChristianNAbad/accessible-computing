import { redirect } from "next/navigation";

/**
 * While the design concepts are being chosen, the root sends visitors to
 * the concepts hub. The original homepage composition lives on at
 * /designs/classic (components/variants/classic/classic-site.tsx) and is
 * what this page will render again once a concept is promoted.
 */
export default function Home() {
  redirect("/designs");
}
