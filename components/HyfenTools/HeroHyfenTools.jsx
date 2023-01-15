import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import Fade from 'react-reveal/Fade'
import ScrollDown from '../Common/ScrollDown'
import Image from 'next/image'
import { Heading1 } from 'components/modules/atoms'

function HeroHyfenTools() {
	const { t } = useTranslation('hyfen-tools')
	return (
		<div className='relative container mx-auto max-w-6xl pt-24 md:pt-10 px-0'>
			<div className='relative overflow-hidden flex flex-col md:flex-row md:items-center'>
				{/* Description */}
				<div className='relative m-0 p-0'>
					<div className='relative'>
						<Fade top>
							<Heading1 text={'Hyfen Tools'} addClass='hyfen-play-gradient' />
							<h2 className='mt-3 text-[22px] lg:text-[36px] leading-[28px] lg:leading-[46px] lg:w-2/3 tracking-wide text-center lg:text-left font-bold'>
								{t('Manage Guild')}
							</h2>
						</Fade>
					</div>

					<Fade top delay={200}>
						<div className='flex justify-center lg:block'>
							<div className='w-fit header__download-button text-slate-900 bg-white py-3 px-6  text-xs md:text-sm font-bold cursor-pointer mt-5 flex items-center'>
								<span className='inline-block mr-2'>
									{t('Onboard Your Guild')}{' '}
								</span>
								<Image
									src={`/images/arrow_right.svg`}
									className='ml-5'
									width={20}
									height={20}
									alt='BaseLogo'
									layout='intrinsic'
									quality={100}
								/>
							</div>
						</div>
						<ScrollDown className='justify-center lg:justify-start hidden md:flex mt-10' />
					</Fade>
				</div>
				{/* Image */}
				<Fade right delay={200}>
					<div className='relative mt-10 md:mt-0 lg:w-1/2 max-w-[1440px] h-56 md:h-[600px] flex flex-col'>
						<div className='relative h-full w-full'>
							<Image
								src='/images/hyfen-tools/hyfen-tools-img.svg'
								alt='image'
								layout='fill'
							/>
						</div>
					</div>
					<ScrollDown className='justify-center lg:justify-start flex md:hidden mt-5' />
				</Fade>
			</div>
		</div>
	)
}

export default HeroHyfenTools
