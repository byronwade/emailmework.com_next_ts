import { toTheme } from '@theme-ui/typography'
import github from 'typography-theme-github'
import merge from 'deepmerge'

export default merge(toTheme(github), {
	colors: {
		text: '#36393b', //black
		background: '#fff', // white
		primary: '#016FB9', //blue
		secondary: '#22AED1', //light blue
		third: '#AFA98D', //sage
		accent: '#6D8EA0', //slate grey
		muted: '#f6f6f6', //grey
		modes: {
			dark: {
				text: '#fff',
				background: '#36393b',
				primary: '#0cf',
				secondary: '#f0e',
				gray: '#222',
				lightgray: '#111',
			},
			grey: {
				text: '#fff',
				background: '#333',
				primary: '#0cf',
				secondary: '#f0e',
				gray: '#222',
				lightgray: '#111',
			},
		},
	},
	// fonts: {
	// 	body: 'system-ui, sans-serif',
	// 	heading: 'system-ui, sans-serif',
	// 	monospace: 'Menlo, monospace',
	// },
	fontWeights: {
		body: 400,
		heading: 700,
		bold: 700,
	},
	fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
	lineHeights: {
		body: 1.5,
		heading: 1.125,
	},
	buttons: {
		primary: {
			color: 'background',
			bg: 'primary',
			'&:hover': {
				bg: 'text',
			},
		},
		secondary: {
			color: 'background',
			bg: 'secondary',
		},
	},
	text: {
		default: {
			color: 'text',
			fontSize: 3,
		},
		caps: {
			textTransform: 'uppercase',
			letterSpacing: '0.2em',
		},
		heading: {
			fontFamily: 'heading',
			fontWeight: 'heading',
			lineHeight: 'heading',
		},
	},
	forms: {
		label: {
			fontSize: 1,
			fontWeight: 'bold',
		},
		input: {
			borderColor: 'gray',
			'&:focus': {
				borderColor: 'primary',
				boxShadow: (t) => `0 0 0 2px ${t.colors.primary}`,
				outline: 'none',
			},
		},
		select: {
			borderColor: 'gray',
			'&:focus': {
				borderColor: 'primary',
				boxShadow: (t) => `0 0 0 2px ${t.colors.primary}`,
				outline: 'none',
			},
		},
		textarea: {
			borderColor: 'gray',
			'&:focus': {
				borderColor: 'primary',
				boxShadow: (t) => `0 0 0 2px ${t.colors.primary}`,
				outline: 'none',
			},
		},
		slider: {
			bg: 'muted',
		},
	},
})
