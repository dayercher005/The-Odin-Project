import { FieldLabel, Field, FieldDescription } from '@/components/ui/field.tsx';
import { Textarea } from '@/components/ui/textarea.tsx';
import { Button } from '@/components/ui/button.tsx';
import { useState } from 'react';
import { useNavigate } from 'react-router';

interface CommentFormProps{
    blogID: string | undefined
}

export function CommentForm({
    blogID
}: CommentFormProps){

    const navigate = useNavigate();

    const [comment, setComment] = useState<string>('');

    const API = `https://blog-api-backend-h85d.onrender.com/user/${blogID}/comment`;
    const token = localStorage.getItem("token");

    async function sendComment(event: React.FormEvent<HTMLFormElement>): Promise<void> {
        event.preventDefault();
        try{
            const response = await fetch(API,{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({ content: comment })
            })

            if(!response.ok){
                throw new Error("Error")
            }

            navigate("/dashboard")
            
        } catch(error){
            console.error(error);
        }
    }


    return(

        <div className="mx-auto max-w-md">
            <form onSubmit={sendComment} action={`https://blog-api-backend-h85d.onrender.com/user/${blogID}/comment`} method="POST">
                <Field>
                    <FieldLabel htmlFor="content">Comment</FieldLabel>
                    <FieldDescription>Add your comment here</FieldDescription>
                    <Textarea
                    id="content"
                    className="mb-2.5"
                    onChange={(event) => setComment(event.target.value)}
                    value={comment}
                    required
                    />
                </Field>
                <Field className="pb-2">
                    <Button type="submit">Comment</Button>
                </Field>
            </form>
        </div>
    )
}