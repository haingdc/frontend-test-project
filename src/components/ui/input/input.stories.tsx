import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import Input from './input'
import * as Icons from '../icon'

const meta = {
    title: 'UI/Input',
    component: Input,
    parameters: {
        docs: {
            description: {
                component:
                    'A customizable input component with various types and styling options.',
            },
        },
    },
    tags: [],
    argTypes: {
        type: {
            control: 'select',
            options: [
                'text',
                'password',
                'email',
                'number',
                'tel',
                'url',
                'search',
            ],
            description: 'The type of input field',
        },
        placeholder: {
            control: 'text',
            description: 'Placeholder text for the input',
        },
        disabled: {
            control: 'boolean',
            description: 'Whether the input is disabled',
        },
        className: {
            control: 'text',
            description: 'Additional CSS classes',
        },
    },
    args: {
        onChange: fn(),
        onFocus: fn(),
        onBlur: fn(),
    },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        placeholder: 'Adresse, aeroport, hotel',
        label: 'De:',
        IconLabel: Icons.LocateFixed,
    },
}

export const MapPin: Story = {
    args: {
        placeholder: 'Adresse, aeroport, hotel',
        label: 'A:',
        IconLabel: Icons.MapPin,
    },
}

export const CalendarDays: Story = {
    args: {
        placeholder: 'Sam.14.dec',
        label: 'Date:',
        IconLabel: Icons.CalendarDays,
    },
}

export const Clock3: Story = {
    args: {
        placeholder: '11:00',
        label: 'Heure:',
        IconLabel: Icons.Clock3,
    },
}
