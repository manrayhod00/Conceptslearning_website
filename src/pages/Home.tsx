import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  BookOpen, 
  Target, 
  ArrowRight,
  Sparkles,
  Trophy,
  MessageSquare
} from "lucide-react";

const toppers = [
  { name: "Meeko", percentile: "99.82", exam: "JEE Main 2025", note: "Top performer • Consistent mocks" },
  { name: "Bruno", percentile: "99.61", exam: "JEE Main 2025", note: "Strong accuracy • Fast solving" },
  { name: "Pepper", percentile: "99.34", exam: "JEE Main 2025", note: "Big jump • Targeted revision" },
];

const features = [
  {
    icon: BookOpen,
    title: "Concept-first teaching",
    description: "We make basics strong so problem-solving becomes natural.",
  },
  {
    icon: Users,
    title: "Personal mentoring",
    description: "We track progress and guide each student with clear next steps.",
  },
  {
    icon: Target,
    title: "Exam-focused practice",
    description: "Regular tests + feedback + exam-like mock platform.",
  },
];

export default function Home() {
  useEffect(() => {
    document.title = "Best JEE & NEET Coaching in Bengaluru | Concepts Learning";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Concepts Learning is a results-driven JEE & NEET coaching institute in Bengaluru. Small batches, expert faculty, and concept-first teaching.");
    }
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(187_92%_50%_/_0.1),_transparent_50%)]" />
        <div className="container relative py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="animate-slide-up">
              <div className="badge mb-6">
                <Sparkles className="w-3.5 h-3.5 mr-1.5" />
                Small batches • Hybrid + Offline • Doubt support
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Intensive Guidance is{" "}
                <span className="gradient-text">just a click away</span>
              </h1>
              
              <p className="lead mb-8">
                We focus on strong fundamentals, personal attention, and consistent practice.
                Hybrid learning (offline + online support) with quick doubt resolution.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link to="/courses">
                    View Courses
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-success text-success hover:bg-success/10" asChild>
                  <Link to="/mock-platform">Mock Platform</Link>
                </Button>
                <Button size="lg" variant="ghost" asChild>
                  <Link to="/contact#enquiry">Book Demo</Link>
                </Button>
              </div>
            </div>

            {/* Right - Stats */}
            <div className="animate-slide-up delay-200">
              <div className="glass-card p-8 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl" />
                <div className="relative grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="text-center p-4">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-3">
                      <Users className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-bold text-lg">Small Batches</h3>
                    <p className="text-sm text-muted-foreground mt-1">Every student seen</p>
                  </div>
                  <div className="text-center p-4">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-3">
                      <BookOpen className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-bold text-lg">Hybrid + Offline</h3>
                    <p className="text-sm text-muted-foreground mt-1">Flexible learning</p>
                  </div>
                  <div className="text-center p-4">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-3">
                      <MessageSquare className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-bold text-lg">Doubt Support</h3>
                    <p className="text-sm text-muted-foreground mt-1">Fast resolution</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Toppers Section */}
      <section className="section bg-card/30">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div className="animate-fade-in">
              <div className="flex items-center gap-2 mb-3">
                <Trophy className="w-5 h-5 text-primary" />
                <span className="kicker">Results</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">JEE 2025 Toppers</h2>
              <p className="lead mt-2">Real scores. Real competition. Real confidence.</p>
            </div>
            <Button variant="ghost" asChild>
              <Link to="/results">
                View all results
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          <div className="grid-3">
            {toppers.map((topper, index) => (
              <div 
                key={topper.name} 
                className="topper-card animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="badge">{topper.exam}</span>
                  <span className="score-badge">{topper.percentile} %ile</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{topper.name}</h3>
                <p className="text-sm text-muted-foreground">{topper.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why students choose us</h2>
            <p className="lead">
              Simple, focused, and personalised — not corporate, not crowded.
            </p>
          </div>

          <div className="grid-3">
            {features.map((feature, index) => (
              <div 
                key={feature.title} 
                className="feature-card animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button size="lg" asChild>
              <Link to="/courses">
                See course plans & timings
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
