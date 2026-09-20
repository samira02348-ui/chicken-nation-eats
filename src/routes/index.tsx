import { createFileRoute, Link } from "@tanstack/react-router";
import { UtensilsCrossed, ShoppingBag, Bike, Moon } from "lucide-react";
import heroChicken from "@/assets/hero-chicken.jpg";
import comboPlatter from "@/assets/combo-platter.jpg";
import chickenBurger from "@/assets/chicken-burger.jpg";
import chickenWings from "@/assets/chicken-wings.jpg";
import grilledChicken from "@/assets/grilled-chicken.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Chicken Nation — Fried Chicken on Foncha St, Bamenda" },
      {
        name: "description",
        content:
          "Bamenda's favourite fried chicken. Combo 8, hot wings, burgers and more. Dine-in, takeaway and delivery — open daily until midnight.",
      },
      { property: "og:title", content: "Chicken Nation — Fried Chicken on Foncha St, Bamenda" },
      {
        property: "og:description",
        content:
          "Bamenda's favourite fried chicken. Combo 8, hot wings, burgers and more. Open daily until midnight.",
      },
    ],
  }),
  component: Index,
});

const featured = [
  {
    name: "Combo 8",
    description: "Chicken, fries, coleslaw and a drink. Budget friendly, taste heavenly.",
    price: "3,000 FCFA",
    image: comboPlatter,
  },
  {
    name: "Chicken Nation Burger",
    description: "Crispy fillet, melted cheese, fresh veggies, special sauce.",
    price: "1,500 FCFA",
    image: chickenBurger,
  },
  {
    name: "Hot Wings (6 pcs)",
    description: "Glossy, spicy and addictive — tossed in our signature glaze.",
    price: "2,000 FCFA",
    image: chickenWings,
  },
  {
    name: "Grilled Chicken & Rice",
    description: "Char-grilled chicken with spiced rice and fried plantain.",
    price: "2,500 FCFA",
    image: grilledChicken,
  },
];

const reviews = [
  {
    name: "Ndze Louis",
    text: "If you find yourself in Bamenda, you definitely need to check them out. Taste is top-notch. I highly recommend Combo 8, it's budget friendly and taste is heavenly.",
    meta: "Google review",
  },
  {
    name: "Hopsin Silva",
    text: "Loved every minute of being there. Best fast food experience I have ever had.",
    meta: "Google review",
  },
  {
    name: "NBA Blaise",
    text: "It was neat, budget friendly, great customer care and communication and also a place of luxury.",
    meta: "Google review",
  },
];

function Index() {
  return (
    <div>
      {/* Hero */}
      <section className="smoke-texture relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm">
              <span className="text-gold">★★★★★</span>
              <span className="font-semibold">4.3</span>
              <span className="text-muted-foreground">· 12 Google reviews</span>
            </div>
            <h1 className="font-display text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
              HOT. CRISPY.
              <br />
              <span className="gold-gradient-text">LEGENDARY.</span>
            </h1>
            <p className="mt-5 max-w-md text-lg text-muted-foreground">
              Bamenda's favourite fried chicken, fresh off the fryer every day on
              Foncha Street. Dine in, take away or get it delivered.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/menu"
                className="ember-gradient rounded-full px-7 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-ember)] transition-transform hover:scale-105"
              >
                See the menu
              </Link>
              <a
                href="tel:+237671648900"
                className="rounded-full border border-border bg-secondary px-7 py-3 text-sm font-semibold transition-colors hover:bg-accent"
              >
                Call to order
              </a>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              X5CF+FJR, Foncha St, Bamenda · Open daily, closes 12 midnight
            </p>
          </div>
          <div className="relative">
            <div className="ember-gradient absolute -inset-3 rounded-[2rem] opacity-20 blur-2xl" />
            <img
              src={heroChicken}
              alt="A bowl of golden crispy fried chicken"
              width={1920}
              height={1088}
              className="relative w-full rounded-[2rem] border border-border object-cover shadow-[var(--shadow-card)]"
            />
          </div>
        </div>
      </section>

      {/* Service strip */}
      <section className="border-y border-border bg-card/60">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-8 text-center sm:grid-cols-4 sm:px-6">
          {[
            { Icon: UtensilsCrossed, label: "Dine-in" },
            { Icon: ShoppingBag, label: "Takeaway" },
            { Icon: Bike, label: "Delivery" },
            { Icon: Moon, label: "Open till midnight" },
          ].map(({ Icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-1.5">
              <Icon className="size-6 text-gold" />
              <span className="text-sm font-medium">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl">
              Fan <span className="gold-gradient-text">favourites</span>
            </h2>
            <p className="mt-2 text-muted-foreground">
              The plates our customers keep coming back for.
            </p>
          </div>
          <Link
            to="/menu"
            className="hidden shrink-0 rounded-full border border-border px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-secondary sm:inline-block"
          >
            Full menu →
          </Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((item) => (
            <Link
              key={item.name}
              to="/menu"
              className="group overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-card)] transition-transform hover:-translate-y-1"
            >
              <img
                src={item.image}
                alt={item.name}
                width={1024}
                height={1024}
                loading="lazy"
                className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="p-5">
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="font-display text-base">{item.name}</h3>
                  <span className="shrink-0 text-sm font-bold text-gold">{item.price}</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className="smoke-texture border-y border-border">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
          <h2 className="font-display text-center text-3xl sm:text-4xl">
            What Bamenda <span className="gold-gradient-text">says</span>
          </h2>
          <p className="mt-2 text-center text-muted-foreground">4.3 ★ from 12 Google reviews</p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {reviews.map((r) => (
              <figure
                key={r.name}
                className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)]"
              >
                <div className="text-gold">★★★★★</div>
                <blockquote className="mt-3 text-sm leading-relaxed text-foreground/90">
                  "{r.text}"
                </blockquote>
                <figcaption className="mt-4 text-sm">
                  <span className="font-semibold">{r.name}</span>
                  <span className="text-muted-foreground"> · {r.meta}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="ember-gradient relative overflow-hidden rounded-[2.5rem] px-6 py-14 text-center text-primary-foreground sm:px-12">
          <h2 className="font-display text-3xl sm:text-4xl">Hungry yet?</h2>
          <p className="mx-auto mt-3 max-w-md text-primary-foreground/90">
            Walk in on Foncha Street, call ahead for takeaway, or get it delivered hot
            to your door.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="tel:+237671648900"
              className="rounded-full bg-foreground px-7 py-3 text-sm font-bold text-background transition-transform hover:scale-105"
            >
              Call +237 6 71 64 89 00
            </a>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Chicken+Nation+Foncha+St+Bamenda"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-primary-foreground/40 px-7 py-3 text-sm font-semibold transition-colors hover:bg-primary-foreground/10"
            >
              Get directions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
