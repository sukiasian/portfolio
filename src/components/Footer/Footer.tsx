import React, { ReactNode } from "react";

export default function Footer(): ReactNode { 
	return <footer className="footer">
		<div className="footer__message"> 
			<h3>I also worked on other projects, such as blockchain (web3, GraphQL) and QR-code generators and decoders. Contact me for more: </h3>
		</div>
		<div className="contacts"> 
			<div className="phone">
				<a href="tel:+17473557678"><p id='phone' className="heading">+1 (747) 355 76-78</p></a>
			</div>
			<div className="email"> 
				<a href="mailto:sukiasiansam@gmail.com"><p id="email">sukiasiansam@gmail.com</p></a>
			</div>
		</div>
	</footer>;
}