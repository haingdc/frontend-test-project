import type { Meta, StoryObj } from '@storybook/react-vite'
import PlaneFrame from './plane-frame'

const meta = {
    title: 'Shared/Functionalities/SectionPlane/components/PlaneFrame',
    component: PlaneFrame,
    parameters: {
        layout: 'padded',
    },
    tags: [],
} satisfies Meta<typeof PlaneFrame>

export default meta
type Story = StoryObj<typeof meta>

export const Mobile: Story = {
    globals: {
        viewport: 'mobile',
    },
    render: () => {
        return <PlaneFrame />
    },
}

export const Desktop: Story = {
    globals: {
        viewport: 'desktop',
    },
    render: () => {
        return <PlaneFrame />
    },
}
