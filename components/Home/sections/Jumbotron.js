import ScrollDown from '../../..//components/Common/ScrollDown'
import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Fade } from 'react-reveal'

export default function Jumbotron() {
	const { t } = useTranslation()

	return (
		<div className='relative container mx-auto max-w-7xl pt-28 md:pt-20'>
			{/* Container Content */}
			<div className='relative grid place-items-center grid-cols-1 gap-4 lg:grid-cols-2'>
				{/* Heading, Description, and Button Download */}
				<div className='relative grid place-items-center justify-items-center md:place-items-start'>
					{/* Heading */}
					<Fade top>
						<h1 className='text-[40px] leading-[51px] md:text-[80px] md:leading-[104px] text-center  lg:text-left font-bold'>
							{t('home:Play Games')},
						</h1>
						<h4 className='text-[40px] leading-[51px] md:text-[80px] md:leading-[104px] text-center lg:text-left font-bold'>
							{t('home:Earn Money')}.
						</h4>
					</Fade>
					{/* Desription */}
					<Fade top>
						<p className='mt-4 text-center font-[400] lg:text-left text-[16px] md:text-[20px] md:pr-24 leading-8 tracking-wide'>
							{t('home:step_into_the_world')} {t('home:step_into_the_world2')}{' '}
							{t('home:step_into_the_world3')}
						</p>
					</Fade>
					{/* Button Download */}
					<Fade top delay={200}>
						<div className='mt-7 gap-4 flex items-center'>
							<Link
								passHref
								href='https://apps.apple.com/us/app/metabase-play/id1624878820'
							>
								<Image
									src='/images/App Store.svg'
									height={60}
									width={200}
									quality={100}
									alt='apple-store'
								/>
							</Link>
							<Link
								passHref
								href='https://apps.apple.com/us/app/metabase-play/id1624878820'
							>
								<Image
									src='/images/Google Play.svg'
									height={60}
									width={200}
									alt='android'
								/>
							</Link>
						</div>
					</Fade>

					{/*Animation Scroll when dekstop*/}
					<div className='hidden relative md:block mt-10'>
						<ScrollDown className='relative' />
					</div>
				</div>

				{/* Image Content */}
				<Fade right delay={100}>
					{/* Image */}
					<div className='relative h-[500px] md:h-[800px] w-[1440px] '>
						<Image
							priority
							src='/images/home/home-bg-img.png'
							alt='image-home'
							layout='fill'
							objectFit='contain'
						/>
					</div>

					{/*Animation Scroll when mobile*/}
					<div className='relative block mt-4 md:hidden'>
						<ScrollDown className='relative' />
					</div>
				</Fade>
			</div>
		</div>
	)
}
