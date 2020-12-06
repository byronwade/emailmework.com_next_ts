//https://github.com/garmeeh/next-seo - Can do Schema, openGraph and all other SEO headers.
import { NextSeo } from 'next-seo'
import Layout from '../components/Layout'

export const config = { amp: false }

const Pricing = () => {
	return (
		<>
			<NextSeo
				title='Email Me Work | Quickly get jobs you actually want.'
				description='Email me work is a company tasked to find the best jobs for freelancers on a budget.'
			/>
			<Layout>
				<div>
					<h1>Pricing</h1>
					<p>
						$1/month, thats it nothing special, helps with spam and
						server cost.
					</p>
				</div>
			</Layout>
		</>
	)
}

export default Pricing
