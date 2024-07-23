import { ReactNode } from "react";

interface ButtonProps { 
	children: string;
	classNames?: string;
	onClick?: (...props: any) => any;
}

export default function Button({ classNames, children, onClick }: ButtonProps): ReactNode {
	return <button className={`button ${classNames || ''}`} onClick={onClick}>
		{children}
	</button>;
}