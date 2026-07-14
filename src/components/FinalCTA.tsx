import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="w-full py-32 px-6 md:px-12 lg:px-24 bg-warm-cream relative overflow-hidden flex flex-col items-center text-center">
      {/* Restrained decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-pale-lavender/30 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-pale-lavender/20 rounded-full blur-[80px]"></div>
      </div>

      <div className="max-w-3xl mx-auto relative z-10 reveal">
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-warm-charcoal mb-8 leading-[1.2]">
          “You don't need to have everything <span className="italic font-light">figured out before you begin.</span>”
        </h2>
        
        <p className="text-soft-brown font-light text-lg leading-relaxed mb-12 max-w-xl mx-auto">
          Come with the questions you have. We can make space for them, one at a time.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            href="#book"
            className="px-8 py-3.5 bg-warm-charcoal text-ivory rounded-sm hover:bg-muted-plum transition-all duration-300 text-sm tracking-wide"
          >
            Book a Session
          </Link>
          <Link
            href="#courses"
            className="px-8 py-3.5 border border-soft-brown/30 text-warm-charcoal rounded-sm hover:border-muted-gold transition-all duration-300 text-sm tracking-wide"
          >
            Explore Courses
          </Link>
        </div>
      </div>
    </section>
  );
}
