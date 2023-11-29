import useResizer from '@/hooks/use-resizer.ts';
import { ContainerProps } from '@/types/utils.types.ts';
import { clsx } from 'clsx';
// import { useSelector } from 'react-redux';

interface SidebarProperties {
  resizeable?: boolean;
}

export const Sidebar = ({
  children,
  className,
  resizeable,
}: ContainerProps<SidebarProperties>) => {
  const { resizerRef, containerRef } = useResizer();

  return (
    <aside
      ref={containerRef}
      className={clsx(
        'min-h-screen',
        'w-[400px]',
        'bg-white',
        'flex',
        'border-r',
        'shrink-0',
        className
      )}
    >
      <div className="flex grow flex-col">{children}</div>
      {resizeable && (
        <div
          ref={resizerRef}
          className="h-screen pl-2 border-r-1 border-gray-200 cursor-ew-resize active:cursor-grabbing"
        />
      )}
    </aside>
  );
};
