import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/aloostanley",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/stanley-aloostanley",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:stanley@example.com",
      label: "Email"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Logo and Description */}
            <div className="space-y-4">
              <button
                onClick={scrollToTop}
                className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent hover:scale-105 transition-transform"
              >
                Stanley Aloostanley
              </button>
              <p className="text-muted-foreground leading-relaxed">
                Full Stack Developer crafting beautiful and functional 
                digital experiences with modern technologies.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <div className="space-y-2">
                {["About", "Skills", "Projects", "Contact"].map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      const element = document.getElementById(item.toLowerCase());
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="block text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Get In Touch</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>San Francisco, CA</p>
                <a
                  href="mailto:stanley@example.com"
                  className="block hover:text-primary transition-colors"
                >
                  stanley@example.com
                </a>
                <a
                  href="tel:+15551234567"
                  className="block hover:text-primary transition-colors"
                >
                  +1 (555) 123-4567
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pt-8 border-t border-border/30">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Copyright */}
              <div className="flex items-center space-x-2 text-muted-foreground">
                <span>© {currentYear} Stanley Aloostanley. Made with</span>
                <Heart className="h-4 w-4 text-red-500 fill-current" />
                <span>and React</span>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="p-2 rounded-lg bg-background border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all hover-scale"
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Additional Note */}
            <div className="mt-6 text-center text-sm text-muted-foreground">
              <p>
                This portfolio is open source and available on{" "}
                <a
                  href="https://github.com/aloostanley/portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  GitHub
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;