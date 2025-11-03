import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Menu } from "../icon";
import {
    SimpleDrawer,
    DrawerTrigger,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
    DrawerDescription,
    DrawerFooter,
    DrawerClose,
    DrawerHeaderMenu,
} from "./index";
import { Button } from "../button/button";

const meta = {
    title: "UI/SimpleDrawer",
    component: SimpleDrawer,
    parameters: {},
    tags: [],
    args: {
        children: null,
        open: false,
        onOpenChange: () => {},
    },
} satisfies Meta<typeof SimpleDrawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: function DefaultStory() {
        const [open, setOpen] = useState(false);

        return (
            <SimpleDrawer open={open} onOpenChange={setOpen}>
                <DrawerTrigger>
                    <Button>Open Drawer</Button>
                </DrawerTrigger>
                <DrawerContent>
                    <DrawerHeader>
                        <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                        <DrawerDescription>
                            This action cannot be undone.
                        </DrawerDescription>
                    </DrawerHeader>
                    <DrawerFooter>
                        <Button>Submit</Button>
                        <DrawerClose>
                            <Button variant="default">Cancel</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </DrawerContent>
            </SimpleDrawer>
        );
    },
};

export const MenuDrawer: Story = {
    render: function MenuDrawerStory() {
        const [open, setOpen] = useState(false);

        return (
            <SimpleDrawer open={open} onOpenChange={setOpen}>
                <DrawerTrigger>
                    <div className="flex flex-hor-end">
                        <Button
                            variant="ghost"
                            size="icon"
                            aria-label="Open menu"
                        >
                            <Menu />
                        </Button>
                    </div>
                </DrawerTrigger>
                <DrawerContent className="drawer-overlay-menu">
                    <DrawerHeaderMenu />
                </DrawerContent>
            </SimpleDrawer>
        );
    },
};
