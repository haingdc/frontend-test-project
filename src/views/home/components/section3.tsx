import Heading from '../../../components/ui/heading/heading'
import CONTENT_PAGES from '../../../constants/content'
import SectionPlane from '../../../components/shared/functionalities/section-plane/section-plane'
import SectionCar from '../../../components/shared/functionalities/section-car/section-car'
import SectionSchedule from '../../../components/shared/functionalities/section-schedule/section-schedule'

function Section3() {
    return (
        <section className="section3 mg-t-90">
            <div className="section3-container pad-x-16">
                <div className="section3-container-r1 mg-t-24">
                    <div className="section3-container-r1c1">
                        <Heading variant="h2">
                            {CONTENT_PAGES.HOME['how-it-works.label']}
                        </Heading>
                    </div>
                </div>
                <div className="section3-container-r2 mg-t-24">
                    <div className="section3-container-r2c1">
                        <SectionPlane />
                    </div>
                </div>
                <div className="section3-container-r3 mg-t-32">
                    <div className="section3-container-r3c1">
                        <SectionCar />
                    </div>
                </div>
                <div className="section3-container-r4 mg-t-32">
                    <div className="section3-container-r4c1">
                        <SectionSchedule />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section3
