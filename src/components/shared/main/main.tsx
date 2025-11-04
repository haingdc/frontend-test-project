type MainProps = React.ComponentProps<'div'> & {
  id: string
}
function Main({ id,...props }: MainProps) {
  return <div id={id} {...props}></div>
}

export default Main