import { Metadata } from "next";
import Hero from "@/components/Hero";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Testimonial from "@/components/Testimonial";
import Footer from "@/components/Footer";
import { LampDemo } from "@/components/ui/lamp";
import { Feature } from "@/components/Features";

export const metadata: Metadata = {
  title: "Legally",
  description: "A legal webapp, which is always ready to guide you with all the legal related issues.",
  keywords: "automation solutions, custom chat bots, zero latency call handling",
};

export default function Home() {
  return (
    <main>
      <LampDemo />

      <div className="lato"> 
        <Feature />
        <div>

        </div>
        <Integration />
        <CTA />

        <Testimonial  />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
