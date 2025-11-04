import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import Text from './text'
import React from 'react'
import { textSamplesNode } from './textSamplesNode'

const meta = {
    title: 'UI/Text',
    component: Text,
    parameters: {},
    tags: [],
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['default', 'bold'],
        },
        size: {
            control: { type: 'select' },
            options: ['default', 'lg'],
        },
    },
    args: { onClick: fn() },
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        children: 'This is default text',
    },
}
export const Bold: Story = {
    args: {
        children: 'This is bold variant text',
        variant: 'bold',
    },
}

export const Large: Story = {
    args: {
        children: 'This is large text',
        size: 'lg',
    },
}

export const LargeBold: Story = {
    args: {
        children: 'This is large bold text',
        variant: 'bold',
        size: 'lg',
    },
}

export const ParagraphExample: Meta<React.ComponentProps<'div'>> = {
    render: () => <div>{textSamplesNode}</div>,
}
