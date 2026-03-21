import { UnauthenticatedNavigationBar } from '@/components/Unauth-Navigation-bar';
import { AuthenticatedNavigationBar } from '@/components/Auth-Navigation-bar';
import { DashboardDescription } from '@/components/DashboardDescription';
import { BlogCards } from '@/components/BlogCards.tsx';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

export default function Dashboard() {

  const [status, setStatus] = useState<boolean>(false);
  const navigate = useNavigate();

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

                if (!ignore){

                  if(response.status === 404 || response.status === 401){
                    navigate("/error");
                  }

                  const verification = await response.json();

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

    if (status) return(
      <div className="">
        <AuthenticatedNavigationBar />
        <DashboardDescription />
        <BlogCards />
    </div>
    )

  return (
    <div className="">
      <UnauthenticatedNavigationBar />
      <DashboardDescription />
      <BlogCards />
    </div>
  )
}


