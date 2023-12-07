import { JSX } from 'react';

export interface TutorialSlideProperties {
  onNext?: () => void;
  onPrevious?: () => void;
}

export type SlidePair = [JSX.Element, JSX.Element];
