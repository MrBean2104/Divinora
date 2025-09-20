import { Metadata } from 'next';
import { FestivalSection } from '@/components/festival-section';
import { Calendar, Globe, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { festivals } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Sacred Festivals - Universal Celebrations | Divinora',
  description: 'Discover sacred festivals and celebrations from all world religions and spiritual traditions.',
};

// This enables ISR (Incremental Static Regeneration)
export const revalidate = 3600; // Revalidate every hour

export default function FestivalsPage() {
  const religionCount = new Set(festivals.map(f => f.religion)).size;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 py-16">
        <div className="nav-container">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center space-x-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
              <Calendar className="h-8 w-8 text-purple-600" />
              <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Sacred Festivals
              </h1>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Celebrate the divine through festivals and sacred celebrations from all world religions and spiritual traditions.
            </p>
          </div>
        </div>
      </div>

      <div className="nav-container py-12 space-y-16">
        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="text-center">
            <CardContent className="pt-6">
              <Calendar className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-purple-600">{festivals.length}</div>
              <p className="text-muted-foreground">Sacred Festivals</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Globe className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-blue-600">{religionCount}</div>
              <p className="text-muted-foreground">Traditions</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Heart className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-red-600">∞</div>
              <p className="text-muted-foreground">Universal Joy</p>
            </CardContent>
          </Card>
        </div>

        {/* Festivals Section */}
        <FestivalSection />
      </div>
    </div>
  );
}