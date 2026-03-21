import { SignupForm } from "@/components/Signup-form.tsx";
import { ArrowLeftIcon } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import { Link } from 'react-router';
import { AccordionSignup } from '@/components/AccordionSignup';
import ToggleMode from '@/components/ThemeModeButton.tsx';
import { useEffect } from 'react';

export function SignupPage() {

  const API = 'https://blog-api-backend-h85d.onrender.com/author/sign-up'

  useEffect(() => {

    const renderSignupForm = async () => {
        const response = await fetch(API);

        if (!response.ok){
            throw new Error("error");
        }

        const data = await response.json();
        return data
    }

    renderSignupForm();
  }, [])


  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-between gap-2">
          <Link to="/" className="flex items-center gap-2 font-medium">
            <Button variant="outline" className="bg-primary text-primary-foreground flex size-8 items-center justify-center rounded-md">
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
        <AccordionSignup />
      </div>
    </div>
  )
}