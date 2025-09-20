import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Heart, Brain, Leaf, Sun, Moon } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Meditation & Mindfulness - Inner Peace | Divinora',
  description: 'Discover meditation practices and mindfulness techniques from various spiritual traditions.',
};

// This enables ISR (Incremental Static Regeneration)
export const revalidate = 3600; // Revalidate every hour

export default function MeditationPage() {
  const meditationTypes = [
    {
      name: 'Mindfulness Meditation',
      description: 'Buddhist-inspired practice focusing on present-moment awareness and breath observation.',
      icon: Brain,
      color: 'text-blue-600',
      bgColor: 'from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20'
    },
    {
      name: 'Loving-Kindness Meditation',
      description: 'Cultivate compassion and love for yourself and all beings through guided visualization.',
      icon: Heart,
      color: 'text-red-600',
      bgColor: 'from-red-50 to-pink-50 dark:from-red-950/20 dark:to-pink-950/20'
    },
    {
      name: 'Mantra Meditation',
      description: 'Hindu and Buddhist practice using sacred sounds and repetitive phrases for focus.',
      icon: Star,
      color: 'text-amber-600',
      bgColor: 'from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20'
    },
    {
      name: 'Nature Meditation',
      description: 'Connect with the divine through contemplation of natural elements and creation.',
      icon: Leaf,
      color: 'text-green-600',
      bgColor: 'from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20'
    },
    {
      name: 'Contemplative Prayer',
      description: 'Christian meditation focusing on divine presence and spiritual communion.',
      icon: Sun,
      color: 'text-purple-600',
      bgColor: 'from-purple-50 to-indigo-50 dark:from-purple-950/20 dark:to-indigo-950/20'
    },
    {
      name: 'Sufi Meditation',
      description: 'Islamic mystical practices including dhikr (remembrance of Allah) and whirling.',
      icon: Moon,
      color: 'text-teal-600',
      bgColor: 'from-teal-50 to-cyan-50 dark:from-teal-950/20 dark:to-cyan-950/20'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-950/20 dark:to-teal-950/20 py-16">
        <div className="nav-container">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center space-x-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
              <Star className="h-8 w-8 text-green-600" />
              <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                Meditation & Mindfulness
              </h1>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover inner peace and spiritual growth through meditation practices from various traditions around the world.
            </p>
          </div>
        </div>
      </div>

      <div className="nav-container py-12 space-y-16">
        {/* Meditation Types */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meditation Practices</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore different meditation techniques from various spiritual traditions to find what resonates with your soul.
            </p>
          </div>
          
          <div className="content-grid">
            {meditationTypes.map((type) => {
              const Icon = type.icon;
              return (
                <Card key={type.name} className="card-hover">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg bg-gradient-to-br ${type.bgColor}`}>
                        <Icon className={`h-6 w-6 ${type.color}`} />
                      </div>
                      <span>{type.name}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {type.description}
                    </p>
                    <Button className="w-full">
                      Start Practice
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-gradient-to-br from-primary/5 to-secondary/5 p-12 rounded-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Benefits of Meditation</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Regular meditation practice brings numerous benefits to your physical, mental, and spiritual well-being.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg">Mental Clarity</h3>
              <p className="text-muted-foreground">
                Improve focus, concentration, and mental clarity through regular practice.
              </p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg">Emotional Balance</h3>
              <p className="text-muted-foreground">
                Develop emotional stability, reduce stress, and cultivate inner peace.
              </p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg">Spiritual Growth</h3>
              <p className="text-muted-foreground">
                Deepen your connection to the divine and expand spiritual awareness.
              </p>
            </div>
          </div>
        </section>

        {/* Getting Started */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Start Your Journey</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Begin your meditation practice with these simple steps and guided resources.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="pt-8">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Choose Your Practice</h3>
                <p className="text-muted-foreground">
                  Select a meditation style that resonates with your spiritual path and goals.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-8">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Create Sacred Space</h3>
                <p className="text-muted-foreground">
                  Set up a quiet, comfortable space dedicated to your meditation practice.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-8">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Practice Regularly</h3>
                <p className="text-muted-foreground">
                  Start with short sessions and gradually build a consistent daily practice.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <div className="text-center space-y-6 bg-gradient-to-br from-green-500/10 to-teal-500/10 p-12 rounded-3xl">
          <h2 className="text-3xl font-bold">Begin Your Inner Journey</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Take the first step towards inner peace and spiritual growth through the transformative power of meditation.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700">
            <Star className="h-5 w-5 mr-2" />
            Start Meditating Now
          </Button>
        </div>
      </div>
    </div>
  );
}