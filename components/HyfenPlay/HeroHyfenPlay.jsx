import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import Fade from 'react-reveal/Fade';
import ScrollDown from '../Common/ScrollDown'
import Image from 'next/image'

function HeroHyfenPlay() {

	const { t } = useTranslation()
	return (
		<div className='pt-24 pb-24 md:pb-0 lg:pt-0 relative flex flex-col justify-around md:flex-row container mx-auto'>
			<div className="lg:mt-0">
				<div className='lg:pt-40'>
					<Fade top>
						<h1 className='md:text-5xl lg:text-6xl text-center lg:text-left font-bold hyfen-play-gradient'>
							{t('hyfen-play:Hyfen Play')}
						</h1>
						<h1 className='text-2xl md:text-3xl lg:text-4xl text-center lg:text-left font-bold'>
							{t('hyfen-play:Earn Money')}
						</h1>
					</Fade>

					<Fade
						top
						delay={600}
					>
						<div className="mt-7 mb-10 justify-center md:justify-start" style={{
							display: 'flex',
							flexDirection: 'row'
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
				<div className='inline-block relative h-1/2 lg:ml-0 max-w-[1440px] md:pt-12 h-[510px] md:h-[605px] flex justify-center items-center'>
					<img 
						src="/images/hyfen-play-img.svg" 
						alt="image" 
						className='h-full w-full'
					/>
				</div>
			</Fade>
			<ScrollDown className="justify-center lg:justify-start flex md:hidden" />
		</div>
	)
}

export default HeroHyfenPlay
