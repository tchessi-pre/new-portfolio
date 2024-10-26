// ThemeSwitcher.tsx
'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export const ThemeSwitcher = () => {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	// S'assurer que le composant est monté pour éviter les problèmes d'hydratation
	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	return (
		<button
			onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
			className='p-2 rounded-full text-white transition-colors duration-200 hover:bg-white hover:text-gray-900 border border-white/15'
			aria-label='Toggle theme'
		>
			{theme === 'light' ? '🌙' : '☀️'}
		</button>
	);
};
