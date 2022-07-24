import {createServer} from '@graphql-yoga/node';
import {loadFiles} from "@graphql-tools/load-files";

import {Query} from './resolvers/index.js';

const main = async () => {
    try {
        const server = new createServer({
            schema: {
                typeDefs: await loadFiles('src/typeDefs/**/*.graphql'),
                resolvers: {
                    Query,
                }, context: {}
            },
        });

        await server.start();

    } catch (error) {
        console.log(`Error got in main.js\n ${error}`);
    }
};

main().catch(error => console.log(error));