import { Link } from "react-router-dom";
import { ArrowRight, Star, Users, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-dishes.jpg";
import restaurantInterior from "@/assets/restaurant-interior.jpg";
import butterPaneerImage from "@/assets/butter-paneer.jpg";
import dalTadkaImage from "@/assets/dal-tadka.jpg";
import vegetableBiryaniImage from "@/assets/vegetable-biryani.jpg";

const Homepage = () => {
  const featuredDishes = [
    {
      name: "Butter Paneer Masala",
      description: "Creamy cottage cheese in rich tomato gravy",
      price: "₹280",
      image: butterPaneerImage
    },
    {
      name: "Dal Tadka",
      description: "Yellow lentils tempered with aromatic spices",
      price: "₹180",
      image: dalTadkaImage
    },
    {
      name: "Vegetable Biryani",
      description: "Aromatic basmati rice with mixed vegetables",
      price: "₹250",
      image: vegetableBiryaniImage
    }
  ];

  const stats = [
    { icon: Users, value: "10,000+", label: "Happy Customers" },
    { icon: Star, value: "4.8", label: "Average Rating" },
    { icon: Clock, value: "15+", label: "Years of Service" },
    { icon: Award, value: "100%", label: "Pure Vegetarian" }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <Badge className="mb-6 bg-accent/90 text-accent-foreground">
            100% Pure Vegetarian
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold font-playfair mb-6">
            Pure Veg. Pure Taste.
            <span className="text-accent block">Pure Love.</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Experience authentic Indian vegetarian cuisine crafted with the finest ingredients 
            and traditional recipes passed down through generations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="btn-hero text-lg px-8 py-4">
              <Link to="/menu">
                View Our Menu
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary">
              <Link to="/reservation">Reserve Table</Link>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <Badge className="mb-4">Our Story</Badge>
                <h2 className="text-4xl font-bold font-playfair text-primary mb-6">
                  Authentic Flavors from the Heart of Maharashtra
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Located in the vibrant city of Kalyan, Hotel Dajeba has been serving 
                  authentic pure vegetarian cuisine for over 15 years. Our commitment to 
                  quality, freshness, and traditional flavors has made us a beloved 
                  destination for food lovers.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <span>Fresh ingredients sourced daily from local farms</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <span>Traditional recipes passed down through generations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <span>100% pure vegetarian with no compromise on taste</span>
                </div>
              </div>
              <Button asChild className="btn-hero">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src={restaurantInterior}
                alt="Hotel Dajeba Restaurant Interior"
                className="rounded-2xl shadow-premium w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-6 rounded-xl shadow-warm">
                <h3 className="text-2xl font-bold">15+</h3>
                <p className="text-sm">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-accent" />
                <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                <p className="text-primary-foreground/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Our Specialties</Badge>
            <h2 className="text-4xl font-bold font-playfair text-primary mb-6">
              Featured Dishes
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our most beloved dishes, each prepared with love and 
              authentic ingredients to bring you the true taste of India.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredDishes.map((dish, index) => (
              <div key={index} className="card-floating group">
                <div className="aspect-video mb-4 overflow-hidden rounded-xl">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{dish.name}</h3>
                <p className="text-muted-foreground mb-3">{dish.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-accent">{dish.price}</span>
                  <Badge className="bg-sage text-sage-foreground">Pure Veg</Badge>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg" className="btn-hero">
              <Link to="/menu">
                View Full Menu
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold font-playfair mb-6">
            Ready to Experience Pure Vegetarian Excellence?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Book your table today and embark on a culinary journey through authentic Indian flavors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
              <Link to="/reservation">Reserve Your Table</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <Link to="/location">Find Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Homepage;