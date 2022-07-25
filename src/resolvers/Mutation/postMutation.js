const postMutation = {
    createPost: async (parent, {data}, {prisma}, info) => {
        const {title, content, authorId} = data;
        return await prisma.post.create({
            data: {title, content, author: {connect: {id: parseInt(authorId)}}}, include: {
                author: true, comments: true
            }
        }).catch(err => {
            console.log(err);
            return null;
        });
    }
}

export default postMutation;