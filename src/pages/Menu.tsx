import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Leaf } from "lucide-react";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("starters");

  const categories = [
    { id: "starters", name: "Starters", icon: "🥗" },
    { id: "main", name: "Main Course", icon: "🍛" },
    { id: "breads", name: "Breads", icon: "🫓" },
    { id: "rice", name: "Rice", icon: "🍚" },
    { id: "beverages", name: "Beverages", icon: "🥤" },
    { id: "desserts", name: "Desserts", icon: "🍮" }
  ];

  const menuItems = {
    starters: [
      {
        name: "Paneer Tikka",
        description: "Marinated cottage cheese cubes grilled to perfection with aromatic spices",
        price: "₹220",
        image: "/api/placeholder/300/200",
        popular: true
      },
      {
        name: "Vegetable Samosa",
        description: "Crispy pastry filled with spiced potatoes and green peas",
        price: "₹80",
        image: "/api/placeholder/300/200"
      },
      {
        name: "Aloo Tikki Chat",
        description: "Crispy potato patties topped with chutneys and yogurt",
        price: "₹120",
        image: "/api/placeholder/300/200"
      },
      {
        name: "Spring Rolls",
        description: "Fresh vegetables wrapped in crispy roll with sweet chili sauce",
        price: "₹150",
        image: "/api/placeholder/300/200"
      }
    ],
    main: [
      {
        name: "Butter Paneer Masala",
        description: "Cottage cheese cubes in rich, creamy tomato-based gravy",
        price: "₹280",
        image: "/api/placeholder/300/200",
        popular: true
      },
      {
        name: "Dal Tadka",
        description: "Yellow lentils tempered with cumin, garlic, and aromatic spices",
        price: "₹180",
        image: "/api/placeholder/300/200",
        popular: true
      },
      {
        name: "Palak Paneer",
        description: "Fresh spinach curry with cottage cheese cubes",
        price: "₹260",
        image: "/api/placeholder/300/200"
      },
      {
        name: "Mixed Vegetable Curry",
        description: "Seasonal vegetables cooked in traditional Indian spices",
        price: "₹220",
        image: "/api/placeholder/300/200"
      },
      {
        name: "Kadhai Paneer",
        description: "Cottage cheese with bell peppers in spicy tomato gravy",
        price: "₹270",
        image: "/api/placeholder/300/200"
      },
      {
        name: "Rajma Masala",
        description: "Red kidney beans in rich, spicy tomato-onion gravy",
        price: "₹200",
        image: "/api/placeholder/300/200"
      }
    ],
    breads: [
      {
        name: "Butter Naan",
        description: "Soft leavened bread brushed with butter",
        price: "₹60",
        image: "/api/placeholder/300/200"
      },
      {
        name: "Garlic Naan",
        description: "Naan topped with fresh garlic and herbs",
        price: "₹80",
        image: "/api/placeholder/300/200",
        popular: true
      },
      {
        name: "Tandoor Roti",
        description: "Whole wheat bread cooked in traditional tandoor",
        price: "₹40",
        image: "/api/placeholder/300/200"
      },
      {
        name: "Stuffed Kulcha",
        description: "Leavened bread stuffed with spiced potatoes or paneer",
        price: "₹100",
        image: "/api/placeholder/300/200"
      }
    ],
    rice: [
      {
        name: "Vegetable Biryani",
        description: "Aromatic basmati rice with mixed vegetables and spices",
        price: "₹250",
        image: "/api/placeholder/300/200",
        popular: true
      },
      {
        name: "Jeera Rice",
        description: "Fragrant basmati rice tempered with cumin seeds",
        price: "₹120",
        image: "/api/placeholder/300/200"
      },
      {
        name: "Paneer Biryani",
        description: "Aromatic rice with marinated paneer and traditional spices",
        price: "₹300",
        image: "/api/placeholder/300/200"
      },
      {
        name: "Plain Basmati Rice",
        description: "Steamed premium basmati rice",
        price: "₹80",
        image: "/api/placeholder/300/200"
      }
    ],
    beverages: [
      {
        name: "Fresh Lime Soda",
        description: "Refreshing lime juice with soda and mint",
        price: "₹60",
        image: "/api/placeholder/300/200"
      },
      {
        name: "Mango Lassi",
        description: "Creamy yogurt drink blended with fresh mango",
        price: "₹80",
        image: "/api/placeholder/300/200",
        popular: true
      },
      {
        name: "Masala Chai",
        description: "Traditional Indian tea brewed with aromatic spices",
        price: "₹40",
        image: "/api/placeholder/300/200"
      },
      {
        name: "Fresh Fruit Juice",
        description: "Seasonal fresh fruit juices (Orange, Apple, Pomegranate)",
        price: "₹70",
        image: "/api/placeholder/300/200"
      }
    ],
    desserts: [
      {
        name: "Gulab Jamun",
        description: "Soft milk dumplings in aromatic sugar syrup",
        price: "₹90",
        image: "/api/placeholder/300/200",
        popular: true
      },
      {
        name: "Rasmalai",
        description: "Cottage cheese dumplings in sweet, creamy milk",
        price: "₹120",
        image: "/api/placeholder/300/200"
      },
      {
        name: "Kulfi",
        description: "Traditional Indian ice cream with pistachios and cardamom",
        price: "₹80",
        image: "/api/placeholder/300/200"
      },
      {
        name: "Halwa",
        description: "Rich semolina dessert garnished with nuts and dried fruits",
        price: "₹100",
        image: "/api/placeholder/300/200"
      }
    ]
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 section-warm">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-accent text-accent-foreground">
            <Leaf className="w-4 h-4 mr-2" />
            100% Pure Vegetarian Menu
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold font-playfair text-primary mb-6">
            Our Menu
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our extensive collection of authentic Indian vegetarian dishes, 
            each prepared with fresh ingredients and traditional recipes.
          </p>
        </div>
      </section>

      {/* Menu Navigation */}
      <section className="py-8 bg-background sticky top-20 z-40 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                variant={activeCategory === category.id ? "default" : "outline"}
                className={`${
                  activeCategory === category.id
                    ? "btn-hero"
                    : "btn-outline"
                } flex items-center space-x-2`}
              >
                <span>{category.icon}</span>
                <span>{category.name}</span>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-20 section-subtle">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-playfair text-primary mb-12 text-center">
            {categories.find(cat => cat.id === activeCategory)?.name}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems[activeCategory as keyof typeof menuItems]?.map((item, index) => (
              <div key={index} className="card-floating group">
                <div className="relative">
                  <div className="aspect-video mb-4 overflow-hidden rounded-xl">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  {item.popular && (
                    <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">
                      Popular
                    </Badge>
                  )}
                  <Badge className="absolute top-3 right-3 bg-sage text-sage-foreground">
                    <Leaf className="w-3 h-3 mr-1" />
                    Pure Veg
                  </Badge>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                    <span className="text-2xl font-bold text-accent">{item.price}</span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vegetarian Guarantee */}
      <section className="py-20 section-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
              <Leaf className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-4xl font-bold font-playfair mb-6">
              Our Vegetarian Guarantee
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              We guarantee that every dish served at Hotel Dajeba is 100% pure vegetarian. 
              No eggs, no meat, no fish - just pure, authentic vegetarian cuisine prepared 
              with love and respect for our values.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <h3 className="font-semibold">Fresh Daily</h3>
                <p className="text-sm text-primary-foreground/80">All ingredients sourced fresh every morning</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">No Compromise</h3>
                <p className="text-sm text-primary-foreground/80">Strict vegetarian kitchen with separate utensils</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Traditional Recipes</h3>
                <p className="text-sm text-primary-foreground/80">Authentic flavors passed down through generations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Menu;