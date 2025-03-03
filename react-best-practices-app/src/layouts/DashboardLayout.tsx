import { Outlet } from "react-router"

const DashboardLayout = () => {
  return (
    <div>
        <div>Dashboard Header</div>
        <main>
            <Outlet />
        </main>
        <div>Dashboard Footer</div>
    </div>
  )
}

export default DashboardLayout