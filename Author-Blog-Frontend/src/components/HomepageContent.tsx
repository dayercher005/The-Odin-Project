import { RiseUp, FadeIn } from "@/components/AnimateScroll.tsx";
import { Button } from '@/components/ui/button.tsx';
import { ArrowDownIcon } from 'lucide-react';

export function HomepageContent(){

    return(
         <div className="">
            <RiseUp>
                <div className="flex justify-evenly py-20">
                    <div className="max-w-lg">
                        <h1 className="font-bold text-2xl text-center p-5">Focus on the <span className="text-blue-500 dark:text-pink-500">Words</span>, not the <span className="text-slate-800 dark:text-blue-500">Workflow</span>.</h1>
                        <p className="py-1.2 px-5 font-semibold">We’ve removed the hurdles between your thoughts and the screen. With our 
                            simple yet seamless interface, you don’t need to be a tech expert to look like a pro. Just open the page, 
                            start typing, and let us handle the rest</p>
                    </div>
                    <img className="size-85" src="/writing.svg"></img>
                </div>
            </RiseUp>

            <FadeIn className="text-center pb-30">
                <a href="#Authenticate">
                    <Button className="rounded-full animate-bounce">
                        <ArrowDownIcon />
                    </Button>
                </a>
            </FadeIn>

            <RiseUp>
                <div id="Authenticate" className="flex justify-evenly py-20">
                    <img className="size-85" src="/components.svg"></img>
                    <div className="max-w-lg">
                        <h1 className="font-bold text-2xl text-center p-5"><span className="text-blue-500 dark:text-pink-500">Write</span> without the <span className="text-slate-800 dark:text-blue-500">Noise</span>.</h1>
                        <p className="py-1.2 px-5 font-semibold">We’ve stripped away the clutter to bring you a seamless interface where
                             high-definition media, interactive elements, and deep-dive articles live in perfect harmony. Pure, 
                             uninterrupted content at your disposal.</p>
                    </div>
                </div>
            </RiseUp>

            <FadeIn className="text-center pt-5 pb-25">
                <a className="" href="#Global">
                    <Button className="rounded-full animate-bounce">
                        <ArrowDownIcon />
                    </Button>
                </a>
            </FadeIn>

            <FadeIn>
                <div id="Global" className="flex justify-evenly pt-15 pb-20">
                    <div className="max-w-lg">
                        <h1 className="font-extrabold text-2xl text-center p-5">Your <span className="text-blue-500 dark:text-pink-500">Voice</span>, <span className="text-slate-900 dark:text-blue-500">Amplified</span>.</h1>
                        <p className="py-2 px-5 text-md font-semibold"> Don’t just write—get discovered. PatchNote is engineered for visibility. 
                            We don’t just host your content; we push it to the readers who care about your niche, helping you build a global
                             following from your very first blog.</p>
                    </div>
                    <img className="size-85" src="/blog.svg"></img>
                </div>
            </FadeIn>
        </div>
    )
}