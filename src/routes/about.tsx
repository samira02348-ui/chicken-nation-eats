import { createFileRoute, Link } from "@tanstack/react-router";
import { Flame, Zap, Heart } from "lucide-react";
import heroChicken from "@/assets/hero-chicken.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Chicken Nation Bamenda" },
      {
        name: "description",
        content:
          "Chicken Nation is Bamenda's home of hot, crispy fried chicken — dine-in, takeaway and delivery on Foncha Street. Rated 4.3 on Google.",
      },
      { property: "og:title", content: "About — Chicken Nation Bamenda" },
      {
        property: "og:description",
        content:
          "Bamenda's home of hot, crispy fried chicken. Dine-in, takeaway and delivery on Foncha Street.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  {
    Icon: Flame,
    title: "Fresh off the fryer",
    text: "Every piece is breaded and cooked to order — never sitting around under a lamp.",
  },
  {
    Icon: Zap,
    title: "Fast, every time",
    text: "Call ahead, grab it on the go, or have it delivered hot to your door.",
  },
  {
    Icon: Heart,
    title: "Friendly & fair",
    text: "Great customer care and prices that respect your pocket. Combo 8 says it all.",
  },
];

function AboutPage() {
  return (
    <div>
      <section className="smoke-texture border-b border-border">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h1 className="font-display max-w-2xl text-4xl leading-tight sm:text-5xl">
            Bamenda's home of <span className="gold-gradient-text">real fried chicken</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Chicken Nation sits on Foncha Street, right in the heartbeat of Bamenda.
            We keep it simple: hot, crispy chicken made fresh, generous combos,
            quick service and a place you actually want to sit down in.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <img
            src={heroChicken}
            alt="Golden crispy fried chicken in a bowl"
            width={1920}
            height={1088}
            loading="lazy"
            className="w-full rounded-[2rem] border border-border object-cover shadow-[var(--shadow-card)]"
          />
          <div>
            <h2 className="font-display text-3xl">
              Why people <span className="gold-gradient-text">keep coming back</span>
            </h2>
            <div className="mt-8 space-y-6">
              {values.map(({ Icon, title, text }) => (
                <div key={title} className="flex gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-secondary text-gold">
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <h3 className="font-semibold">{title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="smoke-texture border-y border-border">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6">
          <div className="mx-auto grid max-w-3xl grid-cols-3 gap-6">
            {[
              { big: "4.3★", small: "Google rating" },
              { big: "2–4k", small: "FCFA per person" },
              { big: "12am", small: "Open until" },
            ].map((s) => (
              <div key={s.small}>
                <div className="font-display text-3xl text-gold sm:text-4xl">{s.big}</div>
                <div className="mt-1 text-sm text-muted-foreground">{s.small}</div>
              </div>
            ))}
          </div>
          <blockquote className="mx-auto mt-12 max-w-2xl text-lg italic text-foreground/90">
            "If you find yourself in Bamenda, you definitely need to check them out.
            Taste is top-notch."
          </blockquote>
          <p className="mt-3 text-sm text-muted-foreground">— Ndze Louis, Google review</p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              to="/menu"
              className="ember-gradient rounded-full px-7 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-ember)]"
            >
              See the menu
            </Link>
            <Link
              to="/contact"
              className="rounded-full border border-border px-7 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
            >
              Visit us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
