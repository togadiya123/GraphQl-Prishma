const userMutation = {
    createUser: async (parent, {data}, {prisma}, info) => {
        const {name, username, email} = data;
        return await prisma.user.create({
            data: {name, username, email}, include: {
                posts: true, comments: true
            }
        }).catch(err => {
            console.log(err);
            return null;
        });
    }
}

export default userMutation;