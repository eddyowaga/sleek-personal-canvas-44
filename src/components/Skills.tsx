import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skillCategories = [
    {
      title: "Video Production",
      skills: [
        { name: "Video Editing", level: 95 },
        { name: "Camera Operation", level: 90 },
        { name: "Color Grading", level: 85 },
        { name: "Motion Graphics", level: 80 },
        { name: "Post-Production", level: 92 },
      ]
    },
    {
      title: "Audio & Photography",
      skills: [
        { name: "Photography", level: 90 },
        { name: "Audio Recording", level: 85 },
        { name: "Sound Design", level: 80 },
        { name: "Voice-Over", level: 88 },
        { name: "Photo Editing", level: 85 },
      ]
    },
    {
      title: "Creative & Technical",
      skills: [
        { name: "Script Writing", level: 85 },
        { name: "Lighting Setup", level: 80 },
        { name: "Visual Design", level: 75 },
        { name: "Project Management", level: 82 },
        { name: "Client Relations", level: 88 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <Card
                key={category.title}
                className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 animate-slide-up"
                style={{ animationDelay: `${categoryIndex * 0.2}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-xl text-center">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill.name}
                      className="space-y-2 animate-fade-in"
                      style={{ animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s` }}
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress
                        value={skill.level}
                        className="h-2"
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Tech Stack Icons */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold mb-8 animate-fade-in">
              Tools & Software I Use
            </h3>
            <div className="grid grid-cols-4 md:grid-cols-8 gap-8 max-w-4xl mx-auto">
              {[
                "Premiere Pro", "After Effects", "Photoshop", "Lightroom", "Final Cut", "DaVinci", "Pro Tools", "Logic Pro",
                "Avid", "Cinema 4D", "Audition", "Illustrator", "Canva", "OBS Studio", "Blender", "Figma"
              ].map((tool, index) => (
                <div
                  key={tool}
                  className="group p-4 bg-card border border-border/50 rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 animate-fade-in hover-scale"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="text-center">
                    <div className="w-8 h-8 mx-auto mb-2 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <span className="text-xs font-semibold text-primary">
                        {tool.slice(0, 2).toUpperCase()}
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                      {tool}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;