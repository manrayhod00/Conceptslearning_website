import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Trophy, TrendingUp, Star, ImageIcon } from "lucide-react";

const years = ["2025", "2024", "2023", "2022"];

const resultsData: Record<string, {
  title: string;
  description: string;
  highlights: string[];
}> = {
  "2025": {
    title: "2025 Highlights",
    description: "Replace this with your actual results, screenshots, and student stories.",
    highlights: [
      "Top percentiles: (Add)",
      "Selections / ranks: (Add)",
      "Best improvements: (Add)",
      "Parent testimonials: (Add)",
    ],
  },
  "2024": {
    title: "2024 Highlights",
    description: "Add your 2024 results here (ranks, percentiles, screenshots).",
    highlights: [],
  },
  "2023": {
    title: "2023 Highlights",
    description: "Add your 2023 results here.",
    highlights: [],
  },
  "2022": {
    title: "2022 Highlights",
    description: "Add your 2022 results here.",
    highlights: [],
  },
};

export default function Results() {
  const [activeYear, setActiveYear] = useState("2025");

  useEffect(() => {
    document.title = "JEE & NEET Results | Concepts Learning Bengaluru";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "See our students' JEE Main, JEE Advanced & NEET results. Top percentiles, rank improvements, and success stories from Concepts Learning.");
    }
  }, []);

  return (
    <Layout>
      <section className="section">
        <div className="container">
          <div className="mb-10 animate-fade-in">
            <div className="flex items-center gap-2 mb-3">
              <Trophy className="w-5 h-5 text-primary" />
              <span className="kicker">Achievements</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Results</h1>
            <p className="lead">
              Year-wise achievements, ranks, percentiles, and improvement stories.
            </p>
          </div>

          {/* Year Tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setActiveYear(year)}
                className={`tab-btn ${activeYear === year ? "active" : ""}`}
              >
                {year}
              </button>
            ))}
          </div>

          {/* Results Content */}
          <div className="feature-card animate-fade-in" key={activeYear}>
            <h3 className="text-xl font-bold mb-2">{resultsData[activeYear].title}</h3>
            <p className="text-muted-foreground mb-6">{resultsData[activeYear].description}</p>

            <div className="grid md:grid-cols-2 gap-6">
              {resultsData[activeYear].highlights.length > 0 && (
                <div>
                  <ul className="space-y-3">
                    {resultsData[activeYear].highlights.map((item, index) => (
                      <li key={index} className="flex items-center gap-3 text-muted-foreground">
                        <Star className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="glass-card p-8 flex items-center justify-center min-h-[200px]">
                <div className="text-center text-muted-foreground">
                  <ImageIcon className="w-12 h-12 mx-auto mb-3 opacity-50" />
                  <p className="text-sm">Results screenshot placeholder</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Card */}
          <div className="feature-card mt-8">
            <div className="flex items-center gap-3 mb-3">
              <TrendingUp className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-bold">Want similar results?</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Book a demo class and get a learning plan based on current level and target exam.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link to="/contact#enquiry">Book Demo Class</Link>
              </Button>
              <Button variant="outline" className="border-success text-success hover:bg-success/10" asChild>
                <a
                  href="https://wa.me/91XXXXXXXXXX?text=Hi%20Concepts%20Learning,%20I%20want%20to%20know%20batch%20availability%20and%20fees."
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
