import { ReactNode } from "react";
import Quote from "./Quote";
import InfoBox from "./InfoBox";

export default function Header(): ReactNode { 
	return <header className="header"> 
		<Quote />
		<InfoBox />
	</header>;
}