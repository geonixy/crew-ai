import Image from "next/image";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Services from "@/components/Services";
import System from "@/components/System";
import Effect from "@/components/Effect";
import Expansion from "@/components/Expansion";
import Footer from "@/components/Footer";

export default function Home() {
  return (
      <>
        <Nav />
        <main>
          <Hero />
          <Problem />
          <Services />
          <System />
          <Effect />
          <Expansion />
          <Footer />
        </main>
      </>
  );
}
