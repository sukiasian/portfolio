import { ReactNode } from "react";
import LinkWithIcon from "../../../../components/Link/LinkWithIcon";
import SkillsBar from "../SkillsBar/SkillsBar";

const skills = [
	'Python',
	'Tensorflow',
	'Pandas',
	'NumPy',
	'Convolutional NN', 
	'Transferable models',
];

export default function NeuralNetworks(): ReactNode { 
	return <div className="project projects__nn">
		<h2 className="heading heading--secondary">NEURAL NETWORKS: FACIAL EXPRESSION RECOGNITION</h2>
			
		<div className="project__content">
			<p>This project is aimed as a capstone project for MIT Applied Data Science course. By using 6 different CNN models, the goal was to find the best model that predicts the emotion on a picture.</p>
			<LinkWithIcon classNames="link--github" href="https://github.com/sukiasian/facial_expression_recognition"> See on Github </LinkWithIcon>
		</div>
		<SkillsBar skills={skills}/>
	</div>;
}