import type { Meta, StoryObj } from '@storybook/react-vite'
import Heading from './heading'

/**
 * Heading component for displaying page titles and section headers.
 * Uses Gilroy font and consistent typography styling.
 */
const meta = {
    title: 'UI/Heading',
    component: Heading,
    parameters: {},
    tags: [],
    argTypes: {
        children: {
            control: 'text',
            description: 'The content to display inside the heading',
        },
    },
} satisfies Meta<typeof Heading>

export default meta
type Story = StoryObj<typeof meta>

export const Mobile: Story = {
    globals: {
        viewport: 'mobile',
    },
    args: {
        children: 'Votre trajet commence ici',
    },
    render: (args) => {
        return (
            <div>
                <Heading {...args} variant="h1">
                    Heading 1
                </Heading>
                <Heading {...args} variant="h2">
                    Heading 2
                </Heading>
            </div>
        )
    },
}
export const Desktop: Story = {
    globals: {
        viewport: 'desktop',
    },
    args: {
        children: 'Votre trajet commence ici',
    },
    render: (args) => {
        return (
            <div>
                <Heading {...args} variant="h1">
                    Heading 1
                </Heading>
                <Heading {...args} variant="h2">
                    Heading 2
                </Heading>
            </div>
        )
    },
}
