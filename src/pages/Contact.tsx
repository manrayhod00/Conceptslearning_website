import { useState, useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  MessageCircle, 
  Phone, 
  MapPin, 
  Clock, 
  Mail,
  ChevronDown
} from "lucide-react";

const WHATSAPP_NUMBER = "919810695338";

const faqs = [
  {
    question: "What are the fees?",
    answer: "Fees depend on course and duration. WhatsApp us for the latest fee structure.",
  },
  {
    question: "What is the schedule?",
    answer: "Schedule varies by batch. We confirm after checking school timings and student level.",
  },
  {
    question: "How many tests are conducted?",
    answer: "Weekly/fortnight tests with analysis. Full mocks closer to exam.",
  },
  {
    question: "Do you provide revision plan?",
    answer: "Yes. Revision plan is built from test performance and concept gaps.",
  },
];

export default function Contact() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    course: "",
    message: "",
  });

  useEffect(() => {
    document.title = "Contact Us | Concepts Learning - JEE & NEET Coaching Bengaluru";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Contact Concepts Learning for JEE & NEET coaching enquiries. Visit our centres in Rajajinagar or Yeshwanthpur, Bengaluru. WhatsApp or call now!");
    }
  }, []);

  // The form has no backend: it composes the enquiry and hands it to WhatsApp,
  // where the parent sends it themselves. Nothing is stored on our side.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const lines = [
      "Hi Concepts Learning, I would like to enquire.",
      "",
      `Name: ${formData.name.trim()}`,
      `Phone: ${formData.phone.trim()}`,
    ];
    if (formData.course.trim()) lines.push(`Course: ${formData.course.trim()}`);
    if (formData.message.trim()) lines.push("", formData.message.trim());

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <Layout>
      <section className="section">
        <div className="container">
          <div className="mb-10 animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact</h1>
            <p className="lead">
              Parents can WhatsApp or submit an enquiry. We will respond with schedule, batch size and fees.
            </p>
          </div>

          <div className="grid-2 gap-8">
            {/* Quick Actions */}
            <div className="feature-card">
              <h3 className="text-xl font-bold mb-4">Quick Actions</h3>
              <p className="text-muted-foreground mb-6">
                Fastest response is usually WhatsApp.
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                <Button className="bg-success hover:bg-success/90" asChild>
                  <a
                    href="https://wa.me/919810695338?text=Hi%20Concepts%20Learning,%20I%20want%20to%20book%20a%20demo%20class."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="tel:+919810695338">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </a>
                </Button>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium">Centre 1 - Rajajinagar:</span>{" "}
                    <span className="text-muted-foreground">3rd Floor, 106/9, Besides NPS RNR, Rajajinagar</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium">Centre 2 - Yeshwanthpur:</span>{" "}
                    <span className="text-muted-foreground">1F2 Srivari Enclave, Beside Sparsh Hospital, Yeshwanthpur</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium">Timings:</span>{" "}
                    <span className="text-muted-foreground">Mon-Sat: 9 AM - 8 PM</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium">Email:</span>{" "}
                    <span className="text-muted-foreground">conceptstuitions@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Enquiry Form */}
            <div className="feature-card" id="enquiry">
              <h3 className="text-xl font-bold mb-2">Enquiry Form</h3>
              <p className="text-muted-foreground text-sm mb-6">
                Fill this in and tap send — it opens WhatsApp with your enquiry ready
                to go. We usually reply within a few hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="form-field">
                  <Label htmlFor="name">Parent / Student Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    required
                  />
                </div>

                <div className="form-field">
                  <Label htmlFor="phone">Phone / WhatsApp</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="10-digit number"
                    required
                  />
                </div>

                <div className="form-field">
                  <Label htmlFor="course">Course</Label>
                  <Input
                    id="course"
                    value={formData.course}
                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                    placeholder="JEE / CBSE / Grade"
                  />
                </div>

                <div className="form-field">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="I want to know batch size, fees, schedule and demo availability."
                  />
                </div>

                <Button type="submit" className="w-full bg-success hover:bg-success/90">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Send on WhatsApp
                </Button>
              </form>
            </div>
          </div>

          {/* FAQs */}
          <div className="feature-card mt-8">
            <h3 className="text-xl font-bold mb-6">FAQs (Parents)</h3>

            <div className="grid-2">
              {faqs.map((faq, index) => (
                <div key={index} className="faq-item">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="faq-question w-full text-left"
                  >
                    <span className="font-medium">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-muted-foreground transition-transform ${
                        openFaq === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openFaq === index && (
                    <div className="faq-answer animate-fade-in">{faq.answer}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
