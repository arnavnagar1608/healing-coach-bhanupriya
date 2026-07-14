import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full pt-24 pb-12 px-6 md:px-12 lg:px-24 bg-ivory border-t border-muted-gold/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-24">
          
          {/* Brand & Philosophy */}
          <div className="lg:col-span-5 pr-0 lg:pr-12">
            <Link href="/" className="font-display text-2xl text-warm-charcoal tracking-wide mb-6 block">
              Healing Coach <span className="italic font-light">Bhanupriya</span>
            </Link>
            <p className="text-sm font-light text-soft-brown leading-relaxed max-w-md">
              A gentle practice dedicated to personal reflection and inner awareness. 
              Holding space for you to listen more carefully to your own voice.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-wider text-warm-charcoal font-medium mb-6">Navigation</h4>
            <ul className="space-y-4">
              {['About', 'Services', 'Reiki Courses', 'Tarot Course', 'Crystals', 'Testimonials', 'FAQ', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-sm font-light text-soft-brown hover:text-muted-gold transition-colors duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Account Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-wider text-warm-charcoal font-medium mb-6">Account</h4>
            <ul className="space-y-4">
              <li>
                <Link href="#login" className="text-sm font-light text-soft-brown hover:text-muted-gold transition-colors duration-300">
                  Login
                </Link>
              </li>
              <li>
                <Link href="#dashboard" className="text-sm font-light text-soft-brown hover:text-muted-gold transition-colors duration-300">
                  My Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Social & Legal */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-wider text-warm-charcoal font-medium mb-6">Connect</h4>
            <ul className="space-y-4 mb-10">
              <li>
                <a href="#" className="text-sm font-light text-soft-brown hover:text-muted-gold transition-colors duration-300">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-sm font-light text-soft-brown hover:text-muted-gold transition-colors duration-300">
                  Email
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between pt-8 border-t border-muted-gold/10 gap-6">
          <p className="text-xs text-soft-brown font-light">
            © {new Date().getFullYear()} Healing Coach Bhanupriya. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <Link href="#privacy" className="text-xs text-soft-brown font-light hover:text-muted-gold transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="#terms" className="text-xs text-soft-brown font-light hover:text-muted-gold transition-colors duration-300">
              Terms & Conditions
            </Link>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 max-w-4xl">
          <p className="text-[10px] leading-relaxed text-soft-brown/70 font-light">
            Disclaimer: Tarot and spiritual guidance services provided by Healing Coach Bhanupriya 
            are intended for personal reflection, insight, and entertainment purposes. These sessions 
            do not guarantee specific outcomes and should not replace qualified medical, legal, financial, 
            or mental health advice. Please consult a licensed professional for any serious concerns.
          </p>
        </div>
      </div>
    </footer>
  );
}
