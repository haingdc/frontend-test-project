import CONTENT_PAGES from '../../../../constants/content'
import { Plane } from '../../../ui/icon'
import FunctionalityContent from '../components/functionality-content/functionality-content'
import FunctionalityContainer from '../components/functionality-container/functionality-container'
import PlaneFrame from './components/plane-frame/plane-frame'

function SectionPlane() {
    return (
        <FunctionalityContainer
            frame={<PlaneFrame />}
            content={
                <FunctionalityContent
                    Icon={Plane}
                    title={CONTENT_PAGES.HOME['how-it-works.step1.title']}
                    description={
                        CONTENT_PAGES.HOME['how-it-works.step1.description']
                    }
                />
            }
        ></FunctionalityContainer>
    )
}

export default SectionPlane
