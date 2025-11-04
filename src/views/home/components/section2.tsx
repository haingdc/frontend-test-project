import SectionContent from '../../../components/shared/section-content/section-content'
import SectionImage from '../../../components/shared/section-image/section-image'
import { textSamplesNode } from '../../../components/ui/text/textSamplesNode'

function Section2() {
    return (
        <section id="section2" className="mg-t-80">
            <div className="section2-container pad-x-16">
                <div className="section2-containerr1">
                    <div className="section2-containerr1c1">
                        <SectionContent headline="Concept">
                            {textSamplesNode}
                        </SectionContent>
                    </div>
                    <div className="section2-containerr1c2">
                        <SectionImage
                            srcSet="/assets/images/iphone-mockup-1-lg.png 237w, /assets/images/iphone-mockup-1-lg.png 475w"
                            sizes="(width <= 600px) 237w,
         800px"
                            src="/assets/images/iphone-mockup-1-lg.png"
                            alt="iPhone Mockup 1"
                            width="273"
                            height="360"
                            className="mg-left-auto mg-right-auto"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section2
