import { ReactNode, useEffect } from "react";
import gsap from 'gsap';
import InfoBox from "./InfoBox";

export default function Header(): ReactNode { 
	useEffect(() => {
		gsap.to('.header .content', {rotation: 360, x: 10, duration: 1});
	});

	return <header className="header"> 
		<InfoBox />
	</header>;
}