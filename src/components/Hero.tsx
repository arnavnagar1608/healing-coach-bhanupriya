import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full min-h-[90vh] flex flex-col lg:flex-row items-center px-6 md:px-12 lg:px-24 pt-12 pb-24 overflow-hidden relative">
      {/* Left Content (approx 55%) */}
      <div className="w-full lg:w-[55%] flex flex-col justify-center pr-0 lg:pr-16 xl:pr-24 z-10 pt-8 lg:pt-0 reveal">
        <span className="text-xs uppercase tracking-[0.2em] text-muted-gold mb-6 font-medium">
          Healing · Reflection · Inner Awareness
        </span>
        
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-warm-charcoal mb-8">
          A gentler space <br />
          <span className="italic font-light">to return to yourself.</span>
        </h1>
        
        <p className="text-soft-brown text-lg leading-relaxed mb-12 max-w-xl font-light">
          Welcome to a quiet practice dedicated to personal exploration. Through Reiki healing, 
          intuitive tarot guidance, and reflective learning, we create the room needed to listen 
          more carefully to your own inner voice.
        </p>
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8">
          <Link
            href="#services"
            className="px-8 py-3.5 bg-warm-charcoal text-ivory rounded-sm hover:bg-muted-plum transition-all duration-300 text-sm tracking-wide"
          >
            Explore My Work
          </Link>
          <Link
            href="#book"
            className="px-8 py-3.5 border border-soft-brown/30 text-warm-charcoal rounded-sm hover:border-muted-gold transition-all duration-300 text-sm tracking-wide relative group"
          >
            Book a Personal Session
            <span className="absolute inset-0 bg-muted-gold/5 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </Link>
        </div>
        
        <div className="flex items-center gap-3 text-xs tracking-wider text-soft-brown uppercase mt-4">
          <span className="w-8 h-[1px] bg-muted-gold/50"></span>
          <span>Reiki · Tarot · Guided Reflection</span>
        </div>
      </div>

      {/* Right Content (approx 45%) */}
      <div className="w-full lg:w-[45%] h-full relative mt-16 lg:mt-0 reveal" style={{ animationDelay: '0.2s' }}>
        <div className="relative w-full aspect-[3/4] max-w-lg mx-auto lg:ml-auto lg:mr-0 z-10">
          {/* Main Portrait */}
          <div className="w-full h-full relative overflow-hidden rounded-sm bg-warm-cream">
            <Image
              src="/images/hero_portrait.png"
              alt="Healing Coach Bhanupriya in her quiet studio"
              fill
              className="object-cover object-center"
              priority
            />
            {/* Subtle Overlay for tone consistency */}
            <div className="absolute inset-0 bg-muted-gold/5 mix-blend-multiply pointer-events-none"></div>
          </div>
          
          {/* Secondary Detail Image - overlapping at bottom left */}
          <div className="absolute -bottom-12 -left-12 w-48 h-56 hidden md:block shadow-sm rounded-sm overflow-hidden bg-ivory p-2 border border-warm-cream">
            <div className="relative w-full h-full rounded-sm overflow-hidden">
              <Image
                src="/images/hero_detail.png"
                alt="Hands gently holding a clear quartz crystal"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Decorative Gold Line */}
          <div className="absolute -top-4 -right-4 w-24 h-24 border-t border-r border-muted-gold/40 z-[-1]"></div>
          <div className="absolute -bottom-4 right-8 w-1 h-16 bg-muted-gold/20"></div>
        </div>
      </div>
    </section>
  );
}
