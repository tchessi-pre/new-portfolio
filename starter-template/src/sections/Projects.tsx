'use client';

import Image from 'next/image';
import darkSaasLandingPage from '@/assets/images/dark-saas-landing-page.png';
import lightSaasLandingPage from '@/assets/images/light-saas-landing-page.png';
import aiStartupLandingPage from '@/assets/images/ai-startup-landing-page.png';
import CheckCircleIcon from '@/assets/icons/check-circle.svg';
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import { SectionHeader } from '../components/SectionHeader';
import { Card } from '@/components/Card';
import { useTranslations } from 'next-intl';

const portfolioProjects = [
	{
		company: 'Acme Corp',
		year: '2022',
		title: 'Dark Saas Landing Page',
		results: [
			{ title: 'enhancedUserExperience', value: 40 },
			{ title: 'improvedSiteSpeed', value: 50 },
			{ title: 'increasedMobileTraffic', value: 35 },
		],
		link: 'https://youtu.be/4k7IdSLxh6w',
		image: darkSaasLandingPage,
	},
	{
		company: 'Innovative Co',
		year: '2021',
		title: 'Light Saas Landing Page',
		results: [
			{ title: 'boostedSales', value: 20 },
			{ title: 'expandedCustomerReach', value: 35 },
			{ title: 'increasedBrandAwareness', value: 15 },
		],
		link: 'https://youtu.be/7hi5zwO75yc',
		image: lightSaasLandingPage,
	},
	{
		company: 'Quantum Dynamics',
		year: '2023',
		title: 'AI Startup Landing Page',
		results: [
			{ title: 'enhancedUserExperience', value: 40 },
			{ title: 'improvedSiteSpeed', value: 50 },
			{ title: 'increasedMobileTraffic', value: 35 },
		],
		link: 'https://youtu.be/Z7I5uSRHMHg',
		image: aiStartupLandingPage,
	},
];


export const ProjectsSection = () => {
	const t = useTranslations('projects');

	return (
		<section className='pb-16 lg:py-24'>
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
									<div className='bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text'>
										<span>{project.company}</span>
										<span>&bull;</span>
										<span>{project.year}</span>
									</div>
									<h3 className='font-serif text-2xl md:mt-5 md:text-4xl mt-2'>
										{project.title}
									</h3>
									<hr className='border-t-2 border-white/5 mt-4 md:mt-5' />
									<ul className='flex flex-col gap-4 mt-4 md:mt-5'>
										{project.results.map((result) => (
											<li
												key={result.title}
												className='flex gap-2 text-sm md:text-base text-white/50'
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

