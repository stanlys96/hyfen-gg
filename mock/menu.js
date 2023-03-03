export const menus = [
	{
		id: 1,
		title: 'Home',
		link: '/',
		submenu: [],
		disable: false,
	},
	{
		id: 2,
		title: 'Products',
		link: '/players',
		submenu: [
			{
				id: 1,
				title: 'Hyfen Play',
				link: '/hyfen-play',
				active: true,
				withIcon: false,
			},
			{
				id: 2,
				title: 'Hyfen Tools',
				link: '/hyfen-tools',
				active: true,
				withIcon: false,
			},
			{
				id: 3,
				title: 'Hyfen Payments',
				link: '/hyfen-pay',
				active: true,
				withIcon: false,
			},
		],
		disable: false,
	},
	{
		id: 3,
		title: 'Company',
		link: '/company',
		submenu: [
			{
				id: 1,
				title: 'About Us',
				link: '/about',
				active: true,
				withIcon: false,
			},
			{
				id: 2,
				title: 'White Paper',
				link: '#',
				active: false,
				withIcon: false,
			},
			{
				id: 3,
				title: 'Community',
				link: '/community',
				active: true,
				withIcon: false,
			},
			{
				id: 4,
				title: 'Media Kit',
				link: '#',
				active: true,
				withIcon: true,
			},
		],
		disable: false,
	},
	{
		id: 4,
		title: 'Support',
		link: '/contact',
		submenu: [
			{
				id: 1,
				title: 'Guide Book',
				link: '#',
				active: false,
				withIcon: false,
			},
			{
				id: 2,
				title: 'Tutorial Videos',
				link: '#',
				active: false,
				withIcon: false,
			},
			{
				id: 3,
				title: 'Contact Us',
				link: '/contact',
				active: true,
				withIcon: false,
			},
		],
		disable: false,
	},
]
