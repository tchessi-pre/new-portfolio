import grainImage from '@/assets/images/grain.jpg';
import { twMerge } from 'tailwind-merge';
import { ComponentPropsWithoutRef } from 'react';

export const Card = ({ className, children, ...other }: ComponentPropsWithoutRef<"div">) => {
	return (
		<div
			className={twMerge(
				"bg-gradient-to-br from-sky-900 to-sky-950 dark:from-sky-950 dark:to-sky-900",
				"rounded-3xl relative z-0 overflow-hidden",
				"after:z-10 after:content-[''] after:absolute after:inset-0",
				"after:outline-2 after:outline after:-outline-offset-2",
				"after:rounded-[calc(1.5rem-1px)] after:outline-white/20 after:pointer-events-none",
				"shadow-lg hover:shadow-xl transition-all duration-300",
				className
			)}
			{...other}
		>
			{/* Couche de grain améliorée */}
			<div
				className='absolute inset-0 opacity-[0.03] dark:opacity-[0.02] -z-10 mix-blend-soft-light'
				style={{
					backgroundImage: `url(${grainImage.src})`,
					backgroundSize: '200%',
					backgroundRepeat: 'repeat'
				}}
			/>

			{/* Effet de lumière subtile optionnel */}
			<div className="absolute inset-0 -z-10 opacity-10 dark:opacity-5 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-400/30 to-transparent" />

			{children}
		</div>
	);
};