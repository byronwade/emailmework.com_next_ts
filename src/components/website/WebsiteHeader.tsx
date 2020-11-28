import Link from 'next/link'
//import styled from 'styled-components'
//import { variant } from 'styled-system'
import { jsx, useColorMode, Button } from 'theme-ui'
const modes = ['light', 'dark', 'grey']

const WebsiteHeader = (props) => {
	const [mode, setMode] = useColorMode()

	console.log(props)
	return (
		<div>
			<Link href='/'>Home</Link>
			<Link href='/jobs'>Jobs</Link>
			<Link href='/pricing'>Pricing</Link>
			<Link href='/support'>Support</Link>
			<Link href='/login'>
				<Button variant='primary'>Login</Button>
			</Link>
			<Link href='/signup'>
				<Button variant='secondary'>Signup</Button>
			</Link>
			<Button
				onClick={(e) => {
					const index = modes.indexOf(mode)
					const next = modes[(index + 1) % modes.length]
					setMode(next)
				}}>
				{mode}
			</Button>

			{props.isLoggedIn && <Link href='/app/dashboard'>Dashboard</Link>}
		</div>
	)
}

export default WebsiteHeader
