'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { DeityModal } from '@/components/deity-modal';
import { StoryModal } from '@/components/story-modal';
import { TeachingModal } from '@/components/teaching-modal';
import { 
  Book, 
  Calendar, 
  Heart, 
  Play, 
  Sparkles, 
  Star,
  Users,
  Scroll
} from 'lucide-react';

interface ReligionClientPageProps {
  religion: {
    name: string;
    icon: string;
    description: string;
    color: string;
    bgColor: string;
  };
  religionDeities: any[];
  religionBooks: any[];
  religionFestivals: any[];
  religionStories: any[];
  religionTeachings: any[];
  religionVideos: any[];
}

export function ReligionClientPage({
  religion,
  religionDeities,
  religionBooks,
  religionFestivals,
  religionStories,
  religionTeachings,
  religionVideos
}: ReligionClientPageProps) {
  const [selectedDeity, setSelectedDeity] = useState<any>(null);
  const [selectedStory, setSelectedStory] = useState<any>(null);
  const [selectedTeaching, setSelectedTeaching] = useState<any>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      {/* Hero Section */}
      <div className={`bg-gradient-to-br ${religion.bgColor} py-16`}>
        <div className="nav-container">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center space-x-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
              <span className="text-4xl">{religion.icon}</span>
              <h1 className={`text-4xl font-bold bg-gradient-to-r ${religion.color} bg-clip-text text-transparent`}>
                {religion.name}
              </h1>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {religion.description}
            </p>
          </div>
        </div>
      </div>

      <div className="nav-container py-12 space-y-16">
        {/* Deities/Figures Section */}
        {religionDeities.length > 0 && (
          <section>
            <div className="flex items-center space-x-2 mb-8">
              <Sparkles className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold">Sacred Figures</h2>
            </div>
            <div className="content-grid">
              {religionDeities.map((deity) => (
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
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {deity.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {deity.attributes.slice(0, 3).map((attr, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {attr}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Holy Books Section */}
        {religionBooks.length > 0 && (
          <section>
            <div className="flex items-center space-x-2 mb-8">
              <Book className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold">Sacred Texts</h2>
            </div>
            <div className="content-grid">
              {religionBooks.map((book) => (
                <Card key={book.id} className="card-hover">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>{book.name}</span>
                      <Scroll className="h-5 w-5 text-amber-600" />
                    </CardTitle>
                    <Badge variant="outline">{book.category}</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {book.description}
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Language:</span>
                        <span className="font-medium">{book.language}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Verses:</span>
                        <span className="font-medium">{book.verses}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Festivals Section */}
        {religionFestivals.length > 0 && (
          <section>
            <div className="flex items-center space-x-2 mb-8">
              <Calendar className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold">Sacred Festivals</h2>
            </div>
            <div className="content-grid">
              {religionFestivals.map((festival) => (
                <Card key={festival.id} className="card-hover">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>{festival.name}</span>
                      <Heart className="h-5 w-5 text-red-500" />
                    </CardTitle>
                    <Badge variant="secondary">{festival.date}</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
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
          </section>
        )}

        {/* Sacred Stories Section */}
        {religionStories.length > 0 && (
          <section>
            <div className="flex items-center space-x-2 mb-8">
              <Book className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold">Sacred Stories</h2>
            </div>
            <div className="content-grid">
              {religionStories.map((story) => (
                <Card 
                  key={story.id} 
                  className="card-hover group cursor-pointer"
                  onClick={() => setSelectedStory(story)}
                >
                  <CardHeader>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {story.title}
                    </CardTitle>
                    <div className="flex gap-2">
                      <Badge variant="outline">{story.category}</Badge>
                      <Badge variant="secondary">{story.era}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {story.description}
                    </p>
                    <div className="bg-secondary/50 p-3 rounded-lg">
                      <p className="text-sm font-medium text-primary">
                        Universal Theme: {story.universalTheme}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Teachings Section */}
        {religionTeachings.length > 0 && (
          <section>
            <div className="flex items-center space-x-2 mb-8">
              <Users className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold">Spiritual Teachings</h2>
            </div>
            <div className="content-grid">
              {religionTeachings.map((teaching) => (
                <Card 
                  key={teaching.id} 
                  className="card-hover group cursor-pointer"
                  onClick={() => setSelectedTeaching(teaching)}
                >
                  <CardHeader>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {teaching.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {teaching.description}
                    </p>
                    <div className="space-y-2">
                      <h4 className="font-medium text-sm">Key Points:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {teaching.keyPoints.slice(0, 2).map((point, index) => (
                          <li key={index} className="flex items-start">
                            <span className="w-1 h-1 bg-primary rounded-full mt-2 mr-2 flex-shrink-0" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Devotional Videos Section */}
        {religionVideos.length > 0 && (
          <section>
            <div className="flex items-center space-x-2 mb-8">
              <Play className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold">Devotional Content</h2>
            </div>
            <div className="content-grid">
              {religionVideos.map((video) => (
                <Card key={video.id} className="card-hover">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span className="line-clamp-2">{video.title}</span>
                      <Play className="h-5 w-5 text-red-500 flex-shrink-0" />
                    </CardTitle>
                    <Badge variant="secondary">{video.category}</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {video.description}
                    </p>
                    <Button 
                      asChild 
                      className="w-full bg-red-600 hover:bg-red-700 text-white"
                    >
                      <a 
                        href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Play className="h-4 w-4 mr-2" />
                        Watch on YouTube
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}
      </div>

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
    </div>
  );
}