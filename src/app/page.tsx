import FAQ from "@/components/faq";
import Features from "@/components/features";
import Hero from "@/components/hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans flex flex-col items-center justify-items-center min-h-screen pb-20 gap-16">
      <main className="flex flex-col gap-[32px] items-center justify-center">
        <Hero />
        <Features />
        <FAQ />
      </main>
    </div>
  );
}
