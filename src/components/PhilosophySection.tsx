import Link from "next/link";

export default function PhilosophySection() {
  return (
    <section className="w-full py-32 px-6 md:px-12 lg:px-24 bg-warm-cream flex flex-col items-center text-center">
      <div className="max-w-4xl mx-auto reveal">
        <span className="text-xs uppercase tracking-[0.2em] text-soft-brown mb-8 block font-medium">
          01 — A Quieter Kind of Guidance
        </span>
        
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-warm-charcoal leading-[1.2] mb-10">
          “Not every season of life needs an immediate answer. Some ask us to listen <span className="italic font-light">more carefully.</span>”
        </h2>
        
        <p className="text-soft-brown text-lg leading-relaxed max-w-2xl mx-auto font-light mb-12">
          Healing is rarely about fixing what is broken; it is often about gathering the 
          scattered pieces of ourselves in a safe environment. Through Reiki and Tarot, 
          I offer practices not for guaranteed outcomes, but for awareness, gentle reflection, 
          and rediscovering your own quiet wisdom.
        </p>

        <Link
          href="#about"
          className="inline-block border-b border-muted-gold text-warm-charcoal pb-1 hover:text-muted-gold hover:border-transparent transition-all duration-300 tracking-wide text-sm"
        >
          Meet Bhanupriya
        </Link>
      </div>
    </section>
  );
}
