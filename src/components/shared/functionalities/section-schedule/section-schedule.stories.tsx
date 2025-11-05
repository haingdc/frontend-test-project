import type { Meta, StoryObj } from '@storybook/react'
import SectionSchedule from './section-schedule'
import Main from '../../main/main'

const meta = {
    title: 'Shared/Functionalities/SectionSchedule',
    component: SectionSchedule,
    parameters: {
        layout: 'padded',
    },
} satisfies Meta<typeof SectionSchedule>

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
            <SectionSchedule />
        </Main>
    ),
}

export const Mobile: Story = {
    globals: {
        viewport: 'mobile',
    },
    render: () => (
        <Main id="functionality-section">
            <SectionSchedule />
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
            <SectionSchedule />
        </Main>
    ),
}
