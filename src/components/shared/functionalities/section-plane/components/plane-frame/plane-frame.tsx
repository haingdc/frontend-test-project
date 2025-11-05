import './plane-frame.scss'
import CONTENT_PAGES from '../../../../../../constants/content'
import IMAGES_CONSTANTS from '../../../../../../constants/images'
import FunctionalityFrame from '../../../components/functionality-frame/functionality-frame'
import PlaneCard from '../plane-card/plane-card'

function PlaneFrame() {
    return (
        <FunctionalityFrame
            className="plane-frame"
            src={IMAGES_CONSTANTS['functionality-1-lg.jpg'].path}
            alt={IMAGES_CONSTANTS['functionality-1-lg.jpg'].alt}
            card={
                    <PlaneCard
                        title={
                            CONTENT_PAGES.HOME['how-it-works.step1.card.title']
                        }
                        lastingText={
                            CONTENT_PAGES.HOME['how-it-works.step1.card.lastingText']
                        }
                    />
            }
        ></FunctionalityFrame>
    )
}

export default PlaneFrame
