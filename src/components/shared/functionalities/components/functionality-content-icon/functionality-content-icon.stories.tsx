import type { Meta, StoryObj } from '@storybook/react'
import FunctionalityContentIcon from './functionality-content-icon'
import { CalendarCheck, Plane, Taxi } from '../../../../ui/icon'

const meta = {
    title: 'Shared/Functionalities/components/FunctionalityContentIcon',
    component: FunctionalityContentIcon,
    parameters: {
        docs: {
            description: {
                component:
                    'A container component for displaying icons with consistent styling and background.',
            },
        },
    },
    argTypes: {},
} satisfies Meta<typeof FunctionalityContentIcon>

export default meta
type Story = StoryObj<typeof meta>

export const Mobile: Story = {
    globals: {
        viewport: 'mobile',
    },
    render: () => (
        <div className="flex gap-px-8">
            <FunctionalityContentIcon Icon={Plane}></FunctionalityContentIcon>
            <FunctionalityContentIcon Icon={Taxi}></FunctionalityContentIcon>
            <FunctionalityContentIcon
                Icon={CalendarCheck}
            ></FunctionalityContentIcon>
        </div>
    ),
}

export const Desktop: Story = {
    globals: {
        viewport: 'desktop',
    },
    render: () => (
        <div className="flex gap-px-8">
            <FunctionalityContentIcon Icon={Plane}></FunctionalityContentIcon>
            <FunctionalityContentIcon Icon={Taxi}></FunctionalityContentIcon>
            <FunctionalityContentIcon
                Icon={CalendarCheck}
            ></FunctionalityContentIcon>
        </div>
    ),
}
