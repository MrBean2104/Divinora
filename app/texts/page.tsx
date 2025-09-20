import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { holyBooks } from '@/lib/content';
import { Book, Scroll, Globe, Calendar } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sacred Texts - Universal Wisdom | Divinora',
  description: 'Explore sacred texts and holy books from all world religions and spiritual traditions.',
};

// This enables ISR (Incremental Static Regeneration)
export const revalidate = 3600; // Revalidate every hour

export default function TextsPage() {
  // Group books by religion
  const booksByReligion = holyBooks.reduce((acc, book) => {
    if (!acc[book.religion]) {
      acc[book.religion] = [];
    }
    acc[book.religion].push(book);
    return acc;
  }, {} as Record<string, typeof holyBooks>);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 py-16">
        <div className="nav-container">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center space-x-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
              <Book className="h-8 w-8 text-amber-600" />
              <h1 className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                Sacred Texts
              </h1>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the wisdom of ages through sacred texts and holy books from all world religions and spiritual traditions.
            </p>
          </div>
        </div>
      </div>

      <div className="nav-container py-12 space-y-16">
        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="text-center">
            <CardContent className="pt-6">
              <Book className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-amber-600">{holyBooks.length}</div>
              <p className="text-muted-foreground">Sacred Texts</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Globe className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-blue-600">{Object.keys(booksByReligion).length}</div>
              <p className="text-muted-foreground">Traditions</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Calendar className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-green-600">5000+</div>
              <p className="text-muted-foreground">Years of Wisdom</p>
            </CardContent>
          </Card>
        </div>

        {/* Books by Religion */}
        {Object.entries(booksByReligion).map(([religion, books]) => (
          <section key={religion}>
            <div className="flex items-center space-x-2 mb-8">
              <Scroll className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold">{religion}</h2>
              <Badge variant="secondary">{books.length} texts</Badge>
            </div>
            <div className="content-grid">
              {books.map((book) => (
                <Card key={book.id} className="card-hover">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>{book.name}</span>
                      <Book className="h-5 w-5 text-amber-600" />
                    </CardTitle>
                    <div className="flex gap-2">
                      <Badge variant="outline">{book.category}</Badge>
                      <Badge variant="secondary">{book.language}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {book.description}
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Verses:</span>
                        <span className="font-medium">{book.verses}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Chapters:</span>
                        <span className="font-medium">{book.chapters}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}