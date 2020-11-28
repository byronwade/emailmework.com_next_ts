//https://github.com/garmeeh/next-seo - Can do Schema, openGraph and all other SEO headers.
import { NextSeo } from 'next-seo'
import { loadStripe } from '@stripe/stripe-js'
import {
	CardElement,
	Elements,
	useStripe,
	useElements,
} from '@stripe/react-stripe-js'
import styles from '../styles/Home.module.scss' //only temp
import Layout from '../components/Layout'
import {
	Box,
	Button,
	Label,
	Input,
	Checkbox,
	Container,
	Message,
} from 'theme-ui'

export const config = { amp: false }

const Signup = () => {
	const stripe = useStripe()
	const elements = useElements()

	const handleSubmit = async (event) => {
		event.preventDefault()
		const { error, paymentMethod } = await stripe.createPaymentMethod({
			type: 'card',
			card: elements.getElement(CardElement),
		})
	}

	return (
		<>
			<NextSeo
				title='Email Me Work | Quickly get jobs you actually want.'
				description='Email me work is a company tasked to find the best jobs for freelancers on a budget.'
			/>
			<Layout>
				<Container p={4} bg='muted'>
					<Box as='form' onSubmit={(e) => e.preventDefault()}>
						<Message>
							This is just a message for someone to read
						</Message>

						<CardElement />

						<Label htmlFor='username'>Username</Label>
						<Input name='username' id='username' mb={3} />

						<Label htmlFor='email'>Email</Label>
						<Input name='email' id='email' mb={3} />

						<Label htmlFor='phoneNumber'>Phone Number</Label>
						<Input name='phoneNumber' id='phoneNumber' mb={3} />

						<Label htmlFor='password'>Password</Label>
						<Input
							type='password'
							name='password'
							id='password'
							mb={3}
						/>

						<Button disabled={!stripe}>Pay $1/month</Button>
					</Box>
				</Container>
			</Layout>
		</>
	)
}

export default Signup
