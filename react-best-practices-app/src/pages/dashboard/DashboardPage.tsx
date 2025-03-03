// #24 ใช้ lazy() และ <Suspense> ใน React เพื่อเพิ่มประสิทธิภาพ
// lazy ต้องใช้นอก component เท่านั้น 
import { lazy, Suspense } from "react"

const DashboardChart = lazy(() => import("../../components/dashboard/DashboardChart"))

const DashboardPage = () => {
  return (
    <div>
      <h1>Dashboard Page</h1>
      <Suspense fallback={<div>กำลังโหลด Chart...</div>}>
        <DashboardChart />
      </Suspense>
    </div>
  )
}

export default DashboardPage