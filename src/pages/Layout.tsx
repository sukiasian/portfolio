import { PropsWithChildren, ReactNode } from "react";
import Navbar from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Head from "next/head";

export default function Layout({ children }: PropsWithChildren): ReactNode { 
	return <>
		<Head>
			<title> Sam Sukiasian | Software Engineer</title>
		</Head>
		<Navbar />
		{children}
		<Footer />
	</>;
}