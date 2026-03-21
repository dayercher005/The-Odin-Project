import { prisma } from './src/lib/prisma'

async function main() {
  // Create a new user with a post
  const user = await prisma.user.create({
    data: {
      name: 'Travis',
      email: 'travis@gmail.com',
      password: '1234567',
    },
  })
  console.log('Created user:', user)
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