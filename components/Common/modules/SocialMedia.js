import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function SocialMedia() {
	const dataSosMed = [
		{
			id: 1,
			link: 'https://twitter.com/Metabase_gg',
			imageUrl: '/images/social/twitter.svg',
		},
		{
			id: 2,
			link: 'https://www.facebook.com/Metabase.gg',
			imageUrl: '/images/social/facebook.svg',
		},
		{
			id: 3,
			link: 'https://medium.com/@metabase.gg',
			imageUrl: '/images/social/m.svg',
		},
		{
			id: 4,
			link: 'https://t.me/metabasegg',
			imageUrl: '/images/social/tiktok.svg',
		},
		{
			id: 5,
			link: 'https://t.me/metabasegg',
			imageUrl: '/images/social/tele.svg',
		},
		{
			id: 6,
			link: 'https://discord.com/invite/Fy5gQQth4R',
			imageUrl: '/images/social/discord.svg',
		},
		{
			id: 7,
			link: 'https://t.me/metabasegg',
			imageUrl: '/images/social/instagram.svg',
		},
	]

	return (
		<div className='relative flex flex-wrap lg:gap-x-8 gap-y-6 justify-center lg:justify-start mb-5'>
			{dataSosMed.map((item) => (
				<Link key={item.id} href={item.link} passHref>
					<div className='relative flex flex-shrink-0 w-1/4 lg:w-[32px] h-[21px] cursor-pointer'>
						<Image src={item.imageUrl} alt='social media' layout='fill' />
					</div>
				</Link>
			))}
		</div>
	)
}
