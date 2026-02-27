import React from "react";
import Link from "next/link";
import Image from "next/image";

const PodcastSection = () => {
  return (
    <section className="w-full bg-stone-100 pt-20 sm:py-20">
      <div className="max-w-6xl mx-auto overflow-hidden flex flex-col">
        <h1 className="text-black text-4xl font-black tracking-tighter uppercase my-4">
          LATEST MESSAGE
        </h1>

        <div className="w-full bg-black rounded-2xl overflow-hidden shadow-2xl">
          {/* TOP PART */}
          <div className="flex flex-col md:flex-row">

            {/* Image */}
            <div className="relative md:w-1/3 h-64 md:h-auto min-h-[250px]">
              <Image
                src="/podcast.webp"
                alt="Latest Message"
                fill
                className="object-cover opacity-80"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>

            {/* Episode Info */}
            <div className="md:w-2/3 p-10 flex flex-col justify-center gap-6">
              <span className="uppercase text-xs font-black tracking-[0.4em] text-[var(--font-accent-color)]">
                Watch now
              </span>

              <h3 className="text-3xl md:text-5xl font-black text-white leading-none tracking-tighter uppercase">
                Faith in the Middle of the Storm
              </h3>

              <p
                style={{ fontFamily: "var(--font-dm-sans)" }}
                className="text-stone-400 text-lg font-medium leading-relaxed"
              >
                Catch up on our latest teaching from our Sunday gathering. Subscribe to our YouTube channel to stay updated with all our latest messages.
              </p>
            </div>
          </div>

          {/* BOTTOM PART */}
          <div className="border-t border-white/10 px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-6 bg-white/5">

            <p className="text-stone-300 text-sm font-medium" style={{ fontFamily: "var(--font-dm-sans)" }}>
              Join thousands of others growing in their walk with God.
            </p>

            {/* Listen Button */}
            <a
              href="https://youtube.com/@thenewhousechurch?si=zh7o7aEkcfGTFcQR"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white px-10 py-4 rounded-full text-black font-black text-xs tracking-[0.2em] uppercase hover:scale-105 transition-transform duration-300 shadow-xl"
            >
              SUBSCRIBE ON YOUTUBE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PodcastSection;