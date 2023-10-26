import {Navigation} from "@/components/Navigation";
import {clsx} from "clsx";
import {Outlet} from "react-router-dom";

export const DefaultLayout = () => {
  return (
    <div className={clsx('flex')}>
      <Navigation />
      <Outlet />
    </div>
  );
};
