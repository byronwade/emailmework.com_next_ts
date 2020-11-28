//https://github.com/garmeeh/next-seo - Can do Schema, openGraph and all other SEO headers.
import { NextSeo } from 'next-seo'
//import styles from '../styles/Home.module.scss' //only temp
import Layout from '../components/Layout'
import { Box, Button, Label, Input, Checkbox, Container } from 'theme-ui'

export const config = { amp: false }

const Login = () => {
	return (
		<>
			<NextSeo
				title='Email Me Work | Quickly get jobs you actually want.'
				description='Email me work is a company tasked to find the best jobs for freelancers on a budget.'
			/>
			<Layout>
				<Container p={4} bg='muted'>
					<Box as='form' onSubmit={(e) => e.preventDefault()}>
						<Label htmlFor='username'>Username</Label>
						<Input name='username' id='username' mb={3} />
						<Label htmlFor='password'>Password</Label>
						<Input
							type='password'
							name='password'
							id='password'
							mb={3}
						/>
						<Box>
							<Label mb={3}>
								<Checkbox />
								Remember me
							</Label>
						</Box>
						<Button>Submit</Button>
					</Box>
				</Container>
			</Layout>
		</>
	)
}

export default Login
