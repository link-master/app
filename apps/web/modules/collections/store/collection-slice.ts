import { collectionDatabaseStore } from '@/modules/collections/database';
import { RootState } from '@/store';
import { StoreCollection } from '@/store/collections.ts';
import { Collection } from '@linkmaster/types';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CollectionSliceState {
  collections: Collection.Collection[];
}

const initialState: CollectionSliceState = {
  collections: [],
};

export const removeCollection = createAsyncThunk(
  `${StoreCollection.reference}/remove`,
  async (payload: Collection.Collection['id']) => {
    await collectionDatabaseStore.remove(payload);
    return payload;
  }
);

export const updateCollection = createAsyncThunk(
  `${StoreCollection.collection}/update`,
  async (payload: Collection.Collection) => {
    await collectionDatabaseStore.update(payload);
    return payload;
  }
);

export const addCollection = createAsyncThunk(
  `${StoreCollection.reference}/add`,
  async (payload: Collection.CollectionFields) => {
    const collection: Collection.Collection = {
      id: `collection:${Date.now()}`,
      ...payload,
    };
    await collectionDatabaseStore.add(collection);
    return collection;
  }
);

const collectionSlice = createSlice({
  name: StoreCollection.collection,
  initialState,
  reducers: {
    setRawCollections: (
      state,
      action: PayloadAction<Collection.Collection[]>
    ) => {
      state.collections = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        addCollection.fulfilled,
        (state, action: PayloadAction<Collection.Collection>) => {
          state.collections.push(action.payload);
        }
      )
      .addCase(
        updateCollection.fulfilled,
        (state, action: PayloadAction<Collection.Collection>) => {
          const foundIndex = state.collections.findIndex(
            (collection) => collection.id === action.payload.id
          );
          state.collections[foundIndex] = action.payload;
        }
      )
      .addCase(
        removeCollection.fulfilled,
        (state, action: PayloadAction<Collection.Collection['id']>) => {
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
