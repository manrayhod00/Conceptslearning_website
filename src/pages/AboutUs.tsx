import { Layout } from "@/components/layout/Layout";
import { Users, Target, BookOpen, Award } from "lucide-react";

export default function AboutUs() {
  return (
    <Layout>
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="lead">
              Concepts Coaching started in 2010 with a vision to provide students of Class 8 to 12 
              with pedagogy focused on individual attention, high quality study material, and consistent practice.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="glass-card p-8 animate-slide-up">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground">
                To be the most trusted coaching institute that nurtures talent through personalized 
                guidance and builds strong foundations for competitive exams like JEE and NEET.
              </p>
            </div>

            <div className="glass-card p-8 animate-slide-up delay-100">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                <BookOpen className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground">
                To provide concept-first teaching that makes problem-solving natural, with small batch sizes 
                ensuring every student receives the attention they deserve.
              </p>
            </div>
          </div>

          <div className="glass-card p-8 mb-16 animate-fade-in">
            <h2 className="text-2xl font-bold mb-6 text-center">What Sets Us Apart</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Small Batches</h3>
                <p className="text-sm text-muted-foreground">Personal attention to every student</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-3">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Hybrid Learning</h3>
                <p className="text-sm text-muted-foreground">Offline + online support</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-3">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Concept-First</h3>
                <p className="text-sm text-muted-foreground">Strong fundamentals approach</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-3">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Proven Results</h3>
                <p className="text-sm text-muted-foreground">Top JEE & NEET ranks</p>
              </div>
            </div>
          </div>

          <div className="text-center animate-fade-in">
            <h2 className="text-2xl font-bold mb-4">Since 2010</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              For over a decade, Concepts Coaching has been helping students achieve their dreams 
              through dedicated mentorship and rigorous preparation. Our alumni have secured top 
              ranks in JEE Main, JEE Advanced, and NEET examinations.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
