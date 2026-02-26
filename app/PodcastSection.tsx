import React from "react";
import Link from "next/link";
import Image from "next/image";

const PodcastSection = () => {
  return (
    <section className="w-full bg-stone-100 py-20">
      <div className="max-w-6xl mx-auto overflow-hidden flex flex-col">
        <h1 className="text-black text-4xl font-bold text-left my-4">
          LATEST PODCAST
        </h1>

        <div className="w-full bg-black">
          {/* TOP PART */}
          <div className="flex flex-col md:flex-row">
            
            {/* Image */}
            <div className="relative md:w-1/3 h-64 md:h-auto min-h-[250px]">
              <Image
                src="/podcast.webp"
                alt="Podcast Episode"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>

            {/* Episode Info */}
            <div className="md:w-2/3 p-8 flex flex-col justify-center gap-4">
              <p className="uppercase text-sm tracking-widest text-gray-200">
                Episode 12
              </p>

              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Faith in the Middle of the Storm
              </h3>

              <p
                style={{ fontFamily: "var(--font-dm-sans)" }}
                className="text-gray-200 text-lg"
              >
                In this episode, we talk about navigating difficult seasons,
                trusting God through uncertainty, and building unshakable faith
                even when life feels overwhelming.
              </p>
            </div>
          </div>

          {/* BOTTOM PART */}
          <div className="border-t border-gray-200 px-8 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            
            {/* Guests */}
            <div>
              <p className="text-sm text-gray-200 uppercase tracking-wide">
                Guests
              </p>
              <p className="text-lg font-semibold text-white">
                John Doe, Sarah Kim
              </p>
            </div>

            {/* Listen Button */}
            <Link
              href="/podcast"
              style={{ backgroundColor: "var(--font-accent-color)" }}
              className="px-6 py-3 rounded-lg text-black font-semibold hover:opacity-90 transition"
            >
              LISTEN NOW
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PodcastSection;