import { PropsWithChildren, ReactNode } from "react";
import Navbar from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function Layout({ children }: PropsWithChildren): ReactNode { 
	return <>
		<Navbar />
		{children}
		<Footer />
	</>;
}