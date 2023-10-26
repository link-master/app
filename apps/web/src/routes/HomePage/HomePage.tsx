import {Tutorial} from "@/components/Tutorial";
import {clsx} from "clsx";

export const HomePage = () => {
  const links = [];

  const classes = [];

  if (links.length) {
    //
  } else {
    classes.push('flex', 'justify-center', 'items-center');
  }

  return (
    <div className={clsx('h-screen', 'w-full', classes)}>
      {
        links.length ? <div>123</div> : <Tutorial />
      }
    </div>
  );
};
