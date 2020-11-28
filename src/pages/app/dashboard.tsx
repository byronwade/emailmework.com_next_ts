import styles from '../../styles/Home.module.scss' //only temp
import Layout from '../../components/Layout'
import Image from 'next/image'
import { Text, AspectRatio } from 'theme-ui'
//import { Container, Button, Icon, Item, Label } from 'semantic-ui-react'

export const config = { amp: false }

const Dashboard = () => {
	return (
		<Layout>
			<Text
				sx={{
					fontSize: 4,
					fontWeight: 'bold',
				}}>
				Hello
			</Text>
			<Text variant='caps'>Hello</Text>
			<AspectRatio ratio={1 / 1}>
				<Image
					width={200}
					height={200}
					src='/images/image.png'
					alt={`Alt IMage`}
					sx={{
						objectFit: 'cover',
					}}
				/>
			</AspectRatio>
		</Layout>
	)
}

export default Dashboard
