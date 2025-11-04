import type { Meta, StoryObj } from '@storybook/react'
import SectionContent from './section-content'
import { textSamplesNode } from '../../ui/text/textSamplesNode'

const meta = {
    title: 'Shared/SectionContent',
    component: SectionContent,
    tags: [],
} satisfies Meta<typeof SectionContent>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultMobile: Story = {
    globals: {
        viewport: 'mobile',
    },
    args: {
        headline: 'Concept',
        children: textSamplesNode,
    },
    render: (args) => {
        return (
            <div className="pad-x-16 pad-t-16">
                <SectionContent {...args} />
            </div>
        )
    },
}
