import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Restaurant Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-playfair">Hotel Dajeba</h3>
            <p className="text-primary-foreground/80">
              Experience authentic Indian pure vegetarian cuisine with fresh ingredients and traditional flavors.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/hoteldajeba"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary-foreground/10 hover:bg-accent transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/hoteldajeba"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary-foreground/10 hover:bg-accent transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/" className="block hover:text-accent transition-colors duration-300">Home</Link>
              <Link to="/about" className="block hover:text-accent transition-colors duration-300">About Us</Link>
              <Link to="/menu" className="block hover:text-accent transition-colors duration-300">Menu</Link>
              <Link to="/gallery" className="block hover:text-accent transition-colors duration-300">Gallery</Link>
              <Link to="/reservation" className="block hover:text-accent transition-colors duration-300">Reservations</Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1 text-accent" />
                <div>
                  <p>Main Street, Kalyan</p>
                  <p>Maharashtra 421301, India</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent" />
                <p>+91-XXXX-XXXXXX</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent" />
                <p>info@hoteldajeba.com</p>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Opening Hours</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-accent" />
                <div>
                  <p className="font-medium">Daily</p>
                  <p className="text-sm text-primary-foreground/80">11:00 AM - 11:00 PM</p>
                </div>
              </div>
              <div className="mt-4 p-3 bg-primary-foreground/10 rounded-lg">
                <p className="text-sm text-center">
                  <span className="text-accent font-medium">100% Pure Vegetarian</span><br />
                  Fresh • Authentic • Delicious
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/80">
            © 2024 Hotel Dajeba. All rights reserved. | Pure Veg. Pure Taste. Pure Love.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;