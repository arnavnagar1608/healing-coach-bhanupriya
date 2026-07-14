import Image from "next/image";
import Link from "next/link";

export default function ReikiLearningSection() {
  const levels = [
    { num: "I", title: "Foundation", desc: "Understanding the energetic body and introductory self-healing." },
    { num: "II", title: "Deepening", desc: "Expanding the practice to support others across distance and time." },
    { num: "III", title: "Practice", desc: "Refining your intuitive connection and advancing your techniques." },
    { num: "IV", title: "Mastery", desc: "Embodying the practice fully and learning to guide others." },
  ];

  return (
    <section id="reiki-learning" className="w-full py-32 px-6 md:px-12 lg:px-24 bg-warm-cream">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        
        {/* Left Text / Levels */}
        <div className="w-full lg:w-1/2 reveal">
          <span className="text-xs uppercase tracking-[0.2em] text-muted-gold mb-6 block font-medium">
            Learn with Bhanupriya
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-warm-charcoal mb-10 leading-[1.1]">
            “A practice understood slowly, <span className="italic font-light">layer by layer.</span>”
          </h2>
          
          <p className="text-soft-brown font-light leading-relaxed mb-12 max-w-lg">
            Our learning platform provides a structured, thoughtful environment to explore 
            Reiki across four dedicated levels. Rather than rushing toward completion, 
            each level is designed to deepen your personal awareness and connection.
          </p>

          <div className="flex flex-col gap-8 mb-12">
            {levels.map((level, i) => (
              <div key={level.num} className="flex items-start gap-6 group">
                <span className="font-display italic text-2xl text-muted-gold/70 w-8 shrink-0 group-hover:text-warm-charcoal transition-colors duration-300">
                  {level.num}
                </span>
                <div className="flex flex-col border-b border-soft-brown/20 pb-6 w-full">
                  <h4 className="text-lg text-warm-charcoal font-medium tracking-wide mb-2">
                    {level.title}
                  </h4>
                  <p className="text-sm font-light text-soft-brown">
                    {level.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <Link
            href="#explore-courses"
            className="inline-block px-8 py-3.5 bg-warm-charcoal text-ivory rounded-sm hover:bg-muted-plum transition-all duration-300 text-sm tracking-wide"
          >
            Explore Reiki Courses
          </Link>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 reveal" style={{ animationDelay: '0.2s' }}>
          <div className="relative w-full aspect-[4/5] max-w-md mx-auto rounded-sm overflow-hidden bg-soft-parchment">
            <Image
              src="/images/reiki_learning.png"
              alt="An open notebook in a peaceful teaching environment"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-muted-gold/5 mix-blend-multiply pointer-events-none"></div>
          </div>
        </div>

      </div>
    </section>
  );
}
