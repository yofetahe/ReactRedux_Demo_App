// import { combineReducers } from "redux";

// import PostReducers from './PostReducers';

// const Reducers = combineReducers({
//     post: PostReducers
// });


const initialState = {
    posts: [],
    post: {},
    album: {}
}

const Reducers = (state = initialState, action) => {
    switch(action.type){
        case "POSTS" :
            return { ...state, posts: action.payload };
        case "WRITTER" :
            return { ...state, writtenBy: action.payload };
        case "PHOTO_ALBUM" :
            return { ...state, photo_albums: action.payload };
        case "PHOTOS" :
            return { ...state, photos: action.photos, album: action.album };
        case "COMMENTS" :
            return { ...state, comments: action.comments, post: action.post };
        case "TODOS" :
            return { ...state, todos: action.payload };
        default :
            return state;
    }
}


export default Reducers;