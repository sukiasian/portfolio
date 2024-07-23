import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { ReduxState } from "../../redux/reducers/rootReducer";

export default function Extensively(): ReactNode { 
	const { extensiveAboutWindowIsOpen } = useSelector((state: ReduxState) => state.windowStorage);
	
	return extensiveAboutWindowIsOpen ? <>
		I am a highly skilled Software Engineer with extensive expertise in Node.js, ReactJS, React Native, TypeScript, and Python. Known for my ability to quickly master new technologies, I have successfully worked with Java, Swift, and C++. My experience includes developing scalable and secure applications, managing microservices, and utilizing containerization and clustering techniques. With a strong passion for science, I excel in translating complex requirements into high-quality, maintainable code.
	</> : null;
}