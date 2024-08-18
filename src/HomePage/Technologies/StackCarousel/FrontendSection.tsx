import Image from 'next/image';
import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { type ReduxState } from '../../../redux/reducers/rootReducer';
import { StackTab } from '../../../../types/enums';
import react from '../../../assets/images/stack/frontend/react.svg';
import sass from '../../../assets/images/stack/frontend/sass.svg';
import next from '../../../assets/images/stack/frontend/nextjs.svg';

export default function FrontendSection(): ReactNode  {
    const { activeTab } = useSelector((state: ReduxState) => state.stackCarouselReducer);


    return activeTab === StackTab.FRONTEND ? <div className='stack frontend-stack'>
		<div className='frontend-stack__react stack__elem'>
			<Image src={react} alt='ReactJS' />
			<p> ReactJS</p>
		</div>
		<div className='frontend-stack__sass stack__elem' >
			<Image src={sass} alt='SASS' className='stack-image' />
			<p>SASS</p>		
		</div>
		<div className='frontend-stack__next stack__elem'>
			<Image src={next} alt='Next.js' className='stack-image' />
			<p>Next.js</p>		
		</div>
	</div> : null;
};