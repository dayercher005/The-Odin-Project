import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock3 } from "lucide-react";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from 'react-router';

interface BlogCardProps{
    id: string,
    title: string,
    date: Date,
    author: string,
    duration: string,
    published: boolean
}

export function BlogCard({
    id,
    title,
    date,
    author,
    duration,
    published
}: BlogCardProps){

    const dateString:Date = new Date(date);

    const publishedState:string = (published===true) ? "Published" : "Not Published"

    return (
    <Card className="bg-neutral-300 dark:bg-neutral-700 relative mx-auto w-full max-w-sm px-1 pt-0.5">
      
      <img src="/code.jpg"
        className="relative z-20 aspect-video w-full object-cover p-1.5 rounded-xl"
      />
      <CardHeader>
        <CardAction className="flex flex-col gap-1.5 items-center">
            <Badge variant="secondary" className="bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300">
                <Clock3 className="size-3.3!" />
                {duration} min read
            </Badge>
            <Badge variant="secondary" className="bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300">
                {publishedState}
            </Badge>
        </CardAction>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          Date Published: {dateString.toLocaleDateString()}
        </CardDescription>
        <CardDescription>
          Published by: {author}
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Link to={`/dashboard/${id}`} className="w-full">
            <Button className="w-full ">View</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}