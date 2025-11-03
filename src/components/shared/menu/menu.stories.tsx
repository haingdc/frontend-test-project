import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import Menu from "./menu";
import LinkItem from "./components/link-item";
import LinkGroup from "./components/link-group";
import { Button } from "../../ui/button/button";
import { ArrowRight, ChevronDown, Globe, User } from "../../ui/icon";

function InteractiveMenu({ initialOpen = false }: { initialOpen?: boolean }) {
    const [open, setOpen] = useState(initialOpen);

    return (
        <Menu open={open} onOpenChange={setOpen}>
            <LinkGroup className="mg-t-73">
                <LinkItem href="/link1">Société de taxi</LinkItem>
                <LinkItem href="/link2">Entreprise & Corporate</LinkItem>
                <LinkItem href="/link3">Devenir partenaire</LinkItem>
            </LinkGroup>
            <div className="pad-x-16 mg-t-100">
                <Button
                    variant="secondaryRoundedOutline"
                    size="rounded"
                    className="w-100"
                >
                    <Globe size="default" />
                    FR
                    <ChevronDown size="sm" />
                </Button>
                <Button
                    variant="primaryRoundedOutline"
                    size="rounded"
                    className="w-100 mg-t-16"
                >
                    <User size="default" />
                    Profile
                </Button>
                <Button
                    variant="primaryRounded"
                    size="rounded"
                    className="w-100 mg-t-16"
                >
                    Connexion
                    <ArrowRight size="sm" />
                </Button>
            </div>
        </Menu>
    );
}

const meta: Meta = {
    title: "Shared/Menu",
    parameters: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => <InteractiveMenu initialOpen={true} />,
};
