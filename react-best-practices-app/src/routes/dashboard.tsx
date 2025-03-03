// #21 จัดโครงสร้าง React Router ให้อ่านและบำรุงรักษาง่าย
import { RouteObject } from "react-router";
import DashboardPage from "../pages/dashboard/DashboardPage";

const dashboardRoutes: RouteObject[] = [
    {
        path: '/dashboard',
        // element: <DashboardLayout />, // dasboard layout
        lazy: async () => {
            const DashboardLayout = await import("../layouts/DashboardLayout");
            return { Component: DashboardLayout.default }
        },
        children: [
            { path: "", element: <DashboardPage /> },
        ]
    }
]

export default dashboardRoutes;