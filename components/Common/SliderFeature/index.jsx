import React, { useState, useRef } from 'react'
import Slider from 'react-slick'
import SliderFeatureTabItem from './SliderFeatureTabItem'
import Image from 'next/image'
import Fade from 'react-reveal/Fade'
import useTranslation from 'next-translate/useTranslation'

const SilderFeature = ({
	items,
	title,
	button,
	translation = '',
	titleGradient = false,
}) => {
	const { t } = useTranslation(translation)
	const sliderElement = useRef()
	const [activeSlide, setActiveSlide] = useState(0)
	const [lineInit, setLineInit] = useState(false)

	const settings = {
		arrows: false,
		infinite: false,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		autoplay: true,
		autoplaySpeed: 5000,
		vertical: true,
		verticalSwiping: true,
		pauseOnHover: false,
		className: 'slider-enjoying',
		customPaging: function (i) {
			return <a>{i + 1}</a>
		},
		beforeChange: function (currentSlide, nextSlide) {
			setActiveSlide(nextSlide)
			setLineInit(false)
		},
		afterChange: function () {
			setLineInit(true)
		},
		responsive: [
			{
				breakpoint: 768,
				settings: {
					dots: true,
					vertical: false,
				},
			},
		],
	}

	return (
		<div className='overflow-hidden pb-8'>
			<div className='container mx-auto'>
				<div className='grid grid-cols-12 items-center xl:items-start'>
					<div className='col-span-12 md:col-span-5 text-center md:text-left'>
						<div className='text-center'>
							<Fade bottom>
								<h4
									className={`text-[28px] md:text-[48px] md:text-left font-bold md:leading-[62px] ${
										titleGradient && 'slider-title-gradient'
									}`}
								>
									{title}
								</h4>
							</Fade>
							{button && (
								<Fade bottom>
									<a
										href={button.link}
										className='mt-7 btn bg-blue hover:bg-hover px-8 py-4 text-xs md:text-base text-black-100 inline-block'
									>
										{button.title}
									</a>
								</Fade>
							)}
						</div>
						<div className='mt-14 hidden md:block'>
							<div className='relative pl-[45px]'>
								<Fade delay={500}>
									<div className='absolute top-0 bottom-0 left-0 w-[3px] h-full bg-white-30 rounded'>
										<span
											className={`w-full rounded block bg-white ${
												lineInit ? 'line-animation' : ''
											}`}
										/>
									</div>
								</Fade>
								<Fade left>
									<div>
										{items.map((item, i) => (
											<SliderFeatureTabItem
												key={i}
												index={i}
												active={activeSlide === i}
												title={t(item.code)}
												onChange={() => {
													sliderElement.current.slickGoTo(i)
												}}
												description={`${t(item.code + '-desc')}`}
												translation={translation}
											/>
										))}
									</div>
								</Fade>
							</div>
						</div>
					</div>
					<div className='col-span-12 mt-6 md:mt-0 md:col-span-7'>
						<Fade right>
							<Slider ref={sliderElement} {...settings}>
								{items.map((item, i) => (
									<div key={i}>
										<div
											className={`transition-transform h-[300px] md:mt-10 md:h-[600px] duration-500 ${
												i === activeSlide ? 'translate-y-0' : 'translate-y-10'
											}`}
										>
											<Image
												src={item.images}
												alt={item.title}
												layout='fill'
												quality={100}
												objectFit='contain'
												priority
											/>
										</div>
										<div className='mt-14 text-center'>
											<h5 className='text-[24px] text-white font-bold mb-2 md:hidden'>
												{t(item.code)}
											</h5>
											<p className='text-[14px] md:text-[20px] text-gray-300 md:hidden'>
												{t(item.code + '-desc')}
											</p>
										</div>
									</div>
								))}
							</Slider>
						</Fade>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SilderFeature
