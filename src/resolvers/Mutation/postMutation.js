import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

const postMutation = {
    createPost: async (parent, {data}, context, info) => {
        console.log({data});
        const {title, content, authorId} = data;
        try {
            const post = await prisma.post.create({data : {title, content, author: {connect: {id: authorId}}}});
        // return await prisma.post.create({data: {title, content, authorId}});
            console.log(post);
            return post;
        } catch (error) {
            console.log(error);
        }
    }
}

export default postMutation;