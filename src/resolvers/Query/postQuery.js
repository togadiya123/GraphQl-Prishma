const postQuery = {
    getPost: async (parent, {id}, {prisma}) => await prisma.post.findUnique({
        where: {
            id: parseInt(id)
        },
        include: {
            author: true,
            comments: true
        }
    }).catch(err => {
        console.log(err);
        return null;
    }),
    getPosts: async (parent, {authorId}, {prisma}) => await prisma.post.findMany({
        where: {
            authorId: parseInt(authorId)
        },
        include: {
            author: true,
            comments: true
        }
    }).catch(err => {
        console.log(err);
        return [];
    })
}

export default postQuery;