import StarIcon from '@/assets/icons/star.svg';
import { Fragment } from 'react';
import { useTranslations } from 'next-intl';

export const TapeSection = () => {
	const t = useTranslations('tape.words');

	const words = [
		t('word1'),
		t('word2'),
		t('word3'),
		t('word4'),
		t('word5'),
		t('word6'),
		t('word7'),
		t('word8'),
		t('word9'),
		t('word10'),
		t('word11'),
	];

	return (
		<div className='py-16 lg:py-24 overflow-x-clip'>
			<div className='bg-gradient-to-r from-orange-500 to-sky-400 -rotate-3 -mx-1'>
				<div className='flex [flex-image:linear-gradient(to_right,transparent,black_10%,transparent)]'>
					<div className='flex flex-none gap-4 pr-4 py-3 animate-move-left [animation-duration:30s]'>
						{[...Array(2)].fill(0).map((_, index) => (
							<Fragment key={index}>
								{words.map((word) => (
									<div key={word} className='inline-flex gap-4 items-center'>
										<span className='text-white dark:text-gray-900 uppercase font-extrabold text-sm'>
											{word}
										</span>
										<StarIcon className='size-6 text-gray-900 -rotate-12' />
									</div>
								))}
							</Fragment>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
