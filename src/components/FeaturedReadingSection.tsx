import Image from "next/image";
import Link from "next/link";

export default function FeaturedReadingSection() {
  return (
    <section id="featured-reading" className="w-full py-32 px-6 md:px-12 lg:px-24 bg-pale-lavender">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 reveal">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-warm-charcoal mb-6">
            “Sometimes the question is already <span className="italic font-light">asking to be heard.</span>”
          </h2>
          <div className="w-16 h-[1px] bg-muted-plum/30 mx-auto mt-10"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Video Consultation */}
          <div className="bg-warm-cream p-8 md:p-12 rounded-sm flex flex-col justify-between reveal h-full">
            <div>
              <div className="relative w-full aspect-[4/3] mb-10 rounded-sm overflow-hidden border border-soft-parchment">
                <Image
                  src="/images/tarot_reading_video.png"
                  alt="Hands arranging tarot cards on a linen fabric"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-muted-plum/5 mix-blend-multiply"></div>
              </div>
              <h3 className="text-2xl text-warm-charcoal mb-4 font-medium tracking-wide">
                Video Tarot Consultation
              </h3>
              <p className="text-soft-brown font-light leading-relaxed mb-10">
                A personal, one-to-one consultation where we hold space for your present 
                questions and explore the cards together in real time. Select a reading type 
                and choose an available date and time that suits your rhythm.
              </p>
            </div>
            <Link
              href="#book-video"
              className="inline-block px-8 py-3.5 bg-warm-charcoal text-ivory rounded-sm hover:bg-muted-plum transition-all duration-300 text-sm tracking-wide text-center"
            >
              View Available Sessions
            </Link>
          </div>

          {/* Voice Tarot Reading */}
          <div className="bg-warm-cream p-8 md:p-12 rounded-sm flex flex-col justify-between reveal h-full" style={{ animationDelay: '0.2s' }}>
            <div>
              <div className="relative w-full aspect-[4/3] mb-10 rounded-sm overflow-hidden border border-soft-parchment">
                <Image
                  src="/images/tarot_course.png" 
                  alt="A closed tarot deck and handwritten journal"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-muted-plum/5 mix-blend-multiply"></div>
              </div>
              <h3 className="text-2xl text-warm-charcoal mb-4 font-medium tracking-wide">
                Voice Tarot Reading
              </h3>
              <p className="text-soft-brown font-light leading-relaxed mb-10">
                A private, deeply reflective reading recorded just for you. Submit your 
                information and questions in your own time, and access your completed voice 
                reading and card imagery securely from your account when it is ready.
              </p>
            </div>
            <Link
              href="#explore-voice"
              className="inline-block px-8 py-3.5 border border-warm-charcoal text-warm-charcoal rounded-sm hover:bg-warm-charcoal hover:text-ivory transition-all duration-300 text-sm tracking-wide text-center"
            >
              Explore Voice Readings
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
