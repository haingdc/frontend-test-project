import './section-content.scss'
import Headline from '../../ui/headline/headline'

type SectionContentProps = React.ComponentProps<'div'> & {
    headline: string
}

function SectionContent({ headline, children, ...props }: SectionContentProps) {
    return (
        <div className="section-content flex" {...props}>
            <Headline>{headline}</Headline>
            <div className="mg-l-16">{children}</div>
        </div>
    )
}

export default SectionContent
