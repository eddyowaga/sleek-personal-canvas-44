import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "The Secret Life of Rabbits",
      description: "A captivating short documentary exploring the hidden world of rabbits, showcasing their behaviors and natural habitat through cinematic storytelling.",
      image: "https://img.youtube.com/vi/aKfEZ6sS92k/hqdefault.jpg",
      technologies: ["Video Editing", "Documentary", "Wildlife", "Cinematography", "Color Grading"],
      liveUrl: "https://www.youtube.com/watch?v=aKfEZ6sS92k",
      githubUrl: "#",
      featured: true
    },
    {
      title: "The Secret Ingredient",
      description: "A culinary journey discovering unique cooking techniques and ingredients, featuring professional food photography and engaging narrative structure.",
      image: "https://img.youtube.com/vi/5uxCYbWLymY/hqdefault.jpg",
      technologies: ["Food Photography", "Video Production", "Storytelling", "Audio Design"],
      liveUrl: "https://www.youtube.com/watch?v=5uxCYbWLymY",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Empowering Luo Voices",
      description: "A powerful documentary highlighting Luo culture and voices, combining traditional storytelling with modern production techniques.",
      image: "https://img.youtube.com/vi/uj0e5krcWUY/hqdefault.jpg",
      technologies: ["Cultural Documentation", "Interview Production", "Sound Design", "Community Stories"],
      liveUrl: "https://www.youtube.com/watch?v=uj0e5krcWUY",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Wedding Cinematography",
      description: "Elegant wedding films capturing precious moments with cinematic quality and emotional storytelling.",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop",
      technologies: ["Wedding Film", "Drone Footage", "Color Grading", "Audio Mixing"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Corporate Promotional Video",
      description: "Professional corporate videos showcasing company culture and services with polished production quality.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
      technologies: ["Corporate Video", "Brand Storytelling", "Professional Lighting", "Motion Graphics"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Music Video Production",
      description: "Creative music videos with artistic visual effects, synchronized editing, and performance cinematography.",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
      technologies: ["Music Video", "Visual Effects", "Performance Filming", "Creative Editing"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-background/50">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work and personal projects
            </p>
          </div>

          {/* Featured Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 animate-fade-in">Featured Projects</h3>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <Card
                  key={project.title}
                  className="group border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 overflow-hidden animate-slide-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="mt-2 text-muted-foreground">
                          {project.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-3 pt-2">
                      <Button size="sm" className="flex-1 bg-gradient-primary">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Watch Video
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        <Github className="h-4 w-4 mr-2" />
                        Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Other Projects */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 animate-fade-in">Other Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <Card
                  key={project.title}
                  className="group border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 overflow-hidden animate-fade-in hover-scale"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-muted-foreground line-clamp-3">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-3">
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1 text-xs">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Watch
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1 text-xs">
                        <Github className="h-3 w-3 mr-1" />
                        Info
                      </Button>
                    </div>
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

export default Projects;
