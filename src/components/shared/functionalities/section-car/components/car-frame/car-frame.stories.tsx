import type { Meta, StoryObj } from '@storybook/react-vite'
import CarFrame from './car-frame'

const meta = {
    title: 'Shared/Functionalities/SectionCar/components/CarFrame',
    component: CarFrame,
    parameters: {
        layout: 'centered',
    },
    tags: [],
} satisfies Meta<typeof CarFrame>

export default meta
type Story = StoryObj<typeof meta>

export const Mobile: Story = {
    globals: {
        viewport: 'mobile',
    },
    render: () => {
        return <CarFrame />
    },
}

export const Desktop: Story = {
    globals: {
        viewport: 'desktop',
    },
    render: () => {
        return <CarFrame />
    },
}
