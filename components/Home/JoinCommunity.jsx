import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import Fade from 'react-reveal/Fade';
import Link from 'next/link'

export default function EasiestWay() {
    const { t } = useTranslation('home')

    return (
        <div 
            className='gamefi join-community-bg relative'
        >
			<div className="container mx-auto flex flex-col justify-center items-center h-full">

				<Fade top>
					<p className="font-bold text-4xl md:text-5xl mb-5 text-center">{t("home:Join Community")}</p>
				</Fade>
				<Fade top delay={200}>
					<Link href="/community" passHref>
						<a className='header__download-button text-slate-900 bg-white py-3 px-11 inline-block text-base font-bold cursor-pointer'>{t('home:Learn More')}</a>
					</Link>
				</Fade>
			</div>
			{/* <img
				className={`absolute top-0 left-0 md:hidden z-50`}
				width="100%"
				height="50%"
				src="/images/home/join-community-2.png"
				alt="Comic"/>
			<img
				className={`absolute top-2/2 left-0 md:hidden`}
				width="100%"
				height="50%"
				src="/images/home/join-community-1.png"
				alt="Comic"/> */}
        </div>
    )
}