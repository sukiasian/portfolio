import { ReactNode } from "react";

interface ButtonProps { 
	children: string;
	classNames?: string;
}

export default function Button({ classNames, children }: ButtonProps): ReactNode {
	return <button className={`buttons ${classNames || ''}`}>
		{children}
	</button>;
}