import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function JournalSection() {
  return (
    <section id="journal" className="w-full py-32 px-6 md:px-12 lg:px-24 bg-ivory">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8 reveal">
          <div>
            <h2 className="font-display text-4xl md:text-5xl text-warm-charcoal mb-4">
              Notes for <span className="italic font-light">slower moments.</span>
            </h2>
            <div className="w-16 h-[1px] bg-muted-gold"></div>
          </div>
          <Link
            href="#all-notes"
            className="text-xs uppercase tracking-wider text-warm-charcoal border-b border-warm-charcoal/30 pb-0.5 hover:border-muted-gold transition-colors duration-300"
          >
            View All Notes
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Featured Article */}
          <div className="lg:col-span-7 group cursor-pointer reveal">
            <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden mb-8 border border-warm-cream">
              <Image
                src="/images/journal_1.png"
                alt="A quiet interior corner"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
            </div>
            <div className="flex items-center gap-4 text-xs tracking-wider text-soft-brown uppercase mb-4">
              <span>Reflection</span>
              <span className="w-1 h-1 rounded-full bg-muted-gold/50"></span>
              <span>4 min read</span>
            </div>
            <h3 className="text-3xl lg:text-4xl font-display text-warm-charcoal mb-4 group-hover:text-muted-gold transition-colors duration-300">
              When clarity takes its time
            </h3>
            <p className="text-soft-brown font-light leading-relaxed mb-6 max-w-xl">
              We often approach guidance expecting an immediate answer. But sometimes, 
              the most profound clarity comes when we stop rushing and simply allow 
              the question to breathe.
            </p>
            <div className="inline-flex items-center gap-2 text-sm text-warm-charcoal">
              Read Note <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform duration-300" strokeWidth={1.5} />
            </div>
          </div>

          {/* Smaller Articles */}
          <div className="lg:col-span-5 flex flex-col gap-12 lg:pt-8 reveal" style={{ animationDelay: '0.2s' }}>
            <div className="group cursor-pointer">
              <div className="relative w-full aspect-[16/9] lg:aspect-auto lg:h-48 rounded-sm overflow-hidden mb-6 border border-warm-cream">
                <Image
                  src="/images/tarot_course.png"
                  alt="Journaling"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-in-out mix-blend-multiply"
                />
              </div>
              <div className="flex items-center gap-4 text-xs tracking-wider text-soft-brown uppercase mb-3">
                <span>Intuition</span>
                <span className="w-1 h-1 rounded-full bg-muted-gold/50"></span>
                <span>3 min read</span>
              </div>
              <h3 className="text-2xl font-display text-warm-charcoal mb-3 group-hover:text-muted-gold transition-colors duration-300">
                Listening to intuition without forcing an answer
              </h3>
              <p className="text-sm text-soft-brown font-light leading-relaxed line-clamp-2">
                It can be difficult to discern the difference between fear and intuition. 
                Here are a few gentle practices to help you listen.
              </p>
            </div>

            <div className="w-full h-[1px] bg-muted-gold/20 hidden lg:block"></div>

            <div className="group cursor-pointer">
              <div className="flex items-center gap-4 text-xs tracking-wider text-soft-brown uppercase mb-3">
                <span>Tarot Practice</span>
                <span className="w-1 h-1 rounded-full bg-muted-gold/50"></span>
                <span>5 min read</span>
              </div>
              <h3 className="text-2xl font-display text-warm-charcoal mb-3 group-hover:text-muted-gold transition-colors duration-300">
                Preparing yourself for a reflective tarot reading
              </h3>
              <p className="text-sm text-soft-brown font-light leading-relaxed line-clamp-2">
                How to set the space, ground your energy, and formulate questions that 
                invite deeper understanding rather than simple yes or no answers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
