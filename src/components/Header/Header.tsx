import { ReactNode } from "react";
import InfoBox from "./InfoBox";

export default function Header(): ReactNode { 
	return <header className="header"> 
		<InfoBox />
	</header>;
}