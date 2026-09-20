import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Location — Chicken Nation Bamenda" },
      {
        name: "description",
        content:
          "Find Chicken Nation on Foncha Street, Bamenda. Call +237 6 71 64 89 00 for orders. Open daily until midnight — dine-in, takeaway and delivery.",
      },
      { property: "og:title", content: "Contact & Location — Chicken Nation Bamenda" },
      {
        property: "og:description",
        content:
          "Foncha Street, Bamenda. Call +237 6 71 64 89 00. Open daily until midnight.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Chicken+Nation+Foncha+St+Bamenda";

function ContactPage() {
  return (
    <div>
      <section className="smoke-texture border-b border-border">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6">
          <h1 className="font-display text-4xl sm:text-5xl">
            Find <span className="gold-gradient-text">us</span>
          </h1>
          <p className="mx-auto mt-3 max-w-md text-muted-foreground">
            Right on Foncha Street, Bamenda. Walk in, call ahead, or order delivery.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 md:grid-cols-3">
          <a
            href={mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-3xl border border-border bg-card p-7 transition-transform hover:-translate-y-1"
          >
            <span className="text-2xl">📍</span>
            <h2 className="font-display mt-3 text-base">Address</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              X5CF+FJR, Foncha St
              <br />
              Bamenda, Cameroon
            </p>
            <p className="mt-3 text-sm font-semibold text-gold">Get directions →</p>
          </a>
          <a
            href="tel:+237671648900"
            className="rounded-3xl border border-border bg-card p-7 transition-transform hover:-translate-y-1"
          >
            <span className="text-2xl">📞</span>
            <h2 className="font-display mt-3 text-base">Call to order</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              +237 6 71 64 89 00
              <br />
              Takeaway & delivery
            </p>
            <p className="mt-3 text-sm font-semibold text-gold">Tap to call →</p>
          </a>
          <div className="rounded-3xl border border-border bg-card p-7">
            <span className="text-2xl">🕒</span>
            <h2 className="font-display mt-3 text-base">Opening hours</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Every day
              <br />
              Closes 12 midnight
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {["Dine-in", "Takeaway", "Delivery"].map((s) => (
                <span
                  key={s}
                  className="rounded-full bg-secondary px-2.5 py-1 text-xs text-secondary-foreground"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-[2.5rem] border border-border bg-card p-8 text-center sm:p-12">
          <h2 className="font-display text-2xl sm:text-3xl">
            Come <span className="gold-gradient-text">hungry</span>
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
            Most people spend between 2,000 and 4,000 FCFA — and leave happy. Combo 8
            is where first-timers should start.
          </p>
          <a
            href={mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="ember-gradient mt-7 inline-block rounded-full px-8 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-ember)]"
          >
            Open in Google Maps
          </a>
        </div>
      </section>
    </div>
  );
}
