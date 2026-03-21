import type { Request, Response, RequestHandler } from 'express';
import { body, validationResult, matchedData } from 'express-validator';
import type { ValidationChain } from 'express-validator';
import { CreatePosts } from '../../lib/queries.ts';


export function renderCreateBlogForm(req: Request, res: Response){
    res.json({
        user: req.user
    })
}

export const validatePostForm: (ValidationChain | RequestHandler)[] = [
    body("title")
    .notEmpty()
    .withMessage("Please give your blog post a title"),
    body("content")
    .notEmpty()
    .withMessage("Content of Blog cannot be empty"),
    body("duration")
    .notEmpty()
    .withMessage("Please enter a valid reading time for your post")
]


export async function sendPostForm(req: Request, res: Response){
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        res.status(404).json({
            error: "Error"
        })
    }
    
    const authorID = req.user?.id

    const { title, content, duration } = matchedData(req);
    await CreatePosts(title, content, duration, authorID);
}