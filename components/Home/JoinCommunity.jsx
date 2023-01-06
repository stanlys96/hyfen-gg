import React from 'react'
import Slider from 'react-slick'
import useTranslation from 'next-translate/useTranslation'
import ActiveLink from 'components/Common/ActiveLink';
import Fade from 'react-reveal/Fade';
import Image from 'next/image'
import Link from 'next/link'

export default function EasiestWay() {
    const { t } = useTranslation('home')
	const settings = {
		dots: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		// adaptiveHeight: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
					dots: true,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					infinite: false,
					centerMode: true,
					centerPadding: '20%',
				},
			},
		],
	}

	const items = [
		{
			title: t('Explore'),
			description: t('Explore_desc'),
			image_url: "Explore.png",
			className: "explore-text"
		},
		{
			title: t('EarnMoney'),
			description: t('EarnMoney_desc'),
			image_url: "EarnMoney.png",
			className: "earnmoney-text"
		},
		{
			title: t('Redeem'),
			description: t('Redeem_desc'),
			image_url: "Redeem.png",
			className: "redeem-text"
		}
	]

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