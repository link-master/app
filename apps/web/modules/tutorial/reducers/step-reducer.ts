import { Reducer } from 'react';

type StepState = number;
type StepActionType = 'increment' | 'decrement';

export const stepReducer: Reducer<StepState, StepActionType> = (
  previousState,
  action
) => {
  switch (action) {
    case 'increment': {
      return previousState + 1;
    }
    case 'decrement': {
      return previousState - 1;
    }
    default: {
      const error = new Error(`No action ${action} in stepReducer`);
      console.error(error);
      return previousState;
    }
  }
};
