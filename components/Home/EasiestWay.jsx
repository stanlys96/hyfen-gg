import React from 'react'
import Slider from 'react-slick'
import useTranslation from 'next-translate/useTranslation'
import Fade from 'react-reveal/Fade';
import Image from 'next/image'

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
        className='container mx-auto gamefi pt-[93px] pb-[140px]'
    >
        <Fade top>
			<div className="text-center md:text-left">
				<h2 className='easiest-way-title easiest-way-gradient inline-block mx-auto'>
					{t('home:easiest_way')}
				</h2>
			</div>
            <h2 className='easiest-way-title text-center md:text-left'>
                {t('home:play_crypto')}
            </h2>
        </Fade>
		<div className="grid grid-cols-1 text-center md:text-left md:grid-cols-3 gap-x-10 mt-10">
			{items.map((item, i) => (
				<Fade
					top
					delay={i !== 0 ? i * 200 : 0}
				>
					<div key={i} className="py-10">
						<Image
							src={`/images/${item.image_url}`}
							height={100}
							width={100}
							quality={100}
							key={i}
						/>
						<p className={`${item.className} font-bold py-4 text-2xl`}>{item.title}</p>
						<p className="text-base">{item.description}</p>
					</div>
				</Fade>
			))}
		</div>
    </div>
    )
}