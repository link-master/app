import { Navigation } from '@/components/navigation';
import { routes } from '@/data/navigation.tsx';
import { useDataInitializer } from '@/hooks/use-data-initializer.ts';
import useLocalStorage, { LocalStorageKey } from '@/hooks/use-local-storage.ts';
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

export const DefaultLayout = () => {
  const [tutorialShowed, setTutorialShowed] = useLocalStorage(
    LocalStorageKey.tutorial
  );

  const navigate = useNavigate();

  useEffect(() => {
    if (!tutorialShowed) {
      navigate(routes.tutorial.path);
      setTutorialShowed(true);
    }
  }, [tutorialShowed, navigate, setTutorialShowed]);

  const init = useDataInitializer();

  useEffect(() => {
    // Fix #1
    init();
  }, [init]);

  return (
    <div className="min-h-screen flex">
      <Navigation />
      <Outlet />
    </div>
  );
};
