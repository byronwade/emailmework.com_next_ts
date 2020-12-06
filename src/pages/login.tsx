//https://github.com/garmeeh/next-seo - Can do Schema, openGraph and all other SEO headers.
import { NextSeo } from 'next-seo'
//import styles from '../styles/Home.module.scss' //only temp
import Layout from '../components/Layout'

export const config = { amp: false }

const Login = () => {
	return (
		<>
			<NextSeo
				title='Email Me Work | Quickly get jobs you actually want.'
				description='Email me work is a company tasked to find the best jobs for freelancers on a budget.'
			/>
			<Layout>
				<div className='container'>
					<form onSubmit={(e) => e.preventDefault()}>
						<label htmlFor='username'>Username</label>
						<input name='username' id='username' />
						<label htmlFor='password'>Password</label>
						<input type='password' name='password' id='password' />
						<div>
							<label>
								<input type='checkbox' />
								Remember me
							</label>
						</div>
						<button type='button'>Submit</button>
					</form>
				</div>
			</Layout>
		</>
	)
}

export default Login
