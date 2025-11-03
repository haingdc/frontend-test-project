import { useState } from "react";
import IMAGES_CONSTANTS from "../../../constants/images";
import Menu from "../menu/menu";
import LinkGroup from "../menu/components/link-group";
import LinkItem from "../menu/components/link-item";
import { Button } from "../../ui/button/button";
import { ArrowRight, ChevronDown, Globe, User } from "../../ui/icon";

function HeaderMobile() {
    const [open, setOpen] = useState(false);
    return (
        <header id="header-mobile" className="flex flex-hor-between flex-ver-center pad-y-24 pad-x-16">
            <div className="flex">
                <div className="drawer-header-menu-logo">
                    <img
                        src={IMAGES_CONSTANTS.LOGO}
                        alt="Logo"
                        width="148"
                        height="32"
                    />
                </div>
            </div>
            <div className="flex">
                <Menu open={open} onOpenChange={setOpen}>
                    <LinkGroup className="mg-t-73">
                        <LinkItem href="/link1">Société de taxi</LinkItem>
                        <LinkItem href="/link2">
                            Entreprise & Corporate
                        </LinkItem>
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
            </div>
        </header>
    );
}

export default HeaderMobile;
