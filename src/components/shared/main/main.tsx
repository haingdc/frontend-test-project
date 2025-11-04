import './main.scss'
type MainProps = React.ComponentProps<'div'> & {
  id: string
}
function Main({ id,...props }: MainProps) {
  return <main id={id} className="main" {...props}></main>
}

export default Main