'use client';

import { SectionHeader } from '../components/SectionHeader';
import { useTranslations } from 'next-intl';
import { Fragment } from 'react';
import { Card } from '../components/Card';
import Image from 'next/image';
import memojiAvatar1 from '@/assets/images/ana.jpeg';
import memojiAvatar2 from '@/assets/images/moradprofile.jpg';
import memojiAvatar3 from '@/assets/images/marcbergeprofil.jpg';
import memojiAvatar4 from '@/assets/images/memoji-avatar-4.png';
import memojiAvatar5 from '@/assets/images/memoji-avatar-5.png';

const avatars = [
	memojiAvatar1,
	memojiAvatar2,
	memojiAvatar3,
	memojiAvatar4,
	memojiAvatar5,
];

export const TestimonialsSection = () => {
	const t = useTranslations('testimonials');

	const testimonials = [
		{
			name: t('testimonial1.name'),
			position: t('testimonial1.position'),
			text: t('testimonial1.text'),
			avatar: memojiAvatar1,
		},
		{
			name: t('testimonial2.name'),
			position: t('testimonial2.position'),
			text: t('testimonial2.text'),
			avatar: memojiAvatar2,
		},
		{
			name: t('testimonial3.name'),
			position: t('testimonial3.position'),
			text: t('testimonial3.text'),
			avatar: memojiAvatar3,
		},
		{
			name: t('testimonial4.name'),
			position: t('testimonial4.position'),
			text: t('testimonial4.text'),
			avatar: memojiAvatar4,
		},
		{
			name: t('testimonial5.name'),
			position: t('testimonial5.position'),
			text: t('testimonial5.text'),
			avatar: memojiAvatar5,
		},
	];

	return (
		<div className='py-16 lg:py-24'>
			<div className='container'>
				<SectionHeader
					eyebrow={t('eyebrow')}
					title={t('title')}
					description={t('description')}
				/>
				<div className='mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4'>
					<div className='flex gap-8 pr-8 flex-none animate-move-left [animation-duration:50s] hover:[animation-play-state:paused]'>
						{[...new Array(2)].fill(0).map((_, index) => (
							<Fragment key={index}>
								{testimonials.map((testimonial, idx) => (
									<Card
										key={testimonial.name}
										className='max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-300'
									>
										<div className='flex gap-4 items-center'>
											<div className='size-14 bg-sky-700 inline-flex items-center justify-center rounded-full flex-shrink-0'>
												<Image
													src={testimonial.avatar}
													alt={testimonial.name}
													className='max-h-full rounded-full object-cover'
												/>
											</div>
											<div>
												<div className='font-bold text-orange-300'>{testimonial.name}</div>
												<div className='text-sm text-white'>
													{testimonial.position}
												</div>
											</div>
										</div>
										<p className='mt-4 md:mt-6 text-sm md:text-base text-white/80 italic'>
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
