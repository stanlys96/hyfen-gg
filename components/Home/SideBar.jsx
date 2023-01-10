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
		<div className='container mx-auto pt-24 lg:pt-0 relative flex flex-wrap'>
			{/* Description */}
			<div className="lg:mt-0 flex flex-1">
				<div className='lg:pt-40'>
					{/* Heading */}
					<Fade top>
						<h1 className='text-[40px] leading-[51px] md:text-[80px] md:leading-[104px] text-center  lg:text-left font-bold'>
							{t('home:Play Games')},
						</h1>
						<h1 className='text-[40px] leading-[51px] md:text-[80px] md:leading-[104px] text-center lg:text-left font-bold'>
							{t('home:Earn Money')}.
						</h1>
					</Fade>
					{/* Desription */}
					<Fade top>
						<div className=''>
							<div className='mt-3 text-center lg:text-left text-base md:text-[22px] pr-4 leading-8 font-light'>
								{t('home:step_into_the_world')}  {t('home:step_into_the_world2')}  {t('home:step_into_the_world3')}
							</div>
						</div>
					</Fade>

					<Fade
						top
						delay={600}
					>
						<div className="mt-7  flex items-center" >
						<a
									href='https://apps.apple.com/us/app/metabase-play/id1624878820'
							
								>
									<Image
										src="/images/App Store.svg"
										height={60}
										width={225}
										quality={100}
									/>
								</a>
								<a
									href='https://apps.apple.com/us/app/metabase-play/id1624878820'
								
								>
									<Image
										src="/images/Google Play.svg"
										height={60}
										width={225}
									/>
								</a>
						</div>
						<ScrollDown className="justify-center lg:justify-start hidden md:flex mt-10" />
					</Fade>
				</div>
			</div>

			{/* Image */}
			<Fade right delay={600}>
				<div className=' relative lg:ml-0 max-w-[1440px] py-6 md:pt-24 h-[510px] md:h-[605px]  flex justify-center items-center'>
					<div className="-mt-24 md:mt-24">
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
