import {Reference} from "@/types/reference.types.ts";
import { createSlice } from '@reduxjs/toolkit'

interface ReferenceSliceState {
  value: Reference[];
}

const initialState: ReferenceSliceState = {
  value: [],
};

export const referenceSlice = createSlice({
  name: 'reference',
  initialState,
  reducers: {
    add: (state, {payload}: {payload: Reference})=> {
      state.value.push(payload);
    },

    remove: (state, {payload}: {payload: Reference['id']})=> {
      state.value = state.value.filter(reference => reference.id !== payload);
    },
  }
})

export const { add, remove } = referenceSlice.actions

export default referenceSlice.reducer
