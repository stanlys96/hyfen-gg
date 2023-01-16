import { communitySosmed } from '../../mock/community'
import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import Link from 'next/link'
import { Fade } from 'react-reveal'

function HeroCommunity() {
	const { t } = useTranslation('community')
	return (
		<div className='relative'>
			{/* Image Background */}
			<div className='relative grid md:grid-cols-2 pt-0 z-0'>
				<div className='relative h-[50vh] md:h-[100vh] w-full transition-all duration-300'>
					<Image
						src={'/images/community-1.png'}
						alt='image'
						layout='fill'
						objectFit='cover'
						quality={50}
					/>
				</div>
				<div className='relative h-[50vh] md:h-[100vh] w-full transition-all duration-300'>
					<Image
						priority
						src={'/images/community-2.png'}
						alt='image'
						layout='fill'
						objectFit='cover'
					/>
				</div>
			</div>

			{/* Description and Icon Sosmed Section */}
			<div className='absolute top-[200px] md:top-[40%] flex flex-col justify-center items-center w-full h-fit'>
				{/* <Fade top> */}
				<h1 className='text-[32px] md:text-[48px] font-bold text-center w-[280px] leading-[41px] md:leading-relaxed md:w-fit'>
					{t('Home Gamers')}
				</h1>
				{/* </Fade> */}

				{/* Section Social Media */}
				<div className='relative grid grid-cols-3 lg:grid-cols-6 mt-[40px] gap-y-6'>
					{communitySosmed?.map((item, i) => (
						<Fade key={i} right delay={i == 0 ? 100 : i * 200}>
							<div className='community-social-container cursor-pointer mx-8'>
								<Link
									passHref
									href='#'
									className='flex justify-center items-center'
								>
									<Image
										src={`/images/social/${item.imageUrl}`}
										className='py-2'
										width={30}
										height={30}
										alt='BaseLogo'
										layout='intrinsic'
										quality={100}
									/>
								</Link>
							</div>
						</Fade>
					))}
				</div>
			</div>
		</div>
	)
}

export default HeroCommunity
