import { referenceDatabaseStore } from '@/database/referenceDatabaseStore.ts';
import { RootState } from '@/store';
import { StoreCollection } from '@/store/collections.ts';
import { Reference } from '@/types/reference.types.ts';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ReferenceSliceState {
  references: Reference[];
}

const initialState: ReferenceSliceState = {
  references: [],
};

export const removeReference = createAsyncThunk(
  `${StoreCollection.reference}/remove`,
  async (payload: Reference['id']) => {
    await referenceDatabaseStore.remove(payload);
    return payload;
  }
);

export const addReference = createAsyncThunk(
  `${StoreCollection.reference}/add`,
  async (payload: Reference) => {
    await referenceDatabaseStore.add(payload);
    return payload;
  }
);

const referenceSlice = createSlice({
  name: StoreCollection.reference,
  initialState,
  reducers: {
    setRawReferences: (state, action: PayloadAction<Reference[]>) => {
      state.references = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        addReference.fulfilled,
        (state, action: PayloadAction<Reference>) => {
          state.references.push(action.payload);
        }
      )
      .addCase(
        removeReference.fulfilled,
        (state, action: PayloadAction<Reference['id']>) => {
          state.references = state.references.filter(
            (reference) => reference.id !== action.payload
          );
        }
      );
  },
});

export const { setRawReferences } = referenceSlice.actions;
export const selectReferences = (state: RootState) =>
  state.reference.references;

export default referenceSlice.reducer;
