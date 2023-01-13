import { ArrowDown } from '../../Icons'
import Image from 'next/image'
import React from 'react'
import ActiveLink from '../ActiveLink'

export default function ButtonLanguage({ lang, languages }) {
	return (
		<div className='relative text-sm'>
			<div className='group flex h-full w-full relative'>
				<div className='relative flex gap-2 items-center text-white/50'>
					<Image src='/images/globe.svg' width={20} height={20} alt='globe' />
					{lang === 'id' ? 'ID' : 'ENG'}
					<ArrowDown className='fill-current w-4 h-4' />
				</div>
				<ul className='bg-white mt-1 p-4 rounded-lg text-black-100 soft-shadow hidden min-w-full absolute top-full group-hover:block py-2'>
					{languages.map((language) => (
						<li key={language.locale}>
							<ActiveLink href='/' locale={language.locale}>
								<p className='block font-[700] w-full hover:text-blue py-1 px-3 cursor-pointer'>
									{language.title}
								</p>
							</ActiveLink>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}
