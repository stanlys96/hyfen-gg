import React, { useState, useEffect } from 'react'
import useTranslation from 'next-translate/useTranslation'
import Fade from 'react-reveal/Fade';
import ScrollDown from '../Common/ScrollDown'
import Image from 'next/image'

function SideBar() {

	const { t } = useTranslation()
	const [windowWidth, setWindowWidth] = useState(0);
	let resizeWindow = () => {
	  setWindowWidth(window.innerWidth);
	};
  
	useEffect(() => {
	  resizeWindow();
	  window.addEventListener("resize", resizeWindow);
	  return () => window.removeEventListener("resize", resizeWindow);
	}, []);
	return (
		<div className='container mx-auto pt-24 lg:pt-0 relative flex flex-col justify-around md:flex-row'>
			<div className="lg:mt-0">
				<div className='lg:pt-40'>
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
								{t('home:step_into_the_world')} {windowWidth > 1024 && <br/>} {t('home:step_into_the_world2')}  {t('home:step_into_the_world3')}
							</div>
						</div>
					</Fade>

					<Fade
						top
						delay={600}
					>
						<div className="mt-7" style={{
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'center'
						}}>
							<div className='md:mb-4 text-center lg:text-left mr-4'>
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
							<div className='md:mb-4 text-center lg:text-left'>
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
						<ScrollDown className="justify-center lg:justify-start hidden md:flex mt-10" />
					</Fade>
				</div>
			</div>
			<Fade right delay={600}>
				<div className='inline-block relative h-full lg:ml-0 max-w-[1440px] py-6 md:pt-24 h-[510px] md:h-[605px] flex justify-center items-center'>
					<div className="pt-24">
						<img 
							src="/images/home/home-bg-img.svg" 
							alt="image" 
							className='h-full'
						/>
					</div>
				</div>
			</Fade>
			<ScrollDown className="justify-center lg:justify-start flex md:hidden mt-20" />
		</div>
	)
}

export default SideBar
