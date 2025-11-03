import { iconVariants, type IconProps } from './variant'

function ArrowRight({ className, size, ...props }: IconProps) {
  return (
    <svg
      width={16}
      height={16}
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={iconVariants({ size, className })}
      {...props}
    >
      <path
        d='M9.3335 4L13.3335 8M13.3335 8L9.3335 12M13.3335 8H3.3335'
        stroke='currentColor'
        strokeWidth={1.5}
        strokeLinecap='round'
      />
    </svg>
  )
}

export default ArrowRight
