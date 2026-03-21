import type { Request, Response, RequestHandler } from 'express';
import { body, validationResult, matchedData } from 'express-validator';
import type { ValidationChain } from 'express-validator';
import { CreateComments } from '../../lib/queries.ts';

export const validateCommentForm: (ValidationChain | RequestHandler)[] = [
    body("content")
    .notEmpty()
    .withMessage("Please fill in a comment if you are going to submit one")
]

export async function renderCommentForm(req: Request, res: Response){
    res.json({
        message: 'success'
    })
}

export async function sendCommentForm(req: Request, res: Response){
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        res.status(404).json({
            error: "Error"
        })
    }
    console.log(req.body);
    console.log(matchedData(req));
    const { content } = matchedData(req);
    console.log(content);
    await CreateComments(content, (req.user as any)?.id, req.params.blogID as string)
}