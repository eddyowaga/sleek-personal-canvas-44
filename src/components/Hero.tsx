import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Instagram, Mail, MessageSquare } from "lucide-react";
import stanleyPhoto from "@/assets/stanley-headphones.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-soft opacity-90"></div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full animate-float`}
            style={{
              width: `${8 + i * 2}px`,
              height: `${8 + i * 2}px`,
              background: `hsl(${349 + i * 30} 100% ${65 + i * 2}%)`,
              left: `${15 + i * 12}%`,
              top: `${25 + i * 8}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${5 + i * 0.5}s`,
              opacity: 0.6
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <div className="mb-8 animate-fade-in">
            <div className="relative mx-auto w-40 h-40 mb-6">
              <div className="absolute inset-0 rounded-full bg-gradient-rainbow opacity-30 animate-pulse-glow"></div>
              <img
                src="/lovable-uploads/1ded3875-6101-4586-9222-f19662d8242f.png"
                alt="Stanley Aloo"
                className="relative w-full h-full rounded-full object-cover border-4 border-white shadow-sweet hover-scale z-10"
                style={{ boxShadow: 'var(--shadow-sweet)' }}
              />
              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-10 animate-bounce-soft"></div>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-6 animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-heading font-bold tracking-tight">
              <span className="text-foreground">Hello, I'm </span>
              <span className="bg-gradient-rainbow bg-clip-text text-transparent">
                Stanley Aloo
              </span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-medium bg-gradient-sweet bg-clip-text text-transparent">
              Media Technologist & Creative Storyteller
            </h2>
            
            <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed font-medium">
              Producer, video editor, and photographer with a passion for creating 
              high-quality content and telling stories through visual media.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button
                onClick={() => window.location.href = '/projects'}
                size="lg"
                className="bg-gradient-rainbow text-white font-semibold hover:scale-105 transition-all group shadow-sweet border-0"
              >
                View My Work
                <ChevronDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </Button>
              
              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                size="lg"
                className="border-2 border-primary/30 bg-white/50 backdrop-blur-sm text-foreground font-semibold hover:border-primary hover:bg-primary/10 hover:scale-105 transition-all"
              >
                View CV
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 pt-8">
              <a
                href="https://github.com/Aloostanley"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-white/70 backdrop-blur-sm border-2 border-white/50 hover:border-primary hover:bg-primary/10 hover:scale-110 transition-all shadow-soft"
              >
                <Github className="h-5 w-5 text-foreground" />
              </a>
              <a
                href="https://www.instagram.com/stan_creatives_"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-white/70 backdrop-blur-sm border-2 border-white/50 hover:border-primary hover:bg-primary/10 hover:scale-110 transition-all shadow-soft"
              >
                <Instagram className="h-5 w-5 text-foreground" />
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=254112036777&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-white/70 backdrop-blur-sm border-2 border-white/50 hover:border-accent hover:bg-accent/10 hover:scale-110 transition-all shadow-soft"
              >
                <MessageSquare className="h-5 w-5 text-foreground" />
              </a>
              <a
                href="mailto:your.email@gmail.com"
                className="p-4 rounded-full bg-white/70 backdrop-blur-sm border-2 border-white/50 hover:border-secondary hover:bg-secondary/10 hover:scale-110 transition-all shadow-soft"
              >
                <Mail className="h-5 w-5 text-foreground" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection("about")}
          className="p-3 rounded-full bg-white/70 backdrop-blur-sm border-2 border-white/50 hover:border-primary hover:scale-110 transition-all shadow-soft"
        >
          <ChevronDown className="h-6 w-6 text-primary" />
        </button>
      </div>
    </section>
  );
};

export default Hero;