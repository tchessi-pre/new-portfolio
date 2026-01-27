'use client';

import Image from 'next/image';
import darkSaasLandingPage from '@/assets/images/dark-saas-landing-page.png';
import LeChaudronLandingPage from '@/assets/images/lechaudronafricain.png';
import ReserviaLandingPage from '@/assets/images/reservia.png';
import OhmyfooLandingPage from '@/assets/images/Omyfood.png';
import LaChouetteAgenceLandingPage from '@/assets/images/lachouetteagence.png';
import BingPhotoLandingPage from '@/assets/images/bingphoto.png';
import AlafiaPlusPage from '@/assets/images/alafiaplus.png';
import BlogLandingPage from '@/assets/images/blog.png';
import CheckCircleIcon from '@/assets/icons/check-circle.svg';
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import { SectionHeader } from '../components/SectionHeader';
import { Card } from '@/components/Card';
import { useTranslations } from 'next-intl';

const portfolioProjects = [
	{
		company: 'Alafia Plus',
		year: '2025',
		title: 'Vite.js, Tailwindcss, TypeScript, S3, Brevo, Postgresql, Twilio',
		results: [
			// { title: 'enhancedUserExperience', value: 95 },
			// { title: 'improvedSiteSpeed', value: 70 },
			// { title: 'increasedMobileTraffic', value: 80 },
		],
		link: 'https://github.com/tchessi-pre',
		image: AlafiaPlusPage,
	},
	{
		company: 'Bing Photo',
		year: '2025',
		title: 'Nextjs, Tailwindcss, Go, Microservices, S3',
		results: [
			{ title: 'enhancedUserExperience', value: 95 },
			{ title: 'improvedSiteSpeed', value: 70 },
			{ title: 'increasedMobileTraffic', value: 80 },
		],
		link: 'https://github.com/tchessi-pre/bing-photo-front',
		image: BingPhotoLandingPage,
	},
	{
		company: 'Le Chaudron Africain',
		year: '2024',
		title: 'Restaurant Africain à Marseille',
		results: [
			{ title: 'enhancedUserExperience', value: 40 },
			{ title: 'improvedSiteSpeed', value: 50 },
			{ title: 'increasedMobileTraffic', value: 35 },
		],
		link: 'https://lechaudronafricain.com/',
		image: LeChaudronLandingPage,
	},
	{
		company: 'Ohmyfood',
		year: 'HTML, SCSS',
		title: 'Créer et dynamiser un site web',
		results: [
			{ title: 'boostedSales', value: 20 },
			{ title: 'expandedCustomerReach', value: 35 },
			{ title: 'increasedBrandAwareness', value: 15 },
		],
		link: 'https://tchessi-pre.github.io/Tchessipre_03_19052021/',
		image: OhmyfooLandingPage,
	},
	{	
		company: "Création d'un blog",
		year: 'SYMFONY, PHP',
		title: "Création d'un Blog",
		results: [
			{ title: 'enhancedUserExperience', value: 40 },
			{ title: 'improvedSiteSpeed', value: 50 },
			{ title: 'increasedMobileTraffic', value: 35 },
		],
		link: 'https://tchessi-pre.github.io/Tchessipre_03_19052021/',
		image: BlogLandingPage,
	},
	{
		company: "La Chouette Agence",
		year: 'SEO',
		title: "Optimisation d'un site web existant, SEO",
		results: [
			{ title: 'enhancedUserExperience', value: 40 },
			{ title: 'improvedSiteSpeed', value: 50 },
			{ title: 'increasedMobileTraffic', value: 35 },
		],
		link: 'https://tchessi-pre.github.io/Lachouetteagence/',
		image: LaChouetteAgenceLandingPage,
	},
	{
		company: "Reservia",
		year: 'HTML, CSS',
		title: "Transformer d'une maquette en site web",
		results: [
			{ title: 'enhancedUserExperience', value: 40 },
			{ title: 'improvedSiteSpeed', value: 50 },
			{ title: 'increasedMobileTraffic', value: 35 },
		],
		link: 'https://tchessi-pre.github.io/Tchessipre_2_15042021/',
		image: ReserviaLandingPage,
	},
];


export const ProjectsSection = () => {
	const t = useTranslations('projects');

	return (
		<section className='pb-16 lg:py-24' id='projects'	>
			<div className='container'>
				<SectionHeader
					eyebrow={t('sectionHeader.eyebrow')}
					title={t('sectionHeader.title')}
					description={t('sectionHeader.description')}
				/>
				<div className='flex flex-col mt-10 md:mt-20 gap-20'>
					{portfolioProjects.map((project, projectIndex) => (
						<Card
							key={project.title}
							className='px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky'
							style={{
								top: `calc(64px + ${projectIndex * 40}px)`,
							}}
						>
							<div className='lg:grid lg:grid-cols-2 lg:gap-16'>
								<div className='lg:pb-16'>
									<div className='bg-gradient-to-r from-orange-500 to-white inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text'>
										<span>{project.company}</span>
										<span>&bull;</span>
										<span>{project.year}</span>
									</div>
									<h3 className='font-serif text-2xl md:mt-5 md:text-4xl mt-2 text-white'>
										{project.title}
									</h3>
									<hr className='border-t-2 border-white/5 mt-4 md:mt-5' />
									<ul className='flex flex-col gap-4 mt-4 md:mt-5'>
										{project.results.map((result) => (
											<li
												key={result.title}
												className='flex gap-2 text-sm md:text-base text-white/80'
											>
												<CheckCircleIcon className='size-5 md:size-6' />
												<span>
													{t(`results.${result.title}`, {
														percentage: result.value,
													})}
												</span>
											</li>
										))}
									</ul>
									<a href={project.link}>
										<button className='bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8'>
											<span>{t('visitLiveSite')}</span>
											<ArrowUpRightIcon className='size-4' />
										</button>
									</a>
								</div>
								<div className='relative'>
									<Image
										src={project.image}
										alt={project.title}
										className='mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none'
									/>
								</div>
							</div>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
};

