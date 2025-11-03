import { Button } from "../../ui/button/button";
import {
    DrawerContent,
    DrawerHeaderMenu,
    DrawerTrigger,
    SimpleDrawer,
} from "../../ui/simple-drawer";
import { Menu as MenuIcon } from "../../ui/icon";

interface MenuProps {
    children?: React.ReactNode;
    onOpenChange: (open: boolean) => void;
    open: boolean;
}

function Menu({
    children,
    open,
    onOpenChange,
}: MenuProps) {
    return (
        <SimpleDrawer open={open} onOpenChange={onOpenChange}>
            <DrawerTrigger>
                <div className="flex flex-hor-end">
                    <Button variant="ghost" size="icon" aria-label="Open menu">
                        <MenuIcon />
                    </Button>
                </div>
            </DrawerTrigger>
            <DrawerContent className="drawer-overlay-menu">
                <DrawerHeaderMenu></DrawerHeaderMenu>
                {children}
            </DrawerContent>
        </SimpleDrawer>
    );
}

export default Menu;
