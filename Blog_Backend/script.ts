import { prisma } from './src/lib/prisma.ts';

async function main() {
  // Create a new user with a post
  const user = await prisma.author.create({
    data: {
      username: 'Alice',
      password: '676767',
      blogs: {
        create: [
          {
            title: 'Hello World',
            content: 'This is my first post!',
            published: true,
            duration: '13'
          },
        ],
      },
    },
    include: {
      blogs: true,
    },
  })
  console.log('Created user:', user)

  // Fetch all users with their posts
  const allUsers = await prisma.author.findMany({
    include: {
      blogs: true,
    },
  })
  console.log('All users:', JSON.stringify(allUsers, null, 2))
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })