'use client';

import { Inter, Calistoga } from 'next/font/google';
import './globals.css';
import { twMerge } from 'tailwind-merge';
import { NextIntlClientProvider } from 'next-intl';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { ThemeProvider } from '@/components/theme-provider';

const NoSSR = dynamic(() => import('../components/NoSSR'), { ssr: false });

// Configuration des polices Google
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
		// Récupération de la langue stockée dans le localStorage, sinon garde 'en'
		const storedLanguage = localStorage.getItem('language') || 'en';
		setLocale(storedLanguage);

		// Ajout des classes de police sur l'élément <html>
		document.documentElement.classList.add(inter.variable, calistoga.variable);
	}, []);

	// Chargement dynamique du fichier de traduction selon la langue
	const messages = require(`../../messages/${locale}.json`);

	return (
		<html lang={locale} suppressHydrationWarning className="dark:bg-gray-950">
			<head>
				<meta charSet="UTF-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name="google-site-verification" content="m8BKFNeqy4KvdNyB7Ci7vJdpKySCkpfggNspSHQlfYc" />
				<title>Tchèssi Pre - Ingénieur web Junior</title>
				<meta
					name="description"
					content="Portfolio de Tchèssi, ingénieur web junior spécialisé en développement frontend et backend. Découvrez ses projets, compétences techniques et réalisations professionnelles."
				/>
				<meta name="author" content="Tchèssi PRE" />
				<meta
					name="keywords"
					content="Tchessi Pre, Tchèssi, Ingenieur web , Marseille, développement web, frontend, backend, React, Next.js, JavaScript, TypeScript, portfolio"
				/>
				<meta name="robots" content="index, follow" />

				{/* Open Graph */}
				<meta property="og:title" content="Portfolio de Tchèssi" />
				<meta
					property="og:description"
					content="Découvrez mon portfolio en tant que développeur web. Explorez mes projets et compétences en développement frontend et backend."
				/>
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://tchessi-pre.dev" />
				<meta property="og:image" content="https://tchessi-pre.dev/images/preview.png" />
				<meta property="og:image:width" content="1200" />
				<meta property="og:image:height" content="630" />
				<meta property="og:site_name" content="Portfolio de Tchèssi" />
				<meta property="og:locale" content="fr_FR" />
				<meta property="og:updated_time" content="2025-02-01T00:00:00+00:00" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
				<link rel="manifest" href="/manifest.json" />
			</head>

			<body className={twMerge('min-h-screen bg-gradient-to-br from-orange-100 via-amber-50 to-yellow-50 dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-950 antialiased font-sans')}>
				<NoSSR>
					<NextIntlClientProvider locale={locale} messages={messages}>
						<ThemeProvider
							attribute="class"
							defaultTheme="dark"
							enableSystem
							disableTransitionOnChange
							storageKey="portfolio-theme"
						>
							{children}
						</ThemeProvider>
					</NextIntlClientProvider>
				</NoSSR>
			</body>
		</html>
	);
}
