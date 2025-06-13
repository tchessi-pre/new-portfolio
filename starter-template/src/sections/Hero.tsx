'use client';

import { useTranslations } from 'next-intl';
import memojiImage from '@/assets/images/memoji-computer.png';
import Image from 'next/image';
import ArrowDown from '@/assets/icons/arrow-down.svg';
import grainImage from '@/assets/images/grain.jpg';
import StarIcon from '@/assets/icons/star.svg';
import SparkleIcon from '@/assets/icons/sparkle.svg';
import { HeroOrbit } from '@/components/HeroOrbit';

export const HeroSection = () => {
	const t = useTranslations('hero');

	return (
		<div
			className='py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip'
			id='home'
		>
			<div className='absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]'>
				{/* <div
					className='absolute inset-0 -z-30 opacity-5'
					style={{ backgroundImage: `url(${grainImage.src})` }}
				></div> */}
				<div className='size-[620px] hero-ring'></div>
				{/* <div className='size-[820px] hero-ring'></div> */}
				{/* <div className='size-[1020px] hero-ring'></div>
				<div className='size-[1220px] hero-ring'></div> */}
				<HeroOrbit
					size={430}
					rotation={-14}
					shouldOrbit
					orbitDuration='30s'
					shouldSpin
					spinDuration='3s'
				>
					<SparkleIcon className='size-8 text-orange-500/20 dark:text-orange-300/20' />
				</HeroOrbit>
				<HeroOrbit
					size={440}
					rotation={79}
					shouldOrbit
					orbitDuration='32s'
					shouldSpin
					spinDuration='3s'
				>
					<SparkleIcon className='size-5 text-orange-500/20 dark:text-orange-300/20' />
				</HeroOrbit>
				<HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration='34s'>
					<div className='size-2 rounded-full bg-orange-500/20 dark:bg-orange-300/20' />
				</HeroOrbit>
				<HeroOrbit
					size={530}
					rotation={178}
					shouldOrbit
					orbitDuration='36s'
					shouldSpin
					spinDuration='3s'
				>
					<SparkleIcon className='size-10 text-orange-500/20 dark:text-orange-300/20' />
				</HeroOrbit>
				<HeroOrbit
					size={550}
					rotation={20}
					shouldOrbit
					orbitDuration='38s'
					shouldSpin
					spinDuration='6s'
				>
					<StarIcon className='size-12 text-orange-500/50 dark:text-orange-300' />
				</HeroOrbit>
				<HeroOrbit
					size={590}
					rotation={98}
					shouldOrbit
					orbitDuration='40s'
					shouldSpin
					spinDuration='6s'
				>
					<StarIcon className='size-8 text-orange-500/20 dark:text-orange-300' />
				</HeroOrbit>
				<HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration='42s'>
					<div className='size-2 rounded-full bg-orange-500/50 dark:bg-orange-300/20' />
				</HeroOrbit>
				<HeroOrbit
					size={710}
					rotation={144}
					shouldOrbit
					orbitDuration='44s'
					shouldSpin
					spinDuration='3s'
				>
					<SparkleIcon className='size-14 text-orange-500/20 dark:text-orange-300/20' />
				</HeroOrbit>
				<HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration='46s'>
					<div className='size-3 rounded-full bg-orange-500/20 dark:bg-orange-300/20' />
				</HeroOrbit>
				{/* <HeroOrbit
					size={800}
					rotation={-72}
					shouldOrbit
					orbitDuration='48s'
					shouldSpin
					spinDuration='6s'
				>
					<StarIcon className='size-28 text-orange-300' />
				</HeroOrbit> */}
			</div>
			<div className='container'>
				<div className='flex flex-col items-center '>
					<Image
						src={memojiImage}
						className='size-[100px]'
						alt='Person photo'
					/>
					<div className='bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg'>
						<div className='bg-green-500 size-2.5 rounded-full relative'>
							<div className='bg-green-500 absolute inset-0 rounded-full animate-ping-large'></div>
						</div>
						<div className='text-sm font-semi text-white dark:text-white/80 font-medium'>{t('availableForProjects')}</div>
					</div>
				</div>
				<div className='max-w-lg mx-auto'>
					<h1 className='font-serif text-3xl md:text-4xl text-center mt-8 tracking-widest bg-gradient-to-r from-orange-500 to-sky-500 text-transparent bg-clip-text'>
						{t('title').split('Tchèssi')[0]}
						<span className='text-gray-800 dark:text-white/80 font-bold inline-block animate-fade-in'>
							Tchèssi
						</span>
						{t('title').split('Tchèssi')[1]}
					</h1>

					<p className='mt-4 text-center text-gray-900 md:text-lg dark:text-white'>
						{t('subtitle')}
					</p>
				</div>
				<div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
					{/* Bouton Explore Work */}
					<button
						onClick={() =>
							window.open('https://github.com/tchessi-pre', '_blank')
						}
						className="relative inline-flex items-center gap-2 border-2 border-gray-700 dark:border-white/50 px-6 h-12 rounded-xl transition-all duration-300 hover:border-white hover:bg-white/10 active:bg-white/20 hover:shadow-lg"
					>
						<span className="font-semibold">{t('exploreWork')}</span>
						<ArrowDown className="w-4 h-4 transition-transform duration-500 ease-in-out group-hover:translate-y-1" />
					</button>

					{/* Bouton Let's Connect */}
					<button
						onClick={() =>
							document
								.getElementById('contact')
								?.scrollIntoView({ behavior: 'smooth' })
						}
						className="inline-flex items-center relative gap-2 border text-white border-gray-700/50 bg-gray-800 dark:bg-white  dark:text-gray-800 h-12 px-6 rounded-xl transition-all duration-300 hover:bg-gray-200 hover:border-gray-300 hover:text-gray-800 hover:shadow-lg"
					>
						<span>✌️</span>
						<span className="font-semibold">{t('letsConnect')}</span>
					</button>
				</div>

			</div>
		</div>
	);
};
