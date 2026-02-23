import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Trophy, TrendingUp, GraduationCap, MapPin } from "lucide-react";

interface Alumni {
  name: string;
  college: string;
  highlight?: boolean;
}

const featuredAlumni: Alumni[] = [
  { name: "Anirudh M", college: "BITS, Hyderabad", highlight: true },
  { name: "Riddhima", college: "NIT, Surat", highlight: true },
  { name: "Pratheeth", college: "BITS, Goa", highlight: true },
  { name: "Siddhanth", college: "BITS, Goa", highlight: true },
  { name: "Yuvan", college: "NIT, Calicut", highlight: true },
  { name: "Janhavi Aravind", college: "Qualified JEE Advanced · Johns Hopkins University", highlight: true },
];

const otherColleges = ["VIT", "RV College", "PES University", "SRM"];

export default function Results() {
  useEffect(() => {
    document.title = "Our Alumni | Concepts Learning - JEE & NEET Coaching Bengaluru";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Meet our proud alumni placed in BITS, NITs, Johns Hopkins & top engineering colleges. See the success stories from Concepts Learning Bengaluru.");
    }
  }, []);

  return (
    <Layout>
      <section className="section">
        <div className="container">
          {/* Header */}
          <div className="mb-12 animate-fade-in">
            <div className="flex items-center gap-2 mb-3">
              <Trophy className="w-5 h-5 text-primary" />
              <span className="kicker">Our Pride</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Alumni</h1>
            <p className="lead">
              Students who trusted us and made it to top institutions across India and abroad.
            </p>
          </div>

          {/* Featured Alumni Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {featuredAlumni.map((alumni, index) => (
              <div
                key={alumni.name}
                className="group feature-card relative overflow-hidden animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Decorative glow */}
                <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-primary/10 blur-2xl group-hover:bg-primary/20 transition-all duration-500" />

                <div className="relative flex flex-col gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold">{alumni.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                    <span>{alumni.college}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Other colleges banner */}
          <div className="glass-card p-6 mb-10 animate-fade-in">
            <p className="text-center">
              <span className="text-muted-foreground">Several students also placed in </span>
              {otherColleges.map((college, i) => (
                <span key={college}>
                  <span className="font-semibold text-primary">{college}</span>
                  {i < otherColleges.length - 1 && <span className="text-muted-foreground">, </span>}
                </span>
              ))}
              <span className="text-muted-foreground"> & more top institutions.</span>
            </p>
          </div>

          {/* CTA Card */}
          <div className="feature-card">
            <div className="flex items-center gap-3 mb-3">
              <TrendingUp className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-bold">Want to join this list?</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Book a demo class and get a learning plan based on your current level and target exam.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link to="/contact#enquiry">Book Demo Class</Link>
              </Button>
              <Button variant="outline" className="border-success text-success hover:bg-success/10" asChild>
                <a
                  href="https://wa.me/919810695338?text=Hi%20Concepts%20Learning,%20I%20want%20to%20know%20batch%20availability%20and%20fees."
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
