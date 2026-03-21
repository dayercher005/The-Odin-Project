import { UnauthenticatedNavigationBar } from '../components/Unauth-NavigationBar.tsx';
import { AuthenticatedNavigationBar } from '../components/Auth-NavigationBar.tsx';
import { useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import { HomepageContent } from '@/components/HomepageContent.tsx';
 
export function HomePage(){

    const navigate = useNavigate();

    const [status, setStatus] = useState<boolean>(false);

    const API = "https://blog-api-backend-h85d.onrender.com/author";
    const token = localStorage.getItem("token")

    useEffect(() => {

        let ignore = false;

        const ValidateUser = async () => {
            try{
                const response = await fetch(API, {
                    method: "GET", 
                    headers:{
                        'Content-type': 'application/json',
                        Authorization: `Bearer ${token}`
                    }
                })

                const verification = await response.json();

                if (!ignore){
                    if (verification){
                        setStatus(true);
                    }
                }

            } catch(error){
                return error
            }
        }

        ValidateUser();

        return () => {
            ignore = true
        }
        
    }, [token, navigate]);

    if (status) return (
        <div>
            <AuthenticatedNavigationBar />
            <HomepageContent />
        </div>
    )

    return(
        <div>
            <UnauthenticatedNavigationBar />
            <HomepageContent />
        </div>
    )
}