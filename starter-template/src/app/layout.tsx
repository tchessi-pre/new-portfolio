
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
				<title>Portfolio de Tchèssi</title>
				<meta
					name='description'
					content='Découvrez mon portfolio en tant que développeur web. Explorez mes projets et compétences en développement frontend et backend.'
				/>
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
