import Image from 'next/image';
import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { type ReduxState } from '../../../redux/reducers/rootReducer';
import { StackTab } from '../../../../types/enums';
import node from '../../../assets/images/stack/backend/node-js.svg';
import python from  '../../../assets/images/stack/backend/python.svg';
import spring from '../../../assets/images/stack/backend/spring.svg';
import postgresql from '../../../assets/images/stack/backend/postgresql.svg';
import mongodb from '../../../assets/images/stack/backend/mongodb.svg';
import redis from '../../../assets/images/stack/backend/redis.svg';
import kafka from '../../../assets/images/stack/backend/kafka.svg';
import java from '../../../assets/images/stack/backend/java.svg';
import nestjs from '../../../assets/images/stack/backend/nestjs.svg';
import docker from '../../../assets/images/stack/backend/docker.svg';

export default function BackendSection(): ReactNode  {
    const { activeTab } = useSelector((state: ReduxState) => state.stackCarouselReducer);

    return activeTab === StackTab.BACKEND ? <div className='parallax-content stack backend-stack'>
		<div className='backend-stack__node'>
			<Image src={node} alt='Node.js'/>
			<p>Node.js</p>
		</div>
		<div className='backend-stack__python'>
			<Image src={python} alt='Python'/>
			<p>Python</p>
		</div>
		<div className='backend-stack__java'>
			<Image src={java} alt='Java'/>
			<p>Java</p>
		</div>
		<div className='backend-stack__nestjs'>
			<Image src={nestjs} alt='NestJS'/>
			<p>NestJS</p>
		</div>
		<div className='backend-stack__spring'>
			<Image src={spring} alt='Spring'/>
			<p>Spring</p>
		</div>
		<div className='backend-stack__postgresql'>
			<Image src={postgresql} alt='PosgreSQL'/>
			<p>PosgreSQL</p>
		</div>
		<div className='backend-stack__mongodb'>
			<Image src={mongodb} alt='MongoDB'/>
			<p>MongoDB</p>
		</div>
		<div className='backend-stack__docker'>
			<Image src={docker} alt='Docker'/>
			<p>Docker</p>	
		</div>
		<div className='backend-stack__redis'>
			<Image src={redis} alt='Redis'/>
			<p>Redis</p>
		</div>
		<div className='backend-stack__kafka'>
			<Image src={kafka} alt='Kafka'/>
			<p>Kafka</p>	
		</div>
	</div> : null;
};