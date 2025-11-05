import type { IconProps } from '../../../../ui/icon/variant'
import Text from '../../../../ui/text/text'
import FunctionalityContentIcon from '../functionality-content-icon/functionality-content-icon'
import './functionality-content.scss'

type FunctionalityContentProps = React.ComponentProps<'div'> & {
    Icon?: React.ElementType<IconProps>
    title?: string
    description?: string
}

function FunctionalityContent({
    Icon,
    title,
    description,
}: FunctionalityContentProps) {
    return (
        <div className="functionality-content">
            <div className="functionality-content-container">
                <FunctionalityContentIcon Icon={Icon} />
                <Text variant="bold" size="medium" as="div" className="functionality-content-title">
                    {title}
                </Text>
                <Text variant="default" size="default" as="p" className="functionality-content-desc">
                    {description}
                </Text>
            </div>
        </div>
    )
}

export default FunctionalityContent
