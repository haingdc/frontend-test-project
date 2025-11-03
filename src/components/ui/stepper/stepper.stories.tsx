import type { Meta, StoryObj } from '@storybook/react-vite'
import Stepper from './stepper'
import StepItem from './components/step-item'

const meta = {
    title: 'UI/Stepper',
    component: Stepper,
    parameters: {},
    tags: [],
} satisfies Meta<typeof Stepper>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    render: () => {
        return (
            <Stepper>
                <StepItem active={true}>Ou et quand?</StepItem>
                <StepItem active={false} hasLine>
                    Personnalisation
                </StepItem>
                <StepItem active={false} hasLine>
                    Valider
                </StepItem>
            </Stepper>
        )
    },
}
