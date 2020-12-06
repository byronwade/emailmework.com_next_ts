import { NextSeo } from 'next-seo'
import Layout from '../components/Layout'

import styled from 'styled-components'
import tw from 'twin.macro'

export const config = { amp: false }

const Header = styled.header`
	${tw`text-black`};
`

const Home = () => {
	return (
		<>
			<NextSeo
				title='Email Me Work | Quickly get jobs you actually want.'
				description='Email me work is a company tasked to find the best jobs for freelancers on a budget.'
			/>
			<Layout>
				<div>
					<Header>hi</Header>
					<h1>Home</h1>
					<ul>
						<li>
							Signup - a simple page showing that people should
							signup.
						</li>
						<li>
							Available Jobs - A list of a few categories with a
							few jobs.
						</li>
					</ul>
				</div>
			</Layout>
		</>
	)
}

export default Home
