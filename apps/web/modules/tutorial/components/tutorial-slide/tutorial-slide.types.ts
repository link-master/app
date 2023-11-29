import { JSX } from 'react';

export interface TutorialSlideProps {
  onNext?: () => void;
  onPrevious?: () => void;
}

export type SlidePair = [JSX.Element, JSX.Element];
