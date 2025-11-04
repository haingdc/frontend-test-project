import type { Meta, StoryObj } from '@storybook/react-vite'
import PlaneCard from './plane-card'

const meta = {
    title: 'Shared/Functionalities/SectionPlane/components/PlaneCard',
    component: PlaneCard,
    parameters: {
        docs: {
            description: {
                component:
                    'A card component displaying plane information with title and star rating.',
            },
        },
    },
    argTypes: {
        title: {
            control: { type: 'text' },
            description: 'Title of the plane card',
        },
    },
    args: {},
} satisfies Meta<typeof PlaneCard>

export default meta
type Story = StoryObj<typeof meta>

export const Mobile: Story = {
    globals: {
        viewport: 'mobile',
    },
    args: {
        title: `Comment s’est passé votre trajet?`,
        lastingText: 'Bien',
    },
}

export const Desktop: Story = {
    globals: {
        viewport: 'desktop',
    },
    args: {
        title: `Comment s’est passé votre trajet?`,
        lastingText: 'Bien',
    },
}
