import clsx from "clsx";
import "./link-item.scss";

interface LinkItemProps {
    href: string;
    children?: React.ReactNode;
}

function LinkItem({
    href,
    children,
    className,
    ...props
}: React.ComponentProps<"div"> & LinkItemProps) {
    return (
        <div {...props} className={clsx('font-24 lh-40 flex', 'menu-item', className)}>
            <a href={href}>{children}</a>
        </div>
    );
}

export default LinkItem;
export type { LinkItemProps };
