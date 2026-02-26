"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const REELS = [
  "https://www.instagram.com/reel/DVM-X0UEvkB/embed/",
  "https://www.instagram.com/reel/DVKWA10km0o/embed/",
  "https://www.instagram.com/reel/DVHmnq0kmV7/embed/",
  "https://www.instagram.com/reel/DVFGzDqj4G4/embed/",
  "https://www.instagram.com/reel/DVCfqkkku9N/embed/",
  "https://www.instagram.com/reel/DU8-a5rkmIJ/embed/",
];

const THUMBNAILS = [
  "https://images.squarespace-cdn.com/content/v1/68b6452172021d1697c1fc52/1772073975430-YAXKLSFS2XNDA7BVI9DE/image-asset.jpeg?format=500w",
  "https://images.squarespace-cdn.com/content/v1/68b6452172021d1697c1fc52/1771983055019-IU48AY6B3W2OS873BGTJ/image-asset.jpeg?format=300w",
  "https://images.squarespace-cdn.com/content/v1/68b6452172021d1697c1fc52/1771892492757-A2E6LF09A87KJG7Q7GSU/image-asset.jpeg?format=500w",
  "https://images.squarespace-cdn.com/content/v1/68b6452172021d1697c1fc52/1771808806579-W8MGJAW52FLBSF0EURJP/image-asset.jpeg?format=500w",
  "https://images.squarespace-cdn.com/content/v1/68b6452172021d1697c1fc52/1771719095419-JX98TSF88ZY1WG98BKKH/image-asset.jpeg?format=300w",
  "https://images.squarespace-cdn.com/content/v1/68b6452172021d1697c1fc52/1771533186183-NCCWX8YLQJ019H1CGBAP/image-asset.jpeg?format=300w",
];

function ReelTile({
  src,
  thumbnail,
  index,
}: {
  src: string;
  thumbnail: string;
  index: number;
}) {
  const [playing, setPlaying] = useState(false);

  return (
    <div
      className="relative aspect-square overflow-hidden rounded-xl bg-stone-800 cursor-pointer group"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {playing ? (
        <iframe
          src={src}
          className="absolute inset-0 w-full h-full"
          allowFullScreen
          title={`Instagram reel ${index + 1}`}
        />
      ) : (
        <>
          {/* Thumbnail */}
          <Image
            src={thumbnail}
            alt={`Instagram reel ${index + 1}`}
            fill
            sizes="(max-width: 768px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300" />

          {/* Play button */}
          <button
            onClick={() => setPlaying(true)}
            aria-label="Play reel"
            className="absolute inset-0 flex items-center justify-center"
          >
            <span className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
              <svg
                className="w-5 h-5 text-stone-900 ml-0.5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </button>
        </>
      )}
    </div>
  );
}

export default function SocialFeedSection() {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-stone-900 px-6 py-20 sm:py-28">
      <div className="w-full max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          {/* Left */}
          <h2
            className={`text-white text-left text-3xl sm:text-4xl lg:text-5xl leading-tight max-w-md transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            Turns out church can be fun and not too serious all the time.
          </h2>

          {/* Right */}
          <div
            className={`flex flex-col items-start sm:items-end gap-3 transition-all duration-700 delay-150 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            <p className="text-stone-400 text-sm text-left sm:text-right">
              don&apos;t believe us?
              <br />
              check the feed →
            </p>

            <Link
              href="https://www.instagram.com"
              target="_blank"
              className="inline-block border-2 border-white text-white text-xs font-medium tracking-widest uppercase px-5 py-2 rounded-lg hover:bg-white hover:text-stone-900 transition-colors duration-200"
            >
              Instagram
            </Link>
          </div>
        </div>

        {/* Grid */}
        <div
          className={`grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 transition-all duration-700 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          {REELS.map((src, i) => (
            <ReelTile
              key={src}
              src={src}
              thumbnail={THUMBNAILS[i]}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}