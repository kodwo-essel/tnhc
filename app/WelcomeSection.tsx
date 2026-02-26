import Link from "next/link";
import React from "react";

const WelcomeSection: React.FC = () => {
  return (
    <section className="w-full bg-[#F2F0EB] md:rounded-t-[4rem] mt-[-4rem]">
        <div className="w-full max-w-7xl mx-auto gap-10 flex flex-col md:flex-row gap-8 md:py-24 px-6 items-center justify-center">
            <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-8 py-16 md:px-6 items-stretch justify-center">
                {/* Text column slightly wider */}
                <div className="flex-[1.5] flex flex-col justify-center items-center gap-16">
                    <h1 className="text-black text-4xl font-bold">WELCOME TO TNHC</h1>
                    <p style={{fontFamily: "var(--font-dm-sans)"}} className="text-black text-2xl">
                    We are a diverse, multi-generational, and energetic church that gathers in Accra, Ghana. 
                    We believe God loves Ghana, and we will keep doing all that we can to reach our city - 
                    <strong>until all of Accra is saved</strong>.
                    </p>

                    <Link
                        href="/starthere"
                        className="bg-black text-white text-md font-semibold px-6 py-3 rounded-lg transition-colors w-max"
                    >
                        START YOUR JOURNEY
                    </Link>
                </div>

                {/* Video column */}
                <div className="flex-1 aspect-video">
                    <video
                        className="w-full h-full object-cover rounded-xl shadow-lg"
                        src="/welcome.mp4"
                        controls
                        controlsList="nodownload"
                        playsInline
                    />
                </div>
            </div>
        </div>
    </section>
  );
};

export default WelcomeSection;