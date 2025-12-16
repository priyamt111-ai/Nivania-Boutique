import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Thank you for subscribing!", {
        description: "You'll receive our latest updates in your inbox.",
      });
      setEmail("");
    }
  };

  return (
    <section className="section-padding bg-foreground text-background">
      <div className="container-wide">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-sm font-medium tracking-[0.3em] uppercase text-background/60">
            Stay Updated
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold mt-3 mb-4">
            Join Our Newsletter
          </h2>
          <p className="text-background/70 mb-8 max-w-lg mx-auto">
            Subscribe to receive exclusive offers, early access to new arrivals, and style inspiration delivered to your inbox.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 bg-transparent border-b border-background/30 pb-3 text-background placeholder:text-background/50 focus:outline-none focus:border-background transition-colors"
              required
            />
            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-background text-foreground px-6 py-3 font-medium tracking-wide uppercase text-sm hover:bg-background/90 transition-colors"
            >
              Subscribe
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
