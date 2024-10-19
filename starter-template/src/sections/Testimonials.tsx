'use client';

import { SectionHeader } from '../components/SectionHeader';
import { useTranslations } from 'next-intl';
import { Fragment } from 'react';
import { Card } from '../components/Card';
import Image from 'next/image';
import memojiAvatar1 from '@/assets/images/memoji-avatar-1.png';
import memojiAvatar2 from '@/assets/images/memoji-avatar-2.png';
import memojiAvatar3 from '@/assets/images/memoji-avatar-3.png';
import memojiAvatar4 from '@/assets/images/memoji-avatar-4.png';
import memojiAvatar5 from '@/assets/images/memoji-avatar-5.png';

const avatars = [
	memojiAvatar1,
	memojiAvatar2,
	memojiAvatar3,
	memojiAvatar4,
	memojiAvatar5,
];

const testimonials = [
	{
		name: 'John Doe',
		position: 'Mentor @ WebAcademy',
		text: 'Tchèssi has demonstrated exceptional growth during his time with us. His dedication to mastering both front-end and back-end technologies is commendable. He consistently delivered projects on time and exceeded expectations.',
	},
	{
		name: 'Sarah Lee',
		position: 'Lead Developer @ Digital Solutions',
		text: 'Working with Tchèssi was a great experience. He was quick to learn and apply new concepts, and his problem-solving skills were invaluable to the team. His work on our internal tools greatly improved team productivity.',
	},
	{
		name: 'David Brown',
		position: 'Project Manager @ CodeWorks',
		text: 'Tchèssi was a crucial part of our development team during his time with us. His ability to quickly understand complex projects and provide innovative solutions was highly appreciated.',
	},
	{
		name: 'Emily Clark',
		position: 'Instructor @ TechUniversity',
		text: 'Tchèssi has been an outstanding student. His curiosity and passion for web development are remarkable. He always pushed the boundaries and took initiatives to learn beyond the curriculum.',
	},
	{
		name: 'Michael Johnson',
		position: 'CTO @ NextGen IT',
		text: 'Tchèssi was a pleasure to have in the team. His adaptability and willingness to take on new challenges helped drive our projects forward. He would be an asset to any team.',
	},
];

export const TestimonialsSection = () => {
	const t = useTranslations('testimonials');

	return (
		<div className='py-16 lg:py-24'>
			<div className='container'>
				<SectionHeader
					eyebrow={t('eyebrow')}
					title={t('title')}
					description={t('description')}
				/>
				<div className='mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4'>
					<div className='flex gap-8 pr-8 flex-none animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]'>
						{[...new Array(2)].fill(0).map((_, index) => (
							<Fragment key={index}>
								{testimonials.map((testimonial, idx) => (
									<Card
										key={testimonial.name}
										className='max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-300'
									>
										<div className='flex gap-4 items-center'>
											<div className='size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0'>
												<Image
													src={avatars[idx]}
													alt={testimonial.name}
													className='max-h-full'
												/>
											</div>
											<div>
												<div className='font-semibold'>{testimonial.name}</div>
												<div className='text-sm text-white/40'>
													{testimonial.position}
												</div>
											</div>
										</div>
										<p className='mt-4 md:mt-6 text-sm md:text-base'>
											{testimonial.text}
										</p>
									</Card>
								))}
							</Fragment>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
