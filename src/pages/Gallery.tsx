import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Camera, X } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", name: "All", count: 24 },
    { id: "dishes", name: "Dishes", count: 12 },
    { id: "interior", name: "Interior", count: 8 },
    { id: "events", name: "Events", count: 4 }
  ];

  const galleryImages = [
    // Dishes
    {
      id: 1,
      src: "/api/placeholder/400/300",
      alt: "Butter Paneer Masala",
      category: "dishes",
      title: "Butter Paneer Masala"
    },
    {
      id: 2,
      src: "/api/placeholder/400/300",
      alt: "Dal Tadka",
      category: "dishes",
      title: "Dal Tadka"
    },
    {
      id: 3,
      src: "/api/placeholder/400/300",
      alt: "Vegetable Biryani",
      category: "dishes",
      title: "Vegetable Biryani"
    },
    {
      id: 4,
      src: "/api/placeholder/400/300",
      alt: "Paneer Tikka",
      category: "dishes",
      title: "Paneer Tikka"
    },
    {
      id: 5,
      src: "/api/placeholder/400/300",
      alt: "Garlic Naan",
      category: "dishes",
      title: "Garlic Naan"
    },
    {
      id: 6,
      src: "/api/placeholder/400/300",
      alt: "Mango Lassi",
      category: "dishes",
      title: "Mango Lassi"
    },
    {
      id: 7,
      src: "/api/placeholder/400/300",
      alt: "Gulab Jamun",
      category: "dishes",
      title: "Gulab Jamun"
    },
    {
      id: 8,
      src: "/api/placeholder/400/300",
      alt: "Mixed Vegetable Curry",
      category: "dishes",
      title: "Mixed Vegetable Curry"
    },
    {
      id: 9,
      src: "/api/placeholder/400/300",
      alt: "Palak Paneer",
      category: "dishes",
      title: "Palak Paneer"
    },
    {
      id: 10,
      src: "/api/placeholder/400/300",
      alt: "Tandoor Roti",
      category: "dishes",
      title: "Tandoor Roti"
    },
    {
      id: 11,
      src: "/api/placeholder/400/300",
      alt: "Rasmalai",
      category: "dishes",
      title: "Rasmalai"
    },
    {
      id: 12,
      src: "/api/placeholder/400/300",
      alt: "Masala Chai",
      category: "dishes",
      title: "Masala Chai"
    },
    // Interior
    {
      id: 13,
      src: "/api/placeholder/600/400",
      alt: "Main Dining Area",
      category: "interior",
      title: "Main Dining Area"
    },
    {
      id: 14,
      src: "/api/placeholder/600/400",
      alt: "Traditional Decor",
      category: "interior",
      title: "Traditional Decor"
    },
    {
      id: 15,
      src: "/api/placeholder/600/400",
      alt: "Kitchen View",
      category: "interior",
      title: "Open Kitchen"
    },
    {
      id: 16,
      src: "/api/placeholder/600/400",
      alt: "Private Dining Room",
      category: "interior",
      title: "Private Dining Room"
    },
    {
      id: 17,
      src: "/api/placeholder/600/400",
      alt: "Entrance",
      category: "interior",
      title: "Restaurant Entrance"
    },
    {
      id: 18,
      src: "/api/placeholder/600/400",
      alt: "Outdoor Seating",
      category: "interior",
      title: "Outdoor Seating"
    },
    {
      id: 19,
      src: "/api/placeholder/600/400",
      alt: "Bar Counter",
      category: "interior",
      title: "Beverage Counter"
    },
    {
      id: 20,
      src: "/api/placeholder/600/400",
      alt: "Tandoor",
      category: "interior",
      title: "Traditional Tandoor"
    },
    // Events
    {
      id: 21,
      src: "/api/placeholder/600/400",
      alt: "Birthday Celebration",
      category: "events",
      title: "Birthday Celebration"
    },
    {
      id: 22,
      src: "/api/placeholder/600/400",
      alt: "Family Gathering",
      category: "events",
      title: "Family Gathering"
    },
    {
      id: 23,
      src: "/api/placeholder/600/400",
      alt: "Festival Celebration",
      category: "events",
      title: "Festival Celebration"
    },
    {
      id: 24,
      src: "/api/placeholder/600/400",
      alt: "Corporate Event",
      category: "events",
      title: "Corporate Event"
    }
  ];

  const filteredImages = activeFilter === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6">
            <Camera className="w-4 h-4 mr-2" />
            Visual Journey
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold font-playfair text-primary mb-6">
            Gallery
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Take a visual journey through our restaurant, from our delicious dishes 
            to our warm and inviting atmosphere.
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                variant={activeFilter === filter.id ? "default" : "outline"}
                className={`${
                  activeFilter === filter.id
                    ? "btn-hero"
                    : "btn-outline"
                } flex items-center space-x-2`}
              >
                <span>{filter.name}</span>
                <Badge variant="secondary" className="ml-2">
                  {filter.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="group cursor-pointer overflow-hidden rounded-xl shadow-soft hover:shadow-warm transition-all duration-300"
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="relative aspect-square">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-semibold text-lg">{image.title}</h3>
                    <p className="text-sm text-white/80 capitalize">{image.category}</p>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Camera className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
          <div className="relative">
            <img
              src={selectedImage || ""}
              alt="Gallery Image"
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            <Button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white border-none rounded-full p-2"
              size="sm"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold font-playfair mb-6">
            Experience It Yourself
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Pictures tell a story, but nothing compares to experiencing our hospitality 
            and flavors in person. Book your table today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
              <a href="/reservation">Reserve Your Table</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <a href="/menu">View Our Menu</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;