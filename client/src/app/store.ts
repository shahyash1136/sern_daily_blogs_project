import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux'
import authSlice from '@/app/features/Auth/authSlice';
import blogSlice from './features/Blog/blogSlice';

export const store = configureStore({
    reducer: {
        auth: authSlice,
        blogs: blogSlice
    }
});

//Infer the 'RootState' and 'AppDispatch' types from the store itself
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()