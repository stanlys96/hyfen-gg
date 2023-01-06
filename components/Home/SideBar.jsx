import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import Fade from 'react-reveal/Fade';
import ScrollDown from '../Common/ScrollDown'
import HomeBanner from './HomeBanner';
import Image from 'next/image'
import Link from 'next/link';

function SideBar() {

	const { t } = useTranslation()
	return (
		<div className='pt-24 lg:pt-0 relative flex flex-col justify-around md:flex-row'>
			<div className="lg:mt-0">
				<div className='container mx-auto lg:pt-40'>
					<Fade top>
						<h1 className='text-3xl md:text-5xl lg:text-6xl text-center lg:text-left font-bold'>
							{t('home:Play Games')},
						</h1>
						<h1 className='text-3xl md:text-5xl lg:text-6xl text-center lg:text-left font-bold'>
							{t('home:Earn Money')}.
						</h1>
					</Fade>

					<Fade top>
						<div className=''>
							<div className='mt-3 text-center lg:text-left text-sm md:text-base'>
								{t('home:step_into_the_world')}
							</div>
							<div className='text-center lg:text-left text-sm md:text-base'>
								{t('home:step_into_the_world2')}
								<span>
									{t('home:step_into_the_world3')}
								</span>
							</div>
						</div>
					</Fade>

					<Fade
						top
						delay={600}
					>
						<div className="mt-7 mb-10" style={{
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'center'
						}}>
							<div className='mb-4 text-center lg:text-left mr-4'>
								<a
									href='https://apps.apple.com/us/app/metabase-play/id1624878820'
									style={{
										display: 'flex',
										alignItems: 'center',
										maxWidth: 325
									}}
								>
									<Image
										src="/images/App Store.svg"
										height={60}
										width={225}
										quality={100}
									/>
								</a>
							</div>
							<div className='mb-4 text-center lg:text-left'>
								<a
									href='https://apps.apple.com/us/app/metabase-play/id1624878820'
									style={{
										display: 'flex',
										alignItems: 'center',
										maxWidth: 325
									}}
								>
									<Image
										src="/images/Google Play.svg"
										height={60}
										width={225}
									/>
								</a>
							</div>
						</div>
						<ScrollDown className="justify-center lg:justify-start hidden md:flex" />
					</Fade>
				</div>
			</div>
			<Fade right delay={600}>
				<div className='inline-block relative h-full lg:ml-0 max-w-[1440px] md:pt-12 h-[510px] md:h-[605px] flex justify-center items-center'>
					<img 
						src="/images/hyfen-bg.png" 
						alt="image" 
						className='h-full'
					/>
					
				</div>
			</Fade>
			<ScrollDown className="justify-center lg:justify-start flex md:hidden" />
		</div>
	)
}

export default SideBar
