const commentQuery = {
    getComment: async (parent, {id}, {prisma}) => await prisma.comment.findUnique({
        where: {
            id: parseInt(id)
        },
        include: {
            author: true,
            post: true
        }
    }).catch(err => {
        console.log(err);
        return null;
    }),
    getCommentsByAuthor: async (parent, {authorId}, {prisma}) => await prisma.comment.findMany({
        where: {
            authorId: parseInt(authorId)
        },
        include: {
            author: true,
            post: true
        }
    }).catch(err => {
        console.log(err);
        return [];
    }),
    getCommentsByPost: async (parent, {postId}, {prisma}) => await prisma.comment.findMany({
        where: {
            postId: parseInt(postId)
        },
        include: {
            author: true,
            post: true
        }
    }).catch(err => {
        console.log(err);
        return [];
    }),
}

export default commentQuery;