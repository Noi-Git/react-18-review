interface ShareStateProps {
  cartItemsCount: number //this is the only item we need to show in this file
}

const NavBar = ({ cartItemsCount }: ShareStateProps) => {
  return <div>NavBar: {cartItemsCount}</div>
}

export default NavBar
