"use client"

import {
  Button
} from "@/components/ui/button";
import ToggleMode from '@/components/ThemeModeButton.tsx';
import { Link } from 'react-router';


export function UnauthenticatedNavigationBar() {
  return (
    <div className="flex justify-between items-center px-7 py-3">

        <Link to="/">
            <h1 className="text-2xl font-bold">PatchNote</h1>
        </Link>

        <div className="flex items-center">
            <ToggleMode />
            <Link to="/log-in">
                <Button size="lg" className="bg-neutral-700 m-1.5 p-3 text-md hover:bg-neutral-800 transition">
                    Log In
                </Button>
            </Link>
            <Link to="/sign-up">
                <Button size="lg" className="m-1.5 p-3 text-md hover:bg-gray-200 transition" variant="outline">
                    Sign Up
                </Button>
            </Link>
        </div>
    </div>
  )
}