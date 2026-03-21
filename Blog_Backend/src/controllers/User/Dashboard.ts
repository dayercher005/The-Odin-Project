import type { Request, Response } from 'express';
import { ReadPosts, ReadIndividualPost, ReadComments } from '../../lib/queries.ts';

export async function renderDashboard(req: Request, res: Response){
    const allPosts = await ReadPosts();
    res.json({
        posts: allPosts
    });
}

export async function renderIndividualPost(req: Request, res: Response){
    const individualPost: any = await ReadIndividualPost(req.params.blogID as string)
    const allComments = await ReadComments(req.params.blogID as string);
    res.json({
        post: individualPost,
        comments: allComments
    });
}

export function verifyUserStatus(req: Request, res: Response){
    res.json({
        user: req.user
    })
}