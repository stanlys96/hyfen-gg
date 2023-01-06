import React, { useEffect, useState } from 'react'
import useTranslation from 'next-translate/useTranslation'
import Fade from 'react-reveal/Fade';

export default function OurProducts() {
    const { t } = useTranslation('home')

	const items = [
		{
			title: t('home:hyfen_play'),
			description1: t('home:hyfen_play_desc')
		},
		{
			title: t('home:hyfen_tools'),
			description1: t('home:hyfen_tools_desc1'),
            description2: t('home:hyfen_tools_desc2')
		}
	]

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
        <div 
        className='gamefi pt-[93px] pb-[140px]'
    >
        <Fade top>
            <div className="text-center mb-5">
                <h2 className='text-3xl md:text-5xl easiest-way-title easiest-way-gradient inline-block mx-auto text-center mb-5'>
                    {t('home:Our Products')}
                </h2>
            </div>
        </Fade>
        <div className="2xl:container 2xl:mx-auto">
            {
                items.map((item, i) => (
                    <Fade 
                        key={i}
                        top
                        delay={i !== 0 ? i * 200 : 0}
                    >
                        <div className="relative products-container">
                            <div className={`bg-product-${i + 1} py-8 md:py-14 px-2 md:px-12 relative grid grid-cols-3`}>
                                <div className="container mx-auto col-span-2">
                                    <p className="text-xl md:text-4xl mb-3 font-bold">{item.title}</p>
                                    <p className="text-base md:text-xl">{item.description1} {item.description2 && item.description2}</p>
                                    {/* {item.description2 && <p className="text-xs md:text-base">{item.description2}</p>} */}
                                </div>
                                <div className="arrowWrapper">
                                    <div className="arrowIconContainer">
                                        <div className="arrowIcon"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute top-0 right-0 w-6/12 lg:w-5/12 h-full">
                                <img
                                    src={`/images/home/product-${(i + 1) + (windowWidth > 1024 ? "" : "-mobile-screen")}.png`}
                                    className="h-full w-full"
                                />
                            </div>
                        </div>
                    </Fade>
                ))
            }
        </div>
    </div>
    )
}