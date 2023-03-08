import useTranslation from 'next-translate/useTranslation'
import EcoSystemBox from '../Common/EcoSystemBox'
import Section from '../Common/Section'
import React from 'react'
import { Fade } from 'react-reveal'
import { pointSales } from '../../mock/hyfen-pay'

export default function PointSalesSection() {
	const { t } = useTranslation('hyfen-pay')

	return (
		<Section size='lg'>
			<div className='container mx-auto max-w-7xl relative lg:-mt-14'>
				<div className='grid px-0 grid-cols-1 lg:grid-cols-3 gap-5 xl:gap-10 gap-y-16 my-12 md:mt-0'>
					{pointSales.map((item, index) => (
						<Fade key={item.code} bottom delay={index === 0 ? 0 : index * 100}>
							<EcoSystemBox
								background={index % 2 === 0 ? 'blue' : 'purple'}
								icon={item.image}
								description={`${t(item.code + '-desc')}`}
								title={t(item.code)}
								withBorder={true}
								size='fairFunSimple'
							/>
						</Fade>
					))}
				</div>
			</div>
		</Section>
	)
}
