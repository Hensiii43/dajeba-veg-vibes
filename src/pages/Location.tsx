import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Navigation as DirectionsIcon, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Location = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const openWhatsApp = () => {
    const message = "Hello! I'd like to know more about Hotel Dajeba.";
    const whatsappUrl = `https://wa.me/91XXXXXXXXXX?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const openGoogleMaps = () => {
    const address = "Hotel Dajeba, Main Street, Kalyan, Maharashtra 421301";
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    window.open(mapsUrl, '_blank');
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6">
            <MapPin className="w-4 h-4 mr-2" />
            Find Us
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold font-playfair text-primary mb-6">
            Location & Contact
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Visit us in the heart of Kalyan, Maharashtra. We're easy to find and 
            always ready to welcome you with warm hospitality.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Details */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold font-playfair text-primary mb-8">
                  Get in Touch
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  We're here to serve you! Feel free to reach out for reservations, 
                  inquiries, or just to say hello.
                </p>
              </div>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start space-x-4 p-6 card-premium">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">Address</h3>
                    <p className="text-muted-foreground">
                      Hotel Dajeba<br />
                      Main Street, Kalyan<br />
                      Maharashtra 421301, India
                    </p>
                    <Button 
                      onClick={openGoogleMaps}
                      variant="outline" 
                      size="sm" 
                      className="mt-3"
                    >
                      <DirectionsIcon className="w-4 h-4 mr-2" />
                      Get Directions
                    </Button>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4 p-6 card-premium">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">Phone</h3>
                    <p className="text-muted-foreground mb-2">+91-XXXX-XXXXXX</p>
                    <div className="flex space-x-2">
                      <Button 
                        onClick={() => window.location.href = 'tel:+91XXXXXXXXXX'}
                        variant="outline" 
                        size="sm"
                      >
                        Call Now
                      </Button>
                      <Button 
                        onClick={openWhatsApp}
                        className="bg-green-500 hover:bg-green-600 text-white"
                        size="sm"
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        WhatsApp
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4 p-6 card-premium">
                  <div className="w-12 h-12 bg-sage rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-sage-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">Email</h3>
                    <p className="text-muted-foreground mb-2">info@hoteldajeba.com</p>
                    <Button 
                      onClick={() => window.location.href = 'mailto:info@hoteldajeba.com'}
                      variant="outline" 
                      size="sm"
                    >
                      Send Email
                    </Button>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start space-x-4 p-6 card-premium">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-gold-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">Opening Hours</h3>
                    <div className="space-y-1 text-muted-foreground">
                      <p><span className="font-medium">Monday - Sunday:</span> 11:00 AM - 11:00 PM</p>
                      <p className="text-sm text-accent font-medium">Open 7 days a week</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card-floating">
              <h3 className="text-2xl font-bold font-playfair text-primary mb-6">
                Send us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Your phone number"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="How can we help you?"
                    rows={5}
                  />
                </div>
                
                <Button type="submit" className="btn-hero w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-playfair text-primary mb-4">
              Find Us on Map
            </h2>
            <p className="text-lg text-muted-foreground">
              Located in the heart of Kalyan, easily accessible from all major areas.
            </p>
          </div>
          
          <div className="rounded-2xl overflow-hidden shadow-premium">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60305.46405308503!2d73.09754642167966!3d19.240694999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7952c5d6321f5%3A0x9c6a9c05a9e0e5f0!2sKalyan%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Hotel Dajeba Location"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold font-playfair mb-6">
            Ready to Visit Us?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            We're excited to welcome you to Hotel Dajeba. Reserve your table now 
            and experience authentic vegetarian cuisine at its finest.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
              <a href="/reservation">Make Reservation</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <a href="/menu">View Menu</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Location;