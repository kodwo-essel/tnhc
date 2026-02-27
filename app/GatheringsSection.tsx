"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function GatheringsSection() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const fadeUp = (delay: string) =>
    `transition-all duration-700 ease-out ${delay} ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
    }`;

  return (
    <section
      ref={sectionRef}
      className="w-full min-h-screen bg-stone-100 flex items-center justify-center md:py-20 "
    >
      <div
        className={`bg-black md:rounded-3xl max-w-7xl w-full px-8 sm:px-14 py-14 transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
      >

        {/* Tag */}
        <div className={fadeUp("delay-75")}>
          <span className="inline-block border border-stone-200 rounded-lg px-3 py-1 text-xs font-medium tracking-widest uppercase text-stone-200 mb-7">
            Gatherings
          </span>
        </div>


        {/* Heading */}
        <h2
          className={`text-4xl text-white font-bold leading-tight mb-10 ${fadeUp("delay-100")}`}
        >
          WE&apos;D LOVE FOR YOU
          <br />
          TO JOIN US!
        </h2>

        <hr className="my-7 border-stone-200" />

        {/* Service Times */}
        <div className={`${fadeUp("delay-150")} flex flex-col gap-4`}>
          <p className="text-xs font-medium tracking-widest uppercase text-stone-400 mb-1">
            Service Times
          </p>
          <div className="text-base text-stone-400 leading-relaxed font-medium" style={{ fontFamily: "var(--font-dm-sans)" }}>
            <p>Our Sunday service is <strong className="text-stone-100 font-bold">10:00am</strong></p>
            <p>Friday Travail : <strong className="text-stone-100 font-bold">6:00pm</strong></p>
          </div>
        </div>

        <hr className="my-7 border-stone-200" />

        {/* Location */}
        <div className={`${fadeUp("delay-150")} flex flex-col gap-4`}>
          <p className="text-xs font-medium tracking-widest uppercase text-stone-400 mb-1">
            Location
          </p>
          <p className="text-base text-stone-400 leading-relaxed font-medium" style={{ fontFamily: "var(--font-dm-sans)" }}>
            The New house Church Haatso Atomic
          </p>
        </div>

        {/* CTA */}
        <div className={`mt-10 text-center ${fadeUp("delay-500")}`}>
          <Link
            href="/new"
            className="bg-white px-10 py-4 rounded-full text-black font-black text-xs tracking-[0.2em] uppercase hover:scale-105 transition-transform duration-300"
          >
            Plan your visit
          </Link>
        </div>
      </div>
    </section>
  );
}