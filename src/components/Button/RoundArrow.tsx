import { ReactNode } from "react";

export enum ArrowDirection { 
	LEFT = 'left', 
	RIGHT = 'right'
}
interface RoundArrowProps {
	direction: ArrowDirection;
	onClick: (...props: any) => any;
}

export function RoundArrow({ direction, onClick }: RoundArrowProps): ReactNode { 
	return <button className={`button--round ${direction}`} onClick={() => onClick(direction)} />;
}