import React from 'react';

const Loader: React.FC = () => {
	return (
		<div className='fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-opacity-90 text-white z-50'>
			<div className='relative flex items-center justify-center'>
				<div className='absolute w-16 h-16 rounded-full border-2 border-emerald-400 animate-ripple'></div>
				<div className='absolute w-10 h-10 rounded-full border-2 border-emerald-400 animate-ripple delay-150'></div>
				<div className='absolute w-6 h-6 rounded-full border-2 border-emerald-400 animate-ripple delay-300'></div>
			</div>
			<h2 className='mt-10 text-md font-semibold'>Chargement...</h2>

			<div className='absolute bottom-4 max-w-lg mx-auto text-center'>
				<p className='font-serif text-xl md:text-2xl tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text'>
					Je suis <span className='text-white/80 font-bold'>Tchèssi</span>,
					ingénieur web
				</p>
			</div>
		</div>
	);
};

export default Loader;
