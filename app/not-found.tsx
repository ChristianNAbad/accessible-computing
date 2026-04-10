import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main
        id="main-content"
        className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center"
      >
        <p className="text-8xl font-black gradient-text">404</p>
        <h1 className="mt-4 text-2xl font-bold">Page Not Found</h1>
        <p className="mt-2 text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-sm font-bold text-white transition-all hover:bg-primary-light"
        >
          Back to Home
        </Link>
      </main>
      <Footer />
    </>
  );
}
