import type { Meta, StoryObj } from '@storybook/react'
import SectionPlane from './section-plane'
import Main from '../../main/main'

const meta = {
    title: 'Shared/Functionalities/SectionPlane',
    component: SectionPlane,
    parameters: {
        layout: 'padded',
    },
} satisfies Meta<typeof SectionPlane>

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
            <SectionPlane />
        </Main>
    ),
}

export const Mobile: Story = {
    globals: {
        viewport: 'mobile',
    },
    render: () => (
        <Main id="functionality-section">
            <SectionPlane />
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
            <SectionPlane />
        </Main>
    ),
}
