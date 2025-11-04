import type { Meta, StoryObj } from '@storybook/react'
import Home from './Home'

const meta = {
    title: 'Views/Home',
    component: Home,
    parameters: {
        layout: 'fullscreen',
    },
    tags: [],
} satisfies Meta<typeof Home>

export default meta
type Story = StoryObj<typeof meta>

export const Mobile: Story = {
    globals: {
        viewport: 'mobile',
    },
}
