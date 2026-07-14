import Link from "next/link";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full py-8 px-6 md:px-12 lg:px-24 flex items-center justify-between border-b border-muted-gold/10 sticky top-0 bg-ivory/90 backdrop-blur-md z-50">
      <div className="flex-shrink-0">
        <Link href="/" className="font-display text-2xl md:text-3xl text-warm-charcoal tracking-wide">
          Healing Coach <span className="italic font-light">Bhanupriya</span>
        </Link>
      </div>

      <nav className="hidden lg:flex items-center gap-8">
        {[
          { label: "Home", href: "/" },
          { label: "About", href: "#about" },
          { label: "Services", href: "#services" },
          { label: "Courses", href: "#courses" },
          { label: "Crystals", href: "#crystals" },
          { label: "Journal", href: "#journal" },
        ].map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="text-sm font-light text-soft-brown hover:text-warm-charcoal transition-colors duration-300 relative group"
          >
            {item.label}
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-muted-gold transition-all duration-300 group-hover:w-full"></span>
          </Link>
        ))}
      </nav>

      <div className="hidden lg:flex items-center gap-6">
        <Link
          href="#login"
          className="text-sm font-light text-soft-brown hover:text-warm-charcoal transition-colors duration-300"
        >
          Login
        </Link>
        <Link
          href="#book"
          className="text-sm px-6 py-2.5 border border-muted-gold text-warm-charcoal rounded-sm hover:bg-muted-gold hover:text-ivory transition-all duration-300"
        >
          Book a Session
        </Link>
      </div>

      <button className="lg:hidden text-warm-charcoal" aria-label="Open Menu">
        <Menu size={24} strokeWidth={1.5} />
      </button>
    </header>
  );
}
