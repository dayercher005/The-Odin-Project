import { Comment } from '@/components/Comment.tsx';
import { Badge } from "@/components/ui/badge";
import { Clock3, BookOpen } from "lucide-react";
import ReactHtmlParser from 'html-react-parser';

type Comment = {
    id: string,
    username: string,
    date: Date,
    content: string,
}

interface IndividualBlogProps{
    title: string,
    duration: number,
    content: string,
    author: string,
    date: Date,
    comments: Array<Comment>,
}

export function Blog({
    title,
    duration,
    content,
    author,
    date,
    comments,
}:IndividualBlogProps){

    const dateString = new Date(date);
    const renderedContent = ReactHtmlParser(content);

    return (
        <div>
            <div>
                <h1 className="text-4xl font-bold text-center pt-10 pb-5">{title}</h1>
                <h3 className="text-lg font-semibold text-center mx-15 mt-2 mb-4">Written by: {author}</h3>
                <div className="flex justify-between mx-30 my-5">
                    <Badge className="text-md bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300" variant="secondary">
                        <Clock3 className="size-5!" />
                        {duration} min Read
                    </Badge>
                    <Badge className="text-md bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300" variant="secondary">
                        <BookOpen className="size-5!" />
                        Published on {dateString.toLocaleDateString()}
                    </Badge>
                </div>
                <div className="mx-auto my-10 w-6/10">
                    {renderedContent}
                </div>
            </div>

            <div>
                <span className="text-2xl font-semibold underline ml-35">Comments Section</span>
                {comments.map((comment) => (
                    <Comment 
                        key={comment.id}
                        username={comment.username}
                        date={comment.date}
                        content={comment.content}
                        id={comment.id}
                    />
                ))}
            </div>
        </div>
    )
}