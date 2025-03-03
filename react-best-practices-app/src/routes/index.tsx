import { createBrowserRouter } from "react-router";
import homeRoutes from "./home";
import dashboardRoutes from "./dashboard";

// #21 จัดโครงสร้าง React Router ให้อ่านและบำรุงรักษาง่าย
const router = createBrowserRouter([
    ...homeRoutes,
    ...dashboardRoutes,
]);

export default router;