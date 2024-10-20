'use client';

import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import { useTranslations } from 'next-intl';

export const Footer = () => {
  const t = useTranslations('footer'); 

  const footerLink = [
    {
      title: 'Github',
      href: '#',
    },
    {
      title: 'LinkedIn',
      href: '#',
    },
  ];

  return (
    <footer className='relative -z-10 overflow-x-clip'>
      <div className='absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10'></div>
      <div className='container'>
        <div className='border-t border-white/15 py-6 text-sm flex flex-col md:flex-row lg:flex-row lg:justify-between items-center gap-8'>
          <div className='text-white'>&copy;{t('copyright')}</div>
          <nav className='flex flex-col md:flex-row lg:flex-row md:items-center gap-8'>
            {footerLink.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className='inline-flex items-center gap-1.5'
              >
                <span className='font-semibold'>{link.title}</span>
                <ArrowUpRightIcon className='size-4' />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
