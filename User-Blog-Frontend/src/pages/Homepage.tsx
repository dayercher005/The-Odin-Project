import { UnauthenticatedNavigationBar } from '@/components/Unauth-Navigation-bar.tsx';
import { AuthenticatedNavigationBar } from '@/components/Auth-Navigation-bar.tsx';
import { useState, useEffect } from 'react';
import { HomepageContent } from '@/components/HomepageContent.tsx';
import { useNavigate } from 'react-router';

export function Homepage(){

    const navigate = useNavigate();

    const [status, setStatus] = useState<boolean>(false);

    const API = "https://blog-api-backend-h85d.onrender.com/user";
    const token = localStorage.getItem("token")

    useEffect(() => {

        let ignore = false;

        const ValidateUser = async () => {
            try{
                const response = await fetch(API, {
                    method: "GET", 
                    headers:{
                        Authorization: `Bearer ${token}`
                    }
                })

                if (response.status === 404){
                    navigate("/error");
                }

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

    return (
        <div>
            <UnauthenticatedNavigationBar />
            <HomepageContent />
        </div>
    )
}