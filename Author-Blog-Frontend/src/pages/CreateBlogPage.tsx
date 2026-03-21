import { CreateBlogForm } from '../components/CreateBlog-form.tsx';
import { Link } from 'react-router';
import { Button } from '@/components/ui/button.tsx';
import { ArrowLeftIcon } from "lucide-react";
import ToggleMode from '@/components/ThemeModeButton.tsx';

export function CreateBlogPage(){

    return(
        <div>
            <div className="bg-background flex min-h-svh flex-col gap-5 pt-6 md:pl-8">

            <div className="pt-5 mx-20 flex justify-between">
              <Link className="inline-block" to="/">
                <Button>
                  <ArrowLeftIcon className="size-4" />
                </Button>
              </Link>
              <ToggleMode />
            </div>

            <div className="bg-background flex min-h-fit flex-col justify-center items-center p-6 md:p-8">
              <div className="w-full max-w-3xl">
                <CreateBlogForm />
              </div>
            </div>
          </div>

        </div>
    )
}