import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import StepItem from './step-item'

const meta = {
    title: 'UI/Stepper/components/StepItem',
    component: StepItem,
    parameters: {},
    tags: [],
    argTypes: {
        active: {
            control: 'boolean',
            description: 'Whether the step item is currently active',
        },
        children: {
            control: 'text',
            description: 'Content to display inside the step item',
        },
    },
    args: {
        onClick: fn(),
    },
} satisfies Meta<typeof StepItem>

export default meta
type Story = StoryObj<typeof meta>

export const Active: Story = {
    args: {
        active: true,
        children: 'Ou et quand?',
    },
}

export const Inactive: Story = {
    args: {
        active: false,
        children: 'Personnalisation',
    },
}
