import { useState } from "react";
import { Calendar, Clock, Users, Phone, Mail, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Reservation = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    specialRequests: ""
  });

  const timeSlots = [
    "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", 
    "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM",
    "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM",
    "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM", "10:00 PM", "10:30 PM"
  ];

  const guestOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10+"];

  const benefits = [
    {
      icon: Check,
      title: "Guaranteed Seating",
      description: "Your table will be ready when you arrive"
    },
    {
      icon: Check,
      title: "Special Occasions",
      description: "We'll help make your celebration memorable"
    },
    {
      icon: Check,
      title: "Dietary Preferences",
      description: "Let us know about any special dietary needs"
    },
    {
      icon: Check,
      title: "No Waiting",
      description: "Skip the wait with advance booking"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.phone || !formData.date || !formData.time || !formData.guests) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Reservation Confirmed!",
      description: `Thank you ${formData.name}! Your table for ${formData.guests} on ${formData.date} at ${formData.time} has been reserved. We'll send you a confirmation email shortly.`,
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      guests: "",
      specialRequests: ""
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Get today's date in YYYY-MM-DD format for min date
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6">
            <Calendar className="w-4 h-4 mr-2" />
            Book Your Table
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold font-playfair text-primary mb-6">
            Make a Reservation
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Reserve your table at Hotel Dajeba and prepare for an unforgettable 
            pure vegetarian dining experience in the heart of Kalyan.
          </p>
        </div>
      </section>

      {/* Reservation Form & Benefits */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Reservation Form */}
            <div className="card-floating">
              <h2 className="text-3xl font-bold font-playfair text-primary mb-8">
                Reserve Your Table
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">Personal Information</h3>
                  
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
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
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
                        placeholder="+91-XXXX-XXXXXX"
                      />
                    </div>
                  </div>
                </div>

                {/* Reservation Details */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">Reservation Details</h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="date" className="block text-sm font-medium mb-2">
                        <Calendar className="w-4 h-4 inline mr-1" />
                        Date *
                      </label>
                      <Input
                        id="date"
                        name="date"
                        type="date"
                        required
                        min={today}
                        value={formData.date}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="guests" className="block text-sm font-medium mb-2">
                        <Users className="w-4 h-4 inline mr-1" />
                        Number of Guests *
                      </label>
                      <Select 
                        value={formData.guests} 
                        onValueChange={(value) => handleSelectChange("guests", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select guests" />
                        </SelectTrigger>
                        <SelectContent>
                          {guestOptions.map((option) => (
                            <SelectItem key={option} value={option}>
                              {option} {option === "1" ? "Guest" : "Guests"}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="time" className="block text-sm font-medium mb-2">
                      <Clock className="w-4 h-4 inline mr-1" />
                      Preferred Time *
                    </label>
                    <Select 
                      value={formData.time} 
                      onValueChange={(value) => handleSelectChange("time", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((slot) => (
                          <SelectItem key={slot} value={slot}>
                            {slot}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Special Requests */}
                <div>
                  <label htmlFor="specialRequests" className="block text-sm font-medium mb-2">
                    Special Requests (Optional)
                  </label>
                  <Textarea
                    id="specialRequests"
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleInputChange}
                    placeholder="Any special dietary requirements, celebrations, or other requests..."
                    rows={4}
                  />
                </div>
                
                <Button type="submit" className="btn-hero w-full text-lg py-6">
                  Confirm Reservation
                </Button>
                
                <p className="text-sm text-muted-foreground text-center">
                  * Required fields. We'll confirm your reservation within 24 hours.
                </p>
              </form>
            </div>

            {/* Benefits & Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold font-playfair text-primary mb-6">
                  Why Reserve with Us?
                </h2>
                <div className="space-y-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 card-premium">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <benefit.icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                        <p className="text-muted-foreground">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Information */}
              <div className="card-floating">
                <h3 className="text-xl font-bold mb-4">Need Help?</h3>
                <div className="space-y-4 text-sm">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-accent" />
                    <span>Call us: +91-XXXX-XXXXXX</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-4 h-4 text-accent" />
                    <span>Email: reservations@hoteldajeba.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-4 h-4 text-accent" />
                    <span>Open: 11:00 AM - 11:00 PM (Daily)</span>
                  </div>
                </div>
              </div>

              {/* Restaurant Image */}
              <div className="rounded-2xl overflow-hidden shadow-premium">
                <img
                  src="/api/placeholder/600/400"
                  alt="Hotel Dajeba Restaurant Interior"
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-playfair text-primary mb-4">
              Reservation Policies
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Please review our policies to ensure a smooth dining experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-premium text-center">
              <Clock className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-3">Punctuality</h3>
              <p className="text-muted-foreground text-sm">
                Please arrive on time. We'll hold your table for 15 minutes after your reservation time.
              </p>
            </div>
            
            <div className="card-premium text-center">
              <Users className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-3">Group Size</h3>
              <p className="text-muted-foreground text-sm">
                For parties larger than 10, please call us directly to discuss special arrangements.
              </p>
            </div>
            
            <div className="card-premium text-center">
              <Phone className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-3">Cancellation</h3>
              <p className="text-muted-foreground text-sm">
                Please give us at least 2 hours notice if you need to cancel or modify your reservation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Reservation;