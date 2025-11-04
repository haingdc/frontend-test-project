import type { Meta, StoryObj } from '@storybook/react'
import Headline from './headline'

const meta = {
    title: 'UI/Headline',
    component: Headline,
    tags: [],
} satisfies Meta<typeof Headline>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        children: 'Concept',
    },
}
