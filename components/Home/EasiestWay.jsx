import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import Fade from 'react-reveal/Fade';
import Image from 'next/image'

export default function EasiestWay() {
    const { t } = useTranslation('home')
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
        className='container mx-auto gamefi pt-[40px] md:pt-[93px] pb-[60px] md:pb-[140px]'
    >
        <Fade top>
			<div className="text-center md:text-left">
				<h2 className='text-3xl md:text-6xl easiest-way-title easiest-way-gradient inline-block mx-auto'>
					{t('home:easiest_way')}
				</h2>
			</div>
            <h2 className='text-3xl md:text-6xl easiest-way-title text-center md:text-left'>
                {t('home:play_crypto')}
            </h2>
        </Fade>
		<div className="grid grid-cols-1 text-center md:text-left md:grid-cols-3 gap-x-10 mt-10">
			{items.map((item, i) => (
				<Fade
					key={i}
					top
					delay={i !== 0 ? i * 200 : 0}
				>
					<div className="py-10">
						<Image
							src={`/images/${item.image_url}`}
							height={100}
							width={100}
							quality={100}
						/>
						<p className={`${item.className} font-bold py-4 text-xl md:text-2xl`}>{item.title}</p>
						<p className="text-sm md:text-base">{item.description}</p>
					</div>
				</Fade>
			))}
		</div>
    </div>
    )
}