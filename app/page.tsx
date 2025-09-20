"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  deities, 
  holyBooks, 
  festivals, 
  sacredStories, 
  teachings,
  bhaktiVideos 
} from '@/lib/content';
import { DeityModal } from '@/components/deity-modal';
import { StoryModal } from '@/components/story-modal';
import { TeachingModal } from '@/components/teaching-modal';
import { AuthDialog } from '@/components/auth/auth-dialog';
import { supabase } from '@/lib/supabase';
import { 
  Sparkles, 
  Book, 
  Calendar, 
  Heart, 
  Play, 
  Star,
  Users,
  Globe,
  ArrowRight,
  Zap,
  Shield,
  Crown
} from 'lucide-react';

export default function HomePage() {
  const [selectedDeity, setSelectedDeity] = useState<any>(null);
  const [selectedStory, setSelectedStory] = useState<any>(null);
  const [selectedTeaching, setSelectedTeaching] = useState<any>(null);
  const [showAuthDialog, setShowAuthDialog] = useState(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // Get initial user
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user ?? null);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const handleAuthSuccess = () => {
    setShowAuthDialog(false);
  };

  // Get featured content (first few items from each category)
  const featuredDeities = deities.slice(0, 6);
  const featuredBooks = holyBooks.slice(0, 6);
  const featuredFestivals = festivals.slice(0, 6);
  const featuredStories = sacredStories.slice(0, 6);
  const featuredTeachings = teachings.slice(0, 3);
  const featuredVideos = bhaktiVideos.slice(0, 6);

  const religions = [
    { name: 'Hinduism', path: '/religions/hinduism', icon: '🕉️', color: 'from-orange-500 to-red-500' },
    { name: 'Christianity', path: '/religions/christianity', icon: '✝️', color: 'from-blue-500 to-purple-500' },
    { name: 'Islam', path: '/religions/islam', icon: '☪️', color: 'from-green-500 to-teal-500' },
    { name: 'Buddhism', path: '/religions/buddhism', icon: '☸️', color: 'from-yellow-500 to-orange-500' },
    { name: 'Sikhism', path: '/religions/sikhism', icon: '☬', color: 'from-indigo-500 to-blue-500' },
    { name: 'Judaism', path: '/religions/judaism', icon: '✡️', color: 'from-purple-500 to-pink-500' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-amber-50 dark:from-purple-950/20 dark:via-pink-950/20 dark:to-amber-950/20">
        {/* Background Pattern */}
        <div className="absolute inset-0 sacred-pattern opacity-30" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-amber-400/20 to-orange-400/20 rounded-full blur-3xl" />
        
        <div className="relative nav-container py-24 text-center">
          <div className="space-y-8 max-w-4xl mx-auto">
            {/* Main Heading */}
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                <Sparkles className="h-4 w-4 text-purple-600 animate-pulse" />
                <span className="text-sm font-medium text-purple-700 dark:text-purple-300">
                  Universal Spiritual Wisdom
                </span>
                <Heart className="h-4 w-4 text-pink-600 animate-pulse" />
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-amber-600 bg-clip-text text-transparent leading-tight">
                Divinora
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Explore divine wisdom, sacred texts, and spiritual teachings from all world religions and traditions
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 px-8 py-4 text-lg"
              >
                <Sparkles className="h-5 w-5 mr-2" />
                Begin Sacred Journey
              </Button>
              
              {!user && (
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => setShowAuthDialog(true)}
                  className="border-2 border-purple-200 hover:border-purple-400 hover:bg-purple-50 dark:hover:bg-purple-950/30 px-8 py-4 text-lg"
                >
                  <Users className="h-5 w-5 mr-2" />
                  Join Community
                </Button>
              )}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-purple-600">{deities.length}+</div>
                <div className="text-sm text-muted-foreground">Sacred Figures</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-pink-600">{holyBooks.length}+</div>
                <div className="text-sm text-muted-foreground">Holy Texts</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-amber-600">{festivals.length}+</div>
                <div className="text-sm text-muted-foreground">Festivals</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-orange-600">6+</div>
                <div className="text-sm text-muted-foreground">Traditions</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Religions Section */}
      <section className="py-16 bg-gradient-to-br from-background to-muted/20">
        <div className="nav-container">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
              <Globe className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Explore Traditions</span>
            </div>
            <h2 className="text-3xl font-bold mb-4">Sacred Traditions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover the wisdom and beauty of world religions and spiritual traditions
            </p>
          </div>
          
          <div className="content-grid">
            {religions.map((religion) => (
              <Link key={religion.name} href={religion.path}>
                <Card className="card-hover group h-full">
                  <CardContent className="p-8 text-center space-y-4">
                    <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {religion.icon}
                    </div>
                    <h3 className={`text-xl font-bold bg-gradient-to-r ${religion.color} bg-clip-text text-transparent`}>
                      {religion.name}
                    </h3>
                    <ArrowRight className="h-5 w-5 mx-auto text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Sacred Figures */}
      <section className="py-16">
        <div className="nav-container">
          <div className="flex items-center justify-between mb-12">
            <div>
              <div className="inline-flex items-center space-x-2 bg-amber-500/10 px-4 py-2 rounded-full mb-4">
                <Crown className="h-4 w-4 text-amber-600" />
                <span className="text-sm font-medium text-amber-700 dark:text-amber-400">Divine Wisdom</span>
              </div>
              <h2 className="text-3xl font-bold">Sacred Figures</h2>
              <p className="text-muted-foreground mt-2">Meet the divine beings and spiritual teachers</p>
            </div>
            <Button variant="outline" asChild>
              <Link href="/religions/hinduism">
                View All
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
          
          <div className="content-grid">
            {featuredDeities.map((deity) => (
              <Card 
                key={deity.id} 
                className="card-hover group cursor-pointer"
                onClick={() => setSelectedDeity(deity)}
              >
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="group-hover:text-primary transition-colors">
                      {deity.name}
                    </span>
                    <Star className="h-5 w-5 text-amber-500" />
                  </CardTitle>
                  <Badge variant="secondary">{deity.religion}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground line-clamp-3">
                    {deity.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Sacred Texts */}
      <section className="py-16 bg-gradient-to-br from-muted/20 to-background">
        <div className="nav-container">
          <div className="flex items-center justify-between mb-12">
            <div>
              <div className="inline-flex items-center space-x-2 bg-blue-500/10 px-4 py-2 rounded-full mb-4">
                <Book className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-700 dark:text-blue-400">Sacred Knowledge</span>
              </div>
              <h2 className="text-3xl font-bold">Holy Texts</h2>
              <p className="text-muted-foreground mt-2">Explore ancient wisdom and divine revelations</p>
            </div>
            <Button variant="outline" asChild>
              <Link href="/texts">
                View All
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
          
          <div className="content-grid">
            {featuredBooks.map((book) => (
              <Card key={book.id} className="card-hover">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{book.name}</span>
                    <Book className="h-5 w-5 text-blue-600" />
                  </CardTitle>
                  <div className="flex gap-2">
                    <Badge variant="outline">{book.religion}</Badge>
                    <Badge variant="secondary">{book.category}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground line-clamp-3">
                    {book.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Festivals */}
      <section className="py-16">
        <div className="nav-container">
          <div className="flex items-center justify-between mb-12">
            <div>
              <div className="inline-flex items-center space-x-2 bg-pink-500/10 px-4 py-2 rounded-full mb-4">
                <Calendar className="h-4 w-4 text-pink-600" />
                <span className="text-sm font-medium text-pink-700 dark:text-pink-400">Sacred Celebrations</span>
              </div>
              <h2 className="text-3xl font-bold">Festivals</h2>
              <p className="text-muted-foreground mt-2">Celebrate divine joy and spiritual unity</p>
            </div>
            <Button variant="outline" asChild>
              <Link href="/festivals">
                View All
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
          
          <div className="content-grid">
            {featuredFestivals.map((festival) => (
              <Card key={festival.id} className="card-hover">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{festival.name}</span>
                    <Heart className="h-5 w-5 text-red-500" />
                  </CardTitle>
                  <div className="flex gap-2">
                    <Badge variant="outline">{festival.religion}</Badge>
                    <Badge variant="secondary">{festival.date}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground line-clamp-2 mb-3">
                    {festival.description}
                  </p>
                  <div className="bg-primary/5 p-3 rounded-lg">
                    <p className="text-sm italic">
                      "{festival.universalMessage}"
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="nav-container text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                <Zap className="h-4 w-4 text-primary animate-pulse" />
                <span className="text-sm font-medium text-primary">Transform Your Life</span>
                <Shield className="h-4 w-4 text-secondary animate-pulse" />
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Begin Your Sacred Journey
              </h2>
              
              <p className="text-xl text-muted-foreground">
                Join millions of seekers discovering divine wisdom, inner peace, and spiritual growth through our comprehensive platform
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {!user ? (
                <>
                  <Button 
                    size="lg" 
                    onClick={() => setShowAuthDialog(true)}
                    className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 px-8 py-4 text-lg"
                  >
                    <Sparkles className="h-5 w-5 mr-2" />
                    Start Free Journey
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    asChild
                    className="border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5 px-8 py-4 text-lg"
                  >
                    <Link href="/religions/hinduism">
                      <Book className="h-5 w-5 mr-2" />
                      Explore Wisdom
                    </Link>
                  </Button>
                </>
              ) : (
                <Button 
                  size="lg" 
                  asChild
                  className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 px-8 py-4 text-lg"
                >
                  <Link href="/community">
                    <Users className="h-5 w-5 mr-2" />
                    Join Community
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Modals */}
      <DeityModal
        deity={selectedDeity}
        isOpen={!!selectedDeity}
        onClose={() => setSelectedDeity(null)}
      />
      
      <StoryModal
        story={selectedStory}
        isOpen={!!selectedStory}
        onClose={() => setSelectedStory(null)}
      />
      
      <TeachingModal
        teaching={selectedTeaching}
        isOpen={!!selectedTeaching}
        onClose={() => setSelectedTeaching(null)}
      />

      <AuthDialog
        isOpen={showAuthDialog}
        onClose={() => setShowAuthDialog(false)}
        onSuccess={handleAuthSuccess}
      />
    </div>
  );
}