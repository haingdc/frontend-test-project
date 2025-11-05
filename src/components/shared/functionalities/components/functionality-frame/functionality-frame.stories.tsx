import type { Meta, StoryObj } from '@storybook/react-vite'
import FunctionalityFrame from './functionality-frame'
import IMAGES_CONSTANTS from '../../../../../constants/images'

/**
 * FunctionalityFrame component for displaying functionality features.
 */
const meta = {
    title: 'Shared/Functionalities/components/FunctionalityFrame',
    component: FunctionalityFrame,
    parameters: {
      layout: 'padded',
    },
    tags: [],
} satisfies Meta<typeof FunctionalityFrame>

export default meta
type Story = StoryObj<typeof meta>

export const Mobile: Story = {
    globals: {
        viewport: 'mobile',
    },
    args: {
        src: IMAGES_CONSTANTS['functionality-1-lg.jpg'].path,
        alt: IMAGES_CONSTANTS['functionality-1-lg.jpg'].alt,
    },
    render: (args) => {
        return <FunctionalityFrame {...args} />
    },
}

export const Desktop: Story = {
    globals: {
        viewport: 'desktop',
    },
    args: {
        src: IMAGES_CONSTANTS['functionality-1-lg.jpg'].path,
        alt: IMAGES_CONSTANTS['functionality-1-lg.jpg'].alt,
    },
    render: (args) => {
        return <FunctionalityFrame {...args} />
    },
}
