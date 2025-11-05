import Text from './text'

export const textSamplesNode = (
    <>
        <p>
            <Text variant="default" size="lg">
                Djoubo
            </Text>
            <Text variant="bold" size="lg">
                {' '}
                est une application innovante qui redéfinit le transport depuis
                l'aéroport.
            </Text>
        </p>
        <br />
        <p>
            <Text variant="default" size="default">
                Nous avons compris que votre voyage ne se termine pas lorsque
                vous atterrissez.
            </Text>
        </p>
        <br />
        <p>
            <Text variant="default" size="default">
                Souvent, l'étape la plus stressante est
            </Text>
            <Text variant="bold" size="default">
                {' '}
                celle du transport entre l'aéroport et votre destination finale
            </Text>
            <Text variant="default" size="default">
                , que ce soit un hôtel, une réunion professionnelle ou votre
                domicile.
            </Text>
        </p>
        <br />
        <p>
            <Text variant="default" size="default">
                C'est pourquoi nous avons créé Djoubo, une solution sur mesure
                qui vous
            </Text>
            <Text variant="bold" size="default">
                {' '}
                garantit un transport fluide et sans tracas dès la sortie de
                l'aéroport.
            </Text>
        </p>
    </>
)

export const allTextVariantsNode = (
    <div className="flex flex-direction-col gap-px-8">
        <label> 1. default variant: </label>
        <Text size="default" variant="default">
            - This is default text
        </Text>
        <Text size="medium" variant="default">
            - This is default text
        </Text>
        <Text size="lg" variant="default">
            - This is default text
        </Text>
        <div>------------------</div>
        <label> 2. bold variant: </label>
        <Text size="default" variant="bold">
            - This is bold text
        </Text>
        <Text size="medium" variant="bold">
            - This is bold text
        </Text>
        <Text size="lg" variant="bold">
            - This is bold text
        </Text>
    </div>
)
