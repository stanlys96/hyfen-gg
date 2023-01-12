import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import Fade from 'react-reveal/Fade'
import Link from 'next/link'

export default function EasiestWay() {
	const { t } = useTranslation('home')

	return (
		<div className='join-community-bg my-24 md:-mt-24 md:-mb-32 relative'>
			<div className='container mx-auto flex flex-col justify-center items-center h-full'>
				<Fade top>
					<p className='font-bold text-[28px] md:text-[48px] mb-5 text-center'>
						{t('home:Join Community')}
					</p>
				</Fade>
				<Fade top delay={200}>
					<Link href='/community' passHref>
						<p className='header__download-button text-slate-900 bg-white py-3 px-11 inline-block text-base font-bold cursor-pointer'>
							{t('home:Learn More')}
						</p>
					</Link>
				</Fade>
			</div>
		</div>
	)
}
