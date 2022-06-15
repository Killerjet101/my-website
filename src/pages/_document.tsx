import React from 'react';
import Document, {Head, Html, Main, NextScript} from 'next/document';

export default class AlistairDocument extends Document {
	render() {
		return (
			<Html lang='en'>
				<Head>
					<meta charSet='utf-8' />
					<link
						rel='icon'
						type='image/png'
						href='icon.png'
					/>
					<meta name='theme-color' content='#ffffff' />
					<meta
						name='description'
						content='Killerjet101, Full–stack TypeScript engineer from the US'
					/>
					<link rel='preconnect' href='https://fonts.gstatic.com' />
					<link
						href='https://fonts.googleapis.com/css2?family=Krona+One&family=Roboto:wght@400;700&display=swap'
						rel='stylesheet'
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
					<script async src='/theme.js' />
					<script async defer src='https://lab.alistair.cloud/latest.js' />
				</body>
			</Html>
		);
	}
}
