import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldGroup,
  FieldLabel
} from "@/components/ui/field"
import { Input } from "@/components/ui/input";
import { useNavigate } from 'react-router';
import { useState, useRef, useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';

export function CreateBlogForm({
  className,
  ...props
}: React.ComponentProps<"div">) {

  const navigate = useNavigate();

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('');
  const [duration, setDuration] = useState('');


  useEffect(() => {

    const API = "https://blog-api-backend-h85d.onrender.com/author/create-blog";
    const token = localStorage.getItem("token")

    const validateAuthor = async () => {
        
        const response = await fetch(API, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        });

        if (!response.ok){
          navigate("/error");
        }

        const data = await response.json();
        console.log(data);
    }

    validateAuthor();

  }, [navigate])

  const submitBlogForm = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();

    const API = "https://blog-api-backend-h85d.onrender.com/author/create-blog";
    const token = localStorage.getItem("token")

    try{
        const response = await fetch(API, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({title: title, content: content, duration: duration})
        });

        const result = response.json();
        navigate("/dashboard")
        return result
    } catch (error) {
        console.log(error);
    }
  }

  const API_Key = import.meta.env.VITE_TinyMCE_API_KEY
  const editorRef = useRef(null);

  return (

    <div className={cn("flex flex-col gap-6", className)} {...props}>
      
      <form onSubmit={submitBlogForm} action="https://blog-api-backend-h85d.onrender.com/user/create-blog" method="POST">
        <FieldGroup>
          <div className="flex flex-col items-center gap-2 text-center">
            <h1 className="text-3xl font-bold">Create a New Blog!</h1>
          </div>
          <Field>
            <FieldLabel htmlFor="username">Title</FieldLabel>
            <Input
              id="title"
              type="text"
              placeholder=""
              onChange={(event) => setTitle(event.target.value)}
              value={title}
              required
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="content">Blog Content</FieldLabel>
            <Editor
                apiKey={API_Key}
                onInit={ (_evt: string, editor) => editorRef.current = editor }
                initialValue="<p>This is the initial content of the editor.</p>"
                textareaName="content"
                id="textarea"
                value={content}
                onEditorChange={(content) => setContent(content)}
                init={{
                content_css: '../styles/index.css',
                hidden_input: false,
                height: 500,
                menubar: false,
                plugins: [
                    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap',
                    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                    'insertdatetime', 'media', 'table', 'preview', 'help', 'wordcount',
                ],
                toolbar: 'undo redo | blocks | ' +
                    'bold italic forecolor | alignleft aligncenter ' +
                    'alignright alignjustify | bullist numlist outdent indent | ' +
                    'removeformat | help',
                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                }}
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="password">Estimated Read Time (in minutes)</FieldLabel>
            <Input
              id="duration"
              type="text"
              onChange={(event) => setDuration(event.target.value)}
              value={duration}
              required
            />
          </Field>
          <Field>
            <Button type="submit">Create Blog</Button>
          </Field>
        </FieldGroup>
      </form>
    </div>
  )
}