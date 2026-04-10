import React from "react";
import "@testing-library/jest-dom/vitest";
import { vi } from "vitest";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyProps = Record<string, any>;

const MOTION_PROPS = new Set([
  "initial", "animate", "exit", "transition", "variants",
  "whileHover", "whileInView", "whileTap", "viewport",
  "layout", "layoutId",
]);

vi.mock("framer-motion", () => {
  const motionHandler: ProxyHandler<object> = {
    get(_, prop) {
      if (typeof prop !== "string") return undefined;
      const MotionComponent = ({ children, ...props }: AnyProps) => {
        const filtered: AnyProps = {};
        for (const [k, v] of Object.entries(props)) {
          if (!MOTION_PROPS.has(k)) filtered[k] = v;
        }
        return React.createElement(prop, filtered, children);
      };
      MotionComponent.displayName = `motion.${prop}`;
      return MotionComponent;
    },
  };

  return {
    motion: new Proxy({}, motionHandler),
    AnimatePresence: ({ children }: { children: React.ReactNode }) => children,
    useReducedMotion: () => false,
    useScroll: () => ({ scrollYProgress: { get: () => 0 } }),
    useTransform: () => 0,
    useMotionValue: () => ({ get: () => 0, set: () => {} }),
    useSpring: () => ({ get: () => 0 }),
    useInView: () => true,
  };
});

vi.mock("lucide-react", async (importOriginal) => {
  const actual = (await importOriginal()) as AnyProps;
  const handler: ProxyHandler<AnyProps> = {
    get(target, prop) {
      if (typeof prop === "string" && prop in target) return target[prop];
      if (typeof prop === "string" && /^[A-Z]/.test(prop)) {
        const IconStub = ({ children, ...rest }: AnyProps) => (
          <svg data-testid={`icon-${String(prop)}`} {...rest}>
            {children}
          </svg>
        );
        IconStub.displayName = String(prop);
        return IconStub;
      }
      return target[prop as string];
    },
  };
  return new Proxy(actual, handler);
});

vi.mock("next-themes", () => ({
  ThemeProvider: ({ children }: { children: React.ReactNode }) => children,
  useTheme: () => ({
    theme: "light",
    setTheme: vi.fn(),
    resolvedTheme: "light",
    themes: ["light", "dark"],
  }),
}));

vi.mock("next/link", () => ({
  default: ({ children, href, ...props }: AnyProps) => (
    <a href={href} {...props}>{children}</a>
  ),
}));

vi.mock("next/image", () => ({
  // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
  default: ({ fill: _, priority: _p, ...rest }: AnyProps) => <img {...rest} />,
}));

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), back: vi.fn(), refresh: vi.fn() }),
  usePathname: () => "/",
  useSearchParams: () => new URLSearchParams(),
}));

const mockIntersectionObserver = vi.fn();
mockIntersectionObserver.mockReturnValue({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
});
window.IntersectionObserver = mockIntersectionObserver;
