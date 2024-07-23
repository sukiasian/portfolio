import Image from "next/image";
import { ReactNode, useEffect, useRef } from "react";
import rocket from '../../../assets/images/rocket.png';

export default function Rocket(): ReactNode { 
	const rocketRef = useRef<HTMLImageElement>(null);

	useEffect(() => { 
		if(rocketRef.current) { 
			const observer = new IntersectionObserver(
				(entries, observer) => {
					entries.forEach(entry => {
						if (entry.isIntersecting) {
							rocketRef.current!.classList.add('animate');
						}

						if(!entry.isIntersecting) { 
							rocketRef.current!.classList.remove('animate');
						}
					});
				}, 
				{ threshold: 0.5 }
			);
			
			if (rocketRef.current) {
				observer.observe(rocketRef.current);
			}
			
			return () => {
				if (rocketRef!.current) {
					observer.unobserve(rocketRef!.current);
				}
			};
		}
	}, []);
	
	return <div className="rocket-container">
		<Image ref={rocketRef} className='rocket' src={rocket} width={200} height={100} alt="Ready to take off!"/>
	</div>;

}