const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const createUser = async () => {
    const newUser = await prisma.user.create({
        data: {
            name: 'Alice',
            email: `alice${Date.now()}@prisma.io`,
        },
    });
    console.log(newUser);
    return newUser;
};

const getUsers = async () => await prisma.user.findMany();

createUser().then(() => getUsers().then(users => console.log(users)))