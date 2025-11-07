import { Card, CardContent } from "@/components/ui/card";
import { Heart, Star, Users, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import storeImage from "@/assets/store-exterior.png";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Quality First",
      description: "We never compromise on the quality of our fabrics and products. Every piece is handpicked for its authenticity and craftsmanship.",
    },
    {
      icon: Star,
      title: "Customer Satisfaction",
      description: "Your happiness is our success. We go the extra mile to ensure you find exactly what you're looking for.",
    },
    {
      icon: Users,
      title: "Family Values",
      description: "As a family-run business, we treat every customer like family, building relationships that last generations.",
    },
    {
      icon: TrendingUp,
      title: "Continuous Innovation",
      description: "While honoring tradition, we embrace new designs and trends to offer you the best of both worlds.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <motion.section 
        className="bg-gradient-to-r from-primary to-primary/80 text-white py-20"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold">Our Story</h1>
            <p className="text-xl font-inter opacity-90 leading-relaxed">
              Three decades of tradition, quality, and trust in the heart of Saligrama
            </p>
          </div>
        </div>
      </motion.section>

      {/* Story Section */}
      <motion.section 
        className="py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="space-y-6"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-playfair text-4xl font-bold text-foreground">
                A Legacy of Excellence Since 1993
              </h2>
              <p className="text-lg text-muted-foreground font-inter leading-relaxed">
                Maruthi Silks began its journey over three decades ago with a simple vision: 
                to bring the finest traditional textiles to the people of Saligrama. What 
                started as a small family venture has grown into one of the region's most 
                trusted names in silk and traditional wear.
              </p>
              <p className="text-lg text-muted-foreground font-inter leading-relaxed">
                Throughout our journey, we've remained committed to the values that our 
                founders established - unwavering quality, authentic products, and genuine 
                care for every customer who walks through our doors.
              </p>
              <p className="text-lg text-muted-foreground font-inter leading-relaxed">
                Today, we're proud to serve families across generations, becoming a part 
                of their most cherished moments - from weddings to festivals, from everyday 
                elegance to once-in-a-lifetime celebrations.
              </p>
            </motion.div>

            <motion.div 
              className="relative"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img 
                src={storeImage} 
                alt="Maruthi Silks Store" 
                className="rounded-lg shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -right-6 bg-secondary text-foreground p-6 rounded-lg shadow-xl">
                <p className="font-playfair text-5xl font-bold">30+</p>
                <p className="font-inter font-semibold">Years Strong</p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Mission Section */}
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
              Our Mission
            </h2>
            <p className="text-xl text-muted-foreground font-inter leading-relaxed">
              To preserve and celebrate the rich heritage of Indian textiles while making 
              premium quality silk and traditional wear accessible to everyone. We strive 
              to be more than just a store - we aim to be your trusted partner in creating 
              memories that last a lifetime.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Product Categories Section */}
      <motion.section 
        className="py-16 bg-gradient-to-b from-background to-gold-light"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
            Our Product Range
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <Card className="border-border hover:shadow-lg transition-all duration-300 h-full">
                <CardContent className="p-6 text-center">
                  <h3 className="font-playfair text-2xl font-semibold mb-4 text-foreground">
                    Apparel for All
                  </h3>
                  <div className="space-y-3 text-muted-foreground font-inter">
                    <div>
                      <p className="font-semibold text-foreground mb-1">Ladies Wear</p>
                      <p className="text-sm">Traditional & Modern Collections</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Kids Wear</p>
                      <p className="text-sm">Adorable Outfits for Little Ones</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Men's Wear</p>
                      <p className="text-sm">Formal & Ethnic Collections</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <Card className="border-border hover:shadow-lg transition-all duration-300 h-full">
                <CardContent className="p-6 text-center">
                  <h3 className="font-playfair text-2xl font-semibold mb-4 text-foreground">
                    Saree Collections
                  </h3>
                  <div className="space-y-2 text-muted-foreground font-inter text-sm">
                    <p>• Cotton Sarees</p>
                    <p>• Silk Sarees</p>
                    <p>• Fancy Sarees</p>
                    <p>• Kolkata Work Sarees</p>
                    <p>• Kanchipuram Silks</p>
                    <p>• Bridal Collections</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <Card className="border-border hover:shadow-lg transition-all duration-300 h-full">
                <CardContent className="p-6 text-center">
                  <h3 className="font-playfair text-2xl font-semibold mb-4 text-foreground">
                    Handlooms / Hosiery
                  </h3>
                  <div className="space-y-2 text-muted-foreground font-inter text-sm">
                    <p>• Handloom Fabrics</p>
                    <p>• Cotton Hosiery</p>
                    <p>• Traditional Weaves</p>
                    <p>• Premium Quality Materials</p>
                    <p>• Authentic Craftsmanship</p>
                    <p>• Regional Specialties</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Values Section */}
      <motion.section 
        className="py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
            What We Stand For
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <Card className="border-border hover:shadow-lg transition-all duration-300 h-full">
                    <CardContent className="p-8">
                      <div className="flex gap-6">
                        <motion.div 
                          className="h-14 w-14 rounded-full bg-gold-light flex-shrink-0 flex items-center justify-center"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Icon className="h-7 w-7 text-primary" />
                        </motion.div>
                        <div className="space-y-3">
                          <h3 className="font-playfair text-2xl font-semibold text-foreground">
                            {value.title}
                          </h3>
                          <p className="text-muted-foreground font-inter leading-relaxed">
                            {value.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Family Business Section */}
      <motion.section 
        className="py-16 bg-gradient-to-b from-gold-light to-background"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground">
              A Family Serving Families
            </h2>
            <p className="text-lg text-muted-foreground font-inter leading-relaxed">
              As a family-run business spanning multiple generations, we understand the 
              importance of trust, quality, and personal service. Every member of our team 
              is dedicated to ensuring your experience with us is exceptional.
            </p>
            <p className="text-lg text-muted-foreground font-inter leading-relaxed">
              We've watched families grow, celebrated their joys, and been honored to be 
              a part of their special moments. This personal connection with our community 
              is what drives us to maintain the highest standards in everything we do.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Commitment Section */}
      <motion.section 
        className="py-16 bg-primary text-white"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold">
              Our Commitment to You
            </h2>
            <p className="text-lg font-inter opacity-90 leading-relaxed">
              We promise to continue serving you with the same dedication, authenticity, 
              and care that has defined Maruthi Silks for over 30 years. Your trust is 
              our most valuable asset, and we work every day to earn it.
            </p>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;