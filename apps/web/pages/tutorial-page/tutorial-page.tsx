import {
  TutorialSlideAbout,
  TutorialSlideControlAbout,
  TutorialSlideControlFeatures,
  TutorialSlideControlFinal,
  TutorialSlideControlReferences,
  TutorialSlideControlRefs,
  TutorialSlideControlWelcome,
  TutorialSlideControlWorkspaces,
  TutorialSlideFeatures,
  TutorialSlideFinal,
  TutorialSlideReferences,
  TutorialSlideRefs,
  TutorialSlideWelcome,
  TutorialSlideWorkspaces,
} from '@/components/tutorial-slide';
import { SlidePair } from '@/components/tutorial-slide/tutorial-slide.types.ts';
import { stepReducer } from '@/pages/tutorial-page/tutorial-page.reducers.ts';
import calculatePercentage from '@/utils/calculate-percentage.ts';
import { Progressbar } from '@/widgets/progressbar';
import { useEffect, useReducer, useState } from 'react';

const getSlideKey = (slug: string, isControl = false) =>
  `tutorial-slide-${slug}${isControl && '-control'}`;

export const TutorialPage = () => {
  const [step, dispatchStepAction] = useReducer(stepReducer, 0);
  const [stepProgress, setStepProgress] = useState<`${number}%`>('0%');

  const nextSlide = () =>
    step + 1 < slides.length && dispatchStepAction('increment');
  const previousSlide = () => dispatchStepAction('decrement');

  const slides: SlidePair[] = [
    [
      <TutorialSlideWelcome key={getSlideKey('welcome')} />,
      <TutorialSlideControlWelcome
        onNext={nextSlide}
        key={getSlideKey('welcome', true)}
      />,
    ],
    [
      <TutorialSlideAbout key={getSlideKey('about')} />,
      <TutorialSlideControlAbout
        onNext={nextSlide}
        onPrevious={previousSlide}
        key={getSlideKey('about', true)}
      />,
    ],
    [
      <TutorialSlideFeatures key={getSlideKey('features')} />,
      <TutorialSlideControlFeatures
        onNext={nextSlide}
        onPrevious={previousSlide}
        key={getSlideKey('features', true)}
      />,
    ],
    [
      <TutorialSlideReferences key={getSlideKey('references')} />,
      <TutorialSlideControlReferences
        onNext={nextSlide}
        onPrevious={previousSlide}
        key={getSlideKey('references', true)}
      />,
    ],
    [
      <TutorialSlideRefs key={getSlideKey('refs')} />,
      <TutorialSlideControlRefs
        onNext={nextSlide}
        onPrevious={previousSlide}
        key={getSlideKey('refs', true)}
      />,
    ],
    [
      <TutorialSlideWorkspaces key={getSlideKey('workspaces')} />,
      <TutorialSlideControlWorkspaces
        onNext={nextSlide}
        onPrevious={previousSlide}
        key={getSlideKey('workspaces', true)}
      />,
    ],
    [
      <TutorialSlideFinal key={getSlideKey('final')} />,
      <TutorialSlideControlFinal
        onPrevious={previousSlide}
        key={getSlideKey('final', true)}
      />,
    ],
  ];

  useEffect(() => {
    setStepProgress(calculatePercentage(Object.keys(slides).length, step + 1));
  }, [step]);

  return (
    <div className="h-screen flex flex-col justify-center items-center p-4">
      <div className="w-full select-none max-w-[800px] border rounded-md p-8">
        {slides[step][0]}
      </div>
      <div className="fixed left-1/2 -translate-x-1/2 top-2 max-w-[800px] w-full">
        <Progressbar loading={stepProgress} />
        {slides[step][1]}
      </div>
    </div>
  );
};
