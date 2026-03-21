import { Link, useParams } from 'react-router';

interface CommentProps {
    username: string,
    date: Date,
    content: string,
    id: string,
}

export function Comment({
    username,
    date,
    content,
    id,
}:CommentProps){

    const dateString = new Date(date);

    const { blogID } = useParams();

    return (
        <Link to={`/dashboard/${blogID}/${id}`}>
            <div className="hover:scale-105 max-w-md mx-auto bg-neutral-300 dark:bg-neutral-700 p-5 rounded-2xl my-5 transition">
                <div className="flex justify-between">
                    <h1 className="font-semibold">{username}</h1>
                    <h1 className="font-semibold">{dateString.toLocaleDateString()}</h1>
                </div>
                <p>{content}</p>
            </div>
        </Link>
    )
}