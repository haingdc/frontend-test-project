function Stepper({ children }: { children?: React.ReactNode }) {
    return (
        <div className="flex">
          <div className="flex flex-hor-between w-100">
            {children}
          </div>
        </div>
    )
}

export default Stepper
