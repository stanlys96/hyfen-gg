import ArrowDown from '../Icons/ArrowDown'
import Menu from '../Icons/Menu'
import { languages } from '../../mock'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'
import ActiveLink from './ActiveLink'
// import Collapse from './Collapse'
import SideDrawer from './SideDrawer'
import { menus } from '../../mock'
import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'
import { Fade } from 'react-reveal'
import DownloadAppButton from './DownloadAppButton'
import DropdownItem from './DropdownItem'

function Header({ fixed = true }) {
	const router = useRouter()
	const [open, setOpen] = useState(false)
	const [domLoaded, setDomLoaded] = useState(false)
	const [scrollY, setScrollY] = useState(0)
	const { t, lang } = useTranslation('common')
	React.useEffect(() => {
		if (open) {
			setOpen(!open)
		}
		const handleScroll = () => {
			setScrollY(window.scrollY)
		}

		handleScroll()

		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [router.asPath])

	React.useEffect(() => {
		setDomLoaded(true)
	}, [])

	const ListMenu = ({ menu }) => {
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

	const SubMenu = ({ menu }) => {
		return (
			<div className='group hidden md:flex h-full w-full relative'>
				<span className='relative flex items-center text-white-50 hover:text-white transition-all duration-300'>
					{menu.title}
					<ArrowDown className='fill-current h-4 ' />
				</span>
				<ul
					className={`
			hidden dropdown-menu absolute bg-white text-base z-50 py-2 list-none text-left rounded-lg shadow-lg top-full m-0 bg-clip-padding border-none group-hover:block`}
					aria-labelledby='dropdownMenuButton2'
				>
					{menu.submenu.map((submenu) => (
						<ListSubMenu submenu={submenu} key={submenu.id} />
					))}
				</ul>
			</div>
		)
	}

	const ListSubMenu = ({ submenu }) => {
		return (
			<DropdownItem additionalClassName={submenu.active && 'hover:bg-gray-100'}>
				<a
					href={submenu.link}
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
				</a>
			</DropdownItem>
		)
	}

	const ButtonLanguage = () => {
		return (
			<span className='group hidden md:flex h-full w-full relative'>
				<a
					className={`hidden md:flex h-full items-center justify-between w-full hover:text-white text-white-50 bgre`}
					href='#'
				>
					<Image
						src={`/images/globe.svg`}
						// className='ml-5'
						width={20}
						height={20}
						alt='BaseLogo'
						layout='intrinsic'
						quality={100}
					/>
					<span className='inline-block ml-3 text-sm'>
						{lang === 'id' ? 'ID' : 'ENG'}
					</span>

					<ArrowDown className='fill-current w-4 h-4' />
				</a>
				<ul
					className='hidden
					dropdown-menu
					absolute
					bg-white
					text-base
					z-50
					py-2
					list-none
					text-left
					rounded-lg
					shadow-lg
					top-full
					m-0
					bg-clip-padding
					border-none
					ml-5
					group-hover:block'
				>
					{languages.map((language, i) => (
						<DropdownItem key={i} additionalClassName={'hover:bg-gray-100'}>
							<ActiveLink
								href={`/${language.locale}/${router.pathname}`}
								locale={language.locale}
							>
								<a className='block w-full py-1 px-3 cursor-pointer font-bold text-sm'>
									{language.title}
								</a>
							</ActiveLink>
						</DropdownItem>
					))}
				</ul>
			</span>
		)
	}

	return (
		domLoaded && (
			<Fade top>
				<div
					className={`${
						fixed ? 'fixed' : 'relative'
					} z-100 w-full py-5 bg-transparent transition-all duration-700 ease-in-out ${
						scrollY < 20 ? '' : 'scrolled'
					}`}
				>
					{/* Section Menu */}
					<div className='relative mx-auto container'>
						{/* Container Menu  */}
						<div className='relative flex justify-between items-center'>
							{/* Icon App */}
							<Link href='/' className=''>
								<a className='flex justify-start items-center '>
									<Image
										src='/images/hyfen-logo.svg'
										className='block py-2'
										alt='BaseLogo'
										width={130}
										height={28}
										layout='fixed'
										quality={100}
									/>
								</a>
							</Link>
							{/* Mobile Button Menu */}
							<div className='relative md:hidden'>
								<button
									className='flex items-center justify-center ml-auto p-3 md:p-4'
									onClick={() => setOpen((o) => !o)}
								>
									<Menu />
								</button>
							</div>

							{/* Table Upper Menu */}
							<div className='relative hidden items-center md:flex gap-[32px]'>
								{/* Nav Section */}
								<nav className='relative items-center flex gap-[32px]'>
									{menus.map((item) =>
										item.submenu?.length > 0 ? (
											// Section Menu Have child
											<SubMenu menu={item} key={item.id} />
										) : (
											// Menu doesnt have child
											<ListMenu menu={item} key={item?.id} />
										)
									)}
								</nav>
								<ButtonLanguage />
								<DownloadAppButton />
							</div>
						</div>
						<SideDrawer
							setOpen={setOpen}
							handleClose={() => setOpen(false)}
							open={open}
						/>
					</div>
				</div>
			</Fade>
		)
	)
}

export default Header
