import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, CircleDot, MoveRight } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export type LandingSlide = {
  title: string;
  eyebrow: string;
  description: string;
  accent: string;
  image: string;
};

type Props = {
  slides: LandingSlide[];
};

const carouselOptions = {
  align: "start" as const,
  loop: true,
  slidesToScroll: 1,
  containScroll: "trimSnaps" as const,
};

const autoplayOptions = {
  delay: 3200,
  jump: false,
  playOnInit: true,
  stopOnFocusIn: true,
  stopOnInteraction: false,
  stopOnMouseEnter: true,
  stopOnLastSnap: false,
};

export function LandingShowcaseCarousel({ slides }: Props) {
  const [autoplay] = useState(() => Autoplay(autoplayOptions));
  const [emblaRef, emblaApi] = useEmblaCarousel(carouselOptions, [autoplay]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const handleSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    handleSelect();
    emblaApi.on("select", handleSelect);
    emblaApi.on("reInit", handleSelect);

    return () => {
      emblaApi.off("select", handleSelect);
      emblaApi.off("reInit", handleSelect);
    };
  }, [emblaApi]);

  return (
    <Card className="border-white/10 bg-white/5 p-4 shadow-2xl shadow-black/20 backdrop-blur-xl">
      <div className="mb-4 flex items-center justify-between gap-4 px-2 pt-1">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-emerald-300/80">
            Lorem ipsum dolor sit amet
          </p>
          <h3 className="mt-1 text-lg font-semibold text-white">
            Lorem ipsum dolor sit amet
          </h3>
        </div>

        <div className="flex items-center gap-2">
          <Button
            type="button"
            variant="outline"
            size="icon-sm"
            onClick={() => emblaApi?.scrollPrev()}
            className="border-white/10 bg-white/5 text-white hover:bg-white/10"
            aria-label="Slide anterior"
          >
            <ChevronLeft size={16} />
          </Button>

          <Button
            type="button"
            variant="outline"
            size="icon-sm"
            onClick={() => emblaApi?.scrollNext()}
            className="border-white/10 bg-white/5 text-white hover:bg-white/10"
            aria-label="Proximo slide"
          >
            <ChevronRight size={16} />
          </Button>
        </div>
      </div>

      <div className="overflow-hidden rounded-[1.5rem]" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div className="min-w-0 flex-[0_0_100%] p-2" key={slide.title}>
              <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950/80 text-white">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${slide.image})` }}
                />

                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(2,6,23,0.85),rgba(2,6,23,0.42)),radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.18),transparent_30%)]" />

                <div className="relative grid gap-6 p-5 sm:grid-cols-[1.1fr_0.9fr] sm:p-6">
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.3em] text-emerald-100/90">
                      <CircleDot size={12} className="text-emerald-300" />
                      {slide.eyebrow}
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-2xl font-semibold tracking-tight">
                        {slide.title}
                      </h4>
                      <p className="max-w-md text-sm leading-6 text-white/75">
                        {slide.description}
                      </p>
                    </div>

                    <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-100">
                      {index + 1} / {slides.length}
                      <MoveRight size={14} />
                    </div>
                  </div>

                  <div className="grid gap-3">
                    <div className="rounded-[1.2rem] border border-white/10 bg-slate-950/60 p-4">
                      <div className="mb-3 flex items-center justify-between text-xs text-white/55">
                        <span>Lorem ipsum</span>
                        <span>+18.4%</span>
                      </div>

                      <div className="space-y-3">
                        <div className="h-2 rounded-full bg-white/10">
                          <div
                            className="h-2 rounded-full"
                            style={{
                              background: `linear-gradient(90deg, ${slide.accent}, rgba(255,255,255,0.95))`,
                              width: index % 2 === 0 ? "76%" : "64%",
                            }}
                          />
                        </div>

                        <div className="grid grid-cols-3 gap-2 text-center text-xs">
                          {[
                            ["Lorem", "$18.2k"],
                            ["Ipsum", "$7.6k"],
                            ["Dolor", "$10.6k"],
                          ].map(([label, value]) => (
                            <div
                              className="rounded-xl border border-white/10 bg-white/5 px-2 py-3"
                              key={label}
                            >
                              <p className="text-white/50">{label}</p>
                              <p className="mt-1 font-semibold text-white">
                                {value}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-[1.1rem] border border-white/10 bg-white/5 p-4">
                        <p className="text-xs uppercase tracking-[0.25em] text-white/45">
                          Atualizacao
                        </p>
                        <p className="mt-2 text-lg font-semibold text-white">
                          Lorem ipsum
                        </p>
                      </div>

                      <div className="rounded-[1.1rem] border border-white/10 bg-white/5 p-4">
                        <p className="text-xs uppercase tracking-[0.25em] text-white/45">
                          Interacao
                        </p>
                        <p className="mt-2 text-lg font-semibold text-white">
                          Dolor sit amet
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-center justify-center gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.title}
            type="button"
            onClick={() => emblaApi?.scrollTo(index)}
            className={cn(
              "h-2 rounded-full transition-all",
              selectedIndex === index
                ? "w-8 bg-emerald-400"
                : "w-2 bg-white/25 hover:bg-white/50",
            )}
            aria-label={`Ir para o slide ${index + 1}`}
            aria-pressed={selectedIndex === index}
          />
        ))}
      </div>
    </Card>
  );
}
