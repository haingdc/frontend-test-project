import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import Text from './text'
import React from 'react'
import { allTextVariantsNode, textSamplesNode } from './textSamplesNode'

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
    render: () => allTextVariantsNode
}

export const Mobile: Meta<React.ComponentProps<'div'>> = {
    globals: {
        viewport: 'mobile',
    },
    render: () => allTextVariantsNode,
}

export const Desktop: Meta<React.ComponentProps<'div'>> = {
    globals: {
        viewport: 'desktop',
    },
    render: () => allTextVariantsNode,
}


export const ParagraphExampleMobile: Meta<React.ComponentProps<'div'>> = {
    globals: {
        viewport: 'mobile',
    },
    render: () => <div>{textSamplesNode}</div>,
}

export const ParagraphExampleDesktop: Meta<React.ComponentProps<'div'>> = {
    globals: {
        viewport: 'desktop',
    },
    render: () => <div>{textSamplesNode}</div>,
}

