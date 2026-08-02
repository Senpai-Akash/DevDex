import HeroContent from "./HeroContent";
import HeroVisual from "./HeroVisual";

export default function Hero() {
  return (
    <section id="home" className="w-full scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 items-center py-20">
          <HeroContent />
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
