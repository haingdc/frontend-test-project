import type { Meta, StoryObj } from "@storybook/react";
import LinkItem from "./link-item";

const meta = {
    title: "Shared/Menu/components/LinkItem",
    component: LinkItem,
    parameters: {
        layout: "",
    },
    tags: [],
    argTypes: {
        href: {
            control: "text",
            description: "The URL that the menu item links to",
        },
        children: {
            control: "text",
            description: "The content to display inside the menu item",
        },
    },
    args: {
        // Default args for all stories
        href: "#",
    },
} satisfies Meta<typeof LinkItem>;

export default meta;
type Story = StoryObj<typeof meta>;

// Primary story with basic text
export const Default: Story = {
    args: {
        href: "/home",
        children: "Société de taxi",
    },
};
