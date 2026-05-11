import { motion } from "framer-motion";
import {
    ArrowRight,
    BarChart4,
    ChevronDown,
    CreditCard,
    LayoutDashboard,
    Sparkles,
    Upload,
    Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import {
    Parallax,
    ParallaxBanner,
    ParallaxProvider,
} from "react-scroll-parallax";

import { LandingMotionStrip } from "@/components/landing/LandingMotionStrip";
import {
    LandingShowcaseCarousel,
    type LandingSlide,
} from "@/components/landing/LandingShowcaseCarousel";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type HeroStat = {
  value: string;
  label: string;
};

type SlideSeed = Omit<LandingSlide, "image">;

const heroStats: HeroStat[] = [
  { value: "+42%", label: "lorem ipsum dolor sit amet" },
  { value: "3", label: "consectetur adipiscing elit" },
  { value: "1", label: "sed do eiusmod tempor" },
];

const slideSeeds: SlideSeed[] = [
  {
    title: "Lorem ipsum dolor sit amet",
    eyebrow: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    accent: "#34d399",
  },
  {
    title: "Consectetur adipiscing elit",
    eyebrow: "Sed do eiusmod",
    description:
      "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    accent: "#22c55e",
  },
  {
    title: "Sed do eiusmod tempor",
    eyebrow: "Ut enim ad minim",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.",
    accent: "#86efac",
  },
  {
    title: "Ut labore et dolore",
    eyebrow: "Lorem ipsum dolor",
    description:
      "Ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    accent: "#10b981",
  },
];

const stockImageUrls = [
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=80",
];

const showcaseSlides: LandingSlide[] = slideSeeds.map((slide, index) => ({
  ...slide,
  image: stockImageUrls[index % stockImageUrls.length],
}));

const featureCards = [
  {
    icon: BarChart4,
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
  },
  {
    icon: CreditCard,
    title: "Dolor sit amet",
    description:
      "Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  },
  {
    icon: Upload,
    title: "Consectetur elit",
    description:
      "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  },
  {
    icon: Sparkles,
    title: "Sed do eiusmod",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const configCards = [
  {
    title: "Lorem ipsum",
    details: [
      "lorem ipsum dolor sit amet",
      "consectetur adipiscing elit",
      "sed do eiusmod tempor",
      "incididunt ut labore",
    ],
  },
  {
    title: "Dolor sit amet",
    details: [
      "dolor sit amet consectetur",
      "adipiscing elit sed do",
      "eiusmod tempor incididunt",
      "ut labore et dolore",
    ],
  },
  {
    title: "Consectetur elit",
    details: [
      "consectetur elit sed do",
      "eiusmod tempor incididunt",
      "ut labore et dolore",
      "magna aliqua lorem ipsum",
    ],
  },
];

export default function Landing() {
  return (
    <ParallaxProvider>
      <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(52,211,153,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(15,118,110,0.18),transparent_30%),linear-gradient(180deg,#020617_0%,#020617_38%,#0f172a_100%)] text-white">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px] opacity-10" />

        <header className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-emerald-400/10 text-emerald-300 shadow-lg shadow-emerald-950/20">
              <LayoutDashboard size={20} />
            </div>

            <div>
              <p className="text-sm font-semibold tracking-[0.25em] uppercase text-emerald-200/80">
                Finance Tracker
              </p>
              <p className="text-xs text-white/45">
                Landing + dashboard no mesmo sistema
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-3 md:flex">
            <Button
              asChild
              variant="ghost"
              className="text-white hover:bg-white/10 hover:text-white"
            >
              <Link to="/dashboard">Ir ao painel</Link>
            </Button>
            <Button
              asChild
              className="bg-emerald-400 text-slate-950 hover:bg-emerald-300"
            >
              <Link to="/transactions">
                Comecar agora
                <ArrowRight size={16} />
              </Link>
            </Button>
          </nav>
        </header>

        <main className="relative z-10 mx-auto max-w-7xl px-6 pb-24 lg:px-8">
          <section className="grid gap-14 pb-20 pt-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pb-28 lg:pt-16">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.32em] text-emerald-200/90">
                  <Zap size={12} />
                  Lorem ipsum dolor sit amet
                </div>

                <motion.h1
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-7xl"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                  className="max-w-2xl text-base leading-8 text-white/70 sm:text-lg"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.16, ease: "easeOut" }}
                className="flex flex-col gap-3 sm:flex-row"
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-emerald-400 text-slate-950 hover:bg-emerald-300"
                >
                  <Link to="/dashboard">
                    Lorem ipsum
                    <ArrowRight size={16} />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white/10 bg-white/5 text-white hover:bg-white/10 hover:text-white"
                >
                  <Link to="/transactions">Dolor sit amet</Link>
                </Button>
              </motion.div>

              <div className="grid gap-3 sm:grid-cols-3">
                {heroStats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.18 + index * 0.08,
                      ease: "easeOut",
                    }}
                    className="rounded-[1.25rem] border border-white/10 bg-white/5 p-4 backdrop-blur-md"
                  >
                    <p className="text-2xl font-semibold text-emerald-300">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-white/65">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-xl">
              <Parallax speed={-16} shouldAlwaysCompleteAnimation>
                <div className="absolute -left-8 top-10 h-36 w-36 rounded-full bg-emerald-400/20 blur-3xl" />
              </Parallax>

              <Parallax speed={12} shouldAlwaysCompleteAnimation>
                <div className="absolute -right-4 bottom-16 h-28 w-28 rounded-full bg-white/10 blur-2xl" />
              </Parallax>

              <Parallax speed={-10} shouldAlwaysCompleteAnimation>
                <Card className="relative overflow-hidden border-white/10 bg-white/5 p-4 shadow-2xl shadow-black/30 backdrop-blur-2xl">
                  <div className="mb-4 flex items-center justify-between px-1 pt-1 text-sm text-white/65">
                    <span>Interface em destaque</span>
                    <span className="inline-flex items-center gap-2 text-emerald-300">
                      <span className="h-2 w-2 rounded-full bg-emerald-300" />
                      Live
                    </span>
                  </div>

                  <div className="grid gap-3 md:grid-cols-[0.95fr_1.05fr]">
                    <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-5">
                      <div className="space-y-3">
                        <p className="text-xs uppercase tracking-[0.3em] text-emerald-200/75">
                          Saldo consolidado
                        </p>
                        <p className="text-4xl font-semibold tracking-tight">
                          $12,480.42
                        </p>
                        <p className="text-sm leading-6 text-white/60">
                          A mesma linguagem visual da dashboard, com contraste
                          forte e cards limpos.
                        </p>
                      </div>

                      <div className="mt-6 space-y-3">
                        {[
                          ["Receita", "$18.2k", "text-emerald-300"],
                          ["Despesas", "$7.6k", "text-red-300"],
                          ["Liquido", "$10.6k", "text-white"],
                        ].map(([label, value, tone]) => (
                          <div
                            className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm"
                            key={label}
                          >
                            <span className="text-white/60">{label}</span>
                            <span className={tone}>{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3 rounded-[1.5rem] border border-white/10 bg-slate-950/50 p-4">
                      <div className="rounded-[1.25rem] border border-white/10 bg-gradient-to-br from-emerald-500/20 via-emerald-400/10 to-white/5 p-4">
                        <div className="flex items-center justify-between text-sm text-white/75">
                          <span>Importacao rapida</span>
                          <Upload size={16} className="text-emerald-300" />
                        </div>

                        <div className="mt-4 grid grid-cols-4 gap-2">
                          {[32, 64, 44, 78].map((height, index) => (
                            <div
                              key={height}
                              className="rounded-full bg-white/10"
                              style={{
                                height: `${height}px`,
                                background:
                                  index % 2 === 0
                                    ? "rgba(52, 211, 153, 0.72)"
                                    : "rgba(255,255,255,0.12)",
                              }}
                            />
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div className="rounded-[1.15rem] border border-white/10 bg-white/5 p-4">
                          <p className="text-xs uppercase tracking-[0.26em] text-white/45">
                            Arquivo
                          </p>
                          <p className="mt-2 font-medium text-white">
                            CSV pronto
                          </p>
                        </div>
                        <div className="rounded-[1.15rem] border border-white/10 bg-white/5 p-4">
                          <p className="text-xs uppercase tracking-[0.26em] text-white/45">
                            Tema
                          </p>
                          <p className="mt-2 font-medium text-white">
                            Emerald dark
                          </p>
                        </div>
                      </div>

                      <div className="rounded-[1.15rem] border border-white/10 bg-white/5 p-4">
                        <div className="mb-3 flex items-center justify-between text-xs uppercase tracking-[0.26em] text-white/45">
                          <span>Resumo</span>
                          <span>Atualizado agora</span>
                        </div>
                        <div className="h-2 rounded-full bg-white/10">
                          <div className="h-2 w-[72%] rounded-full bg-gradient-to-r from-emerald-400 to-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </Parallax>
            </div>
          </section>

          <section className="grid gap-4 py-4 md:grid-cols-2 xl:grid-cols-4">
            {featureCards.map((card, index) => {
              const Icon = card.icon;

              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.08,
                    ease: "easeOut",
                  }}
                >
                  <Card className="h-full border-white/10 bg-white/5 p-5 backdrop-blur-md">
                    <CardContent className="p-0">
                      <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-3 text-emerald-300">
                        <Icon size={18} />
                      </div>

                      <h3 className="mt-4 text-lg font-semibold text-white">
                        {card.title}
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-white/65">
                        {card.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </section>

          <section className="space-y-6 py-8">
            <div className="max-w-3xl space-y-3">
              <p className="text-xs uppercase tracking-[0.35em] text-emerald-200/80">
                Lorem ipsum dolor sit amet
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </h2>
              <p className="text-sm leading-7 text-white/65 sm:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <LandingShowcaseCarousel slides={showcaseSlides} />
          </section>

          <section className="py-20">
            <LandingMotionStrip />
          </section>

          <section className="grid gap-6 py-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.35em] text-emerald-200/80">
                Efeitos explorados
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                Configuracoes escolhidas para controlar ritmo, profundidade e
                foco.
              </h2>
              <p className="text-sm leading-7 text-white/65 sm:text-base">
                A combinacao de Embla, Parallax e Motion permite ajustar
                sensacao de movimento sem comprometer leitura, responsividade ou
                coerencia com a dashboard.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {configCards.map((card, index) => (
                <Card
                  key={card.title}
                  className="border-white/10 bg-white/5 p-5 backdrop-blur-md"
                >
                  <CardContent className="p-0">
                    <p className="text-xs uppercase tracking-[0.28em] text-emerald-200/70">
                      0{index + 1}
                    </p>
                    <h3 className="mt-3 text-lg font-semibold text-white">
                      {card.title}
                    </h3>

                    <ul className="mt-4 space-y-2 text-sm text-white/65">
                      {card.details.map((detail) => (
                        <li className="flex items-start gap-2" key={detail}>
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-300" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="py-10">
            <ParallaxBanner
              className="relative h-[360px] overflow-hidden rounded-[2rem] border border-white/10"
              layers={[
                {
                  image: showcaseSlides[0].image,
                  speed: -18,
                  opacity: [0.9, 0.42],
                  scale: [1.18, 1.04],
                  easing: "easeOutCubic",
                  shouldAlwaysCompleteAnimation: true,
                },
                {
                  image: showcaseSlides[2].image,
                  speed: 14,
                  opacity: [0.5, 0.14],
                  scale: [1.08, 1],
                  easing: "easeOutCubic",
                  shouldAlwaysCompleteAnimation: true,
                },
              ]}
            >
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(2,6,23,0.82),rgba(2,6,23,0.36)),radial-gradient(circle_at_top_right,rgba(52,211,153,0.24),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.14),transparent_36%)]" />

              <div className="relative z-10 flex h-full items-end p-8 sm:p-10 lg:p-12">
                <div className="max-w-2xl space-y-4">
                  <p className="text-xs uppercase tracking-[0.35em] text-emerald-200/80">
                    Lorem ipsum dolor sit amet
                  </p>
                  <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </h2>
                  <p className="max-w-xl text-sm leading-7 text-white/70 sm:text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </ParallaxBanner>
          </section>

          <section className="py-16">
            <Card className="border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur-md sm:p-8">
              <CardContent className="p-0">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                  <div className="max-w-2xl space-y-3">
                    <p className="text-xs uppercase tracking-[0.35em] text-emerald-200/80">
                      Lorem ipsum dolor
                    </p>
                    <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </h2>
                    <p className="text-sm leading-7 text-white/65 sm:text-base">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row">
                    <Button
                      asChild
                      size="lg"
                      className="bg-emerald-400 text-slate-950 hover:bg-emerald-300"
                    >
                      <Link to="/dashboard">
                        Lorem ipsum
                        <ArrowRight size={16} />
                      </Link>
                    </Button>

                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="border-white/10 bg-white/5 text-white hover:bg-white/10 hover:text-white"
                    >
                      <Link to="/transactions">Dolor sit amet</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </main>

        <footer className="relative z-10 border-t border-white/10 bg-black/10">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between lg:px-8">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="flex items-center gap-2 text-white/60">
              <ChevronDown size={14} />
              Lorem ipsum dolor sit amet
            </div>
          </div>
        </footer>
      </div>
    </ParallaxProvider>
  );
}
