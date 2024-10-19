'use client';

import { Inter, Calistoga } from 'next/font/google';
import './globals.css';
import { twMerge } from 'tailwind-merge';
import { NextIntlClientProvider } from 'next-intl';
import { useEffect, useState } from 'react';

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
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		const storedLanguage = localStorage.getItem('language');
		if (storedLanguage) {
			setLocale(storedLanguage);
		}
		setIsMounted(true);
	}, []);

	if (!isMounted) {
		return (
			<html lang='en'>
				<body
					className={twMerge(
						inter.variable,
						calistoga.variable,
						'bg-gray-900 text-white antialiased font-sans flex justify-center items-center h-screen'
					)}
				>
					<div>Loading...</div>
				</body>
			</html>
		);
	}

	// Charger les fichiers de traduction en fonction de la langue
	const messages = require(`../../messages/${locale}.json`);

	return (
		<html lang={locale}>
			<body
				className={twMerge(
					inter.variable,
					calistoga.variable,
					'bg-gray-900 text-white antialiased font-sans'
				)}
			>
				<NextIntlClientProvider locale={locale} messages={messages}>
					{children}
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
