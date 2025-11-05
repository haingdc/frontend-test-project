import CONTENT_PAGES from '../../../../constants/content'
import { Taxi } from '../../../ui/icon'
import FunctionalityContent from '../components/functionality-content/functionality-content'
import FunctionalityContainer from '../components/functionality-container/functionality-container'
import CarFrame from './components/car-frame/car-frame'

function SectionCar() {
    return (
        <FunctionalityContainer
            reverseDesktop={true}
            frame={<CarFrame />}
            content={
                <FunctionalityContent
                    Icon={Taxi}
                    title={CONTENT_PAGES.HOME['how-it-works.step2.title']}
                    description={
                        CONTENT_PAGES.HOME['how-it-works.step2.description']
                    }
                />
            }
        ></FunctionalityContainer>
    )
}

export default SectionCar
