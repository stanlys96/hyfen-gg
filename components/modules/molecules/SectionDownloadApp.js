import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function SectionDownloadApp() {
	return (
		<div className='mt-7 gap-4 flex items-center'>
			<Link
				passHref
				href='https://apps.apple.com/us/app/metabase-play/id1624878820'
			>
				<a>
					<Image
						src='/images/App Store.svg'
						height={60}
						width={200}
						quality={100}
						alt='apple-store'
					/>
				</a>
			</Link>
			<Link
				passHref
				href='https://apps.apple.com/us/app/metabase-play/id1624878820'
			>
				<a>
					<Image
						src='/images/Google Play.svg'
						height={60}
						width={200}
						alt='android'
					/>
				</a>
			</Link>
		</div>
	)
}
