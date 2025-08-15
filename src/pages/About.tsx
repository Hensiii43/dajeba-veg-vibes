import { Users, Award, Heart, Leaf } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  const values = [
    {
      icon: Leaf,
      title: "100% Pure Vegetarian",
      description: "We are committed to serving only the finest vegetarian cuisine, ensuring every dish is prepared with pure ingredients."
    },
    {
      icon: Heart,
      title: "Made with Love",
      description: "Every dish is prepared with passion and care, following traditional recipes passed down through generations."
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "We maintain the highest standards of quality in our ingredients, preparation, and service."
    },
    {
      icon: Users,
      title: "Community First",
      description: "We believe in serving our community with warmth, hospitality, and authentic flavors that bring people together."
    }
  ];

  const chefs = [
    {
      name: "Chef Ramesh Patel",
      role: "Head Chef",
      experience: "20+ years",
      image: "/api/placeholder/300/300",
      description: "Master of traditional Indian vegetarian cuisine with expertise in regional specialties."
    },
    {
      name: "Chef Priya Sharma",
      role: "Pastry Chef",
      experience: "15+ years",
      image: "/api/placeholder/300/300",
      description: "Specialist in Indian sweets and desserts, creating magical endings to every meal."
    },
    {
      name: "Chef Arjun Singh",
      role: "Tandoor Master",
      experience: "18+ years",
      image: "/api/placeholder/300/300",
      description: "Expert in tandoor cooking, bringing authentic flavors from the clay oven."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6">Our Story</Badge>
            <h1 className="text-5xl md:text-6xl font-bold font-playfair text-primary mb-6">
              About Hotel Dajeba
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              For over 15 years, Hotel Dajeba has been a cornerstone of Kalyan's culinary landscape, 
              serving authentic pure vegetarian cuisine that celebrates the rich heritage of Indian flavors.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold font-playfair text-primary">
                A Legacy of Authentic Flavors
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2009 by the Dajeba family, our restaurant began as a small dream 
                  to share the authentic flavors of traditional Indian vegetarian cuisine with 
                  the people of Kalyan and beyond.
                </p>
                <p>
                  What started as a modest establishment has grown into one of the most beloved 
                  vegetarian restaurants in Maharashtra, known for our commitment to quality, 
                  authenticity, and warm hospitality.
                </p>
                <p>
                  Today, we continue to honor our roots while embracing innovation, ensuring 
                  that every guest experiences the perfect blend of tradition and excellence 
                  in every bite.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/api/placeholder/600/500"
                alt="Hotel Dajeba Founders"
                className="rounded-2xl shadow-premium w-full"
              />
              <div className="absolute -top-6 -right-6 bg-accent text-accent-foreground p-6 rounded-xl shadow-warm">
                <h3 className="text-3xl font-bold">2009</h3>
                <p className="text-sm">Established</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Our Values</Badge>
            <h2 className="text-4xl font-bold font-playfair text-primary mb-6">
              What Makes Us Special
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our core values guide every aspect of our restaurant, from ingredient 
              selection to customer service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card-premium text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chef Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Meet Our Team</Badge>
            <h2 className="text-4xl font-bold font-playfair text-primary mb-6">
              Master Chefs Behind the Magic
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our experienced team of chefs brings decades of expertise and passion 
              to create extraordinary culinary experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {chefs.map((chef, index) => (
              <div key={index} className="card-floating text-center group">
                <div className="relative mb-6">
                  <img
                    src={chef.image}
                    alt={chef.name}
                    className="w-48 h-48 object-cover rounded-full mx-auto shadow-premium group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium">
                    {chef.experience}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{chef.name}</h3>
                <p className="text-primary font-medium mb-3">{chef.role}</p>
                <p className="text-muted-foreground">{chef.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-accent text-accent-foreground">Sustainability</Badge>
              <h2 className="text-4xl font-bold font-playfair">
                Fresh, Local & Sustainable
              </h2>
              <p className="text-lg text-primary-foreground/90 leading-relaxed">
                We believe in responsible sourcing and supporting our local farming community. 
                Our ingredients are carefully selected from trusted local suppliers who share 
                our commitment to quality and sustainability.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <span>Daily fresh produce from local Maharashtra farms</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <span>Organic ingredients wherever possible</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <span>Zero waste kitchen practices</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <span>Supporting local farming communities</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/api/placeholder/600/400"
                alt="Fresh Vegetables"
                className="rounded-2xl shadow-premium w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;