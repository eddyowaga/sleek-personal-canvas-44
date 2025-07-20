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
    <section id="about" className="py-20 bg-background/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate developer with a love for creating innovative solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 animate-slide-up">
              <h3 className="text-2xl font-semibold text-foreground">
                Creating Stories Through Visual Media
              </h3>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
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
                {["Video Editing", "Photography", "Videography", "Script Writing", "Lighting", "Sound Design"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm bg-primary/10 text-primary border border-primary/20 rounded-full"
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
                  className="group border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto w-12 h-12 mb-4 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
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