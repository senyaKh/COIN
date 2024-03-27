// pages/_document.tsx
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	render() {
		return (
			<Html lang='en'>
				<Head>
					<meta
						name='description'
						content='Cryptocurrency Marketplace: Discover, track, and invest in cryptocurrencies with ease.'
					/>
					<meta
						name='keywords'
						content='cryptocurrency, marketplace, invest, track, discover, BTC, ETH, XRP, LTC, Bitcoin, Ethereum, Ripple, Litecoin'
					/>
					<link rel='icon' href='/favicon.ico' />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
