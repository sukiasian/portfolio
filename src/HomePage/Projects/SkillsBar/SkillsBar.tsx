import { ReactNode, useCallback } from "react";

interface SkillsBarProps { 
	skills: string[];
}


export default function SkillsBar({ skills = [] }: SkillsBarProps): ReactNode { 
	const renderSkills = useCallback(() => { 
		return skills.map((skill, i) => {
			return <div key={i} className="skill">{skill}</div>;
		});
	}, [skills]);

	return <div className="skills">
		<h3 className="heading heading--secondary">Skills:</h3>
		<div className="skill-labels">
			{renderSkills()}
		</div>
	</div>;
}                                                                 