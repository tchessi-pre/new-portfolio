'use client';

import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import grainImage from '@/assets/images/grain.jpg';
import { useTranslations } from 'next-intl';

export const ContactSection = () => {
	const t = useTranslations('contact');

	const email = 'tchessi.pre@laplateforme.io';
	const phone = '0687314570';

	return (
		<div className='py-16 pt-12 lg:py-24 lg:pt-20'>
			<div className='container'>
				<div className='bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0'>
					<div
						className='absolute inset-0 opacity-5 -z-10'
						style={{
							backgroundImage: `url(${grainImage.src})`,
						}}	
					></div>
					<div className='flex flex-col md:flex-row gap-8 md:gap-16 items-center' id='contact'>
						<div className='flex-1'>
							<h2 className='font-serif text-2xl md:text-3xl'>
								{t('heading')}
							</h2>
							<p className='text-sm md:text-base mt-2'>{t('description')}</p>
						</div>
						<div className='flex-1 flex flex-col items-center md:items-start'>
							<button className='text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900 mb-4'>
								<span className='font-semibold'>{t('buttonText')}</span>
								<ArrowUpRightIcon className='size-4' />
							</button>
							<div className='mt-4'>
								<p className='text-sm md:text-base'>
									<strong>Email:</strong>{' '}
									<a href={`mailto:${email}`} className='underline'>
										{email}
									</a>
								</p>
								<p className='text-sm md:text-base mt-2'>
									<strong>Téléphone:</strong>{' '}
									<a href={`tel:${phone}`} className='underline'>
										{phone}
									</a>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
