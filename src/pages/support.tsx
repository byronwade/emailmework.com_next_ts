//https://github.com/garmeeh/next-seo - Can do Schema, openGraph and all other SEO headers.
import { NextSeo } from 'next-seo'
import styles from '../styles/Home.module.scss' //only temp
import Layout from '../components/Layout'

export const config = { amp: false }

const Support = () => {
	return (
		<>
			<NextSeo
				title='Email Me Work | Quickly get jobs you actually want.'
				description='Email me work is a company tasked to find the best jobs for freelancers on a budget.'
			/>
			<Layout>
				<div className={styles.container}>
					<h1>Support</h1>
				</div>
			</Layout>
		</>
	)
}

export default Support
