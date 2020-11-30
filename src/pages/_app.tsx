import React, { useState } from 'react'
import type { AppProps } from 'next/app'
import { loadStripe } from '@stripe/stripe-js'
import {
	CardElement,
	Elements,
	useStripe,
	useElements,
} from '@stripe/react-stripe-js'
import { DefaultSeo } from 'next-seo'
import { ThemeProvider } from 'theme-ui'
import SEO from '../../next-seo.config'
import Head from 'next/head'

import { QueryCache, ReactQueryCacheProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query-devtools'

import theme from '../styles/theme'
import '../styles/globals.scss'
import '../styles/stripe.scss' //only temp

const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh')

const queryCache = new QueryCache()

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<ReactQueryCacheProvider queryCache={queryCache}>
			<ThemeProvider theme={theme}>
				<Elements stripe={stripePromise}>
					<Head>
						<link rel='icon' href='/favicon.ico' />
					</Head>
					<DefaultSeo {...SEO} />
					<Component {...pageProps} />
					<ReactQueryDevtools initialIsOpen />
				</Elements>
			</ThemeProvider>
		</ReactQueryCacheProvider>
	)
}

export default MyApp
