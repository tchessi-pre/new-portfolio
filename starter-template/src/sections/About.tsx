'use client';

import { useState } from 'react';
import { Card } from '@/components/Card';
import { SectionHeader } from '@/components/SectionHeader';
import bookImage from '@/assets/images/book-cover.png';
import habitImage from '@/assets/images/habit.webp';
import Image from 'next/image';
import smileMemoji from '@/assets/images/memoji-smile.png';
import JavascriptIcon from '@/assets/icons/square-js.svg';
import PhpIcon from '@/assets/icons/php-svgrepo-com.svg';
import HTMLIcon from '@/assets/icons/html5.svg';
import CssIcon from '@/assets/icons/css3.svg';
import ReactIcon from '@/assets/icons/react.svg';
import GithubIcon from '@/assets/icons/github.svg';
import GoIcon from '@/assets/icons/go-svgrepo-com.svg';
import DockerIcon from '@/assets/icons/docker-icon-svgrepo-com.svg';
import NestJsIcon from '@/assets/icons/nestjs-svgrepo-com.svg';
import NextJsIcon from '@/assets/icons/nextjs-icon-svgrepo-com.svg';
import TailwindIcon from '@/assets/icons/tailwindcss-svgrepo-com.svg';
import VueJsIcon from '@/assets/icons/vuejs-svgrepo-com.svg';
import StrapiIcon from '@/assets/icons/strapi-svgrepo-com.svg';
import MaterialUiIcon from '@/assets/icons/material-ui-svgrepo-com.svg';
import PythonIcon from '@/assets/icons/python-svgrepo-com.svg';
import KubernetesIcon from '@/assets/icons/kubernetes-svgrepo-com (1).svg';
import AngularJsIcon from '@/assets/icons/angularjs-svgrepo-com.svg';
import PostgreSQLIcon from '@/assets/icons/postgresql-svgrepo-com.svg';
import MySQLIcon from '@/assets/icons/mysql-svgrepo-com.svg';
import TypeScriptIcon from '@/assets/icons/brand-typescript-svgrepo-com.svg';
import MongoDBIcon from '@/assets/icons/mongodb-svgrepo-com.svg';
import YarnIcon from '@/assets/icons/yarn-svgrepo-com.svg';
import NpmIcon from '@/assets/icons/npm-svgrepo-com.svg';
import PnpmIcon from '@/assets/icons/light-pnpm-svgrepo-com.svg';
import GitIcon from '@/assets/icons/git-svgrepo-com.svg';
import { CardHeader } from '@/components/CardHeader';
import LeftArrowIcon from '@/assets/icons/alt-arrow-left-svgrepo-com.svg';
import RightArrowIcon from '@/assets/icons/alt-arrow-right-svgrepo-com.svg';

import { ToolboxItems } from '@/components/ToolboxItems';
import { motion, AnimatePresence } from 'framer-motion';
import { useRef } from 'react';
import { useTranslations } from 'next-intl';

const images = [
	{ src: '/napoleonhill.png', alt: 'Book Cover' },
	{ src: '/habit.webp', alt: 'Habit Image' },
	{ src: '/7-habit.png', alt: 'Habit Image' },
	{ src: '/tolteques.jpg', alt: 'Habit Image' },
];

const toolboxItems = [
	{
		title: 'Javascript',
		iconType: JavascriptIcon,
	},
	{
		title: 'TypeScript',
		iconType: TypeScriptIcon,
	},
	{
		title: 'Golang',
		iconType: GoIcon,
	},
	{
		title: 'Php',
		iconType: PhpIcon,
	},
	{
		title: 'Python',
		iconType: PythonIcon,
	},
	{
		title: 'HTML5',
		iconType: HTMLIcon,
	},
	{
		title: 'CSS',
		iconType: CssIcon,
	},
	{
		title: 'Tailwind',
		iconType: TailwindIcon,
	},
	{
		title: 'Material UI',
		iconType: MaterialUiIcon,
	},
	{
		title: 'React',
		iconType: ReactIcon,
	},
	{
		title: 'NextJS',
		iconType: NextJsIcon,
	},
	{
		title: 'VueJS',
		iconType: VueJsIcon,
	},
	{
		title: 'AngularJS',
		iconType: AngularJsIcon,
	},
	{
		title: 'Github',
		iconType: GithubIcon,
	},
	{
		title: 'Git',
		iconType: GitIcon,
	},
	{
		title: 'NestJS',
		iconType: NestJsIcon,
	},
	{
		title: 'Strapi',
		iconType: StrapiIcon,
	},
	{
		title: 'Docker',
		iconType: DockerIcon,
	},
	{
		title: 'Kubernetes',
		iconType: KubernetesIcon,
	},
	{
		title: 'PostgreSQL',
		iconType: PostgreSQLIcon,
	},
	{
		title: 'MySQL',
		iconType: MySQLIcon,
	},
	{
		title: 'MongoDB',
		iconType: MongoDBIcon,
	},
	{
		title: 'Yarn',
		iconType: YarnIcon,
	},
	{
		title: 'NPM',
		iconType: NpmIcon,
	},
	{
		title: 'PNPM',
		iconType: PnpmIcon,
	},
];

export const AboutSection = () => {
	const t = useTranslations('about');
	const constraintRef = useRef(null);
	// const selectedImage = t('image') === 'habitImage' ? habitImage : bookImage;

	// Définition de l'index avec un type explicite
	const [currentIndex, setCurrentIndex] = useState<number>(0);
	const [direction, setDirection] = useState<number>(1);
	// Récupération de la largeur et de la hauteur avec des valeurs par défaut
	const width = Number(t('width', { default: 160 }));
	const height = Number(t('height', { default: 240 }));

	// Fonctions pour changer d'image
	const goToPrevious = () => {
		setDirection(1); // Set direction to -1 for previous
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? images.length - 1 : prevIndex - 1
		);
	};

	const goToNext = () => {
		setDirection(-1); // Set direction to 1 for next
		setCurrentIndex((prevIndex) =>
			prevIndex === images.length - 1 ? 0 : prevIndex + 1
		);
	};

	const hobbies = [
		{
			title: t('hobbies.music', { default: 'Music' }),
			emoji: '🎶',
			left: '5%',
			top: '5%',
		},
		{
			title: t('hobbies.reading', { default: 'Reading' }),
			emoji: '📚',
			left: '50%',
			top: '5%',
		},
		{
			title: t('hobbies.football', { default: 'Football' }),
			emoji: '⚽',
			left: '35%',
			top: '40%',
		},
		{
			title: t('hobbies.badminton', { default: 'Badminton' }),
			emoji: '🏸',
			left: '10%',
			top: '35%',
		},
		{
			title: t('hobbies.nature', { default: 'Nature' }),
			emoji: '🌿',
			left: '70%',
			top: '45%',
		},
		{
			title: t('hobbies.guitar', { default: 'Guitar' }),
			emoji: '🎸',
			left: '5%',
			top: '65%',
		},
		{
			title: t('hobbies.fitness', { default: 'Fitness' }),
			emoji: '🏋️‍♂️',
			left: '45%',
			top: '70%',
		},
		{
			title: t('hobbies.sports', { default: 'Sports' }),
			emoji: '🏅',
			left: '30%',
			top: '80%',
		},
		{
			title: t('hobbies.travel', { default: 'Travel' }),
			emoji: '✈️',
			left: '15%',
			top: '60%',
		},
		{
			title: t('hobbies.cooking', { default: 'Cooking' }),
			emoji: '🍲',
			left: '60%',
			top: '30%',
		},
	];

	return (
		<div className='py-20 lg:py-28' id='about'>
			<div className='container'>
				<SectionHeader
					eyebrow={t('eyebrow')}
					title={t('title')}
					description={t('description')}
				/>

				<div className='mt-20 flex flex-col gap-8'>
					<div className='grid grid-col-1 gap-8 md:grid md:grid-cols-5 lg:grid-cols-3 '>
						<Card className='h-[320px] md:col-span-2 lg:col-span-1 relative'>
							<CardHeader
								title={t('myReadsTitle')}
								description={t('myReadsDescription')}
							/>
							{/* Image with framer-motion for smooth transitions */}
							<AnimatePresence mode="wait">
								<motion.div
									key={currentIndex}
									custom={direction}
									initial={{ opacity: 0, x: direction === 1 ? 100 : -100 }}
									animate={{ opacity: 1, x: 0 }}
									exit={{ opacity: 0, x: direction === 1 ? -100 : 100 }}
									transition={{ duration: 0.6, ease: 'easeInOut' }}
									className='w-40 mx-auto mt-2 md:mt-0'
								>
									<Image
										src={images[currentIndex].src}
										alt={images[currentIndex].alt}
										width={width}
										height={height}
									/>
								</motion.div>
							</AnimatePresence>
							{/* Navigation Buttons */}
							<button
								onClick={goToPrevious}
								className='absolute left-4 top-1/2 transform -translate-y-1/2 text-white rounded-full p-2 transition duration-300 ease-in-out hover:scale-110 hover:text-gray-900'
								aria-label='Previous Image'
							>
								<LeftArrowIcon className='w-10 h-10 fill-current' />
							</button>
							<button
								onClick={goToNext}
								className='absolute right-4 top-1/2 transform -translate-y-1/2 text-white rounded-full p-2 transition duration-300 ease-in-out hover:scale-110 hover:text-gray-900'
								aria-label='Next Image'
							>
								<RightArrowIcon className='w-10 h-10 fill-current' />
							</button>
						</Card>
						<Card className='h-[320px] md:col-span-3 lg:col-span-2'>
							<CardHeader
								title={t('myToolboxTitle')}
								description={t('myToolboxDescription')}
								className=''
							/>
							<ToolboxItems
								items={toolboxItems}
								className=''
								itemsWrapperClassName='animate-move-left [animation-duration:30s]'
							/>
							<ToolboxItems
								items={toolboxItems}
								className='mt-6'
								itemsWrapperClassName='animate-move-right [animation-duration:15s]'
							/>
						</Card>
					</div>
					<div className='grid grid-col-1 md:grid-cols-5 lg:grid-cols-3 gap-8 '>
						<Card className='h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2'>
							<CardHeader
								title={t('beyondCodeTitle')}
								description={t('beyondCodeDescription')}
								className='px-6 pt-6'
							/>
							<div className='relative flex-1' ref={constraintRef}>
								{hobbies.map((hobby) => (
									<motion.div
										key={hobby.title}
										className='inline-flex items-center gap-2 px-6 bg-gradient-to-r from-orange-300 to-sky-400 rounded-full py-1.5 absolute'
										style={{
											left: hobby.left,
											top: hobby.top,
										}}
										drag
										dragConstraints={constraintRef}
									>
										<span className='font-medium text-gray-950'>
											{hobby.title}
										</span>
										<span>{hobby.emoji}</span>
									</motion.div>
								))}
							</div>
						</Card>
						<Card className='h-[320px] p-0 relative md:col-span-2 lg:col-span-1 border-sky-700 border-2 dark:border-gray-400' >
							<div className='relative h-full w-full '>
								<iframe
									src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d46446.65495417451!2d5.3903360000000005!3d43.3160192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sfr!4v1729360245919!5m2!1sfr!2sfr'
									width='600'
									height='450'
									style={{ border: 0 }}
									allowFullScreen
									loading='lazy'
									referrerPolicy='no-referrer-when-downgrade'
									title='Carte interactive de Marseille'
								></iframe>
							</div>
							<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full  after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/10">
								<div className='absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 to-sky-600 -z-20 animate-ping [animation-duration:2s]'></div>
								{/* <div className='absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10 '></div> */}
								<Image
									src={smileMemoji}
									alt='smiling memoji'
									className='size-30 rounded-full'
								/>
							</div>
						</Card>
					</div>
				</div>
			</div>
		</div>
	);
};
