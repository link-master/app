import { collectionDatabaseStore } from '@/modules/collections/database';
import { RootState } from '@/store';
import { StoreCollection } from '@/store/collections.ts';
import { CollectionType } from '@linkmaster/types';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CollectionSliceState {
  collections: CollectionType.Collection[];
}

const initialState: CollectionSliceState = {
  collections: [],
};

export const removeCollection = createAsyncThunk(
  `${StoreCollection.reference}/remove`,
  async (payload: CollectionType.Collection['id']) => {
    await collectionDatabaseStore.remove(payload);
    return payload;
  }
);

export const updateCollection = createAsyncThunk(
  `${StoreCollection.collection}/update`,
  async (payload: CollectionType.Collection) => {
    await collectionDatabaseStore.update(payload);
    return payload;
  }
);

export const addCollection = createAsyncThunk(
  `${StoreCollection.reference}/add`,
  async (payload: CollectionType.CollectionFields) => {
    const collection: CollectionType.Collection = {
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
      action: PayloadAction<CollectionType.Collection[]>
    ) => {
      state.collections = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        addCollection.fulfilled,
        (state, action: PayloadAction<CollectionType.Collection>) => {
          state.collections.push(action.payload);
        }
      )
      .addCase(
        updateCollection.fulfilled,
        (state, action: PayloadAction<CollectionType.Collection>) => {
          const foundIndex = state.collections.findIndex(
            (collection) => collection.id === action.payload.id
          );
          state.collections[foundIndex] = action.payload;
        }
      )
      .addCase(
        removeCollection.fulfilled,
        (state, action: PayloadAction<CollectionType.Collection['id']>) => {
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
