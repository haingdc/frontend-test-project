import './functionality-content-icon.scss'
import type { IconProps } from "../../../../ui/icon/variant"
import clsx from 'clsx'

export type FunctionalityContentIconProps = React.ComponentProps<'div'> & {
  Icon?: React.ElementType<IconProps>
}

function FunctionalityContentIcon({ className, Icon }: FunctionalityContentIconProps) {
  return (
    <div className={clsx("functionality-content-icon flex flex-center bg-white", className)}>
      {Icon && <Icon className="text-primary" />}
    </div>
  )
}

export default FunctionalityContentIcon