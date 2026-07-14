import Image from "next/image";
import Link from "next/link";

export default function TarotCourseSection() {
  return (
    <section id="tarot-course" className="w-full py-32 px-6 md:px-12 lg:px-24 bg-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse gap-16 lg:gap-24 items-center">
        
        {/* Right (Text Content) */}
        <div className="w-full lg:w-1/2 reveal z-10">
          <div className="mb-6 flex items-center gap-4">
            <div className="w-8 h-[1px] bg-muted-gold"></div>
            <span className="text-xs uppercase tracking-[0.2em] text-soft-brown font-medium">
              Tarot Reading Course
            </span>
          </div>
          
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-warm-charcoal mb-8 leading-[1.1]">
            “Learn to read with attention, <span className="italic font-light">not urgency.</span>”
          </h2>
          
          <p className="text-soft-brown font-light leading-relaxed mb-6">
            There is a profound difference between receiving a reading and cultivating 
            the practice yourself. This course is for those who wish to understand the 
            cards as a quiet, reflective tool for their own personal journey.
          </p>

          <p className="text-soft-brown font-light leading-relaxed mb-12">
            The learning experience contains structured modules, calming video instruction, 
            thoughtful documents, and journaling resources to help you build your intuitive 
            language at a pace that feels natural.
          </p>

          <Link
            href="#explore-tarot-course"
            className="inline-block px-8 py-3.5 border border-muted-gold text-warm-charcoal rounded-sm hover:bg-muted-gold hover:text-ivory transition-all duration-300 text-sm tracking-wide"
          >
            Explore the Tarot Course
          </Link>
        </div>

        {/* Left (Image Composition) */}
        <div className="w-full lg:w-1/2 relative reveal" style={{ animationDelay: '0.2s' }}>
          <div className="relative w-full aspect-square max-w-lg mx-auto">
            {/* Main Image */}
            <div className="absolute top-0 right-0 w-[85%] h-[85%] rounded-sm overflow-hidden shadow-sm border border-soft-parchment z-10">
              <Image
                src="/images/tarot_course.png"
                alt="Tarot deck, handwritten notes, and learning journal"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Secondary abstract or detail image */}
            <div className="absolute bottom-0 left-0 w-[55%] h-[50%] rounded-sm overflow-hidden shadow-md border border-ivory z-20">
              <Image
                src="/images/journal_1.png"
                alt="A quiet interior corner with an open journal"
                fill
                className="object-cover"
              />
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b border-r border-muted-gold/30 z-0"></div>
          </div>
        </div>

      </div>
    </section>
  );
}
