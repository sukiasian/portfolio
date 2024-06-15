import Image from "next/image";
import { ReactNode } from "react";
import profilePic from '../../assets/image.png';
import Button from "../Button/Button";
import CustomLink from "../Link/Link";

export default function InfoBox(): ReactNode { 
	return <div className="header__info">
		<Image src={profilePic} alt="Sam" width={100} height={100} />
		<h1> My name is Sam</h1>
		<h2> I am a software enginner</h2>
		<p>Open to job</p>

		<div className="links">
			<CustomLink classNames="" href="https://www.github.com/sukiasian">Discover Github</CustomLink>
			<CustomLink classNames="" href="https://www.linkedin.com/in/sukiasian">View LinkedIn</CustomLink>
		</div>
	</div>;
}