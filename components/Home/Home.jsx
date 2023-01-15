import { Jumbotron } from 'components/modules/molecules'
import EasiestWay from './EasiestWay'
import ExploreGames from './ExploreGames'
import JoinCommunity from './JoinCommunity'
import OurProducts from './OurProducts'

export default function Home() {
	return (
		<div className='relative box-border bg-app-bg_app overflow-hidden'>
			<section className='relative bg-gradient-to-b from-app-bg_primary to-app-bg_secondary'>
				<Jumbotron
					heading={['home:Play Games', 'home:Earn Money']}
					desc={[
						'home:step_into_the_world',
						'home:step_into_the_world2',
						'home:step_into_the_world3',
					]}
					image='/images/home/home-bg-img.png'
				/>
			</section>
			<section className='bg-easiest-way py-8 md:py-0'>
				<EasiestWay />
			</section>
			<section className='bg-white/5'>
				<ExploreGames />
			</section>
			<section className='relative'>
				<OurProducts />
			</section>
			<section className='relative'>
				<JoinCommunity />
			</section>
		</div>
	)
}
