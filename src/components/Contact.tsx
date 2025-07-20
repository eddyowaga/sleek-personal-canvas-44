import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Phone, Download, Github, Instagram, MessageSquare } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();

  const handleCVDownload = () => {
    // Open CV in new tab
    window.open("https://drive.google.com/file/d/1vwgxLRlb6aSMhYGwuBJtzSX2jZ4maxD4/view", "_blank");
    
    toast({
      title: "CV opened successfully!",
      description: "You can view and download my CV from Google Drive.",
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "your.email@gmail.com",
      href: "mailto:your.email@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+254 112 036 777",
      href: "tel:+254112036777"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Nairobi, Kenya",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Aloostanley",
      color: "hover:text-gray-400"
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/stan_creatives_",
      color: "hover:text-pink-400"
    },
    {
      icon: MessageSquare,
      label: "WhatsApp",
      href: "https://api.whatsapp.com/send/?phone=254112036777&text&type=phone_number&app_absent=0",
      color: "hover:text-green-400"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              View My <span className="bg-gradient-primary bg-clip-text text-transparent">CV</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Download my CV and let's connect
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* CV Download Section */}
            <Card className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 animate-slide-up">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Download My CV</CardTitle>
                <CardDescription>
                  View my complete professional background, education, and experience.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="mb-6">
                  <div className="w-20 h-20 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <Download className="h-10 w-10 text-primary" />
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Get a comprehensive overview of my skills, experience, and achievements in media production and technology.
                  </p>
                </div>

                <Button
                  onClick={handleCVDownload}
                  className="w-full bg-gradient-primary hover:shadow-lg hover:shadow-primary/20 transition-all mb-6"
                  size="lg"
                >
                  <Download className="h-5 w-5 mr-2" />
                  View CV on Google Drive
                </Button>

                <div className="text-sm text-muted-foreground">
                  <p>Available in PDF format</p>
                  <p>Last updated: January 2025</p>
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div>
                <h3 className="text-2xl font-semibold mb-6">Let's connect</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  I'm always interested in hearing about new creative projects and collaboration opportunities. 
                  Whether you need video production, photography services, or want to discuss a creative idea, 
                  I'd love to hear from you.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center space-x-4 p-4 rounded-lg bg-card border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{item.label}</p>
                      <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div className="pt-8">
                <h4 className="text-lg font-semibold mb-4">Follow me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-lg bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover-scale animate-fade-in ${social.color}`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;