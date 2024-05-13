import { useParams } from 'react-router-dom'
import ReactHtmlParser from 'react-html-parser';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/app/store';
import { fetchBlog } from '@/app/features/Blog/blogSlice';

const BlogDetails = () => {

    const { id } = useParams();
    const dispatch = useAppDispatch();
    const { blogs, isLoading } = useAppSelector(state => state.blogs)

    useEffect(() => {
        dispatch(fetchBlog(id))
    }, [id])


    return (
        <>{
            isLoading ? 'Loading...'
                : <div className='prose max-w-none'>
                    {ReactHtmlParser(blogs[0].content)}
                </div >
        }
        </>
    )
}

export default BlogDetails