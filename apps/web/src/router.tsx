import {routes} from "@/data/navigation.data.tsx";
import {DefaultLayout} from "@/layout";
import {createBrowserRouter} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      ...Object.values(routes),
    ],
  },
]);

export default router;
