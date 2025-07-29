import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar } from 'lucide-react';

interface Article {
  id: string;
  title: string;
  content: string;
  imageUrl?: string;
  youtubeUrl?: string;
  createdAt: string;
  published: boolean;
}

const LatestUpdates = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const savedArticles = localStorage.getItem('portfolio_articles');
    if (savedArticles) {
      const allArticles = JSON.parse(savedArticles);
      // Only show published articles, sorted by newest first
      const publishedArticles = allArticles
        .filter((article: Article) => article.published)
        .sort((a: Article, b: Article) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
        .slice(0, 6); // Show only latest 6 articles
      setArticles(publishedArticles);
    }
  }, []);

  const extractYouTubeId = (url: string) => {
    const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (articles.length === 0) {
    return null; // Don't show the section if there are no articles
  }

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Updates</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stay updated with my latest projects, insights, and creative work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {articles.map((article) => (
            <Card key={article.id} className="group hover:shadow-xl transition-all duration-300 bg-card border-border">
              {article.imageUrl && (
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={article.imageUrl}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              
              {article.youtubeUrl && (
                <div className="relative overflow-hidden rounded-t-lg">
                  <div className="w-full h-48 bg-black/10">
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${extractYouTubeId(article.youtubeUrl)}`}
                      title={article.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="rounded-t-lg"
                    ></iframe>
                  </div>
                </div>
              )}

              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4" />
                  {formatDate(article.createdAt)}
                </div>
                <CardTitle className="group-hover:text-primary transition-colors duration-200">
                  {article.title}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                  {article.content}
                </p>
                
                <div className="flex gap-2 flex-wrap">
                  {article.youtubeUrl && (
                    <Badge variant="secondary" className="text-xs">
                      Video
                    </Badge>
                  )}
                  {article.imageUrl && (
                    <Badge variant="outline" className="text-xs">
                      Featured Image
                    </Badge>
                  )}
                  <Badge variant="outline" className="text-xs">
                    {formatDate(article.createdAt)}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestUpdates;