import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { GraduationCap, Award, BookOpen, Clock } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

// Import faculty images
import facultyManoj from "@/assets/faculty-manoj.jpg";
import facultyAshish from "@/assets/faculty-ashish.jpg";
import facultyTejus from "@/assets/faculty-tejus.jpg";
import facultySmarth from "@/assets/faculty-smarth.jpg";

interface FacultyMember {
  name: string;
  qualification: string;
  experience: string;
  subjects: string;
  role?: string;
  impression: string;
  image?: string;
}

const faculty: FacultyMember[] = [
  {
    name: "Anuja Dua",
    qualification: "BE, MBA",
    experience: "14+ years",
    role: "Founder, Concepts Learning",
    subjects: "Mathematics, Chemistry",
    impression: "Clear explanations, friendly mentoring, and strong exam-oriented practice",
  },
  {
    name: "Manoj Rathod",
    qualification: "BS-MS (IISc Bangalore)",
    experience: "3+ years",
    subjects: "Physics",
    impression: "Strong conceptual clarity, consistent score improvement",
    image: facultyManoj,
  },
  {
    name: "Ashish Singh",
    qualification: "BS-MS (IIT BHU)",
    experience: "4+ years",
    subjects: "Chemistry",
    impression: "Strong fundamentals + smart shortcuts + crisp problem-solving approach",
    image: facultyAshish,
  },
  {
    name: "Tejus",
    qualification: "B.Sc (Mathematics), M.Sc (Applied Mathematics)",
    experience: "5+ years",
    subjects: "Mathematics",
    impression: "Step-by-step problem solving + strong focus on fundamentals + speed methods",
    image: facultyTejus,
  },
  {
    name: "Priyanka",
    qualification: "B.Sc, B.Ed (Science Education)",
    experience: "6+ years",
    subjects: "Science",
    impression: "Better conceptual clarity + improved exam writing + consistent results",
  },
  {
    name: "Soni",
    qualification: "B.Com, M.Com, CTET Certified",
    experience: "4+ years",
    subjects: "Science & Accounts",
    impression: "Real-life examples + practice-driven worksheets + revision checkpoints",
  },
  {
    name: "Aditi",
    qualification: "B.E, M.Tech",
    experience: "3+ years",
    subjects: "Mathematics",
    impression: "Calm explanations + lots of practice + quick doubt resolution",
  },
  {
    name: "Smarth",
    qualification: "B.Tech, M.S (Mathematics)",
    experience: "5+ years",
    subjects: "Mathematics",
    impression: "JEE problem solving + test strategy + time management techniques",
    image: facultySmarth,
  },
];

export default function Faculty() {
  const [selectedFaculty, setSelectedFaculty] = useState<FacultyMember | null>(null);

  return (
    <Layout>
      <section className="section">
        <div className="container">
          <div className="mb-10 animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Faculty</h1>
            <p className="lead">
              Meet our experienced educators dedicated to your success.
            </p>
          </div>

          <div className="grid-2">
            {faculty.map((member, index) => (
              <div
                key={member.name}
                className="faculty-card animate-scale-in"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                {/* Avatar or Image */}
                {member.image ? (
                  <div
                    className="w-32 h-32 rounded-2xl overflow-hidden border border-primary/20 flex-shrink-0 cursor-pointer transition-transform hover:scale-105"
                    onClick={() => setSelectedFaculty(member)}
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                ) : (
                  <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-12 h-12 text-primary/60" />
                  </div>
                )}

                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-bold mb-3">{member.name}</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <Award className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Qualification:</span>{" "}
                        <span className="text-muted-foreground">{member.qualification}</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Clock className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Experience:</span>{" "}
                        <span className="text-muted-foreground">{member.experience}</span>
                      </div>
                    </div>
                    {member.role && (
                      <div className="flex items-start gap-2">
                        <GraduationCap className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-medium">Role:</span>{" "}
                          <span className="text-muted-foreground">{member.role}</span>
                        </div>
                      </div>
                    )}
                    <div className="flex items-start gap-2">
                      <BookOpen className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Subjects:</span>{" "}
                        <span className="text-muted-foreground">{member.subjects}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground pt-2 border-t border-border mt-3">
                      <span className="font-medium text-foreground">Student's impression:</span>{" "}
                      {member.impression}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Teaching Approach */}
          <div className="feature-card mt-8">
            <h3 className="text-xl font-bold mb-2">Teaching Approach</h3>
            <p className="text-muted-foreground mb-4">
              Concept-first learning + regular tests + personalised mentoring + structured revision plan.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link to="/contact#enquiry">Book Demo Class</Link>
              </Button>
              <Button variant="outline" className="border-success text-success hover:bg-success/10" asChild>
                <a
                  href="https://wa.me/919810695338?text=Hi%20Concepts%20Learning,%20I%20want%20to%20know%20faculty%20and%20batch%20details."
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

      {/* Image Popup Dialog */}
      <Dialog open={!!selectedFaculty} onOpenChange={() => setSelectedFaculty(null)}>
        <DialogContent className="max-w-md p-0 overflow-hidden">
          <DialogHeader className="p-4 pb-0">
            <DialogTitle>{selectedFaculty?.name}</DialogTitle>
          </DialogHeader>
          {selectedFaculty?.image && (
            <div className="p-4 pt-2">
              <img
                src={selectedFaculty.image}
                alt={selectedFaculty.name}
                className="w-full rounded-lg object-cover"
              />
              <p className="text-sm text-muted-foreground mt-3">
                {selectedFaculty.subjects} • {selectedFaculty.experience} experience
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </Layout>
  );
}
