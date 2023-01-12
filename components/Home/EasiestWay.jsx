import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import Fade from 'react-reveal/Fade'
import Image from 'next/image'

export default function EasiestWay() {
	const { t } = useTranslation('home')
	const items = [
		{
			title: t('Explore'),
			description: t('Explore_desc'),
			image_url: 'Explore.png',
			className: 'explore-text',
		},
		{
			title: t('EarnMoney'),
			description: t('EarnMoney_desc'),
			image_url: 'EarnMoney.png',
			className: 'earnmoney-text',
		},
		{
			title: t('Redeem'),
			description: t('Redeem_desc'),
			image_url: 'Redeem.png',
			className: 'redeem-text',
		},
	]

	return (
		<div className='container mx-auto gamefi pt-[80px] pb-[60px] md:pb-[140px]'>
			<Fade top>
				<div className='text-center md:text-left'>
					<h2 className='text-[32px] leading-[41px] md:text-[64px] md:leading-[83px] easiest-way-title easiest-way-gradient inline-block mx-auto'>
						{t('home:easiest_way')}
					</h2>
				</div>
				<h2 className='text-[32px] leading-[41px] md:text-[64px] md:leading-[83px] easiest-way-title text-center md:text-left'>
					{t('home:play_crypto')}
				</h2>
			</Fade>
			<div className='grid grid-cols-1 text-center md:text-left md:grid-cols-3 gap-x-10 mt-10'>
				{items.map((item, i) => (
					<Fade key={i} top delay={i !== 0 ? i * 200 : 0}>
						<div className='relative py-10'>
							<Image
								src={`/images/${item.image_url}`}
								height={100}
								width={100}
								quality={100}
								alt={item.image_url}
							/>
							<div className='flex flex-col md:gap-[16px] px-8 md:pl-0 md:pr-14 mt-4 md:mt-6'>
								<h1
									className={`${item.className} text-center md:text-left leading-[31.25px] font-bold text-[20px] md:text-[24px] tracking-wider px-8 md:pl-0 md:pr-14`}
								>
									{item.title}
								</h1>
								<p className='text-[14px] mt-2 md:mt-0 font-light md:text-[16px] tracking-wider leading-6'>
									{item.description}
								</p>
							</div>
						</div>
					</Fade>
				))}
			</div>
		</div>
	)
}
