import { ReactNode } from "react";
import Link from 'next/link';


interface LinkProps { 
	children: string;
	href: string;
	classNames?: string;
}

export default function CustomLink({ classNames, href, children }: LinkProps): ReactNode {
	return <Link className={`link ${classNames || ''}`} href={href}>
		{children}
	</Link>;
}