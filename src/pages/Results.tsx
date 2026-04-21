import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Trophy, TrendingUp, GraduationCap, MapPin, Medal } from "lucide-react";

interface Alumni {
  name: string;
  college: string;
  highlight?: boolean;
}

interface Grade10Student {
  name: string;
  maths?: number;
  science?: number;
}

const grade10Students: Grade10Student[] = [
  { name: "Vaishnavi", maths: 100, science: 99 },
  { name: "Dhanvin",   maths: 100, science: 97 },
  { name: "Arya",      maths: 98,  science: 98 },
  { name: "Arnav",     maths: 98,  science: 98 },
  { name: "Nitya",     maths: 100, science: 96 },
  { name: "Diya",      maths: 100, science: 96 },
  { name: "Sachit",    maths: 100, science: 96 },
  { name: "Ishaan",    maths: 98,  science: 95 },
  { name: "Darsh",     maths: 98,  science: 95 },
  { name: "Samarth",   maths: 97,  science: 95 },
  { name: "Aarav",     maths: 96,  science: 96 },
  { name: "Akshat",    maths: 96,  science: 96 },
  { name: "Shreya",    maths: 95,  science: 97 },
  { name: "Anantha",   maths: 95,  science: 97 },
  { name: "Swati",     maths: 95,  science: 94 },
  { name: "Manish",               science: 99 },
  { name: "Vedaanth",  maths: 99              },
  { name: "Rohit",                science: 98 },
  { name: "Sahana",               science: 98 },
  { name: "Dania",     maths: 97              },
  { name: "Adithya K",            science: 97 },
  { name: "Skanda",               science: 96 },
  { name: "Ojas",                 science: 96 },
  { name: "Sudhanva",             science: 96 },
  { name: "Shiven",               science: 96 },
  { name: "Kruthi",               science: 95 },
];

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
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Results</h1>
            <p className="lead">
              Board toppers and alumni who made it to top institutions across India and abroad.
            </p>
          </div>

          {/* Grade 10 Board Results */}
          <div id="grade10" className="mb-14 animate-fade-in">
            <div className="flex items-center gap-2 mb-3">
              <Medal className="w-5 h-5 text-success" />
              <span className="kicker">Board Exam</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Grade 10 CBSE Results · 2025</h2>
            <p className="text-muted-foreground mb-6">
              Maths &amp; Science scores from our Class 10 batch, sorted by total marks.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Grade 10 table */}
              <div className="overflow-x-auto overflow-y-auto max-h-80 rounded-xl border border-border animate-scale-in">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border bg-card/60 sticky top-0">
                      <th className="text-left px-3 py-2.5 text-muted-foreground font-semibold w-8">#</th>
                      <th className="text-left px-3 py-2.5 text-muted-foreground font-semibold">Name</th>
                      <th className="text-left px-3 py-2.5 text-muted-foreground font-semibold">Maths</th>
                      <th className="text-left px-3 py-2.5 text-muted-foreground font-semibold">Science</th>
                    </tr>
                  </thead>
                  <tbody>
                    {grade10Students.map((s, i) => (
                      <tr key={s.name} className="border-b border-border/40 hover:bg-card/40 transition-colors last:border-0">
                        <td className="px-3 py-2 text-muted-foreground text-xs">{i + 1}</td>
                        <td className="px-3 py-2 font-medium">{s.name}</td>
                        <td className="px-3 py-2">
                          {s.maths !== undefined
                            ? <span className={s.maths === 100 ? "text-success font-bold" : ""}>{s.maths}</span>
                            : <span className="text-muted-foreground">—</span>}
                        </td>
                        <td className="px-3 py-2">
                          {s.science !== undefined
                            ? <span className={s.science === 100 ? "text-success font-bold" : ""}>{s.science}</span>
                            : <span className="text-muted-foreground">—</span>}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* JEE toppers list — coming soon */}
              <div />
            </div>
          </div>

          {/* Alumni Header */}
          <div className="mb-8 animate-fade-in">
            <div className="flex items-center gap-2 mb-3">
              <Trophy className="w-5 h-5 text-primary" />
              <span className="kicker">Our Alumni</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">College Placements</h2>
            <p className="text-muted-foreground">
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
