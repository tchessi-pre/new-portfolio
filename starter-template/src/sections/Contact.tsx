'use client';

import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import EmailIcon from '@/assets/icons/email-sign-svgrepo-com.svg'; 
import PhoneIcon from '@/assets/icons/phone-svgrepo-com.svg'; 
import grainImage from '@/assets/images/grain.jpg';
import { SectionHeader } from '@/components/SectionHeader';
import { useTranslations } from 'next-intl';
import { ContactForm } from '@/components/ContactForm';

export const ContactSection = () => {
	const t = useTranslations('contact');

	const email = 'tchessi.pre@laplateforme.io';
	const phone = '06.87.31.45.70';



	return (
		<div className='py-16 pt-12 lg:py-24 lg:pt-20'>
			<div className='container'>
				<SectionHeader
					eyebrow={t('eyebrow')}
					title={t('title')}
					description={t('personalStatement')}
				/>
				<div className='mt-8 bg-gradient-to-r from-orange-500 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0 shadow-lg'>
					<div
						className='absolute inset-0 opacity-5 -z-10'
						style={{
							backgroundImage: `url(${grainImage.src})`,
						}}
					></div>
					<div
						className='flex flex-col md:flex-row gap-8 md:gap-16 items-center'
						id='contact'
					>
						<div className='flex-1'>
							<h2 className='font-serif text-2xl md:text-3xl mb-2'>
								{t('heading')}
							</h2>
							<p className='text-sm md:text-base mt-2'>{t('description')}</p>
						</div>
						<div className='flex-1 flex flex-col items-center md:items-start'>
							<a
								href='https://www.linkedin.com/in/tch%C3%A8ssi-pre-2a8479216/'
								target='_blank'
								rel='noopener noreferrer'
								className='text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900 mb-4 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-800'
							>
								<span className='font-semibold'>{t('buttonText')}</span>
								<ArrowUpRightIcon className='size-4' />
							</a>

							<address className='mt-4 not-italic text-center md:text-left'>
								<p className='text-sm md:text-base flex items-center gap-2'>
									<EmailIcon className='w-4 h-4' />
									<strong>Email:</strong>{' '}
									<a
										href={`mailto:${email}`}
										className='underline hover:text-gray-700 transition-colors duration-200'
									>
										{email}
									</a>
								</p>
								<p className='text-sm md:text-base mt-2 flex items-center gap-2'>
									<PhoneIcon className='w-4 h-4' />
									<strong>Téléphone:</strong>{' '}
									<a
										href={`tel:${phone}`}
										className='underline hover:text-gray-700 transition-colors duration-200'
									>
										{phone}
									</a>
								</p>
							</address>
						</div>
					</div>
				</div>
				<ContactForm />
			</div>
		</div>
	);
};
