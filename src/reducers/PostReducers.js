
const initialState = {
    posts: []
}

const PostReducers = (state = initialState, action) => {
    switch(action.type){
        case "POSTS" :
            console.log("Reducer", action.payload);
            return { ...state, posts: action.payload };
        default :
            return state;
    }
}

export default PostReducers;