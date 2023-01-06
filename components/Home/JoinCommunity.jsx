import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import Fade from 'react-reveal/Fade';
import Link from 'next/link'

export default function EasiestWay() {
    const { t } = useTranslation('home')

    return (
        <div 
            className='gamefi join-community-bg flex flex-col justify-center items-center'
        >
			<Fade top>
            	<p className="font-bold text-5xl mb-5 text-center">{t("home:Join Community")}</p>
			</Fade>
			<Fade top delay={200}>
				<Link href="/community" passHref>
					<a className='header__download-button text-slate-900 bg-white py-3 px-11 inline-block text-xs md:text-sm font-bold cursor-pointer'>{t('home:Learn More')}</a>
				</Link>
			</Fade>
        </div>
    )
}