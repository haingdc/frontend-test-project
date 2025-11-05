import type { Meta, StoryObj } from '@storybook/react-vite'
import FunctionalityContent from './functionality-content'
import { Plane } from '../../../../ui/icon'

/**
 * FunctionalityContent component provides a consistent container structure
 * for functionality-related content sections.
 */
const meta = {
    title: 'Shared/Functionalities/components/FunctionalityContent',
    component: FunctionalityContent,
    parameters: {},
    tags: [],
    argTypes: {},
} satisfies Meta<typeof FunctionalityContent>

export default meta
type Story = StoryObj<typeof meta>

export const Mobile: Story = {
    globals: {
        viewport: 'mobile',
    },
    args: {
        Icon: Plane,
        title: 'Exclusivité aéroportuaire',
        description: `Contrairement à d'autres services de transport, notre application est spécifiquement conçue pour les trajets partant des aéroports. Ce focus nous permet de vous offrir un service parfaitement adapté à vos besoins après un vol.`,
    },
    render: (args) => {
        return <FunctionalityContent {...args} />
    },
}

export const Desktop: Story = {
    globals: {
        viewport: 'desktop',
    },
    args: {
        Icon: Plane,
        title: 'Exclusivité aéroportuaire',
        description: `Contrairement à d'autres services de transport, notre application est spécifiquement conçue pour les trajets partant des aéroports. Ce focus nous permet de vous offrir un service parfaitement adapté à vos besoins après un vol.`,
    },
    render: (args) => {
        return <FunctionalityContent {...args} />
    },
}
