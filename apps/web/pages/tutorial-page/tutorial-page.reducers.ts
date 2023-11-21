import { Reducer } from 'react';

type StepState = number;
type StepActionType = 'increment' | 'decrement';

export const stepReducer: Reducer<StepState, StepActionType> = (
  prevState,
  action
) => {
  switch (action) {
    case 'increment':
      return prevState + 1;
    case 'decrement':
      return prevState - 1;
    default: {
      const error = new Error(`No action ${action} in stepReducer`);
      console.error(error);
      return prevState;
    }
  }
};
