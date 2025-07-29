import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Eye, EyeOff, Plus, Trash2, Edit } from 'lucide-react';

interface Article {
  id: string;
  title: string;
  content: string;
  imageUrl?: string;
  youtubeUrl?: string;
  createdAt: string;
  published: boolean;
}

const ContentEditor = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [articles, setArticles] = useState<Article[]>([]);
  const [editingArticle, setEditingArticle] = useState<Article | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const { toast } = useToast();

  // Simple password - in a real app, this would be more secure
  const ADMIN_PASSWORD = 'admin2024';

  const [formData, setFormData] = useState({
    title: '',
    content: '',
    imageUrl: '',
    youtubeUrl: '',
    published: true
  });

  useEffect(() => {
    const savedArticles = localStorage.getItem('portfolio_articles');
    if (savedArticles) {
      setArticles(JSON.parse(savedArticles));
    }
  }, []);

  const saveArticles = (newArticles: Article[]) => {
    localStorage.setItem('portfolio_articles', JSON.stringify(newArticles));
    setArticles(newArticles);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      toast({
        title: "Login successful",
        description: "Welcome to the content editor!",
      });
    } else {
      toast({
        title: "Invalid password",
        description: "Please check your password and try again.",
        variant: "destructive",
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.content) {
      toast({
        title: "Missing fields",
        description: "Please fill in title and content.",
        variant: "destructive",
      });
      return;
    }

    const article: Article = {
      id: editingArticle?.id || Date.now().toString(),
      title: formData.title,
      content: formData.content,
      imageUrl: formData.imageUrl || undefined,
      youtubeUrl: formData.youtubeUrl || undefined,
      createdAt: editingArticle?.createdAt || new Date().toISOString(),
      published: formData.published
    };

    let newArticles;
    if (editingArticle) {
      newArticles = articles.map(a => a.id === article.id ? article : a);
    } else {
      newArticles = [article, ...articles];
    }

    saveArticles(newArticles);
    setFormData({ title: '', content: '', imageUrl: '', youtubeUrl: '', published: true });
    setEditingArticle(null);

    toast({
      title: editingArticle ? "Article updated" : "Article created",
      description: "Your content has been saved successfully!",
    });
  };

  const handleEdit = (article: Article) => {
    setEditingArticle(article);
    setFormData({
      title: article.title,
      content: article.content,
      imageUrl: article.imageUrl || '',
      youtubeUrl: article.youtubeUrl || '',
      published: article.published
    });
  };

  const handleDelete = (id: string) => {
    const newArticles = articles.filter(a => a.id !== id);
    saveArticles(newArticles);
    toast({
      title: "Article deleted",
      description: "The article has been removed.",
    });
  };

  const extractYouTubeId = (url: string) => {
    const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-center">Content Editor Access</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter admin password"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-1/2 -translate-y-1/2 h-6 w-6"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Content Editor</h1>
          <Button onClick={() => setIsAuthenticated(false)} variant="outline">
            Logout
          </Button>
        </div>

        {/* Article Form */}
        <Card>
          <CardHeader>
            <CardTitle>{editingArticle ? 'Edit Article' : 'Create New Article'}</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="Article title"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="content">Content</Label>
                <Textarea
                  id="content"
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  placeholder="Write your article content here..."
                  rows={6}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="imageUrl">Image URL (optional)</Label>
                <Input
                  id="imageUrl"
                  value={formData.imageUrl}
                  onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                  placeholder="https://example.com/image.jpg"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="youtubeUrl">YouTube URL (optional)</Label>
                <Input
                  id="youtubeUrl"
                  value={formData.youtubeUrl}
                  onChange={(e) => setFormData({ ...formData, youtubeUrl: e.target.value })}
                  placeholder="https://www.youtube.com/watch?v=..."
                />
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="published"
                  checked={formData.published}
                  onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
                />
                <Label htmlFor="published">Publish immediately</Label>
              </div>

              <div className="flex gap-2">
                <Button type="submit">
                  <Plus className="h-4 w-4 mr-2" />
                  {editingArticle ? 'Update' : 'Create'} Article
                </Button>
                {editingArticle && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => {
                      setEditingArticle(null);
                      setFormData({ title: '', content: '', imageUrl: '', youtubeUrl: '', published: true });
                    }}
                  >
                    Cancel
                  </Button>
                )}
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Articles List */}
        <Card>
          <CardHeader>
            <CardTitle>Published Articles ({articles.length})</CardTitle>
          </CardHeader>
          <CardContent>
            {articles.length === 0 ? (
              <p className="text-muted-foreground text-center py-8">No articles yet. Create your first article above!</p>
            ) : (
              <div className="space-y-4">
                {articles.map((article) => (
                  <div key={article.id} className="border rounded-lg p-4 space-y-2">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="font-semibold">{article.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {new Date(article.createdAt).toLocaleDateString()}
                          {!article.published && " • Draft"}
                        </p>
                        <p className="text-sm mt-2 line-clamp-2">{article.content}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleEdit(article)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => handleDelete(article.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    {article.youtubeUrl && (
                      <div className="mt-2">
                        <span className="text-xs bg-secondary px-2 py-1 rounded">YouTube: {extractYouTubeId(article.youtubeUrl)}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ContentEditor;