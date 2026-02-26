import Hero from "./Hero";
import ThisWeekSection from "./ThisWeekSection";
import WelcomeSection from "./WelcomeSection";
import PodcastSection from "./PodcastSection";
import GatheringsSection from "./GatheringsSection";
import ContactSection from "./ContactSection";


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[80vh] text-center">
      <Hero />
      <WelcomeSection />
      <ThisWeekSection />
	    <PodcastSection/>
      <GatheringsSection />
      <ContactSection />

    </main>
  );
}
