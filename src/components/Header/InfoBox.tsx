import { ReactNode, useEffect, useState } from "react";
import LinkWithIcon from "../Link/LinkWithIcon";
import DownloadLink from "../Link/DownloadLink";

export default function InfoBox(): ReactNode { 
	const [isSmallScreen, setIsSmallScreen] = useState(false);
	
	useEffect(() => {
		const handleResize = () => {
			setIsSmallScreen(window.innerWidth < 900);
		};

		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
 	}, []);

	return <div className="header__info">
		<div className="content">
			<h1 className="heading heading--primary"> I AM SAM SUKIASIAN</h1>
			<h2 className="heading heading--secondary"> SOFTWARE ENGINEER {isSmallScreen ? <br /> : null} FROM LA, CA</h2>

			<div className="links">
				<LinkWithIcon classNames='link--github' href="https://www.github.com/sukiasian">Open Github</LinkWithIcon>
				<LinkWithIcon classNames="link--linkedin" href="https://www.linkedin.com/in/sukiasian">View LinkedIn</LinkWithIcon>
			</div>
			<DownloadLink classNames="link--resume" link="/Resume Latest.pdf">Download Resume</DownloadLink>
			<div className="quote">
				<div className="quote__icon"/>
				<p id='quote' className="paragraph">Our brain is a tensor; its vectors are limitless.</p>
			</div>
		</div>

		<div className="image" />
	</div>;
}