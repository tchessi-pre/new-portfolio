'use client';

import { Card } from '@/components/Card';
import { SectionHeader } from '@/components/SectionHeader';
import bookImage from '@/assets/images/book-cover.png';
import mapImage from '@/assets/images/mapM.png';
import Image from 'next/image';
import smileMemoji from '@/assets/images/memoji-smile.png';
import JavascriptIcon from '@/assets/icons/square-js.svg';
import HTMLIcon from '@/assets/icons/html5.svg';
import CssIcon from '@/assets/icons/css3.svg';
import ReactIcon from '@/assets/icons/react.svg';
import ChromeIcon from '@/assets/icons/chrome.svg';
import GithubIcon from '@/assets/icons/github.svg';
import GoIcon from '@/assets/icons/go-svgrepo-com.svg';
import DockerIcon from '@/assets/icons/docker-icon-svgrepo-com.svg';
import NestJsIcon from '@/assets/icons/nestjs-svgrepo-com.svg';
import NextJsIcon from '@/assets/icons/nextjs-icon-svgrepo-com.svg';
import TailwindIcon from '@/assets/icons/tailwindcss-svgrepo-com.svg';
import VueJsIcon from '@/assets/icons/vuejs-svgrepo-com.svg';
import StrapiIcon from '@/assets/icons/strapi-svgrepo-com.svg';
import MaterialUiIcon from '@/assets/icons/material-ui-svgrepo-com.svg';
import KubernetesIcon from '@/assets/icons/kubernetes-svgrepo-com (1).svg';
import AngularJsIcon from '@/assets/icons/angularjs-svgrepo-com.svg';
import PostgreSQLIcon from '@/assets/icons/postgresql-svgrepo-com.svg';
import MySQLIcon from '@/assets/icons/mysql-svgrepo-com.svg';
import TypeScriptIcon from '@/assets/icons/brand-typescript-svgrepo-com.svg';
import MongoDBIcon from '@/assets/icons/mongodb-svgrepo-com.svg';
import { CardHeader } from '@/components/CardHeader';
import { ToolboxItems } from '@/components/ToolboxItems';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useTranslations } from 'next-intl';

const toolboxItems = [
	{
		title: 'Javascript',
		iconType: JavascriptIcon,
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
		title: 'React',
		iconType: ReactIcon,
	},
	{
		title: 'Chrome',
		iconType: ChromeIcon,
	},
	{
		title: 'Github',
		iconType: GithubIcon,
	},
	{
		title: 'Golang',
		iconType: GoIcon,
	},
	{
		title: 'Docker',
		iconType: DockerIcon,
	},
	{
		title: 'TypeScript',
		iconType: TypeScriptIcon,
	},
	{
		title: 'NestJS',
		iconType: NestJsIcon,
	},
	{
		title: 'NextJS',
		iconType: NextJsIcon,
	},
	{
		title: 'Tailwind',
		iconType: TailwindIcon,
	},
	{
		title: 'VueJS',
		iconType: VueJsIcon,
	},
	{
		title: 'Strapi',
		iconType: StrapiIcon,
	},
	{
		title: 'Material UI',
		iconType: MaterialUiIcon,
	},
	{
		title: 'Kubernetes',
		iconType: KubernetesIcon,
	},
	{
		title: 'AngularJS',
		iconType: AngularJsIcon,
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
];


export const AboutSection = () => {
	const t = useTranslations('about'); 
	const constraintRef = useRef(null);

	const hobbies = [
		{
			title: t('hobbies.painting'),
			emoji: '🎨',
			left: '5%',
			top: '5%',
		},
		{
			title: t('hobbies.photography'),
			emoji: '📹',
			left: '50%',
			top: '5%',
		},
		{
			title: t('hobbies.hiking'),
			emoji: '✌️',
			left: '35%',
			top: '40%',
		},
		{
			title: t('hobbies.gaming'),
			emoji: '🎮',
			left: '10%',
			top: '35%',
		},
		{
			title: t('hobbies.music'),
			emoji: '🎸',
			left: '70%',
			top: '45%',
		},
		{
			title: t('hobbies.fitness'),
			emoji: '🏋️‍♀️',
			left: '5%',
			top: '65%',
		},
		{
			title: t('hobbies.reading'),
			emoji: '📘',
			left: '45%',
			top: '70%',
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
						<Card className='h-[320px] md:col-span-2 lg:col-span-1'>
							<CardHeader
								title={t('myReadsTitle')}
								description={t('myReadsDescription')}
							/>
							<div className='w-40 mx-auto mt-2 md:mt-0'>
								<Image src={bookImage} alt='Book cover' />
							</div>
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
										className='inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute'
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
						<Card className='h-[320px] p-0 relative md:col-span-2 lg:col-span-1'>
							<div className='relative h-full w-full'>
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
							<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full  after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
								<div className='absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]'></div>
								<div className='absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10 '></div>
								<Image
									src={smileMemoji}
									alt='smiling memoji'
									className='size-20'
								/>
							</div>
						</Card>
					</div>
				</div>
			</div>
		</div>
	);
};
