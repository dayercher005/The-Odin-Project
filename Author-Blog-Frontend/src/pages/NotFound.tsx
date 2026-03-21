import { Button } from '@/components/ui/button.tsx';
import { Link } from 'react-router';
import ToggleMode from '@/components/ThemeModeButton.tsx';

export function NotFound(){

    return(
        <div className="text-center">
            < ToggleMode />
            <img className="size-100 mx-auto" src="/NotFound.svg" />

            <h1 className="text-4xl font-extrabold mb-10">404 Not Found</h1>

            <p className="text-xl font-semibold">You didn't break the internet, 
                 but we can't find what you're looking for.</p>
            <p className="text-xl font-semibold">Click the button below to go back Home.</p>

            <Link to="/">
                <Button size="lg" className="my-5 hover:shadow-2xl">
                    Home
                </Button>
            </Link>

        </div>
    )
}