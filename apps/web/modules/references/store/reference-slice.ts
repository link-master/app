import { referenceDatabaseStore } from '@/modules/references/database';
import { RootState } from '@/store';
import { StoreCollection } from '@/store/collections.ts';
import { ReferenceType } from '@linkmaster/types';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ReferenceSliceState {
  references: ReferenceType.Reference[];
}

const initialState: ReferenceSliceState = {
  references: [],
};

export const removeReference = createAsyncThunk(
  `${StoreCollection.reference}/remove`,
  async (payload: ReferenceType.Reference['id']) => {
    await referenceDatabaseStore.remove(payload);
    return payload;
  }
);

export const updateReference = createAsyncThunk(
  `${StoreCollection.reference}/update`,
  async (payload: ReferenceType.Reference) => {
    await referenceDatabaseStore.update(payload);
    return payload;
  }
);

export const addReference = createAsyncThunk(
  `${StoreCollection.reference}/add`,
  async (payload: ReferenceType.ReferenceFields) => {
    const reference: ReferenceType.Reference = {
      id: `reference:${Date.now().toString()}`,
      ...payload,
    };

    await referenceDatabaseStore.add(reference);
    return reference;
  }
);

const referenceSlice = createSlice({
  name: StoreCollection.reference,
  initialState,
  reducers: {
    setRawReferences: (
      state,
      action: PayloadAction<ReferenceType.Reference[]>
    ) => {
      state.references = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        addReference.fulfilled,
        (state, action: PayloadAction<ReferenceType.Reference>) => {
          state.references.push(action.payload);
        }
      )
      .addCase(
        updateReference.fulfilled,
        (state, action: PayloadAction<ReferenceType.Reference>) => {
          const foundIndex = state.references.findIndex(
            (reference) => reference.id === action.payload.id
          );
          state.references[foundIndex] = action.payload;
        }
      )
      .addCase(
        removeReference.fulfilled,
        (state, action: PayloadAction<ReferenceType.Reference['id']>) => {
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
