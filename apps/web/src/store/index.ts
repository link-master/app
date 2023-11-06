import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import referenceSlice from "./features/reference/referenceSlice.ts";
import collectionSlice from "@/store/features/collection/collectionSlice.ts";
import {configureStore} from '@reduxjs/toolkit'

const store = configureStore({
  reducer: {
    reference: referenceSlice,
    collection: collectionSlice,
  }
})

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
