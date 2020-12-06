import Link from 'next/link'
//import styled from 'styled-components'

const WebsiteHeader = (props) => {
	console.log(props.isLoggedIn)
	return (
		<header>
			{/* <Link href='/'>Home</Link>
			<Link href='/jobs'>Jobs</Link>
			<Link href='/pricing'>Pricing</Link>
			<Link href='/support'>Support</Link>
			<Link href='/login'>
				<button>Login</button>
			</Link>
			<Link href='/signup'>
				<button>Signup</button>
			</Link>

			{props.isLoggedIn && <Link href='/app/dashboard'>Dashboard</Link>} */}
			<nav className='cursor-pointer flex items-center bg-gray-800 p-3 flex-wrap'>
				<Link href='/'>
					<span className='cursor-pointer p-2 mr-4 inline-flex items-center'>
						<span className='cursor-pointer text-xl text-white font-bold uppercase tracking-wide'>
							EmailMeWork
						</span>
					</span>
				</Link>
				<button
					className='cursor-pointer text-white inline-flex p-3 hover:bg-gray-900 rounded lg:hidden ml-auto hover:text-white outline-none nav-toggler'
					data-target='#navigation'>
					<i className='cursor-pointer material-icons'>menu</i>
				</button>
				<div
					className='cursor-pointer hidden top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto'
					id='navigation'>
					<div className='cursor-pointer lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
						<Link href='/'>
							<div className='cursor-pointer lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white'>
								<span>Home</span>
							</div>
						</Link>

						<Link href='/jobs'>
							<div className='cursor-pointer lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white'>
								<span>Jobs</span>
							</div>
						</Link>

						<Link href='/pricing'>
							<div className='cursor-pointer lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white'>
								<span>Pricing</span>
							</div>
						</Link>
						<Link href='/support'>
							<div className='cursor-pointer lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white'>
								<span>Support</span>
							</div>
						</Link>
						<Link href='/login'>
							<div className='cursor-pointer lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white'>
								<span>Login</span>
							</div>
						</Link>
						<Link href='/signup'>
							<div className='cursor-pointer lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white'>
								<span>Signup</span>
							</div>
						</Link>
					</div>
				</div>
			</nav>
		</header>
	)
}

export default WebsiteHeader
