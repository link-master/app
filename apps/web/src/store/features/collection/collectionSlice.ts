import {type Collection} from "@/types/collection.types.ts";
import { createSlice } from '@reduxjs/toolkit'

interface CollectionSliceState {
  value: Collection[];
}

const initialState: CollectionSliceState = {
  value: [],
};

export const collectionSlice = createSlice({
  name: 'collection',
  initialState,
  reducers: {
    add: (state, {payload}: {payload: Collection})=> {
      state.value.push(payload);
    },

    remove: (state, {payload}: {payload: Collection['id']})=> {
      state.value = state.value.filter(reference => reference.id !== payload);
    },
  }
})

export const { add, remove } = collectionSlice.actions

export default collectionSlice.reducer
