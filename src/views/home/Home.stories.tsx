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

export const Default: Story = {}

/**
 * Home page displayed in mobile viewport to showcase responsive design.
 * This story demonstrates how the page adapts to smaller screen sizes.
 */
export const Mobile: Story = {
    globals: {
        viewport: 'mobile',
    },
    parameters: {
        viewport: {
            defaultViewport: 'mobile1',
        },
    },
}

/**
 * Home page displayed in tablet viewport.
 * Shows the intermediate responsive breakpoint behavior.
 */
export const Tablet: Story = {
    parameters: {
        viewport: {
            defaultViewport: 'tablet',
        },
    },
}
