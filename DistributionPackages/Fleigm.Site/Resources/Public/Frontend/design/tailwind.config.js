module.exports = {
	theme: {
		fontFamily: {
			sans: [
				'"Inter"',
				'system-ui',
				'-apple-system',
				'BlinkMacSystemFont',
				'"Segoe UI"',
				'"Helvetica Neue"',
				'Arial',
				'"Noto Sans"',
				'sans-serif',
				'"Apple Color Emoji"',
				'"Segoe UI Emoji"',
				'"Segoe UI Symbol"',
				'"Noto Color Emoji"',
			],
		},
		extend: {
			colors: {
			},
			height: {
				'96': '24rem',
			},
		}
	},
	variants: {
		display: ['responsive', 'group-hover'],
		scale: ['responsive', 'hover', 'group-hover'],
		opacity: ['responsive', 'hover', 'group-hover'],
	},
	plugins: [],

	corePlugins: {
		container: false,
	},
	purge: [
		'../../Private/**/*.fusion',
		'../../Private/**/*.yaml',
	],
}
