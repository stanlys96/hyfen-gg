import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ListSubMenu({ submenu, t }) {
	return (
		<li
			className={[
				' dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700',
				submenu.active && 'hover:bg-gray-100',
			].join(' ')}
		>
			<Link
				passHref
				href={submenu.link}
				
			>
				<div
				className={`${
					submenu.active ? '' : 'text-black-50 cursor-default'
				} font-bold flex items-center`}
				>

				<span className='inline-block mr-2'>{t(submenu.title)}</span>
				{submenu.withIcon && (
					<Image
						src='/images/home/guidebook-icon-black.svg'
						height={15}
						width={15}
						alt='icon'
					/>
				)}
				</div>
			</Link>
		</li>
	)
}
