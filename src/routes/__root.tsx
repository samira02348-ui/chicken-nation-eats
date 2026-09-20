import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import logo from "@/assets/logo.png";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function Logo() {
  return (
    <Link to="/" className="group flex items-center gap-2.5">
      <span className="ember-gradient flex size-9 items-center justify-center overflow-hidden rounded-xl shadow-[var(--shadow-ember)] transition-transform group-hover:rotate-6">
        <img src={logo} alt="" width={36} height={36} className="size-full object-cover" />
      </span>
      <span className="font-display text-sm leading-none tracking-wide uppercase sm:text-base">
        Chicken<span className="gold-gradient-text"> Nation</span>
      </span>
    </Link>
  );
}

function SiteHeader() {
  const links = [
    { to: "/", label: "Home" },
    { to: "/menu", label: "Menu" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ] as const;

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Logo />
        <nav className="-mr-1 flex items-center gap-0.5 sm:gap-2">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.to === "/" }}
              className="rounded-full px-2.5 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground data-[status=active]:bg-secondary data-[status=active]:text-foreground sm:px-3"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:+237671648900"
            className="ember-gradient ml-1 hidden rounded-full px-4 py-1.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-ember)] transition-transform hover:scale-105 sm:inline-block"
          >
            Order now
          </a>
        </nav>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="smoke-texture border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-3 sm:px-6">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Hot, crispy, legendary fried chicken on Foncha Street, Bamenda. Dine in,
            takeaway or delivery.
          </p>
        </div>
        <div>
          <h3 className="font-display text-xs tracking-widest text-gold uppercase">Find us</h3>
          <p className="mt-4 text-sm text-muted-foreground">
            X5CF+FJR, Foncha St
            <br />
            Bamenda, Cameroon
          </p>
          <a
            href="tel:+237671648900"
            className="mt-3 inline-block text-sm font-medium text-foreground hover:text-gold"
          >
            +237 6 71 64 89 00
          </a>
        </div>
        <div>
          <h3 className="font-display text-xs tracking-widest text-gold uppercase">Hours</h3>
          <p className="mt-4 text-sm text-muted-foreground">
            Open every day
            <br />
            Closes 12 midnight
          </p>
          <div className="mt-4 flex gap-2">
            {["Dine-in", "Takeaway", "Delivery"].map((s) => (
              <span
                key={s}
                className="rounded-full border border-border bg-secondary px-3 py-1 text-xs text-secondary-foreground"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Chicken Nation · Bamenda, Cameroon
      </div>
    </footer>
  );
}

function NotFoundComponent() {
  return (
    <div className="smoke-texture flex min-h-[70vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl text-gold">404</h1>
        <h2 className="mt-4 text-xl font-semibold">This plate is empty</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist — but the chicken does.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="ember-gradient inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-ember)]"
          >
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="smoke-texture flex min-h-[70vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-xl tracking-tight">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="ember-gradient rounded-full px-6 py-2.5 text-sm font-semibold text-primary-foreground"
          >
            Try again
          </button>
          <a
            href="/"
            className="rounded-full border border-border bg-secondary px-6 py-2.5 text-sm font-medium"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Chicken Nation — Fried Chicken on Foncha St, Bamenda" },
      {
        name: "description",
        content:
          "Hot, crispy, legendary fried chicken in Bamenda. Dine-in, takeaway and delivery on Foncha Street. Open daily until midnight.",
      },
      { property: "og:site_name", content: "Chicken Nation" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Archivo+Black&family=Hind:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">
          {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </QueryClientProvider>
  );
}
