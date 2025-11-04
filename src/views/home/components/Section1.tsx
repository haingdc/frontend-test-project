import Heading from '../../../components/ui/heading/heading'
import { Button } from '../../../components/ui/button/button'
import {
    ArrowRight,
    CalendarDays,
    Clock3,
    LocateFixed,
    MapPin,
} from '../../../components/ui/icon'
import Input from '../../../components/ui/input/input'
import StepItem from '../../../components/ui/stepper/components/step-item'
import Stepper from '../../../components/ui/stepper/stepper'

function Section1() {
    return (
        <section id="section1">
            <div className="section1-container">
                <Heading className="mg-t-24">Votre trajet commence ici</Heading>
                <div className="mg-t-32">
                    <Stepper>
                        <StepItem active={true}>Ou et quand?</StepItem>
                        <StepItem active={false} hasLine>
                            Personnalisation
                        </StepItem>
                        <StepItem active={false} hasLine>
                            Valider
                        </StepItem>
                    </Stepper>
                </div>
                <div className="flex flex-direction-col mg-t-32 pad-x-16">
                    <Input
                        label="De:"
                        IconLabel={LocateFixed}
                        placeholder="Adresse, aeroport, hotel"
                    />
                    <Input
                        label="A:"
                        IconLabel={MapPin}
                        placeholder="Adresse, aeroport, hotel"
                        className="mg-t-16"
                    />
                    <Input
                        label="Date:"
                        IconLabel={CalendarDays}
                        placeholder="Sam.14.dec"
                        className="mg-t-16"
                    />
                    <Input
                        label="Heure:"
                        IconLabel={Clock3}
                        placeholder="11:00"
                        className="mg-t-16"
                    />
                </div>
                <div className="mg-t-40 pad-x-16">
                    <Button
                        variant="primaryRounded"
                        size="rounded"
                        className="w-100"
                    >
                        Commandez
                        <ArrowRight size="sm" />
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default Section1
