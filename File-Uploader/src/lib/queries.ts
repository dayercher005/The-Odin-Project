import { prisma } from './prisma.ts';

export async function CreateUsers(name: string, email: string, password: string){
    await prisma.user.create({
        data: {
            name: name,
            email: email,
            password: password,
        }
    })
}

export async function CreateFolders(name: string, email: string){
    await prisma.folders.create({
        data:{
           name: name,
           user:{
                connect:{
                    email: email
                }
           }
        }
    })
}

export async function ReadAllFolders(id: string){
    const allFolders = await prisma.user.findMany({
        where:{
            id: id
        }, 
        include:{
            folders: true
        }
    })

    return allFolders;
}

export async function UpdateFolder(id: any, name: string){
    await prisma.folders.update({
        where:{
            id: id
        },
        data:{
            name: name
        }
    })
}

export async function DeleteFolder(id: any){
    await prisma.folders.delete({
        where:{
            id: id
        }
    })
}

export async function CreateFiles(name: any, size: any, url: any, id: any){
    await prisma.files.create({
        data: {
            name: name,
            size: size,
            publicURL: url, 
            folder: {
                connect: {
                    id: id
                }
            }
        }
    })
}


export async function ReadAllFiles(id: any){
    const allFiles = await prisma.folders.findMany({
        where:{
            id: id
        },
        include:{
            files: true
        }
    });
    return allFiles;
}


export async function ReadIndividualFile(id: any){
    const individualFile = await prisma.files.findUnique({
        where:{
            id: id
        }
    });
    return individualFile;
}


export async function DeleteFile(id: any){
    await prisma.files.delete({
        where:{
            id: id
        }
    })
}