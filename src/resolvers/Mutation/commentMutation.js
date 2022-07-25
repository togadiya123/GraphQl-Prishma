const commentMutation = {
    createComment: async (parent, {data}, {prisma}, info) => {
        const {text, authorId, postId} = data;
        console.log(data);
        return await prisma.comment.create({
            data: {
                text,
                author: {connect: {id: parseInt(authorId)}},
                post: {connect: {id: parseInt(postId)}}
            },
            include: {
                author: true,
                post: true
            }
        }).catch(err => {
            console.log(err);
            return null;
        });
    }
}

export default commentMutation;