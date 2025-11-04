import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { Button } from './button'
import { ArrowRight, ChevronDown, Globe, User, X } from '../icon'

const meta = {
    title: 'UI/Button',
    component: Button,
    parameters: {},
    tags: [],
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: [
                'default',
                'ghost',
                'primaryRounded',
                'primaryRoundedOutline',
                'secondaryRoundedOutline',
            ],
        },
        size: {
            control: { type: 'select' },
            options: ['default', 'rounded', 'icon'],
        },
        disabled: {
            control: { type: 'boolean' },
        },
    },
    args: { onClick: fn() },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const AllVariants: Story = {
    render: () => (
        <div className="space-y-8">
            <div>
                <h3 className="text-lg font-semibold mb-4">
                    All Button Variants
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                        <p className="text-sm font-medium text-gray-600">
                            Default
                        </p>
                        <Button variant="default">Default Button</Button>
                    </div>
                    <div className="space-y-2">
                        <p className="text-sm font-medium text-gray-600">
                            Ghost
                        </p>
                        <Button variant="ghost">Ghost Button</Button>
                    </div>
                    <div className="space-y-2">
                        <p className="text-sm font-medium text-gray-600">
                            Rounded
                        </p>
                        <Button variant="primaryRounded">Connection</Button>
                    </div>
                </div>
            </div>

            <div>
                <h3 className="text-lg font-semibold mb-4">
                    States Comparison
                </h3>
                <div className="space-y-4">
                    <div className="flex flex-wrap gap-4 items-center">
                        <span className="text-sm font-medium w-20">
                            Normal:
                        </span>
                        <Button variant="default">Default</Button>
                    </div>
                    <div className="flex flex-wrap gap-4 items-center">
                        <span className="text-sm font-medium w-20">
                            Disabled:
                        </span>
                        <Button variant="default" disabled>
                            Default
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    ),
}

export const AllVariantsWithIcons: Story = {
    render: () => (
        <div className="space-y-6">
            <h3 className="text-lg font-semibold">All Variants with Icons</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                    <h4 className="font-medium">With Icons</h4>
                    <div className="space-y-2">
                        <Button
                            variant="primaryRounded"
                            size="rounded"
                            className="w-100"
                        >
                            Connection
                            <ArrowRight size="sm" />
                        </Button>
                    </div>
                    <div className="space-y-2">
                        <Button
                            variant="primaryRoundedOutline"
                            size="rounded"
                            className="w-100"
                        >
                            <User size="default" />
                            Profile
                        </Button>
                    </div>
                    <div className="space-y-2">
                        <Button
                            variant="secondaryRoundedOutline"
                            size="rounded"
                            className="w-100"
                        >
                            <Globe size="default" />
                            Fr
                            <ChevronDown size="sm" />
                        </Button>
                    </div>
                </div>

                <div className="space-y-3">
                    <h4 className="font-medium">Icon Only Buttons</h4>
                    <div className="flex gap-2">
                        <Button variant="default" size="icon">
                            <X size="sm" />
                        </Button>
                        <Button variant="ghost" size="icon">
                            <X size="sm" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    ),
}
