import { Metadata } from "next";
import Hero from "@/components/Hero";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Miracle Park",

  // other metadata
  description: "Miracle Park is a modern and creative digital agency.",
};

export default function Home() {
  return (
    <main>
      <Hero />

      <Feature />
      <About />
      <FeaturesTab />
      <Blog />
      <Footer />
    </main>
  );
}
