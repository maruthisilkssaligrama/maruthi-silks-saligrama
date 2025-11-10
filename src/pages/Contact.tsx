import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Clock, Mail, Instagram, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hello! I'd like to know more about Maruthi Silks.");
    window.open(`https://wa.me/917899773981?text=${message}`, "_blank");
  };

  const contactCards = [
    {
      icon: MapPin,
      title: "Store Address",
      content: (
        <p className="text-muted-foreground font-inter">
          Maruthi Complex, near Anjaneya Temple<br />
          Saligrama, Karnataka 576225<br />
          India
        </p>
      )
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      content: (
        <div className="space-y-2">
          <a 
            href="tel:+919620153981" 
            className="text-muted-foreground font-inter hover:text-primary transition-colors block"
          >
            +91 96201 53981
          </a>
          <a 
            href="tel:+917619603981" 
            className="text-muted-foreground font-inter hover:text-primary transition-colors block"
          >
            +91 76196 03981
          </a>
        </div>
      )
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      content: (
        <div>
          <p className="text-muted-foreground font-inter mb-3">+91 78997 73981</p>
          <Button 
            onClick={handleWhatsApp}
            className="bg-green-600 hover:bg-green-700 text-white"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            WhatsApp Us
          </Button>
        </div>
      )
    },
    {
      icon: Mail,
      title: "Email",
      content: (
        <a 
          href="mailto:maruthisilks.saligrama1@gmail.com" 
          className="text-muted-foreground font-inter hover:text-primary transition-colors break-all"
        >
          maruthisilks.saligrama1@gmail.com
        </a>
      )
    },
    {
      icon: Clock,
      title: "Store Hours",
      content: (
        <div className="text-muted-foreground font-inter space-y-1">
          <p><span className="font-semibold">Daily:</span> 9:00 AM - 8:30 PM</p>
          <p className="text-sm opacity-75">Including Sundays</p>
        </div>
      )
    },
    {
      icon: Instagram,
      title: "Follow Us",
      content: (
        <a 
          href="https://instagram.com/maruthisilks_saligrama" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground font-inter hover:text-primary transition-colors"
        >
          @maruthisilks_saligrama
        </a>
      )
    }
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
            <h1 className="font-playfair text-5xl md:text-6xl font-bold">Contact Us</h1>
            <p className="text-xl font-inter opacity-90 leading-relaxed">
              Visit us in Saligrama or get in touch - we're here to help
            </p>
          </div>
        </div>
      </motion.section>

      {/* Main Content */}
      <motion.section 
        className="py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="text-center mb-12"
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-playfair text-3xl font-bold text-foreground mb-6">
                Visit Our Store
              </h2>
              <p className="text-muted-foreground font-inter leading-relaxed text-lg">
                Experience the finest Kanchipuram silks and traditional wear at our store in Saligrama. 
                We're here to help you find the perfect piece for your special occasions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
              {contactCards.map((card, index) => {
                const Icon = card.icon;
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
                      <CardContent className="p-6">
                        <div className="text-center space-y-4">
                          <motion.div 
                            className="h-16 w-16 rounded-full bg-gold-light mx-auto flex items-center justify-center"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                          >
                            <Icon className="h-8 w-8 text-primary" />
                          </motion.div>
                          <div>
                            <h3 className="font-playfair text-xl font-semibold mb-3">{card.title}</h3>
                            {card.content}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Map Section */}
      <motion.section 
        className="py-16 bg-muted"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center mb-8 text-foreground">
            Find Us on the Map
          </h2>
          <div className="rounded-lg overflow-hidden shadow-xl max-w-5xl mx-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3882.5!2d74.709686!3d13.497987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDI5JzUyLjgiTiA3NMKwNDInMzQuOSJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Maruthi Silks - Maruthi Complex, near Anjaneya Temple, Saligrama"
              className="w-full"
            />
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Contact;