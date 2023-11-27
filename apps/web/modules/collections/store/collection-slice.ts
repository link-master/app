import { collectionDatabaseStore } from '@/modules/collections/database';
import { RootState } from '@/store';
import { StoreCollection } from '@/store/collections.ts';
import { Collection } from '@/types/collection.types.ts';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CollectionSliceState {
  collections: Collection[];
}

const initialState: CollectionSliceState = {
  collections: [],
};

export const removeReference = createAsyncThunk(
  `${StoreCollection.reference}/remove`,
  async (payload: Collection['id']) => {
    await collectionDatabaseStore.remove(payload);
    return payload;
  }
);

export const addCollection = createAsyncThunk(
  `${StoreCollection.reference}/add`,
  async (payload: Collection) => {
    await collectionDatabaseStore.add(payload);
    return payload;
  }
);

const collectionSlice = createSlice({
  name: StoreCollection.collection,
  initialState,
  reducers: {
    setRawCollections: (state, action: PayloadAction<Collection[]>) => {
      state.collections = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        addCollection.fulfilled,
        (state, action: PayloadAction<Collection>) => {
          state.collections.push(action.payload);
        }
      )
      .addCase(
        removeReference.fulfilled,
        (state, action: PayloadAction<Collection['id']>) => {
          state.collections = state.collections.filter(
            (collection) => collection.id !== action.payload
          );
        }
      );
  },
});

export const { setRawCollections } = collectionSlice.actions;
export const selectCollection = (state: RootState) =>
  state.collection.collections;

export default collectionSlice.reducer;
