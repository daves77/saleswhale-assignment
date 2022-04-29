module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				gray: '#F1F4F8',
				primary: '#042235',
				secondary: '#2995DA',
				success: '#40D2BF',
			},
			fontSize: {
				xxs: '8px',
			},
		},
	},
	variants: {
		fill: ['hover', 'focus'],
	},
	plugins: [],
};
