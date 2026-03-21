import { Button } from "@/components/ui/button.tsx";
import { Sun, Moon } from "lucide-react";
import { useTheme } from '@/components/Theme-Provider.tsx';

export default function ToggleMode(){

    const { setTheme } = useTheme();

    if (localStorage.getItem("vite-ui-theme") === "light") return (
        <Button onClick={() => setTheme("dark")} size="lg" className="m-1.5 p-3 text-md hover:bg-gray-200 transition" variant="outline">
            <Moon />
        </Button>
    )

    return (
        <Button onClick={() => setTheme("light")} size="lg" className="m-1.5 p-3 text-md hover:bg-gray-200 transition" variant="outline">
            <Sun />
        </Button>
    )
    
}