import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Users, Target, Trophy, Brain, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 navbar-animate">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-heading font-bold text-foreground">GrootIQ</span>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a
                href="#features"
                className="text-muted-foreground hover:text-foreground transition-all duration-300 navbar-animate"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="text-muted-foreground hover:text-foreground transition-all duration-300 navbar-animate"
              >
                How it Works
              </a>
              <a
                href="#benefits"
                className="text-muted-foreground hover:text-foreground transition-all duration-300 navbar-animate"
              >
                Benefits
              </a>
            </nav>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" className="navbar-animate" asChild>
                <Link href="/login">Sign In</Link>
              </Button>
              <Button size="sm" className="navbar-animate" asChild>
                <Link href="/signup">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge variant="secondary" className="mb-6">
            AI-Powered Learning Platform
          </Badge>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6 leading-tight">
            Experience Real-World
            <span className="text-primary block">Internships with AI</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            GrootIQ is an innovative platform where students can simulate real internship experiences, tackle authentic
            challenges, and receive guidance from experienced mentors—all powered by AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-base px-8" asChild>
              <Link href="/signup">
                Join as Student
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="text-base px-8 bg-transparent" asChild>
              <Link href="/signup">Join as Mentor</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Why Choose GrootIQ?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our platform combines cutting-edge AI with real-world experience to create the most effective internship
              simulation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border bg-card">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">Real-World Projects</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Work on authentic projects that mirror actual industry challenges and requirements.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">Expert Mentorship</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Get guidance from experienced professionals who provide feedback and career insights.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Trophy className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">Skill Recognition</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Earn points, badges, and recognition that showcase your abilities to potential employers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">How GrootIQ Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A simple, structured approach to gaining real internship experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-heading font-bold text-primary-foreground">1</span>
              </div>
              <h3 className="text-lg font-heading font-semibold mb-2">Choose Your Path</h3>
              <p className="text-muted-foreground text-sm">
                Select your specialization: Frontend, Backend, Design, or Social Media
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-heading font-bold text-accent-foreground">2</span>
              </div>
              <h3 className="text-lg font-heading font-semibold mb-2">Join a Team</h3>
              <p className="text-muted-foreground text-sm">
                Get matched with 4 other students to form a complete project team
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-heading font-bold text-primary-foreground">3</span>
              </div>
              <h3 className="text-lg font-heading font-semibold mb-2">Complete Projects</h3>
              <p className="text-muted-foreground text-sm">
                Work through 3 real-world projects over your 3-month internship
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-heading font-bold text-accent-foreground">4</span>
              </div>
              <h3 className="text-lg font-heading font-semibold mb-2">Get Recognized</h3>
              <p className="text-muted-foreground text-sm">
                Top performers get opportunities for real internships with partner companies
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Build Your Career with Confidence
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                GrootIQ bridges the gap between academic learning and professional experience, giving you the skills and
                confidence needed to excel in your career.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Hands-on Experience</h4>
                    <p className="text-muted-foreground text-sm">
                      Work on projects that simulate real workplace scenarios
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Industry Connections</h4>
                    <p className="text-muted-foreground text-sm">Network with mentors and peers in your field</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Portfolio Building</h4>
                    <p className="text-muted-foreground text-sm">Create impressive projects to showcase to employers</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="/modern-office-students.png"
                alt="Students collaborating on projects"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of students who are already building their careers with GrootIQ.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-base px-8" asChild>
              <Link href="/signup">
                Join as Student
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="text-base px-8 bg-transparent" asChild>
              <Link href="/signup">Join as Mentor</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30 py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-heading font-bold text-foreground">GrootIQ</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Empowering the next generation of professionals through AI-powered internship simulations.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-3">Platform</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    For Students
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    For Mentors
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-3">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Community
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-3">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 GrootIQ. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
