import { ArrowLeft, ArrowRight } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section className="w-full py-32 px-6 md:px-12 lg:px-24 bg-pale-lavender/40 flex flex-col items-center text-center">
      <div className="max-w-4xl mx-auto reveal">
        <div className="mb-12 text-muted-gold opacity-50 font-display text-8xl leading-none">
          “
        </div>
        
        <blockquote className="font-display text-3xl md:text-4xl lg:text-5xl text-warm-charcoal leading-[1.3] mb-12 font-light">
          My sessions with Bhanupriya feel like stepping out of a storm and into a quiet room. 
          She doesn't tell me what to do; instead, she helps me hear what I’ve been trying to tell myself.
        </blockquote>
        
        <div className="flex flex-col items-center justify-center mb-16">
          <span className="text-sm font-medium tracking-wide text-warm-charcoal mb-1">
            Priya
          </span>
          <span className="text-xs text-soft-brown font-light">
            Personal Tarot Consultation
          </span>
        </div>

        <div className="flex items-center justify-center gap-8">
          <button className="text-soft-brown hover:text-warm-charcoal transition-colors duration-300" aria-label="Previous testimonial">
            <ArrowLeft size={20} strokeWidth={1} />
          </button>
          <span className="text-xs tracking-[0.2em] text-soft-brown font-medium">
            01 / 04
          </span>
          <button className="text-soft-brown hover:text-warm-charcoal transition-colors duration-300" aria-label="Next testimonial">
            <ArrowRight size={20} strokeWidth={1} />
          </button>
        </div>
      </div>
    </section>
  );
}
