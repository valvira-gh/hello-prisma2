import { PrismaClient } from '@prisma/client';

const Prisma = new PrismaClient();

async function main() {
    // ... your Prisma Client queries will go here
    const user = await Prisma.user.create({
        data: {
            name: 'Alicce',
            email: 'alice@prisma.io',
        },
    })
    console.log(user)
}

main()
    .then(async () => {
        await Prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await Prisma.$disconnect();
        process.exit(1)
    });