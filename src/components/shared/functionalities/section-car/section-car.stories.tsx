import type { Meta, StoryObj } from '@storybook/react'
import SectionCar from './section-car'
import Main from '../../main/main'

const meta = {
    title: 'Shared/Functionalities/SectionCar',
    component: SectionCar,
    parameters: {
        layout: 'padded',
    },
} satisfies Meta<typeof SectionCar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    parameters: {
        viewport: {
            defaultViewport: 'desktop',
        },
    },
    render: () => (
        <Main id="functionality-section">
            <SectionCar />
        </Main>
    ),
}

export const Mobile: Story = {
    globals: {
        viewport: 'mobile',
    },
    render: () => (
        <Main id="functionality-section">
            <SectionCar />
        </Main>
    ),
}


export const Desktop: Story = {
    globals: {
        viewport: 'desktop',
    },
    parameters: {
        viewport: {
            defaultViewport: 'desktop',
        },
    },
    render: () => (
        <Main id="functionality-section">
            <SectionCar />
        </Main>
    ),
}
