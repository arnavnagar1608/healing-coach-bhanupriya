import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-32 px-6 md:px-12 lg:px-24 bg-ivory">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        
        {/* Left Image */}
        <div className="w-full lg:w-[45%] reveal">
          <div className="relative w-full aspect-[3/4] max-w-md mx-auto rounded-sm overflow-hidden bg-warm-cream border border-soft-parchment">
            <Image
              src="/images/about_portrait.png"
              alt="Healing Coach Bhanupriya"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-[55%] reveal" style={{ animationDelay: '0.2s' }}>
          <span className="text-xs uppercase tracking-[0.2em] text-muted-gold mb-8 block font-medium">
            02 — The Person Behind the Practice
          </span>
          
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-warm-charcoal leading-[1.2] mb-10">
            “I believe guidance should leave you closer to <span className="italic font-light">your own voice.</span>”
          </h2>
          
          <div className="space-y-6 text-soft-brown font-light leading-relaxed mb-12 max-w-xl">
            <p>
              My journey into healing was not a sudden awakening, but a slow, quiet realization 
              that we all need spaces where we don't have to perform or pretend. I began studying 
              Reiki and Tarot many years ago, drawn to their ability to articulate the subtle 
              emotions we often leave unspoken.
            </p>
            <p>
              I don't hold the answers for you. What I hold is the space for you to find them. 
              Whether we are working through a tarot reading or moving stagnant energy with Reiki, 
              my intention is always the same: to help you feel safe enough to return to yourself.
            </p>
            <p>
              This practice is built on warmth, patience, and the understanding that true clarity 
              takes time to unfold. You are always welcome here, exactly as you are.
            </p>
          </div>

          <div className="mt-12">
            <span className="font-display italic text-4xl text-warm-charcoal block mb-2">
              Bhanupriya
            </span>
            <span className="text-xs uppercase tracking-[0.2em] text-soft-brown">
              Healing Coach
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
