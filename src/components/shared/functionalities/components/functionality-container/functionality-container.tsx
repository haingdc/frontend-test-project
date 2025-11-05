import clsx from 'clsx'
import './functionality-container.scss'
type FunctionalityContainerProps = {
  frame: React.ReactNode
  content: React.ReactNode
  reverseDesktop?: boolean
}

function FunctionalityContainer({ frame, content, reverseDesktop }: FunctionalityContainerProps) {
    return (
        <div className={clsx("functionality-container", { 'reverse': reverseDesktop })}>
            <div className="r1">
                <div className="r1c1">
                    {frame}
                </div>
                <div className="r1c2">
                    {content}
                </div>
            </div>
        </div>
    )
}

export default FunctionalityContainer
