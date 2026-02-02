import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  Monitor, 
  Focus, 
  BarChart3, 
  Play,
  ImageIcon
} from "lucide-react";

const features = [
  {
    icon: Monitor,
    title: "Exam-like UI",
    description: "Interface designed to match real exam flow and reduce exam-day anxiety.",
  },
  {
    icon: Focus,
    title: "Distraction-free tests",
    description: "Full-screen mode and strict test attempt workflow (like real exams).",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description: "Accuracy, time usage, topic-wise performance and revision plan.",
  },
];

export default function MockPlatform() {
  useEffect(() => {
    document.title = "JEE Mock Test Platform | Concepts Learning Bengaluru";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Practice with our exam-like JEE mock test platform. Real interface, analytics, and performance tracking to boost your exam readiness.");
    }
  }, []);

  return (
    <Layout>
      <section className="section">
        <div className="container">
          <div className="mb-10 animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              JEE Exam Model / Mock Test Platform
            </h1>
            <p className="lead">
              Experience the real JEE exam environment with our advanced mock test platform.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid-3 mb-8">
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

          {/* Demo Video & Screenshots */}
          <div className="grid-2 gap-6">
            {/* Demo Video */}
            <div className="feature-card">
              <div className="flex items-center gap-3 mb-4">
                <Play className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold">Demo Video</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Watch how our platform imitates the JEE exam experience.
              </p>
              <div className="aspect-video bg-secondary/50 rounded-xl border border-border flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <Play className="w-16 h-16 mx-auto mb-3 opacity-50" />
                  <p className="text-sm">Replace VIDEO_ID with your YouTube demo video</p>
                  <p className="text-xs mt-1 opacity-60">
                    Embed: youtube.com/embed/VIDEO_ID
                  </p>
                </div>
              </div>
            </div>

            {/* Screenshots */}
            <div className="feature-card">
              <div className="flex items-center gap-3 mb-4">
                <ImageIcon className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold">Platform Screenshots</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                See how students experience our exam interface.
              </p>
              <div className="grid grid-cols-2 gap-3">
                <div className="aspect-video bg-secondary/50 rounded-lg border border-border flex items-center justify-center">
                  <ImageIcon className="w-8 h-8 text-muted-foreground/50" />
                </div>
                <div className="aspect-video bg-secondary/50 rounded-lg border border-border flex items-center justify-center">
                  <ImageIcon className="w-8 h-8 text-muted-foreground/50" />
                </div>
              </div>
            </div>
          </div>

          {/* CTA Card */}
          <div className="feature-card mt-8">
            <h3 className="text-xl font-bold mb-2">Try a demo session</h3>
            <p className="text-muted-foreground mb-4">
              We will show the platform, explain test pattern, and recommend a prep plan.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link to="/contact#enquiry">Book Demo Class</Link>
              </Button>
              <Button variant="outline" className="border-success text-success hover:bg-success/10" asChild>
                <a
                  href="https://wa.me/91XXXXXXXXXX?text=Hi%20Concepts%20Learning,%20I%20want%20a%20demo%20of%20your%20mock%20test%20platform."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
