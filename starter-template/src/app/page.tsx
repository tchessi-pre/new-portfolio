// pages/Home.tsx
'use client';

import { useState, useEffect } from 'react';
import Loader from '@/components/Loader';
import { Header } from '@/sections/Header';
import { HeroSection } from '@/sections/Hero';
import { ProjectsSection } from '@/sections/Projects';
import { TapeSection } from '@/sections/Tape';
import { TestimonialsSection } from '@/sections/Testimonials';
import { AboutSection } from './../sections/About';
import { ContactSection } from '@/sections/Contact';
import { Footer } from '@/sections/Footer';
import { ScrollToTopButton } from '@/components/ScrollToTopButton';

const Home: React.FC = () => {
	const [isLoading, setIsLoading] = useState<boolean>(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 1500);

		return () => clearTimeout(timer);
	}, []);

	return (
		<div>
			{isLoading ? (
				<Loader />
			) : (
				<>
					<Header />
					<HeroSection />
					<ProjectsSection />
					<TapeSection />
					<TestimonialsSection />
					<AboutSection />
					<ContactSection />
					<Footer />
					<ScrollToTopButton />
				</>
			)}
		</div>
	);
};

export default Home;
