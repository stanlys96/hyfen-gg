import React from 'react'
import ActiveLink from '../ActiveLink'

export default function ListMenu({ menu, t }) {
	return (
		<ActiveLink
			href={menu.link}
			inActiveClassName='text-white-50 p-0 hover:text-white transition-all duration-300'
			activeClassName='bg-app-primary text-white rounded-full px-[20px] py-[8px]'
			disabled={menu.disable}
		>
			<p className='cursor-pointer'>{t(menu.title)}</p>
		</ActiveLink>
	)
}
