import { prisma } from './prisma.ts'

export async function CreateUsers(username: string, password: string){
    await prisma.user.create({
        data:{
            username: username,
            password: password
        }
    })
}

export async function ReadIndividualUser(username: string){
    const individualUser = await prisma.user.findUnique({
        where:{
            username: username
        }
    })
    return individualUser;
}

export async function CreateComments(content: string, userID: string, postID: string){
    await prisma.comment.create({
        data:{
            content: content,
            user:{
                connect:{
                    id: userID
                }
            },
            post:{
                connect:{
                    id: postID
                }
            }
        }
    })
}

export async function ReadComments(postID: string){
    const allComments = await prisma.post.findUnique({
        where:{
            id: postID
        },
        include:{
            comments: true
        }
    })
    return allComments
}

export async function ReadIndividualComment(commentID: string){
    const individualComment = await prisma.comment.findUnique({
        where:{
            id: commentID
        }
    });
    return individualComment
}

export async function DeleteComments(commentID: string){
    await prisma.comment.delete({
        where:{
            id: commentID
        }
    })
}


export async function CreateAuthors(username: string, password: string){
    await prisma.author.create({
        data:{
            username: username,
            password: password
        }
    })
}


export async function ReadIndividualAuthor(username: string){
    const individualAuthor = await prisma.author.findUnique({
        where:{
            username: username
        }
    })
    return individualAuthor
}

export async function CreatePosts(title: string, content: string, duration: string, authorID: string){
    await prisma.post.create({
        data:{
            title: title,
            content: content,
            duration: duration,
            author:{
                connect:{
                    id: authorID
                }
            }
        }
    })
}

export async function ReadPosts(){
    const allPosts = await prisma.post.findMany();
    return allPosts
}

export async function ReadIndividualPost(postID: string){
    const individualPost = await prisma.post.findUnique({
        where:{
            id: postID
        }
    })
    return individualPost
}