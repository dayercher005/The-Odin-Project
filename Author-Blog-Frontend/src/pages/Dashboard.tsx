import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { AuthenticatedNavigationBar } from '@/components/Auth-NavigationBar.tsx';
import { UnauthenticatedNavigationBar } from '@/components/Unauth-NavigationBar.tsx';
import { BlogCards } from '@/components/BlogCards.tsx';

export function DashboardPage(){

    const navigate = useNavigate();
    
    const [status, setStatus] = useState<boolean>(false);

    useEffect(() => {

        let ignore = false;

        const API = "https://blog-api-backend-h85d.onrender.com/author/dashboard";
        const token = localStorage.getItem("token");

        const AuthenticateAuthor = async() => {

            try{
                const response = await fetch(API, {
                    method: "GET",
                    headers:{
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                })

                if(response.status === 401){
                    navigate("/error");
                }

                if (!response.ok){
                    console.log(response);
                }
                const data = await response.json();

                if (!ignore){
                    if(data){
                        setStatus(true);
                    }
                }

            } catch (error){
                return error
            }
        }

        AuthenticateAuthor();

        return () => {
            ignore = true
        }

    }, [navigate]);


    if (status){
        return (
            <div>
                <AuthenticatedNavigationBar />
                <BlogCards />
            </div>
        )
    }

    return(
        <div>
            <UnauthenticatedNavigationBar />
        </div>
    )
}