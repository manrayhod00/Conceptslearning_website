import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-xs font-extrabold text-muted-foreground tracking-wider">
                  CONCEPTS
                </div>
                <div className="text-lg font-bold -mt-1">Learning</div>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm">
              JEE / BITSAT / CBSE • Hybrid + Offline • Personal mentoring
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link
                to="/courses"
                className="block text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Courses
              </Link>
              <Link
                to="/faculty"
                className="block text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Faculty
              </Link>
              <Link
                to="/results"
                className="block text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Results
              </Link>
              <Link
                to="/mock-platform"
                className="block text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Mock Platform
              </Link>
              <Link
                to="/contact"
                className="block text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>
                <span className="text-foreground font-medium">WhatsApp:</span>{" "}
                +91 9810695338
              </p>
              <p>
                <span className="text-foreground font-medium">Email:</span>{" "}
                conceptstuitions@gmail.com
              </p>
              <div>
                <span className="text-foreground font-medium">Rajajinagar:</span>{" "}
                <span>3rd Floor, 106/9, Besides NPS RNR</span>
              </div>
              <div>
                <span className="text-foreground font-medium">Yeshwanthpur:</span>{" "}
                <span>1F2 Srivari Enclave, Beside Sparsh Hospital</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          © {currentYear} Concepts Learning. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
