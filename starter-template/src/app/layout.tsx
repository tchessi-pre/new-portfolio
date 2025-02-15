'use client';

import { Inter, Calistoga } from 'next/font/google';
import './globals.css';
import { twMerge } from 'tailwind-merge';
import { NextIntlClientProvider } from 'next-intl';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const NoSSR = dynamic(() => import('../components/NoSSR'), { ssr: false });

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-sans',
});

const calistoga = Calistoga({
	subsets: ['latin'],
	variable: '--font-serif',
	weight: ['400'],
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const [locale, setLocale] = useState('en');

	useEffect(() => {
		const storedLanguage = localStorage.getItem('language');
		if (storedLanguage) {
			setLocale(storedLanguage);
		}

		// Ajouter les classes de police sur le client
		document.documentElement.classList.add(inter.variable, calistoga.variable);
	}, []);

	// Charger les fichiers de traduction en fonction de la langue
	const messages = require(`../../messages/${locale}.json`);

	return (
		<html lang={locale}>
			<head>
				<meta charSet='UTF-8' />
				<meta httpEquiv='X-UA-Compatible' content='IE=edge' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />

				<title>Portfolio de Tchèssi</title>
				<meta
					name='description'
					content='Découvrez mon portfolio en tant que développeur web. Explorez mes projets et compétences en développement frontend et backend.'
				/>
				<meta name='author' content='Tchèssi PRE' />
				<meta
					name='keywords'
					content='développement web, frontend, backend, React, Next.js, JavaScript, TypeScript, portfolio'
				/>
				<meta name='robots' content='index, follow' />

				{/* Open Graph (Facebook & LinkedIn) */}
				<meta property='og:title' content='Portfolio de Tchèssi' />
				<meta
					property='og:description'
					content='Découvrez mon portfolio en tant que développeur web. Explorez mes projets et compétences en développement frontend et backend.'
				/>
				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://votre-site.com' />
				<meta
					property='og:image'
					content='https://votre-site.com/images/preview.png'
				/>
				<meta property='og:image:width' content='1200' />
				<meta property='og:image:height' content='630' />
				<meta property='og:site_name' content='Portfolio de Tchèssi' />

				{/* LinkedIn Specific Meta Tags */}
				<meta property='og:locale' content='fr_FR' />
				<meta property='og:updated_time' content='2025-02-01T00:00:00+00:00' />

				{/* Twitter Card */}
				<meta name='twitter:card' content='summary_large_image' />
				<meta name='twitter:title' content='Portfolio de Tchèssi' />
				<meta
					name='twitter:description'
					content='Découvrez mon portfolio en tant que développeur web. Explorez mes projets et compétences en développement frontend et backend.'
				/>
				<meta
					name='twitter:image'
					content='https://votre-site.com/images/preview.png'
				/>
				<meta name='twitter:creator' content='@votre_twitter' />

				{/* Favicon */}
				<link rel='icon' href='/favicon.ico' />
			</head>

			<body className={twMerge('bg-gray-900 text-white antialiased font-sans')}>
				<NoSSR>
					<NextIntlClientProvider locale={locale} messages={messages}>
						{children}
					</NextIntlClientProvider>
				</NoSSR>
			</body>
		</html>
	);
}
