import "../sass/main.scss";
import { AppProps } from "next/app";
import Layout from "./Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
		<main> 
			<Layout> 
				<Component {...pageProps} />
			</Layout>
		</main>
    </>
  );
}
