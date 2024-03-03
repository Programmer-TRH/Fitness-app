import React from "react";
import HeadingText from "./ui/Home/HeadingText";
import Hero from "./ui/Home/Hero";

export default function Home() {
  return (
    <section className="h-full py-40">
     <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10">
     <HeadingText />
     <Hero />
     </div>
    </section>
  );
}
