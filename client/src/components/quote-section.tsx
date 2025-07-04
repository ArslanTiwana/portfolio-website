import { Quote } from "lucide-react";

export default function QuoteSection() {
  return (
    <section className="py-20 bg-gradient-primary text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Quote className="w-16 h-16 text-blue-200 mx-auto mb-8" />
        <blockquote className="text-2xl md:text-3xl font-light leading-relaxed mb-8">
          Code is not just what I write — it's what I <strong>plan, document, test, and own</strong>.
        </blockquote>
        <p className="text-xl text-blue-100 mb-8">
          My goal: Build like a founder, deliver like a team lead.
        </p>
        <Quote className="w-16 h-16 text-blue-200 mx-auto rotate-180" />
      </div>
    </section>
  );
}
