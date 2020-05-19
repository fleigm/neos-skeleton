let mix = require('laravel-mix');
const tailwindcss = require('tailwindcss')

mix.disableNotifications();

mix.setPublicPath('dist')
	.js('js/main.js', '')
	.less('design/main.less', '')
	.options({
		postCss: [
			tailwindcss('design/tailwind.config.js'),
		]
	})

