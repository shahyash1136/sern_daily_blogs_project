import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { config } from "@/common/config";
import axios from "axios";


export interface Blog {
    id: number;
    user_firstName: string;
    user_lastName: string;
    title: string;
    content: string;
    created_date: string;
    updated_date: string;
    tags: string[]
}

export interface BlogState {
    isLoading: boolean;
    blogs: Blog[] | [];
    error: string | undefined
}

const initialState: BlogState = {
    isLoading: false,
    blogs: [],
    error: undefined
}

export const fetchBlogs = createAsyncThunk('blog/allblogs', async () => {
    try {
        const response = await axios.get(`${config.API_URL.allBlogs}`);
        return response.data
    } catch (error) {
        console.log(error)
    }
})

export const fetchBlog = createAsyncThunk('blog/singleBlog', async (id: string) => {
    try {
        const response = await axios.get(`${config.API_URL.blog.replace('{{blog_id}}', id)}`);
        return response.data
    } catch (error) {
        console.log(error)
    }
})


export const blogs = createSlice({
    name: 'blog',
    initialState,
    reducers: {},
    extraReducers: (builders) => {
        builders
            .addCase(fetchBlogs.pending, (state) => {
                state.isLoading = true;
                state.error = undefined
            })
            .addCase(fetchBlogs.fulfilled, (state, action) => {
                state.isLoading = false;
                state.blogs = action.payload.data
            })
            .addCase(fetchBlogs.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message
            })
            .addCase(fetchBlog.pending, (state) => {
                state.isLoading = true;
                state.error = undefined
            })
            .addCase(fetchBlog.fulfilled, (state, action) => {
                state.isLoading = false;
                state.blogs = action.payload.data
            })
            .addCase(fetchBlog.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message
            })
    }
})

export default blogs.reducer