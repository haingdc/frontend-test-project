import './headline.scss'

type HeadlineProps = React.ComponentProps<'h1'>

function Headline({ children, ...props }: HeadlineProps) {
    return (
        <h1 className="flex flex-direction-col flex-ver-center" {...props}>
            <div className="writing-rl rotate-180 text-red-7 font-upper font-14 lh-24 -tracking-p-2">
                {children}
            </div>
            <div className="flex-1 w-px-1 min-h-24 max-h-100 mg-t-12 bg-white"></div>
        </h1>
    )
}

export default Headline
