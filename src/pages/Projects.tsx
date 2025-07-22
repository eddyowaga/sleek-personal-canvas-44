import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, Play } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: "aKfEZ6sS92k",
      title: "The Secret Life of Rabbits",
      description: "A captivating documentary exploring the hidden world of rabbits and their natural behaviors.",
      category: "Documentary",
      type: "youtube"
    },
    {
      id: "5uxCYbWLymY", 
      title: "The Secret Ingredient",
      description: "A culinary journey uncovering the secret ingredients that make traditional dishes special.",
      category: "Food Documentary",
      type: "youtube"
    },
    {
      id: "uj0e5krcWUY",
      title: "Empowering Luo Voices",
      description: "A powerful documentary showcasing the stories and voices of the Luo community.",
      category: "Cultural Documentary",
      type: "youtube"
    },
    {
      id: "corporate-video-1",
      title: "Corporate Brand Story",
      description: "A professional brand storytelling video showcasing company values and vision.",
      category: "Corporate",
      type: "local",
      videoUrl: "/videos/corporate-brand.mp4",
      thumbnail: "/videos/thumbnails/corporate-brand.jpg"
    },
    {
      id: "wedding-highlights",
      title: "Wedding Highlights Reel",
      description: "Beautiful wedding cinematography capturing the most precious moments of the special day.",
      category: "Wedding",
      type: "local",
      videoUrl: "/videos/wedding-highlights.mp4",
      thumbnail: "/videos/thumbnails/wedding-highlights.jpg"
    },
    {
      id: "music-video-1",
      title: "Local Artist Music Video",
      description: "Creative music video production featuring local talent with dynamic visuals and storytelling.",
      category: "Music Video",
      type: "local",
      videoUrl: "/videos/music-video.mp4",
      thumbnail: "/videos/thumbnails/music-video.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-6 py-12">
        {/* Back Navigation */}
        <div className="mb-8">
          <Button 
            onClick={() => window.history.back()}
            variant="ghost" 
            className="text-muted-foreground hover:text-primary"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </div>

        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-foreground">My </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">Work</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of my creative projects, documentaries, and visual stories that showcase my passion for media production.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="group hover:shadow-xl transition-all duration-300 bg-card border-border">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={project.type === 'youtube' 
                    ? `https://img.youtube.com/vi/${project.id}/hqdefault.jpg`
                    : project.thumbnail || '/placeholder.svg'
                  }
                  alt={`${project.title} Thumbnail`}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Play className="h-12 w-12 text-white" />
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                {project.type === 'youtube' ? (
                  <a
                    href={`https://www.youtube.com/watch?v=${project.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-primary-glow transition-colors"
                  >
                    Watch on YouTube
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                ) : (
                  <div className="space-y-3">
                    {project.videoUrl && (
                      <video
                        controls
                        className="w-full rounded-lg"
                        poster={project.thumbnail}
                      >
                        <source src={project.videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    )}
                    <p className="text-sm text-muted-foreground">
                      Offline Project • Watch directly here
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-semibold mb-4">Like what you see?</h3>
          <p className="text-muted-foreground mb-6">
            Let's collaborate on your next media project
          </p>
          <Button 
            onClick={() => window.location.href = '/'}
            className="bg-gradient-primary hover:shadow-lg hover:shadow-primary/20"
          >
            Get in Touch
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;