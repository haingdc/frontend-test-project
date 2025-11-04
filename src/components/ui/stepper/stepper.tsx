import clsx from 'clsx'

type StepperProps = {
    children?: React.ReactNode
} & React.ComponentProps<'div'>

function Stepper({ children, className, ...props }: StepperProps) {
    return (
        <div className={clsx('stepper flex', className)} {...props}>
            <div className="flex flex-hor-between w-100">{children}</div>
        </div>
    )
}

export default Stepper
