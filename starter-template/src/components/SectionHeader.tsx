import React from 'react';

export const SectionHeader = ({
	title,
	eyebrow,
	description,
}: {
	title: string;
	eyebrow: string;
	description: string;
}) => {
	return (
		<>
			<div className='flex justify-center '>
				<p className='uppercase font-semibold text-2xl tracking-widest bg-gradient-to-r from-orange-500 to-sky-500 text-center text-transparent bg-clip-text'>
					{eyebrow}
				</p>
			</div>
			<h2 className='font-serif text-3xl md:text-5xl text-center mt-6'>
				{title}
			</h2>
			<p className='text-center md:text-lg lg:text-xl text-gray-700 font-semibold/50 dark:text-white/60 mt-4 max-w-md mx-auto italic'>
    {description}
			</p>
		</>
	);
};
