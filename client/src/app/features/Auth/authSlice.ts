import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { config } from "@/common/config";


export interface Register {
    first_name: string;
    last_name: string;
    email_id: string;
    password: string;
}

export interface Login {
    email_id: string;
    password: string;
}

export interface AuthState {
    user: Register | null,
    isAuthenticated: boolean,
    isLoading: boolean,
    error: string | undefined;
}

const initialState: AuthState = {
    user: null,
    isAuthenticated: false,
    isLoading: false,
    error: undefined
}

export const signUp = createAsyncThunk('auth/register', async (data: Register) => {
    try {
        const response = await axios.post(`${config.API_URL.register}`, data);
        return response.data
    } catch (error) {
        console.error(error);
    }
})


export const signIn = createAsyncThunk('auth/login', async (data: Login) => {
    try {
        const response = await axios.post(`${config.API_URL.login}`, data);
        return response.data
    } catch (error) {
        console.error(error);
    }
})



export const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builders) => {
        builders
            .addCase(signUp.pending, (state) => {
                state.isLoading = true;
                state.error = undefined
            })
            .addCase(signUp.fulfilled, (state, action) => {
                const { data } = action.payload
                state.isLoading = false;
                if (data.token) {
                    state.user = data
                    state.isAuthenticated = true
                }
            })
            .addCase(signUp.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message

            })
            .addCase(signIn.pending, (state) => {
                state.isLoading = true;
                state.error = undefined
            })
            .addCase(signIn.fulfilled, (state, action) => {
                const { data } = action.payload
                state.isLoading = false;
                if (data.token) {
                    state.user = data
                    state.isAuthenticated = true
                }
            })
            .addCase(signIn.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message

            })

    }
})

export default AuthSlice.reducer