import { createFileRoute, Link } from "@tanstack/react-router";
import { combos, chicken, sides, extras, type MenuItem } from "@/lib/menu";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Chicken Nation Bamenda" },
      {
        name: "description",
        content:
          "The Chicken Nation menu: Combo 8, crispy fried chicken, hot wings, burgers, shawarma, grilled chicken and loaded fries. Prices in FCFA.",
      },
      { property: "og:title", content: "Menu — Chicken Nation Bamenda" },
      {
        property: "og:description",
        content:
          "Combo 8, crispy fried chicken, hot wings, burgers, shawarma and more — prices in FCFA.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/menu" }],
  }),
  component: MenuPage,
});

function MenuCard({ item }: { item: MenuItem }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-card)]">
      {item.image && (
        <img
          src={item.image}
          alt={item.name}
          width={1024}
          height={1024}
          loading="lazy"
          className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      )}
      <div className="p-5">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-display text-base">{item.name}</h3>
          <span className="shrink-0 text-sm font-bold text-gold">{item.price}</span>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
        {item.tag && (
          <span className="mt-3 inline-block rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-ember">
            {item.tag}
          </span>
        )}
      </div>
    </article>
  );
}

function MenuSection({
  title,
  blurb,
  items,
  wide,
}: {
  title: string;
  blurb: string;
  items: MenuItem[];
  wide?: boolean;
}) {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6">
      <h2 className="font-display text-2xl sm:text-3xl">
        <span className="gold-gradient-text">{title}</span>
      </h2>
      <p className="mt-1.5 text-sm text-muted-foreground">{blurb}</p>
      <div className={`mt-7 grid gap-6 ${wide ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3"}`}>
        {items.map((item) => (
          <MenuCard key={item.name} item={item} />
        ))}
      </div>
    </section>
  );
}

function MenuPage() {
  return (
    <div>
      <section className="smoke-texture border-b border-border">
        <div className="mx-auto max-w-6xl px-4 py-14 text-center sm:px-6">
          <h1 className="font-display text-4xl sm:text-5xl">
            The <span className="gold-gradient-text">Menu</span>
          </h1>
          <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
            Everything is made fresh — fried, grilled and wrapped to order. Call
            ahead and it's ready when you arrive.
          </p>
        </div>
      </section>

      <div className="space-y-16 py-14">
        <MenuSection
          title="Combos & sharing"
          blurb="Full meals, best value — the reason people talk about us."
          items={combos}
          wide
        />
        <MenuSection
          title="Chicken"
          blurb="Our signature: crispy fried, fiery wings, smoky grilled and wrapped."
          items={chicken}
        />
        <MenuSection title="Sides" blurb="Because chicken deserves company." items={sides} wide />

        <section className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl">
            <span className="gold-gradient-text">Extras</span>
          </h2>
          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {extras.map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between gap-3 rounded-2xl border border-border bg-card px-5 py-4"
              >
                <div>
                  <h3 className="text-sm font-semibold">{item.name}</h3>
                  <p className="text-xs text-muted-foreground">{item.description}</p>
                </div>
                <span className="shrink-0 text-sm font-bold text-gold">{item.price}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-3xl border border-border bg-card p-8 text-center">
            <p className="text-sm text-muted-foreground">
              Ready to eat? Call{" "}
              <a href="tel:+237671648900" className="font-semibold text-gold">
                +237 6 71 64 89 00
              </a>{" "}
              for takeaway and delivery — or just walk in on Foncha Street.
            </p>
            <Link
              to="/contact"
              className="ember-gradient mt-5 inline-block rounded-full px-7 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-ember)]"
            >
              Find us
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
