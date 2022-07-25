import userMutation from "./userMutation.js";
import postMutation from "./postMutation.js";
import commentMutation from "./commentMutation.js";

const Mutation = {
    ...userMutation,
    ...postMutation,
    ...commentMutation
};

export default Mutation;