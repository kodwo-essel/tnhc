'use client'

import React, { useEffect, useState } from "react";
import Link from "next/link";

const ThisWeekBanner: React.FC = () => {
  const eventDate = new Date("2026-02-28T10:00:00"); // set your event date/time

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diff = eventDate.getTime() - now.getTime();

      if (diff <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[350px] md:h-[400px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/this-week.png')" }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center text-white px-4 md:px-0 gap-4">
        <p style={{fontFamily: "var(--font-dm-sans)"}} className="uppercase text-sm md:text-base tracking-wider text-gray-200">
          February 28, 2026 | Koreatown Campus
        </p>
        <h2 className="text-3xl md:text-5xl font-bold">Sunday Gathering</h2>

        {/* Countdown */}
        <div className="flex gap-6 md:gap-10 mt-4 text-center">
          <div>
            <div className="text-4xl md:text-4xl font-bold">{timeLeft.days}</div>
            <div className="text-sm md:text-base">Days</div>
          </div>
          <div>
            <div className="text-4xl md:text-4xl font-bold">{timeLeft.hours}</div>
            <div className="text-sm md:text-base">Hours</div>
          </div>
          <div>
            <div className="text-4xl md:text-4xl font-bold">{timeLeft.minutes}</div>
            <div className="text-sm md:text-base">Minutes</div>
          </div>
          <div>
            <div className="text-4xl md:text-4xl font-bold">{timeLeft.seconds}</div>
            <div className="text-sm md:text-base">Seconds</div>
          </div>
        </div>

        {/* RSVP Button */}
        <Link
          href="/rsvp"
          style={{backgroundColor: "var(--font-accent-color)"}}
          className="mt-6 px-6 py-3 rounded-lg font-semibold text-black transition-colors"
        >
          RSVP Now
        </Link>
      </div>
    </section>
  );
};

export default ThisWeekBanner;