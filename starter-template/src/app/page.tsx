import { Header } from '@/sections/Header';
import { HeroSection } from '@/sections/Hero';
import { ProjectsSection } from '@/sections/Projects';
import { TapeSection } from '@/sections/Tape';
import { TestimonialsSection } from '@/sections/Testimonials';
import { AboutSection } from './../sections/About';
import { ContactSection } from '@/sections/Contact';
import { Footer } from '@/sections/Footer';
import { ScrollToTopButton } from '@/components/ScrollToTopButton';


export default function Home() {
  return (
		<div>
			<Header />
			<HeroSection />
			<ProjectsSection />
			<TapeSection />
			<TestimonialsSection />
			<AboutSection />
			<ContactSection />
			<Footer />
			<ScrollToTopButton />
		</div>
	);
}
