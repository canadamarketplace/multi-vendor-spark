import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const slides = [
  {
    title: "Create without limits",
    subtitle: "Explore top creative tools and plugins",
    cta: { label: "Shop Now", to: "/seller/1/products" },
  },
  {
    title: "For teams and enterprises",
    subtitle: "Powerful tools to grow your business",
    cta: { label: "View Solutions", to: "/#solutions" },
  },
  {
    title: "Discover top sellers",
    subtitle: "Verified vendors with great reviews",
    cta: { label: "Find Sellers", to: "/seller/map" },
  },
];

const HeroSlider = () => {
  return (
    <section aria-label="Hero" className="relative">
      <Carousel>
        <CarouselContent>
          {slides.map((s, i) => (
            <CarouselItem key={i}>
              <div className="min-h-[420px] md:min-h-[520px] grid place-items-center bg-gradient-to-br from-primary/10 to-accent/10">
                <div className="container mx-auto text-center max-w-3xl py-16">
                  <h1 className="text-3xl md:text-5xl font-bold mb-4">{s.title}</h1>
                  <p className="text-base md:text-lg text-muted-foreground mb-8">{s.subtitle}</p>
                  <Button asChild size="lg">
                    <Link to={s.cta.to}>{s.cta.label}</Link>
                  </Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default HeroSlider;
