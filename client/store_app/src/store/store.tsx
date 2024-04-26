import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { ReactElement, ReactPortal } from 'react';
import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';


const store = configureStore({
    reducer: {}
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

type ReactText = string | number;
type ReactChild = ReactElement | ReactText;

interface ReactNodeArray extends Array<ReactNode> { }
type ReactFragment = {} | ReactNodeArray;
type ReactNode = ReactChild | ReactFragment | ReactPortal | boolean | null | undefined;

type Props = {
    children: React.ReactNode
}

export const StoreProvider: React.FC<Props> = ({ children }) => {
    return <Provider store={store}> {children} </Provider>;
}