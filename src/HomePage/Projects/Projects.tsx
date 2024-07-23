import { ReactNode } from "react";
import StringArt from "./StringArt/StringArt";
import Spaceboo from "./Spaceboo/Spaceboo";
import Foodmall from "./Foodmall/Foodmall";
import NeuralNetworks from "./NeuralNetworks/NeuralNetworks";

export default function Projects(): ReactNode { 
	return <>
		<h1 id='selected-projects-title' className="heading heading--primary"> SELECTED PROJECTS</h1>
		<StringArt />
		<Spaceboo />
		<Foodmall />
		<NeuralNetworks />
	</>;
}