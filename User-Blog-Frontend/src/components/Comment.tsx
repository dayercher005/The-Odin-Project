interface CommentProps {
    username: string,
    date: Date,
    content: string,
}

export function Comment({
    username,
    date,
    content
}:CommentProps){

    const dateString = new Date(date);

    return (
        <div className="max-w-md mx-auto bg-neutral-300 dark:bg-neutral-700 p-5 rounded-2xl my-5">
            <div className="flex justify-between">
                <h1 className="font-semibold">{username}</h1>
                <h1 className="font-semibold">{dateString.toLocaleDateString()}</h1>
            </div>
            <p>{content}</p>
        </div>
    )
}