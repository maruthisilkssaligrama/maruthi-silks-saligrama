import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Sparkles, Award, Users, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import storeImage from "@/assets/store-exterior.png";
import storeInterior from "@/assets/C_08.jpg";
import logo from "@/assets/maruthi_silks_logo.png";
import { sareeCollections } from "@/data/collections";

const Home = () => {
  const specialties = [
    {
      title: "Kanchipuram Silks",
      description: "Authentic handwoven Kanchipuram sarees in vibrant colors and traditional designs",
      icon: Sparkles,
    },
    {
      title: "Bridal Collections",
      description: "Exquisite bridal wear for your special day, curated with care and elegance",
      icon: Award,
    },
    {
      title: "Designer Wear",
      description: "Latest fashion trends for men, women, and kids - traditional meets contemporary",
      icon: Users,
    },
    {
      title: "Quality Assured",
      description: "Every piece is carefully selected for superior quality and authentic craftsmanship",
      icon: Shield,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section 
        className="relative h-[600px] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${storeImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/75 to-foreground/50" />
        </div>
        
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <motion.div 
            className="max-w-2xl text-background space-y-6"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <img src={logo} alt="Maruthi Silks" className="h-20 w-20 bg-secondary rounded-full p-1" />
              <div>
                <h1 className="font-playfair text-5xl md:text-6xl font-bold leading-tight">
                  Maruthi Silks
                </h1>
                <p className="text-secondary text-xl font-semibold">The Pride of Saligrama</p>
              </div>
            </div>
            
            <p className="text-xl md:text-2xl font-inter leading-relaxed">
              Since 1993, your trusted destination for authentic Kanchipuram silks, 
              bridal collections, and designer wear for the entire family.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold">
                  Visit Our Store
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="bg-background/10 border-background text-background hover:bg-background hover:text-foreground font-semibold backdrop-blur-sm">
                  Our Story
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Trust Badge */}
      <motion.section 
        className="bg-secondary py-6"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 text-center text-foreground">
            <div>
              <p className="font-playfair text-4xl font-bold">30+</p>
              <p className="font-inter text-sm">Years of Excellence</p>
            </div>
            <div className="hidden sm:block h-12 w-px bg-foreground/20" />
            <div>
              <p className="font-playfair text-4xl font-bold">10,000+</p>
              <p className="font-inter text-sm">Happy Customers</p>
            </div>
            <div className="hidden sm:block h-12 w-px bg-foreground/20" />
            <div>
              <p className="font-playfair text-4xl font-bold">100%</p>
              <p className="font-inter text-sm">Authentic Products</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Welcome Section */}
      <motion.section 
        className="py-16 bg-cream"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground">
              Welcome to Maruthi Silks
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed font-inter">
              For over three decades, Maruthi Silks has been the heartbeat of Saligrama's 
              textile tradition. We take pride in offering the finest Kanchipuram silks, 
              carefully curated bridal collections, and designer wear that celebrates both 
              tradition and contemporary elegance.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed font-inter">
              Every piece in our collection tells a story of craftsmanship, quality, and 
              timeless beauty. Whether you're looking for the perfect bridal saree or 
              elegant everyday wear, we're here to serve you with the same dedication 
              that has earned us the trust of generations.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Shop Images Section */}
      <motion.section 
        className="py-16 bg-gradient-to-b from-background to-gold-light"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            className="font-playfair text-4xl md:text-5xl font-bold text-center mb-12 text-foreground"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Store
          </motion.h2>
          
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <Card className="border-border hover:shadow-xl transition-all duration-300 h-full">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={storeImage} 
                      alt="Maruthi Silks Store Exterior"
                      className="w-full h-80 object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-playfair text-xl font-semibold mb-2 text-foreground">
                      Store Exterior
                    </h3>
                    <p className="text-muted-foreground font-inter text-sm">
                      Welcome to Maruthi Silks - your trusted destination in Saligrama for premium textiles and traditional wear.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <Card className="border-border hover:shadow-xl transition-all duration-300 h-full">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={storeInterior} 
                      alt="Maruthi Silks Store Interior"
                      className="w-full h-80 object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-playfair text-xl font-semibold mb-2 text-foreground">
                      Store Interior
                    </h3>
                    <p className="text-muted-foreground font-inter text-sm">
                      Step inside to explore our carefully curated collection of Kanchipuram silks, bridal wear, and designer clothing.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Specialties Section */}
      <motion.section 
        className="py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
            Our Specialties
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialties.map((specialty, index) => {
              const Icon = specialty.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.05 }}
                >
                  <Card className="border-border hover:shadow-lg transition-all duration-300 h-full">
                    <CardContent className="p-6 space-y-4">
                      <motion.div 
                        className="h-12 w-12 rounded-full bg-gold-light flex items-center justify-center"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon className="h-6 w-6 text-primary" />
                      </motion.div>
                      <h3 className="font-playfair text-xl font-semibold text-foreground">
                        {specialty.title}
                      </h3>
                      <p className="text-muted-foreground font-inter leading-relaxed">
                        {specialty.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Why Choose Us Section */}
      <motion.section 
        className="py-16 bg-gradient-to-b from-gold-light to-background"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
              Why Choose Maruthi Silks?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Premium Quality",
                  description: "Only the finest fabrics and authentic products make it to our collection."
                },
                {
                  title: "Rich Tradition",
                  description: "Three decades of preserving and celebrating traditional textile artistry."
                },
                {
                  title: "Customer Trust",
                  description: "Generations of families have trusted us for their special occasions."
                },
                {
                  title: "Reasonable Pricing",
                  description: "Premium quality at fair prices - luxury made accessible."
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="space-y-4"
                  initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex gap-4">
                    <motion.div 
                      className="h-8 w-8 rounded-full bg-primary flex-shrink-0 flex items-center justify-center"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="text-white font-bold">✓</span>
                    </motion.div>
                    <div>
                      <h3 className="font-playfair text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground font-inter">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-16 bg-primary text-white"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 text-center space-y-4">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold">
            Visit Our Store Today
          </h2>
          <p className="text-lg max-w-2xl mx-auto font-inter opacity-90">
            Experience the elegance of authentic silks and traditional wear. 
            Our friendly staff is ready to help you find the perfect piece for any occasion.
          </p>
          <div className="mt-6">
            <Link to="/contact">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-foreground font-semibold">
                Get Directions
              </Button>
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;