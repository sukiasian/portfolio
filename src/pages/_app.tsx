import { AppProps } from "next/app";
import { Provider } from 'react-redux';
import store from "../redux/store";
import Layout from "./Layout";
import "../sass/main.scss";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<main> 
				<Layout> 
					<Component {...pageProps} />
				</Layout>
			</main>
		</Provider>
  );
}
