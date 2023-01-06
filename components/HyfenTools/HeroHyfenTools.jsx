import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import Fade from 'react-reveal/Fade';
import ScrollDown from '../Common/ScrollDown'
import Image from 'next/image'

function HeroHyfenTools() {

	const { t } = useTranslation('hyfen-tools')
	return (
		<div className='pt-24 pb-24 md:pb-0 lg:pt-0 relative flex flex-col justify-around md:flex-row container mx-auto'>
			<div className="lg:mt-0">
				<div className='lg:pt-40'>
					<Fade top>
						<h1 className='md:text-5xl lg:text-6xl text-center lg:text-left font-bold hyfen-play-gradient'>
							{t('Hyfen Tools')}
						</h1>
						<h1 className='text-2xl md:text-3xl lg:text-4xl text-center lg:text-left font-bold'>
							{t('Manage Guild')}
						</h1>
					</Fade>

					<Fade
						top
						delay={600}
					>
						<div className="flex justify-center lg:block">
							<a href="#" className='w-fit header__download-button text-slate-900 bg-white py-3 px-6 inline-block text-xs md:text-sm font-bold cursor-pointer mt-5 flex items-center'>
								<span className="inline-block mr-2">{t('Apply Here')} </span>
								<Image
									src={`/images/arrow_right.svg`}
									className='ml-5'
									width={20}
									height={20}
									alt='BaseLogo'
									layout='intrinsic'
									quality={100}
								/>
							</a>
						</div>
						<ScrollDown className="justify-center lg:justify-start hidden md:flex mt-10" />
					</Fade>
				</div>
			</div>
			<Fade right delay={600}>
				<div className='inline-block relative h-1/2 lg:ml-0 max-w-[1440px] md:pt-12 h-[510px] md:h-[605px] flex justify-center items-center'>
					<img 
						src="/images/hyfen-tools/hyfen-tools-img.svg" 
						alt="image" 
						className='h-full w-full md:py-0 py-16'
					/>
				</div>
			</Fade>
			<ScrollDown className="justify-center lg:justify-start flex md:hidden" />
		</div>
	)
}

export default HeroHyfenTools
