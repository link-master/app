import collectionReducer from '@/modules/collections/store/collection-slice.ts';
import referenceReducer from '@/store/features/referenceSlice.ts';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    reference: referenceReducer,
    collection: collectionReducer,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
