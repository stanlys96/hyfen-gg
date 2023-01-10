import React, { useState, useEffect } from 'react'
import useTranslation from 'next-translate/useTranslation'
import Fade from 'react-reveal/Fade';
import ActiveLink from '../Common/ActiveLink';

export default function OurProducts() {
    const { t } = useTranslation('home')

	const items = [
		{
			title: t('home:hyfen_play'),
			description1: t('home:hyfen_play_desc'),
            link: '/hyfen-play'
		},
		{
			title: t('home:hyfen_tools'),
			description1: t('home:hyfen_tools_desc1'),
            description2: t('home:hyfen_tools_desc2'),
            link: '/hyfen-tools'
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
                        <ActiveLink href={item.link}>
                            <div className="group relative products-container overflow-hidden cursor-pointer">
                                <div className={`bg-product-${i + 1} group-hover:w-5/6 transition-all duration-500 py-8 md:py-14 px-2 md:px-12 relative`}>
                                    <div className="container flex justify-around items-center mx-auto relative z-50 gap-12">
                                        <div className="relative grid lg:grid-rows-3 relative h-full">
                                            <p className="text-xl lg:text-4xl font-bold lg:row-span-1 mb-3">{item.title}</p>
                                            <p className="text-base lg:text-xl text-ellipsis lg:row-span-2">{item.description1} {item.description2 && item.description2}</p>
                                        </div>
                                        <img
                                            src={`/images/home/arrow-right.svg`}
                                            className="h-fit"
                                            width="15%"
                                        />
                                    </div>
                                </div>
                                <div className="absolute top-0 -z-10 z-minus-5 product-img-container right-0">
                                        <img
                                            src={`/images/home/product-${(i + 1) + (windowWidth > 1024 ? "" : '-mobile-screen')}.png`}
                                            className="h-full w-full z-minus-5"
                                        />
                                    </div>
                            </div>
                        </ActiveLink>
                    </Fade>
                ))
            }
        </div>
    </div>
    )
}