import { SignupForm } from '@/components/signup-form.tsx';
import { AccordionQueries } from "@/components/AccordionQueries.tsx";
import { ArrowLeftIcon } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import ToggleMode from '@/components/ToggleModeButton.tsx';
import { Link } from 'react-router';
import { useEffect } from 'react'

export default function SignupPage() {

  const API = "https://blog-api-backend-h85d.onrender.com/user/sign-up";

  useEffect(() => {

    const renderLoginForm = async () => {
      const response = await fetch(API, {
        method: "GET",
        headers:{
          "Content-type": "application/json"
        }
      });

      if (!response.ok){
        throw new Error("error");
      }
      const data = await response.json();
      return data
    }

    renderLoginForm()

  }, []);

  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex gap-2 justify-between">
          <Link to="/" className="flex items-center gap-2 font-medium">
            <Button variant="outline" className="flex size-8 items-center justify-center rounded-md">
              <ArrowLeftIcon className="size-4" />
            </Button>
          </Link>
          <ToggleMode />
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <SignupForm />
          </div>
        </div>
      </div>
      <div className="bg-muted flex justify-center items-center">
        <AccordionQueries />
      </div>
    </div>
  )
}