import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (item: { label: string; id: string; href: string }) => {
    if (item.href === "/projects") {
      window.location.href = "/projects";
    } else if (item.href === "/") {
      if (window.location.pathname !== "/") {
        window.location.href = "/";
      } else {
        const element = document.getElementById(item.id);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: "Home", id: "hero", href: "/" },
    { label: "About", id: "about", href: "/" },
    { label: "Skills", id: "skills", href: "/" },
    { label: "Projects", id: "projects", href: "/projects" },
    { label: "CV", id: "contact", href: "/" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/70 backdrop-blur-lg border-b border-white/30 shadow-soft"
          : "bg-white/50 backdrop-blur-sm"
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.location.href = "/"}
            className="text-2xl font-heading font-bold bg-gradient-rainbow bg-clip-text text-transparent hover:scale-105 transition-transform"
          >
            Stanley Aloo
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item)}
                className="text-foreground hover:text-primary transition-colors relative group font-semibold hover:scale-105"
              >
                {item.label}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-rainbow group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={() => window.location.pathname === "/" ? document.getElementById("contact")?.scrollIntoView({ behavior: 'smooth' }) : window.location.href = "/"}
              className="bg-gradient-rainbow text-white font-semibold hover:scale-105 transition-all shadow-sweet border-0"
            >
              View CV
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-3 rounded-full bg-white/70 border-2 border-white/50 hover:border-primary hover:scale-105 transition-all shadow-soft"
          >
            {isMobileMenuOpen ? <X size={20} className="text-foreground" /> : <Menu size={20} className="text-foreground" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white/70 backdrop-blur-sm border-2 border-white/50 rounded-2xl shadow-sweet">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item)}
                  className="text-foreground hover:text-primary transition-colors px-4 py-2 text-left font-semibold hover:scale-105"
                >
                  {item.label}
                </button>
              ))}
              <div className="px-4 pt-2">
                <Button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    window.location.pathname === "/" ? document.getElementById("contact")?.scrollIntoView({ behavior: 'smooth' }) : window.location.href = "/"
                  }}
                  className="w-full bg-gradient-rainbow text-white font-semibold shadow-sweet border-0"
                >
                  View CV
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;