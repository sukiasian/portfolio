import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { ReduxState } from "../../../redux/reducers/rootReducer";

export default function Briefly(): ReactNode { 
	const { briefAboutWindowIsOpen } = useSelector((state: ReduxState) => state.windowStorage);

	return briefAboutWindowIsOpen ?<>
		<p>Experienced Software Engineer proficient in Node.js, ReactJS, TypeScript, and Python. Extremely quick to learn new technologies. Skilled in microservices, containerization, and scalable solutions. Recently started building neural networks.</p>


	</> : null;
}