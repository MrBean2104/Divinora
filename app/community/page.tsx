import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Heart, MessageCircle, Calendar, Globe, Star } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Community - Connect with Fellow Seekers | Divinora',
  description: 'Join our global community of spiritual seekers from all traditions and backgrounds.',
};

// This enables ISR (Incremental Static Regeneration)
export const revalidate = 3600; // Revalidate every hour

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 py-16">
        <div className="nav-container">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center space-x-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
              <Users className="h-8 w-8 text-blue-600" />
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Sacred Community
              </h1>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Connect with fellow spiritual seekers from all traditions and backgrounds in our global community of peace and understanding.
            </p>
          </div>
        </div>
      </div>

      <div className="nav-container py-12 space-y-16">
        {/* Community Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MessageCircle className="h-6 w-6 text-blue-600" />
                <span>Discussion Forums</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Engage in meaningful conversations about spirituality, philosophy, and personal growth with seekers from around the world.
              </p>
              <Button className="w-full">Join Discussions</Button>
            </CardContent>
          </Card>

          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="h-6 w-6 text-green-600" />
                <span>Virtual Events</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Participate in online meditation sessions, prayer circles, and interfaith dialogue events hosted by our community.
              </p>
              <Button className="w-full">View Events</Button>
            </CardContent>
          </Card>

          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Heart className="h-6 w-6 text-red-600" />
                <span>Support Groups</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Find comfort and guidance in our supportive groups for life challenges, grief, healing, and spiritual growth.
              </p>
              <Button className="w-full">Find Support</Button>
            </CardContent>
          </Card>

          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Globe className="h-6 w-6 text-purple-600" />
                <span>Global Connections</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Connect with spiritual communities and sacred sites around the world through our global network of partners.
              </p>
              <Button className="w-full">Explore Connections</Button>
            </CardContent>
          </Card>

          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Star className="h-6 w-6 text-amber-600" />
                <span>Mentorship Program</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Connect with experienced spiritual guides and mentors, or become a mentor yourself to help others on their journey.
              </p>
              <Button className="w-full">Learn More</Button>
            </CardContent>
          </Card>

          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="h-6 w-6 text-indigo-600" />
                <span>Local Chapters</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Find or create local Divinora chapters in your area for in-person gatherings, study groups, and community service.
              </p>
              <Button className="w-full">Find Chapters</Button>
            </CardContent>
          </Card>
        </div>

        {/* Community Guidelines */}
        <Card className="bg-gradient-to-br from-primary/5 to-secondary/5">
          <CardHeader>
            <CardTitle className="text-center text-2xl">Community Guidelines</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="font-semibold text-lg">Our Values</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                    Respect for all religious and spiritual traditions
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                    Inclusive and welcoming environment for all
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                    Constructive dialogue and peaceful discussion
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                    Support and compassion for fellow seekers
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-lg">Community Standards</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0" />
                    No discrimination or hate speech of any kind
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0" />
                    Respectful language and behavior at all times
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0" />
                    No proselytizing or forcing beliefs on others
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0" />
                    Privacy and confidentiality in support groups
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center space-y-6 bg-gradient-to-br from-primary/10 to-secondary/10 p-12 rounded-3xl">
          <h2 className="text-3xl font-bold">Join Our Sacred Community</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Become part of a global family of spiritual seekers dedicated to peace, understanding, and mutual support.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
            <Users className="h-5 w-5 mr-2" />
            Join Community
          </Button>
        </div>
      </div>
    </div>
  );
}