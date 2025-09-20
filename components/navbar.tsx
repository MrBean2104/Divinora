"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { 
  Menu, 
  Sun, 
  Moon, 
  ChevronDown,
  Home,
  Book,
  Users,
  Calendar,
  Star,
  Heart,
  Sparkles
} from 'lucide-react';
import { AuthDialog } from '@/components/auth/auth-dialog';
import { UserNav } from '@/components/user-nav';
import { supabase } from '@/lib/supabase';

const religions = [
  { name: 'Hinduism', path: '/religions/hinduism', icon: '🕉️' },
  { name: 'Christianity', path: '/religions/christianity', icon: '✝️' },
  { name: 'Islam', path: '/religions/islam', icon: '☪️' },
  { name: 'Buddhism', path: '/religions/buddhism', icon: '☸️' },
  { name: 'Sikhism', path: '/religions/sikhism', icon: '☬' },
  { name: 'Judaism', path: '/religions/judaism', icon: '✡️' },
  { name: 'Others', path: '/religions/others', icon: '🌍' },
];

const navigationItems = [
  { name: 'Home', path: '/', icon: Home },
  { name: 'Sacred Texts', path: '/texts', icon: Book },
  { name: 'Festivals', path: '/festivals', icon: Calendar },
  { name: 'Community', path: '/community', icon: Users },
  { name: 'Meditation', path: '/meditation', icon: Star },
];

export function Navbar() {
  const [user, setUser] = useState<any>(null);
  const [showAuthDialog, setShowAuthDialog] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Get initial user
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user ?? null);
        if (event === 'SIGNED_IN') {
          setShowAuthDialog(false);
        }
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const handleAuthSuccess = () => {
    setShowAuthDialog(false);
  };

  if (!mounted) {
    return null;
  }

  return (
    <>
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="nav-container flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition-opacity duration-300" />
            </div>
            <span className="hidden font-bold text-xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent sm:inline-block">
              Divinora
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.path}
                  className="flex items-center space-x-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200 hover:scale-105"
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </Link>
              );
            })}

            {/* Religions Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-1 text-sm font-medium hover:scale-105 transition-transform duration-200">
                  <Heart className="h-4 w-4" />
                  <span>Religions</span>
                  <ChevronDown className="h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-0 shadow-2xl rounded-2xl p-2">
                <div className="px-3 py-2">
                  <p className="text-sm font-medium text-muted-foreground">Explore Traditions</p>
                </div>
                <DropdownMenuSeparator className="bg-gradient-to-r from-purple-200 to-pink-200 dark:from-purple-700 dark:to-pink-700 h-px" />
                {religions.map((religion) => (
                  <DropdownMenuItem key={religion.name} asChild>
                    <Link
                      href={religion.path}
                      className="flex items-center space-x-3 px-3 py-2 rounded-xl hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-all duration-300 cursor-pointer"
                    >
                      <span className="text-lg">{religion.icon}</span>
                      <span className="font-medium">{religion.name}</span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              className="hover:scale-110 transition-transform duration-200"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            {/* Auth Section */}
            {user ? (
              <UserNav user={user} />
            ) : (
              <Button
                onClick={() => setShowAuthDialog(true)}
                className="hidden sm:flex bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <Sparkles className="h-4 w-4 mr-2" />
                Join Sacred Journey
              </Button>
            )}

            {/* Mobile Menu */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden hover:scale-110 transition-transform duration-200">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-0">
                <SheetHeader>
                  <SheetTitle className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                      <Sparkles className="h-3 w-3 text-white" />
                    </div>
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      Divinora
                    </span>
                  </SheetTitle>
                </SheetHeader>

                <div className="mt-8 space-y-6">
                  {/* Navigation Items */}
                  <div className="space-y-3">
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                      Navigation
                    </h3>
                    {navigationItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.name}
                          href={item.path}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="flex items-center space-x-3 px-3 py-2 rounded-xl hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-all duration-300"
                        >
                          <Icon className="h-4 w-4 text-purple-600" />
                          <span className="font-medium">{item.name}</span>
                        </Link>
                      );
                    })}
                  </div>

                  {/* Religions */}
                  <div className="space-y-3">
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                      Sacred Traditions
                    </h3>
                    {religions.map((religion) => (
                      <Link
                        key={religion.name}
                        href={religion.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center space-x-3 px-3 py-2 rounded-xl hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-all duration-300"
                      >
                        <span className="text-lg">{religion.icon}</span>
                        <span className="font-medium">{religion.name}</span>
                      </Link>
                    ))}
                  </div>

                  {/* Auth Section */}
                  {!user && (
                    <div className="pt-4 border-t border-purple-200 dark:border-purple-700">
                      <Button
                        onClick={() => {
                          setShowAuthDialog(true);
                          setIsMobileMenuOpen(false);
                        }}
                        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg"
                      >
                        <Sparkles className="h-4 w-4 mr-2" />
                        Join Sacred Journey
                      </Button>
                    </div>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* Auth Dialog */}
      <AuthDialog
        isOpen={showAuthDialog}
        onClose={() => setShowAuthDialog(false)}
        onSuccess={handleAuthSuccess}
      />
    </>
  );
}