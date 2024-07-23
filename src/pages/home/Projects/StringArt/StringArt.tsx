import { ReactNode } from "react";
import SkillsBar from "../SkillsBar/SkillsBar";
import { Canvas } from "./Canvas";

const skills = ['Python', 'Flask', 'ReactJS', 'NumPy', 'AI API'];

export default function StringArt(): ReactNode { 
	return <div className="project projects__string-art">
		<h2 className="heading heading--secondary"> STRING ART: ART FROM A SINGLE BLACK THREAD</h2>
		<Canvas pinsAmount={240} />
		<SkillsBar skills={skills} />
	</div>;
}