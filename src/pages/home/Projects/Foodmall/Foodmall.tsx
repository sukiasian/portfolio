import Image from "next/image";
import { ReactNode } from "react";
import foodmallSwagger from '../../../../assets/images/projects/foodmall/foodmall-swagger.png';
import LinkWithIcon from "../../../../components/Link/LinkWithIcon";
import SkillsBar from "../SkillsBar/SkillsBar";
import ImageCarousel from "../../../../components/ImageCarousel/ImageCarousel";
import _1 from '../../../../assets/images/projects/foodmall/screens/1.png';
import _2 from '../../../../assets/images/projects/foodmall/screens/2.png';
import _3 from '../../../../assets/images/projects/foodmall/screens/3.png';
import _4 from '../../../../assets/images/projects/foodmall/screens/4.png';
import _5 from '../../../../assets/images/projects/foodmall/screens/5.png';
import _6 from '../../../../assets/images/projects/foodmall/screens/6.png';
import _7 from '../../../../assets/images/projects/foodmall/screens/7.jpg';

const skills = [
	'Node.js', 
	'Microservice Architecture', 
	'Docker', 
	'Redis', 
	'Apache Kafka',
	'PM2',
	'OpenSSH',
	'API',
	'Crons'
];

export default function Foodmall(): ReactNode { 
	return <div className="project projects__foodmall">
		<h2 className="heading heading--secondary">FOODMALL MICROSERVICES: THE POWER OF SCALABILITY</h2>
		<ImageCarousel images={[_1, _2, _3, _4, _5, _6, _7]}/>
		<div className="showcase"> 
			<Image src={foodmallSwagger} alt="Microservices Swagger" />
			<LinkWithIcon classNames="link--github" href="https://github.com/sukiasian/mall_microservices"> See on Github </LinkWithIcon>
		</div>
		<SkillsBar skills={skills}/>
	</div>;
}