'use client'

import React, { useEffect, useState } from "react";
import Link from "next/link";

const ThisWeekBanner: React.FC = () => {
  const [nextEvent, setNextEvent] = useState<{ date: Date; name: string } | null>(null);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const gatherings = [
      { day: 0, hour: 10, minute: 0, name: "Sunday Service" },
      { day: 5, hour: 18, minute: 30, name: "Friday Travail" },
    ];

    const updateCountdown = () => {
      const now = new Date();
      let closest: { date: Date; name: string } | null = null;
      let minDiff = Infinity;

      for (const g of gatherings) {
        const targetDate = new Date(now);
        targetDate.setUTCHours(g.hour, g.minute, 0, 0);

        const currentDay = now.getUTCDay();
        let daysUntil = g.day - currentDay;

        // If it's the same day but the time hasn't passed, daysUntil is 0
        // If it's the same day but the time has passed, or it's a future day, calculate days until next week
        if (daysUntil < 0 || (daysUntil === 0 && targetDate.getTime() <= now.getTime())) {
          daysUntil += 7;
        }

        targetDate.setUTCDate(now.getUTCDate() + daysUntil);

        const diff = targetDate.getTime() - now.getTime();
        if (diff < minDiff) {
          minDiff = diff;
          closest = { date: targetDate, name: g.name };
        }
      }

      if (closest) {
        setNextEvent(closest);
        const diff = closest.date.getTime() - now.getTime();
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  const formattedDateTime = nextEvent
    ? `${nextEvent.date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    })} | ${nextEvent.date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    })}`
    : "";

  return (
    <section className="relative w-full h-[350px] md:h-[400px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/this-week-at-tnhc.jpg')" }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center text-white px-4 md:px-0 gap-4">
        <p
          style={{ fontFamily: "var(--font-dm-sans)" }}
          className="uppercase text-sm md:text-base tracking-wider text-gray-200"
        >
          {formattedDateTime}
        </p>
        <h2 className="text-3xl md:text-5xl font-bold">{nextEvent?.name}</h2>

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
          href="https://docs.google.com/forms/d/e/1FAIpQLSeXTEa-5j85rhyc0dvgpu_PZ9p2-yM_P6EDLyo50a2QYbfssg/viewform?usp=header"
          target="_blank"
          rel="noopener noreferrer"
          style={{ backgroundColor: "var(--font-accent-color)" }}
          className="mt-6 px-6 py-3 rounded-lg font-semibold text-black transition-colors"
        >
          RSVP Now
        </Link>
      </div>
    </section>
  );
};

export default ThisWeekBanner;