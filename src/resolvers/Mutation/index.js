import userMutation from "./userMutation.js";
import postMutation from "./postMutation.js";

const Mutation = {
    ...userMutation,
    ...postMutation,
};

export default Mutation;