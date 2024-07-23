import { ReactNode } from "react";
import ImageCarousel from "../../../components/ImageCarousel/ImageCarousel";
import SkillsBar from "../SkillsBar/SkillsBar";
import login from '../../../assets/images/projects/spaceboo/login.png';
import provide from '../../../assets/images/projects/spaceboo/provide.png';
import search from '../../../assets/images/projects/spaceboo/search.png';
import contact from '../../../assets/images/projects/spaceboo/contact.png';
import email from '../../../assets/images/projects/spaceboo/confirm-email.png';
import home from '../../../assets/images/projects/spaceboo/home.png';
import space from '../../../assets/images/projects/spaceboo/space.png';

const skills = [
	'Node.js', 
	'ReactJS', 
	'PostgreSQL', 
	'Sequelize ORM', 
	'Redis', 
	'Apache Kafka', 
	'Docker', 
	'NodeMailer', 
	'SSL Certification', 
	'JWT', 
	'IoT', 
	'TTLock API'
];

export default function Spaceboo(): ReactNode { 
	return <div className="project projects__spaceboo">
		<h2 className="heading heading--secondary">SPACEBOO: FULLY AUTOMATED SHORT-TERM APARTMENT RENTALS</h2>
		<ImageCarousel images={[login, provide, email, contact, search, home, space]} />
		<SkillsBar skills={skills}/>
	</div>;
}                                                                 