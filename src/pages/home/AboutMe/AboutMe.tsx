import { ReactNode } from "react";
import Button from "../../../components/Button/Button";
import Rocket from "./Rocket";
import Briefly from "./Briefly";
import Extensively from "./Extensively";
import { useDispatch, useSelector } from "react-redux";
import { toggleBriefAboutWindow, toggleExtenciveAboutWindow } from "../../../redux/actions/windowActions";
import { ReduxState } from "../../../redux/reducers/rootReducer";

export default function AboutMe(): ReactNode { 
	const { briefAboutWindowIsOpen, extensiveAboutWindowIsOpen } = useSelector((state: ReduxState) => state.windowStorage);
	const dispatch = useDispatch();

	const toggleBrief = (): void => { 
		if(!briefAboutWindowIsOpen) { 
			dispatch(toggleBriefAboutWindow());	
			dispatch(toggleExtenciveAboutWindow());	
		}
	};

	const toggleExtent = (): void => { 
		if(!extensiveAboutWindowIsOpen) {
			dispatch(toggleExtenciveAboutWindow());	
			dispatch(toggleBriefAboutWindow());	
		}
	};

	return <section className="about-me">
		<Rocket />
		<div className="about-me__options">
			<Button classNames={`button--primary ${briefAboutWindowIsOpen ? 'active' : ''}`} onClick={toggleBrief}>Briefly</Button>
			<Button classNames={`button--primary ${extensiveAboutWindowIsOpen ? 'active' : ''}`} onClick={toggleExtent}>Extensively</Button>
		</div>

		<Briefly />
		<Extensively />
	</section>;
}