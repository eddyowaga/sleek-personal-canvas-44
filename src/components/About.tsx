import { Card, CardContent } from "@/components/ui/card";
import { Camera, Video, Mic, PenTool } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Video,
      title: "Video Production",
      description: "Expert in video editing, camera operation, and creating compelling visual narratives."
    },
    {
      icon: Camera,
      title: "Photography",
      description: "Professional photography with DSLR equipment and creative visual composition."
    },
    {
      icon: Mic,
      title: "Audio Production",
      description: "Voice-over recording, sound design, and audio post-production expertise."
    },
    {
      icon: PenTool,
      title: "Creative Design",
      description: "Script development, visual design, and comprehensive media production planning."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              About <span className="bg-gradient-rainbow bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto font-medium">
              Passionate media creator with a love for visual storytelling
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 animate-slide-up">
              <h3 className="text-2xl font-heading font-semibold text-foreground">
                Creating Stories Through Visual Media
              </h3>
              
              <div className="space-y-4 text-foreground/80 leading-relaxed font-medium">
                <p>
                  I'm Stanley Aloo, a passionate Media Technologist currently pursuing my studies at the Kenya Institute of Mass Communication. With a solid foundation in media production and a genuine love for storytelling, I bring creativity and technical expertise to every project I undertake.
                </p>
                
                <p>
                  I specialize in comprehensive media production, from concept to completion. Whether I'm behind the camera capturing the perfect shot, in the editing suite crafting compelling narratives, or setting up professional lighting and sound systems, I approach each project with meticulous attention to detail and creative vision.
                </p>
                
                <p>
                  My expertise spans video production and editing, camera operation with both video and DSLR equipment, audio production including voice-over recording and sound design, visual design for impactful graphics, and script development for compelling narratives.
                </p>
                
                <p>
                  I believe great media production combines technical proficiency with creative storytelling. My bilingual capabilities in English and Swahili allow me to connect with diverse audiences, and I'm always eager to learn new techniques and create something remarkable.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-4">
                {["Video Editing", "Photography", "Videography", "Script Writing", "Lighting", "Sound Design"].map((skill, index) => (
                  <span
                    key={skill}
                    className="px-4 py-2 text-sm bg-gradient-sweet text-white font-semibold rounded-full hover:scale-105 transition-all shadow-soft animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Content - Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <Card
                  key={item.title}
                  className="group border-white/50 bg-white/70 backdrop-blur-sm hover:border-primary/50 hover:scale-105 transition-all duration-300 shadow-sweet animate-fade-in rounded-2xl"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto w-12 h-12 mb-4 rounded-full bg-gradient-sweet flex items-center justify-center group-hover:scale-110 transition-all shadow-soft">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="text-lg font-heading font-semibold mb-2 text-foreground">{item.title}</h4>
                    <p className="text-sm text-foreground/70 font-medium">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;