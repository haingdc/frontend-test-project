import './locate-frame.scss'
import IMAGES_CONSTANTS from '../../../../../../constants/images'
import FunctionalityFrame from '../../../components/functionality-frame/functionality-frame'
import LocateCard from '../locate-card/locate-card'

function LocateFrame() {
    return (
        <FunctionalityFrame
            className="locate-frame"
            src={IMAGES_CONSTANTS['functionality-3-lg.jpg'].path}
            alt={IMAGES_CONSTANTS['functionality-3-lg.jpg'].alt}
            card={<LocateCard />}
        ></FunctionalityFrame>
    )
}

export default LocateFrame
