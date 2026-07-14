import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      id: "01",
      title: "Reiki Healing & Learning",
      description: "Experience the calming resonance of Reiki sessions, or begin your own journey with structured learning levels tailored to your pace.",
      linkText: "Explore Reiki",
      href: "#reiki-learning",
    },
    {
      id: "02",
      title: "Personal Tarot Reading",
      description: "A one-to-one video consultation where we hold space for your present questions. Select a date and time that feels right for you.",
      linkText: "Book a Session",
      href: "#book",
    },
    {
      id: "03",
      title: "Voice Tarot Reading",
      description: "Submit your details privately and receive a deeply reflective recorded voice reading, allowing you to absorb the guidance in your own time.",
      linkText: "Explore Voice Readings",
      href: "#featured-reading",
    },
    {
      id: "04",
      title: "Tarot Reading Course",
      description: "A structured, thoughtful learning experience for those who wish to understand the cards as a tool for lifelong personal reflection.",
      linkText: "View Course Details",
      href: "#tarot-course",
    },
  ];

  return (
    <section id="services" className="w-full py-32 px-6 md:px-12 lg:px-24 bg-ivory">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20 reveal">
          <h2 className="font-display text-4xl md:text-5xl text-warm-charcoal mb-6">
            How I can hold <span className="italic font-light">space for you.</span>
          </h2>
          <div className="w-16 h-[1px] bg-muted-gold"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0 border-t border-muted-gold/20">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className={`py-12 border-b border-muted-gold/20 group hover:bg-pale-lavender/30 transition-colors duration-500 px-6 -mx-6 md:px-8 md:-mx-8 reveal`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex flex-col h-full justify-between">
                <div>
                  <span className="text-sm font-light text-muted-gold mb-6 block font-display italic text-xl">
                    {service.id}
                  </span>
                  <h3 className="text-2xl text-warm-charcoal mb-4 tracking-wide font-medium">
                    {service.title}
                  </h3>
                  <p className="text-soft-brown font-light leading-relaxed mb-8">
                    {service.description}
                  </p>
                </div>
                
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-3 text-sm text-warm-charcoal hover:text-muted-gold transition-colors duration-300 group/link"
                >
                  <span className="border-b border-warm-charcoal/30 pb-0.5 group-hover/link:border-muted-gold">
                    {service.linkText}
                  </span>
                  <ArrowRight size={14} className="transform group-hover/link:translate-x-1 transition-transform duration-300" strokeWidth={1.5} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
