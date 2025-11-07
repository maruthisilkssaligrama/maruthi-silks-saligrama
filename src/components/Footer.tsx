import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Tagline */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Maruthi Silks" className="h-16 w-16" />
              <div>
                <h3 className="font-playfair font-bold text-xl">Maruthi Silks</h3>
                <p className="text-sm opacity-80">The Pride of Saligrama</p>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              Serving generations with quality, tradition, and elegance since 1993.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-3">
            <h4 className="font-playfair font-semibold text-lg mb-4">Contact Us</h4>
            <div className="flex items-start gap-3 text-sm">
              <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5 opacity-80" />
              <p className="opacity-90">Maruthi Complex, near Anjaneya Temple<br />Saligrama, Karnataka 576225</p>
            </div>
            <div className="flex items-start gap-3 text-sm">
              <Phone className="h-5 w-5 flex-shrink-0 mt-0.5 opacity-80" />
              <div className="space-y-1">
                <a href="tel:+919620153981" className="opacity-90 hover:text-secondary transition-colors block">
                  +91 96201 53981
                </a>
                <a href="tel:+917619603981" className="opacity-90 hover:text-secondary transition-colors block">
                  +91 76196 03981
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Mail className="h-5 w-5 flex-shrink-0 opacity-80" />
              <a href="mailto:maruthisilks.saligrama1@gmail.com" className="opacity-90 hover:text-secondary transition-colors break-all">
                maruthisilks.saligrama1@gmail.com
              </a>
            </div>
          </div>

          {/* Store Hours */}
          <div className="space-y-3">
            <h4 className="font-playfair font-semibold text-lg mb-4">Store Hours</h4>
            <div className="flex items-start gap-3 text-sm">
              <Clock className="h-5 w-5 flex-shrink-0 mt-0.5 opacity-80" />
              <div className="opacity-90">
                <p className="font-semibold">Daily: 9:00 AM - 8:30 PM</p>
                <p className="text-xs mt-1 opacity-75">Including Sundays</p>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-3">
            <h4 className="font-playfair font-semibold text-lg mb-4">Follow Us</h4>
            <div className="flex items-center gap-3 text-sm">
              <Instagram className="h-5 w-5 flex-shrink-0 opacity-80" />
              <a 
                href="https://instagram.com/maruthisilks_saligrama" 
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-90 hover:text-secondary transition-colors"
              >
                @maruthisilks_saligrama
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm opacity-80">
          <p>&copy; {new Date().getFullYear()} Maruthi Silks. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
