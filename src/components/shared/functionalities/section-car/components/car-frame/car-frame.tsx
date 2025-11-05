import './car-frame.scss'
import IMAGES_CONSTANTS from '../../../../../../constants/images'
import FunctionalityFrame from '../../../components/functionality-frame/functionality-frame'
import CarCard, { CarCardAvatar } from '../car-card/car-card'
import CONTENT_PAGES from '../../../../../../constants/content'

function CarFrame() {
    return (
        <FunctionalityFrame
            className="car-frame"
            src={IMAGES_CONSTANTS['functionality-2-lg.jpg'].path}
            alt={IMAGES_CONSTANTS['functionality-2-lg.jpg'].alt}
            card={
                <CarCard
                    text1={CONTENT_PAGES.HOME['how-it-works.step2.card.text1']}
                    text2={CONTENT_PAGES.HOME['how-it-works.step2.card.text2']}
                    avatarElement={
                        <CarCardAvatar
                            src={IMAGES_CONSTANTS.car.path}
                            alt={IMAGES_CONSTANTS.car.alt}
                        />
                    }
                />
            }
        ></FunctionalityFrame>
    )
}

export default CarFrame
