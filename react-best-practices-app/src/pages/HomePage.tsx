import { NavLink } from "react-router"
import AppHeader from "../components/AppHeader"

const HomePage = () => {
  return (
    <div>
      <AppHeader fullname="John" age={30} />
      <AppHeader fullname="Bob" />
      <hr />
      <h3>HomePage</h3>
      <p>
        <NavLink to="/about">About us</NavLink>
      </p>
      <p>
        <NavLink to="/product">Product</NavLink>
      </p>
    </div>
  )
}

export default HomePage