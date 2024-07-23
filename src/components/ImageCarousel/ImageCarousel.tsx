import Image, { StaticImageData } from "next/image";
import { ReactNode, useRef } from "react";
import { RoundArrow, ArrowDirection } from "../../components/Button/RoundArrow";

interface ImageCarouselProps { 
	images: StaticImageData[];
}

export default function ImageCarousel({images}: ImageCarouselProps): ReactNode { 
	const scrollContainerRef = useRef<HTMLDivElement>(null);
	const imageRef = useRef<HTMLImageElement>(null);

	const imagesList = images.map((image, i) => { 
		return <Image ref={imageRef} src={image} className="image" alt="Project Screen" key={i}/>;
	});

	const scroll = (direction: ArrowDirection): void => {
		if (scrollContainerRef.current) {
			const scrollAmount = imageRef.current!.offsetWidth + 5;
			
			const scrollOptions: ScrollToOptions = { 
				left: -scrollAmount, 
				behavior: 'smooth'
			};

			if (direction === 'left') {
				scrollContainerRef.current!.scrollBy(scrollOptions);
			} else {
				scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'auto' });
			}
		}
  	};

	return <div className="carousel-container">
		<div className="button-container"> 
			<RoundArrow direction={ArrowDirection.LEFT} onClick={scroll} />
		</div>
		<div className="images-carousel" ref={scrollContainerRef}>
			{imagesList}
		</div>
		<div className="button-container"> 
			<RoundArrow direction={ArrowDirection.RIGHT} onClick={scroll} />
		</div>
	</div>;
}