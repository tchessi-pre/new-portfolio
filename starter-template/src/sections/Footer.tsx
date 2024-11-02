'use client';

import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import { useTranslations } from 'next-intl';

export const Footer = () => {
	const t = useTranslations('footer');

	const footerLink = [
		{
			title: 'Github',
			href: 'https://github.com/tchessi-pre',
		},
		{
			title: 'LinkedIn',
			href: 'https://www.linkedin.com/in/tchessi-pre',
		},
		{
			title: t('cvLink'),
			href: '/CV_2022-11-10_Tchessi_PRE.pdf',
		},
	];

	return (
		<footer className='relative overflow-x-clip'>
			<div className='absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)]'></div>
			<div className='container'>
				<div className='border-t border-white/15 py-6 text-sm flex flex-col md:flex-row lg:flex-row lg:justify-between items-center gap-8'>
					<div className='text-white'>&copy; {t('copyright')}</div>
					<nav className='flex flex-col md:flex-row lg:flex-row md:items-center gap-8'>
						{footerLink.map((link) => (
							<a
								key={link.title}
								href={link.href}
								target={link.href.startsWith('http') ? '_blank' : '_self'}
								rel={
									link.href.startsWith('http')
										? 'noopener noreferrer'
										: undefined
								}
								className='relative inline-flex items-center gap-1.5 text-white hover:text-gray-300 transition-colors duration-200'
							>
								<span className='font-semibold'>{link.title}</span>
								<ArrowUpRightIcon className='size-4' />
								{/* Surlignement sous le lien avec animation */}
								<span className='absolute left-2 bottom-2 w-full h-0.5 bg-emerald-300 transform scale-x-0 transition-transform duration-300 ease-out origin-left hover:scale-x-100'></span>
							</a>
						))}
					</nav>
				</div>
			</div>
		</footer>
	);
};
