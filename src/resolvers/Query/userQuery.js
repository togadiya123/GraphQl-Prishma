const userQuery = {
    getUser: async (parent, {id}, {prisma}) => await prisma.user.findUnique({
        where: {
            id: parseInt(id)
        },
        include: {
            posts: true,
            comments: true
        }
    }).catch(err => {
        console.log(err);
        return null;
    }),
    getUsers: async (parent, args, {prisma}) => await prisma.user.findMany({
        include: {
            posts: true,
            comments: true
        }
    }).catch(err => {
        console.log(err);
        return [];
    })
}

export default userQuery;