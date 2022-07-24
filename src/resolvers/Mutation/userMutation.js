import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const userMutation = {
    createUser: async (parent, {data}, context, info) => {
        const {name, username, email} = data;
        return await prisma.user.create({data : {name, username, email}});
    }
}

export default userMutation;