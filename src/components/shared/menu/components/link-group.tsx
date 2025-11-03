import clsx from "clsx";

function LinkGroup({ children, className,...props }: React.ComponentProps<"div">) {
    return (
        <div
            className={clsx('flex flex-direction-col flex-ver-center gap-px-40', className)}
            {...props}
        >
            {children}
        </div>
    );
}
export default LinkGroup;
