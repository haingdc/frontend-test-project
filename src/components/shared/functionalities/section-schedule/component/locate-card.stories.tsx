import type { Meta, StoryObj } from '@storybook/react'
import LocateCard from './locate-card'

const meta = {
    title: 'Shared/Functionalities/SectionSchedule/components/LocateCard',
    component: LocateCard,
    parameters: {},
    argTypes: {},
    args: {},
} satisfies Meta<typeof LocateCard>

export default meta
type Story = StoryObj<typeof meta>

export const Mobile: Story = {
    globals: {
        viewport: 'mobile',
    },
    args: {},
}

export const Desktop: Story = {
    globals: {
        viewport: 'desktop',
    },
    args: {},
}
