import React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import moment from 'moment';
import ReactHtmlParser from 'react-html-parser';
import { Link } from 'react-router-dom';

interface blogProps { id: number; title: string; tags: string[]; created_date: string; content: string; full_name: string }

const Index: React.FC<blogProps> = ({ id, title, tags, created_date, content, full_name }) => {
    return (
        <Link to={`/blog/${id}`}>
            <Card >
                <CardHeader className='py-3'>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className='pt-1'>
                        <div className='capitalize text-gray-600 mb-2'>{full_name}</div>
                        <div className='text-gray-600 mb-2'>Published on  - {moment(created_date).fromNow()}</div>
                    </CardDescription>
                </CardHeader>
                <CardContent className='pb-3'>
                    <div className='three-line-clamp'>
                        {ReactHtmlParser(content)}
                    </div>
                    <div className='flex justify-start items-center mt-2'>
                        {
                            tags.map((tag: string) => {
                                return (
                                    <span className='mr-2' key={`${id}-${tag}`}>#{tag}</span>
                                )
                            })
                        }
                    </div>
                </CardContent>
            </Card>
        </Link>
    )
}

export default Index