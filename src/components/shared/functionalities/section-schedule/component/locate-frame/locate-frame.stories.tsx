import type { Meta, StoryObj } from '@storybook/react-vite'
import LocateFrame from './locate-frame'

const meta = {
    title: 'Shared/Functionalities/SectionSchedule/components/LocateFrame',
    component: LocateFrame,
    parameters: {
        layout: 'padded',
    },
    tags: [],
} satisfies Meta<typeof LocateFrame>

export default meta
type Story = StoryObj<typeof meta>

export const Mobile: Story = {
    globals: {
        viewport: 'mobile',
    },
    render: () => {
        return <LocateFrame />
    },
}

export const Desktop: Story = {
    globals: {
        viewport: 'desktop',
    },
    render: () => {
        return <LocateFrame />
    },
}
