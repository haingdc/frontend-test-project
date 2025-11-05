import CONTENT_PAGES from '../../../../constants/content'
import { CalendarCheck } from '../../../ui/icon'
import FunctionalityContent from '../components/functionality-content/functionality-content'
import FunctionalityContainer from '../components/functionality-container/functionality-container'
import LocateFrame from './component/locate-frame/locate-frame'

function SectionSchedule() {
    return (
        <FunctionalityContainer
            reverseDesktop={false}
            frame={<LocateFrame />}
            content={
                <FunctionalityContent
                    Icon={CalendarCheck}
                    title={CONTENT_PAGES.HOME['how-it-works.step3.title']}
                    description={
                        CONTENT_PAGES.HOME['how-it-works.step3.description']
                    }
                />
            }
        ></FunctionalityContainer>
    )
}

export default SectionSchedule
