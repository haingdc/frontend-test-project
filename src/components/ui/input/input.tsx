import type { IconProps } from '../icon/variant'
import './input.scss'

export interface InputProps extends React.ComponentProps<'input'> {
    /** Additional CSS classes */
    className?: string
    /** The type of input field */
    type?: 'text'
    label: string
    IconLabel?: React.FC<IconProps>
}

function Input({
    id,
    className,
    type = 'text',
    label,
    IconLabel,
    ...props
}: InputProps) {
    return (
        <div className="input-field">
            <label htmlFor={id} className="input-label">
                {IconLabel ? (
                    <IconLabel className="label-icon text-primary mg-r-12" />
                ) : null}
                {label}
            </label>
            <input type={type} className={className} {...props} />
        </div>
    )
}

export default Input
