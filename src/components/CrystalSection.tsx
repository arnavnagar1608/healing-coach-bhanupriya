import Image from "next/image";
import Link from "next/link";

export default function CrystalSection() {
  const crystals = [
    {
      id: "c1",
      name: "Amethyst Cluster",
      desc: "For deep rest and intuitive clarity.",
      image: "/images/crystal_1.png",
    },
    {
      id: "c2",
      name: "Rose Quartz Palm Stone",
      desc: "For emotional softness and compassion.",
      image: "/images/crystal_1.png", // Reusing crystal image as placeholder
    },
    {
      id: "c3",
      name: "Clear Quartz Point",
      desc: "For focused intention and amplification.",
      image: "/images/crystal_1.png", // Reusing crystal image as placeholder
    },
  ];

  return (
    <section id="crystals" className="w-full py-32 px-6 md:px-12 lg:px-24 bg-soft-parchment/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 reveal">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-muted-gold mb-4 block font-medium">
              Curated Collection
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-warm-charcoal">
              Crystals, <span className="italic font-light">chosen with intention.</span>
            </h2>
          </div>
          <p className="text-soft-brown font-light max-w-sm md:text-right">
            These stones are not merely products, but companions for your practice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {crystals.map((crystal, idx) => (
            <div key={crystal.id} className="group reveal" style={{ animationDelay: `${idx * 0.15}s` }}>
              <div className="relative w-full aspect-[4/5] bg-ivory rounded-sm overflow-hidden mb-6 border border-warm-cream">
                <Image
                  src={crystal.image}
                  alt={crystal.name}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-in-out mix-blend-multiply"
                />
              </div>
              <h3 className="text-xl font-medium text-warm-charcoal mb-2 tracking-wide">
                {crystal.name}
              </h3>
              <p className="text-soft-brown font-light text-sm mb-6">
                {crystal.desc}
              </p>
              <div className="flex items-center gap-4">
                <Link
                  href={`#view-${crystal.id}`}
                  className="text-xs uppercase tracking-wider text-warm-charcoal border-b border-warm-charcoal/30 pb-0.5 hover:border-muted-gold transition-colors duration-300"
                >
                  View Crystal
                </Link>
                <Link
                  href={`#enquire-${crystal.id}`}
                  className="text-xs uppercase tracking-wider text-muted-gold border-b border-transparent pb-0.5 hover:border-muted-gold transition-colors duration-300"
                >
                  Enquire
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
