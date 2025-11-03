import clsx from "clsx"
import "./step-item.scss"

import { dotVariants } from "./variants"

function Dot({ active }: { active?: boolean }) {
    return (
        <div className={clsx('dot', dotVariants({ active }))}>
            <div className="w-px-9 h-px-9 bg-white radius-circle"></div>
        </div>
    )
}

function Line() {
    return <div className="line" />
}


type StepItemProps = {
    active?: boolean
    children?: React.ReactNode
    hasLine?: boolean
} & React.ComponentProps<"div">

function StepItem({ children, active, hasLine }: StepItemProps) {
    return (
        <div className="step-item flex flex-direction-col flex-ver-center w-fit">
            <Dot active={active} />
            <div className="root">
                {hasLine ? <Line /> : null}
            </div>
            <div className="flex font-w500 font-14 lh-24 -tracking-p-2 mg-t-8">{children}</div>
        </div>
    )
}

export default StepItem
