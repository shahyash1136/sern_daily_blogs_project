import { useEffect } from 'react';
import { Blog, fetchBlogs } from '@/app/features/Blog/blogSlice';
import { useAppDispatch, useAppSelector } from '@/app/store'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import moment from 'moment';
import ReactHtmlParser from 'react-html-parser';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

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
                            <Link key={blog.id} to={`/blog/${blog.id}`}>
                                <Card >
                                    <CardHeader>
                                        <CardTitle>{blog.title}</CardTitle>
                                        <CardDescription>{moment(blog.updated_date).fromNow()}</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className='three-line-clamp'>
                                            {ReactHtmlParser(blog.content)}
                                        </div>
                                        <div className='flex justify-start items-center mt-4'>
                                            {
                                                blog.tags.map((tag: string) => {
                                                    return (
                                                        <Badge className='mr-2 p-2' key={`${blog.id}-${tag}`}>{tag}</Badge>
                                                    )
                                                })
                                            }
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        )
                    })
            }
        </>
    )
}

export default Blogs