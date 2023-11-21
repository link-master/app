import { Navigation } from '@/components/navigation';
import { routes } from '@/data/navigation.tsx';
import useLocalStorage, { LocalStorageKey } from '@/hooks/useLocalStorage.ts';
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

export const DefaultLayout = () => {
  const [tutorialShowed, setTutorialShowed] = useLocalStorage(
    LocalStorageKey.tutorial
  );

  const navigate = useNavigate();

  useEffect(() => {
    console.log({ tutorialShowed });
    if (!tutorialShowed) {
      navigate(routes.tutorial.path);
      setTutorialShowed(true);
    }
  }, [tutorialShowed]);
  return (
    <div className="min-h-screen flex">
      <Navigation />
      <Outlet />
    </div>
  );
};
