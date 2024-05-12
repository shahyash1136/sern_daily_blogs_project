import { useEffect } from 'react';
import { Blog, fetchBlogs } from '@/app/features/Blog/blogSlice';
import { useAppDispatch, useAppSelector } from '@/app/store';
import Card from './Card'


const Blogs = () => {
    const dispatch = useAppDispatch();
    const { isLoading, blogs } = useAppSelector(state => state.blogs)
    useEffect(() => {
        dispatch(fetchBlogs())
    }, [])



    return (
        <>
            <div className='my-5'>
                <h2 className='text-2xl'>Blogs</h2>
            </div>
            {
                isLoading ? "loaing..." :
                    blogs.map((blog: Blog) => {
                        return (
                            <Card
                                key={blog.id}
                                id={blog.id}
                                title={blog.title}
                                tags={blog.tags}
                                created_date={blog.created_date}
                                content={blog.content}
                                full_name={`${blog.user_firstName} ${blog.user_lastName}`}
                            />
                        )
                    })
            }
        </>
    )
}

export default Blogs