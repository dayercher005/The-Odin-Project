import type { Request, Response } from 'express';
import { ReadPosts } from '../../lib/queries.ts';
import { ReadIndividualPost, ReadComments, ReadIndividualComment, DeleteComments } from '../../lib/queries.ts';

export async function renderDashboard(req: Request, res: Response){
    const allPosts = await ReadPosts()
    res.json({
        posts: allPosts,
        author: req.user
    });
}

export async function renderIndividualBlog(req: Request, res: Response){
    const individualPost: any = await ReadIndividualPost(req.params.blogID as string);
    const allComments = await ReadComments(req.params.blogID as string);
    res.json({
        post: individualPost,
        comments: allComments
    });
}

export async function renderIndividualComment(req: Request, res: Response){
    const individualComment = await ReadIndividualComment(req.params.commentID as string);
    console.log(individualComment);
    res.json({
        comment: individualComment
    });
}

export async function deleteIndividualComments(req: Request, res: Response){
    await DeleteComments(req.params.commentID as string);
    res.json({
        commentID: req.params.commentID,
        blogID: req.params.blogID
    })
}