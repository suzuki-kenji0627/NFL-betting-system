/**
 * Home Page
 * Main landing page with live games and featured content
 */

'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { useLiveGames, useUpcomingGames } from '@/hooks/useGames';
import { GameCard } from '@/components/games/GameCard';
import { Trophy, TrendingUp, Zap, Shield } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  const { data: liveGames, isLoading: liveLoading } = useLiveGames();
  const { data: upcomingGames, isLoading: upcomingLoading } = useUpcomingGames();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              🔴 Live NFL Betting
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Bet on the NFL
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Experience the thrill of NFL betting with live odds, real-time scores, and expert analysis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register">
                <Button size="lg" className="w-full sm:w-auto">
                  Get Started
                </Button>
              </Link>
              <Link href="/scores">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  View Live Scores
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardHeader>
                  <Zap className="h-10 w-10 mx-auto text-primary mb-2" />
                  <CardTitle className="text-lg">Live Betting</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Place bets in real-time as games unfold
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Trophy className="h-10 w-10 mx-auto text-primary mb-2" />
                  <CardTitle className="text-lg">Best Odds</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Compare odds from multiple bookmakers
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <TrendingUp className="h-10 w-10 mx-auto text-primary mb-2" />
                  <CardTitle className="text-lg">Live Stats</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Real-time team and player statistics
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Shield className="h-10 w-10 mx-auto text-primary mb-2" />
                  <CardTitle className="text-lg">Secure & Safe</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Licensed and regulated betting platform
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Live Games Section */}
        {(liveGames && liveGames.length > 0) && (
          <section className="py-16 px-4 bg-accent/5">
            <div className="container mx-auto">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                  </span>
                  Live Games
                </h2>
                <Link href="/scores">
                  <Button variant="ghost">View All</Button>
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {liveLoading ? (
                  <>
                    {[1, 2, 3].map((i) => (
                      <Card key={i}>
                        <CardContent className="p-6">
                          <Skeleton className="h-48 w-full" />
                        </CardContent>
                      </Card>
                    ))}
                  </>
                ) : (
                  liveGames?.map((game) => (
                    <GameCard key={game.id} game={game} showOdds />
                  ))
                )}
              </div>
            </div>
          </section>
        )}

        {/* Upcoming Games Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold">Upcoming Games</h2>
              <Link href="/fixtures">
                <Button variant="ghost">View All</Button>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingLoading ? (
                <>
                  {[1, 2, 3].map((i) => (
                    <Card key={i}>
                      <CardContent className="p-6">
                        <Skeleton className="h-48 w-full" />
                      </CardContent>
                    </Card>
                  ))}
                </>
              ) : (
                upcomingGames?.slice(0, 6).map((game) => (
                  <GameCard key={game.id} game={game} showOdds />
                ))
              )}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-t from-primary/10 to-background">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Betting?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of users who trust our platform for their NFL betting needs.
            </p>
            <Link href="/register">
              <Button size="lg">
                Create Free Account
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
