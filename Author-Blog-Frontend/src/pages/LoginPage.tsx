import { LoginForm } from "@/components/Login-form";
import { Link } from 'react-router';
import { Button } from '@/components/ui/button.tsx';
import { ArrowLeftIcon } from 'lucide-react';
import ToggleMode from '@/components/ThemeModeButton.tsx';
import { useEffect } from 'react';

export function LoginPage() {

    const API = "https://blog-api-backend-h85d.onrender.com/author/log-in";

    useEffect(() => {

      const renderLoginForm = async () => {
          const response = await fetch(API);

          if (!response.ok){
              throw new Error("error");
          }

          const data = await response.json();
          return data
      }

      renderLoginForm();
  }, [])

  return (
    <div>
        <div className="bg-muted md:pt-5">
            <div className="flex justify-between pt-5 mx-15">
                <Link className="inline-block" to="/">
                    <Button variant="outline">
                    <ArrowLeftIcon className="size-4" />
                    </Button>
                </Link>

                <ToggleMode />
            </div>
        <div className="bg-muted flex min-h-fit flex-col items-center pb-6 md:p-10">
            <div className="w-full max-w-sm md:max-w-4xl">
                <LoginForm />
            </div>
        </div>
        </div>
    </div>
  )
}