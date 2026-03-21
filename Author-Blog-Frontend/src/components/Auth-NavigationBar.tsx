"use client"

import {
  Button
} from "@/components/ui/button";
import ToggleMode from '@/components/ThemeModeButton.tsx';
import { Link, useNavigate } from 'react-router';


export function AuthenticatedNavigationBar() {

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/");
    }

  return (
    <div className="flex justify-between items-center px-7 py-3">

        <Link to="/">
            <h1 className="text-2xl font-bold">PatchNote</h1>
        </Link>

        <div className="flex items-center">
            <ToggleMode />

            <Link to="/create-blog">
                <Button size="lg" className="bg-neutral-700 m-1.5 p-3 text-md hover:bg-neutral-800 transition">
                    Create Blog
                </Button>
            </Link>

            <Link to="/dashboard">
                <Button size="lg" className="bg-neutral-700 m-1.5 p-3 text-md hover:bg-neutral-800 transition">
                    Dashboard
                </Button>
            </Link>

            <Button onClick={handleLogout} size="lg" className="m-1.5 p-3 text-md hover:bg-gray-200 transition" variant="outline">
                Log Out
            </Button>
            
        </div>
    </div>
  )
}