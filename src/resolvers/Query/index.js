import userQuery from "./userQuery.js";
import postQuery from "./postQuery.js";
import commentQuery from "./commentQuery.js";

const Query = {
    ...userQuery,
    ...postQuery,
    ...commentQuery
};

export default Query;
