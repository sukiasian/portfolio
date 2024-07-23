import Document, { Html, Head, Main, NextScript } from "next/document";

class NextDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
				<link rel="icon" href="/favicon.ico" />
				</Head>
				<body>
				<Main />
				<NextScript />
				</body>
			</Html>
		);
	}
}
export default NextDocument;