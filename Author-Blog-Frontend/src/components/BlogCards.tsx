import { useState, useEffect } from 'react';
import { BlogCard } from './BlogCard.tsx';
import { SpinnerEmpty } from '@/components/SpinnerRequest.tsx';
import { RiseUp } from '@/components/AnimateScroll.tsx';
interface BlogPost {
    title: string;
    id: string
    date: Date;
    author: string;
    duration: string;
    published: boolean;
}

export function BlogCards(){

    const [blogArray, setBlogArray] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const API = "https://blog-api-backend-h85d.onrender.com/author/dashboard";
    const token = localStorage.getItem("token");

    useEffect(() => {

        let ignore: boolean = false

        const fetchBlogDetails = async () => {
            try{
                const response = await fetch(API, {
                    method: "GET",
                    headers:{
                        "Content-type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                });

                if (!response.ok){
                    throw new Error()
                }

                const blogData = await response.json();

                for(let index = 0; index < blogData.posts.length; index++){
                    const blogID = blogData.posts[index].id
                    const blogTitle = blogData.posts[index].title
                    const blogDate = blogData.posts[index].date;
                    const blogAuthor = blogData.posts[index].authorUsername;
                    const blogDuration = blogData.posts[index].duration;
                    const blogPublished = blogData.posts[index].published

                    if (!ignore){
                        setBlogArray(array => [...array, 
                            {title: blogTitle,
                             id: blogID,
                             date: blogDate, 
                             author: blogAuthor, 
                             duration: blogDuration,
                             published: blogPublished}])
                    }
                }


            } catch(error){
                return error
            } finally{
                setLoading(false);
            }
        }

        fetchBlogDetails();

        return () => {
            ignore = true
        }

    }, [token])

    if(loading){
        return (
            <SpinnerEmpty />
        )
    }

    return(
        <div className="grid grid-cols-3 p-10 m-4 gap-12">
            {blogArray.map((blog, index) => (
                <RiseUp delay={ ((index + 3) % 3) * 120 }>
                    <BlogCard
                        key={index}
                        id={blog.id}
                        title={blog.title}
                        date={blog.date}
                        duration={blog.duration}
                        author={blog.author}
                        published={blog.published}
                    />
                </RiseUp>
            ))}
        </div>
    )
}