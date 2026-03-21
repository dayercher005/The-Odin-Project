import { SpinnerEmpty } from '@/components/SpinnerRequest.tsx';
import ToggleMode from '@/components/ThemeModeButton.tsx';
import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router';
import { Button } from '@/components/ui/button.tsx';
import { ArrowLeftIcon } from 'lucide-react';
import { Blog } from '@/components/Blog.tsx';

export function BlogViewer(){

    interface IndividualBlogDetailsProps{
        title: string,
        duration: number,
        content: string,
        author: string,
        date: Date,

    }

    interface BlogCommentProps{
        content: string,
        username: string,
        date: Date,
        id: string
    }


    const { blogID } = useParams();

    const navigate = useNavigate();

    const [loading, setLoading] = useState<boolean>(true);
    const [individualBlogDetails, setIndividualBlogDetails] = useState<IndividualBlogDetailsProps[]>([]);
    const [blogComments, setBlogComments] = useState<BlogCommentProps[]>([]);

    const API= `https://blog-api-backend-h85d.onrender.com/author/dashboard/${blogID}`;
    const token = localStorage.getItem("token");

    useEffect(() => {

        let ignore = false;

        async function fetchIndividualBlogDetails(){
            try{
                const response = await fetch(API, {
                    method: "GET",
                    headers: {
                        "Content-type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                });
                
                if (response.status === 401){
                    navigate("/")
                }

                const data = await response.json();

                const individualBlogData = data.post
                const blogComments = data.comments.comments


                setIndividualBlogDetails(array => [...array, 
                    {title: individualBlogData.title,
                     duration: individualBlogData.duration, 
                     content: individualBlogData.content, 
                     author: individualBlogData.authorUsername,
                     date: individualBlogData.date}])

                for(let index = 0; index < blogComments.length; index++){

                    const commentContent = blogComments[index].content;
                    const commentDate = blogComments[index].date;
                    const commentUsername = blogComments[index].userUsername;
                    const commentID = blogComments[index].id;

                    if (!ignore){
                        setBlogComments(array => [...array,
                            {content: commentContent,
                            date: commentDate,
                            username: commentUsername,
                            id: commentID
                            }])
                    }
                }

            } catch (error){
                return error
            } finally {
                setLoading(false);
            }
        }

        fetchIndividualBlogDetails();

        return () => {
            ignore = true
        }
    }, [API, token, navigate])



    if (loading){
        return (
            <SpinnerEmpty />
        )
    }

    return (
        <div>
            <div className="pt-10 mx-20 flex justify-between">
                <Link className="inline-block" to="/dashboard">
                    <Button variant="outline">
                    <ArrowLeftIcon className="size-4" />
                    </Button>
                </Link>

                <ToggleMode />
            </div>
            <Blog
                title={individualBlogDetails[0].title}
                duration={individualBlogDetails[0].duration}
                content={individualBlogDetails[0].content}
                author={individualBlogDetails[0].author}
                date={individualBlogDetails[0].date}
                comments={blogComments}
            />
        </div>
    )
}