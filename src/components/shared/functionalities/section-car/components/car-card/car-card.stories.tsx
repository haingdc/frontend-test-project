import type { Meta, StoryObj } from '@storybook/react-vite'
import CarCard, { CarCardAvatar } from './car-card'
import IMAGES_CONSTANTS from '../../../../../../constants/images'

const meta = {
    title: 'Shared/Functionalities/SectionCar/components/CarCard',
    component: CarCard,
    parameters: {
        layout: 'padded',
    },
    tags: [],
} satisfies Meta<typeof CarCard>

export default meta

const avatarElement = (
    <CarCardAvatar
        src={IMAGES_CONSTANTS.car.path}
        alt={IMAGES_CONSTANTS.car.alt}
    />
)
type Story = StoryObj<typeof meta>

const argsSample = {
    text1: 'Fiat · E-Ulysse',
    text2: 'TR-543-TG',
}

export const Mobile: Story = {
    globals: {
        viewport: 'mobile',
    },
    args: argsSample,
    render: (args) => <CarCard {...args} avatarElement={avatarElement} />,
}

export const Desktop: Story = {
    globals: {
        viewport: 'desktop',
    },
    args: argsSample,
    render: (args) => <CarCard {...args} avatarElement={avatarElement} />,
}
