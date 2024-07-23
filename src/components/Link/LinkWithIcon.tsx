import { ReactNode } from "react";
import Link from "next/link";

interface LinkWithIconProps { 
	href: string;
	children: string;
	classNames?: string;
}

export default function LinkWithIcon({ href, children, classNames }: LinkWithIconProps): ReactNode {
	return <Link href={href} legacyBehavior passHref>
		<a className={`link with-icon ${classNames || ''}`} target="_blank" rel="noopener noreferrer">
			<div className="content">
				<div className="logo-container" />
				<p> {children}</p>
			</div>
		</a>
	</Link>;
}