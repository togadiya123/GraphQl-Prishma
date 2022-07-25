import {createServer} from '@graphql-yoga/node';
import {loadFiles} from "@graphql-tools/load-files";
import {PrismaClient} from '@prisma/client';

import resolvers from './resolvers/index.js';

const main = async () => {
    try {
        const prisma = new PrismaClient();
        const server = new createServer({
            schema: {
                typeDefs: await loadFiles('src/typeDefs/**/*.graphql'), resolvers,
            }, context: {prisma}
        });
        await server.start();
    } catch (error) {
        console.log(`Error got in main.js\n ${error}`);
    }
};

main().catch(error => console.log(error));