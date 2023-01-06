export const menus = [
	{
		id: 1,
		title: 'Home',
		link: '/',
		submenu: [],
		disable: false
	},
	{
		id: 2,
		title: 'Products',
		link: '/players',
		submenu: [
			{
				id: 1,
				title: "Hyfen Play",
				link: "/hyfen-play",
				active: true
			},
			{
				id: 2,
				title: "Hyfen Tools",
				link: "/hyfen-tools",
				active: true
			},
			{
				id: 3,
				title: "Hyfen Payments",
				link: "#",
				active: false
			}
		],
		disable: false
	},
	{
		id: 3,
		title: 'Resources',
		link: '/guilds',
		submenu: [
			{
				id: 1,
				title: "Guide Book",
				link: "#",
				active: true
			},
			{
				id: 2,
				title: "White Paper",
				link: "#",
				active: false
			},
			{
				id: 3,
				title: "Tutorial Videos",
				link: "#",
				active: false
			},
			{
				id: 4,
				title: "Media Kit",
				link: "#",
				active: true
			}
		],
		disable: false
	},
	{
		id: 4,
		title: 'Support',
		link: '/whitepaper',
		submenu: [
			{
				id: 1,
				title: "Contact Us",
				link: "#"
			}
		],
		disable: true
	}
]
