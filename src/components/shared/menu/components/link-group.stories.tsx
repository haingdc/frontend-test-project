import type { Meta, StoryObj } from "@storybook/react";
import LinkGroup from "./link-group";
import LinkItem from "./link-item";

const meta = {
    title: "Shared/Menu/components/LinkGroup",
    component: LinkGroup,
    parameters: {},
    tags: [],
    argTypes: {
        children: {
            control: false,
            description: "The LinkItem components to display inside the group",
        },
    },
} satisfies Meta<typeof LinkGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default story with multiple link items
export const Default: Story = {
    render: () => (
        <LinkGroup>
            <LinkItem href="/link1">Société de taxi</LinkItem>
            <LinkItem href="/link2">Entreprise & Corporate</LinkItem>
            <LinkItem href="/link3">Devenir partenaire</LinkItem>
        </LinkGroup>
    ),
};
