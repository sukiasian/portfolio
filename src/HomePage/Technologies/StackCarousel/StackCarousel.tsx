import { MouseEventHandler, ReactNode, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveTabIndex } from '../../../redux/actions/stackCarouselActions';
import FrontendSection from './FrontendSection';
import BackendSection from './BackendSection';
import { type ReduxState } from '../../../redux/reducers/rootReducer';

export default function StackCarousel(): ReactNode {
    const developmentSections = ['Backend', 'Frontend'];
	const refreshRateInMs = 10000;

    const { activeTab } = useSelector((state: ReduxState) => state.stackCarouselReducer);
	
	const intervalRef = useRef<NodeJS.Timeout>();

    const dispatch = useDispatch();

	const assignIntervalForNewlyOpenedTab = (): void => { 
		clearInterval(intervalRef.current);

		intervalRef.current = setInterval(() => { 
			dispatch(setActiveTabIndex(activeTab + 1));
		}, refreshRateInMs);
	};

	const handleTabClick = (i: number): MouseEventHandler<HTMLLIElement>=> { 
		return (e) => { 
			assignIntervalForNewlyOpenedTab();
			
			dispatch(setActiveTabIndex(i));
		};
	};

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            dispatch(setActiveTabIndex((activeTab + 1) % developmentSections.length));
        }, refreshRateInMs);

        return () => {
            clearInterval(intervalRef.current);
        };
    }, [activeTab]);

    return <div className='stack-carousel margin-top-large'>
        <div className="dev-sections">
            <ul className='dev-sections__list'>
                {developmentSections.map((section, i) => 
					<li 
						className={`dev-section dev-section__${section} ${activeTab === i ? 'active' : ''}`} 
						onClick={handleTabClick(i)} key={i}>
							{section}
					</li>
				)}
            </ul>
        </div>

        <BackendSection />
        <FrontendSection />
    </div>;
};
