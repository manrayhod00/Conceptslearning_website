import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { 
  FileText, 
  ChevronRight, 
  Users,
  Calendar,
  CheckCircle,
  Download,
  ExternalLink
} from "lucide-react";

interface Course {
  id: string;
  title: string;
  duration: string;
  faculty: string;
  timeline: string;
  includes: string[];
  timelineDetail: string;
}

const courses: Course[] = [
  {
    id: "jee",
    title: "IIT JEE Preparation",
    duration: "2 years",
    faculty: "Anuja Dua (Math), Manoj Rathod (Phy), Ashish Singh (Chem)",
    timeline: "Foundation → Advanced → Test Series",
    includes: [
      "Concept-first teaching + daily practice sheets",
      "Weekly tests + error analysis + doubt sessions",
      "Full syllabus mock phase with performance reports",
    ],
    timelineDetail: "Months 1–6: Foundation • Months 7–16: Advanced problem solving • Months 17–24: Full mocks + revision.",
  },
  {
    id: "1112",
    title: "Grade 11th & 12th",
    duration: "1 year",
    faculty: "Anuja Dua, Manoj Rathod, Ashish Singh",
    timeline: "Boards + JEE alignment",
    includes: [
      "NCERT + exemplar + advanced application problems",
      "Chapter tests + board-style practice papers",
      "Regular revision + doubt clearing",
    ],
    timelineDetail: "First 5–6 months: core chapters • Next: mixed revision + tests • Final: intensive boards prep.",
  },
  {
    id: "10",
    title: "Grade 10th Boards",
    duration: "1 year",
    faculty: "Anuja Dua",
    timeline: "Concepts → Practice → Boards",
    includes: [
      "NCERT mastery + exemplar level practice",
      "Weekly chapter tests + board pattern papers",
      "Revision worksheets + previous year questions",
    ],
    timelineDetail: "Term 1: concepts + basics • Term 2: rigorous practice • Final: board papers + revision.",
  },
  {
    id: "98",
    title: "Grade 9th & 8th",
    duration: "1 year",
    faculty: "Anuja Dua",
    timeline: "Foundation + Olympiad base",
    includes: [
      "Strong fundamentals + problem solving habits",
      "Regular worksheets + chapter tests",
      "Optional Olympiad foundation practice",
    ],
    timelineDetail: "Steady weekly learning cycles with monthly revision + tests for retention.",
  },
];

const classModes = [
  "Offline centre & Hybrid classes (regular classroom batches)",
  "Hybrid support (offline + online help & practice)",
  "Personal doubt clearing (fast response + doubt sessions)",
];

const studyMaterial = [
  "Structured notes + formula sheets",
  "Topic-wise practice sets",
  "Revision worksheets",
  "Previous year & mock papers",
];

const testSchedule = [
  { title: "Weekly", description: "Chapter/Topic test + error analysis + revision targets." },
  { title: "Monthly", description: "Full syllabus part test + rank + time analysis." },
  { title: "Mock Phase", description: "Exam-like mocks on the platform + detailed report." },
];

export default function Courses() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  useEffect(() => {
    document.title = "JEE & NEET Courses | Concepts Learning Bengaluru";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Explore our JEE, NEET, and board exam courses. Grade 8-12 preparation with expert faculty, structured material, and regular testing.");
    }
  }, []);

  return (
    <Layout>
      <section className="section">
        <div className="container">
          {/* Header Band */}
          <div className="glass-card p-8 md:p-10 mb-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
            <div className="relative">
              <p className="kicker">Our Courses</p>
              <h1 className="text-3xl md:text-4xl font-bold">What we offer</h1>
            </div>

            {/* Course Cards Grid */}
            <div className="grid-4 mt-8">
              {courses.map((course, index) => (
                <button
                  key={course.id}
                  onClick={() => setSelectedCourse(course)}
                  className="course-card text-left animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="course-icon">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold truncate">{course.title}</h3>
                    <p className="text-sm text-muted-foreground">Duration: {course.duration}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground" />
                </button>
              ))}
            </div>
          </div>

          {/* Class Modes */}
          <div className="feature-card mb-6">
            <h3 className="text-xl font-bold mb-4">Class Modes</h3>
            <ul className="space-y-3">
              {classModes.map((mode, index) => (
                <li key={index} className="flex items-start gap-3 text-muted-foreground">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{mode}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Study Material */}
          <div className="feature-card mb-6">
            <h3 className="text-xl font-bold mb-2">Study Material</h3>
            <p className="text-muted-foreground mb-4">
              A structured set of notes + practice sheets designed for fast revision and exam confidence.
            </p>

            <ul className="space-y-2 mb-6">
              {studyMaterial.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="grid-2">
              <div className="glass-card p-5">
                <h4 className="font-bold mb-2">Preview (Sample PDF)</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  A small sample so students/parents can see the quality.
                </p>
                <div className="flex gap-3 flex-wrap">
                  <Button variant="outline" size="sm">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Open Sample
                  </Button>
                  <Button size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Download Sample
                  </Button>
                </div>
              </div>

              <div className="glass-card p-5">
                <h4 className="font-bold mb-2">Get the full plan</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  We share the complete material plan during counselling / after enrolment.
                </p>
                <div className="flex gap-3 flex-wrap">
                  <Button asChild>
                    <Link to="/contact#enquiry">Request course plan</Link>
                  </Button>
                  <Button variant="outline" className="border-success text-success hover:bg-success/10" asChild>
                    <a
                      href="https://wa.me/91XXXXXXXXXX?text=Hi%20Concepts%20Learning,%20Please%20share%20study%20material%20sample%20and%20course%20plan."
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      WhatsApp Now
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Test Schedule */}
          <div className="feature-card">
            <h3 className="text-xl font-bold mb-2">Test Schedule</h3>
            <p className="text-muted-foreground mb-6">
              Regular testing with detailed analysis helps identify and fix gaps.
            </p>

            <div className="grid-3">
              {testSchedule.map((item, index) => (
                <div key={index} className="glass-card p-5">
                  <h4 className="font-bold mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Course Details Modal */}
      <Dialog open={!!selectedCourse} onOpenChange={() => setSelectedCourse(null)}>
        <DialogContent className="max-w-2xl bg-card border-border">
          <DialogHeader>
            <p className="kicker">Course details</p>
            <DialogTitle className="text-2xl">{selectedCourse?.title}</DialogTitle>
          </DialogHeader>

          <div className="grid sm:grid-cols-3 gap-4 mt-4">
            <div className="glass-card p-4">
              <div className="flex items-center gap-2 text-sm font-bold mb-2">
                <Users className="w-4 h-4 text-primary" />
                Faculty
              </div>
              <p className="text-sm text-muted-foreground">{selectedCourse?.faculty}</p>
            </div>

            <div className="glass-card p-4">
              <div className="flex items-center gap-2 text-sm font-bold mb-2">
                <Calendar className="w-4 h-4 text-primary" />
                Timeline
              </div>
              <p className="text-sm text-muted-foreground">{selectedCourse?.timeline}</p>
            </div>

            <div className="glass-card p-4">
              <div className="flex items-center gap-2 text-sm font-bold mb-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                Includes
              </div>
              <ul className="text-sm text-muted-foreground space-y-1">
                {selectedCourse?.includes.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-4 p-4 bg-secondary/50 rounded-xl">
            <p className="text-sm">
              <span className="font-bold">Typical timeline:</span>{" "}
              <span className="text-muted-foreground">{selectedCourse?.timelineDetail}</span>
            </p>
          </div>

          <div className="flex gap-3 mt-6">
            <Button variant="outline" asChild>
              <Link to="/contact#enquiry">Get brochure</Link>
            </Button>
            <Button asChild>
              <Link to="/contact#enquiry">Book counselling</Link>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </Layout>
  );
}
