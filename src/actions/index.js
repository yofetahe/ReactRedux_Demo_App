// import api from '../api/jsonplaceholder';
import axios from "axios";

export const FetchPosts = () => async dispatch => {
    
    const posts = await axios.get('https://jsonplaceholder.typicode.com/posts');
    
    dispatch({
        type: "POSTS",
        payload: posts.data
    });
}

export const FetchWritter = (id) => async dispatch => {    
    const writter = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    
    dispatch({
        type: "WRITTER",
        payload: writter.data
    })
}

export const FetchAlbums = () => async dispatch => {
    const albums = await axios.get("https://jsonplaceholder.typicode.com/albums");
    
    dispatch({
        type: "PHOTO_ALBUM",
        payload: albums.data
    })
}

export const FetchPhotos = (id) => async dispatch => {
    const [album, photos] = await Promise.all([
        axios.get(`https://jsonplaceholder.typicode.com/albums/${id}`),
        axios.get(`https://jsonplaceholder.typicode.com/photos`)
    ]) 
    
    dispatch({
        type: "PHOTOS",
        photos: photos.data.filter(photo => photo.albumId == id),
        album: album.data
    })
}

export const FetchCommentsByPostId = (postId) => async dispatch => {
    const [ post, comments ] = await Promise.all([
        axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`),
        axios.get(`https://jsonplaceholder.typicode.com/comments`)
    ]) 
    
    dispatch({
        type: "COMMENTS",
        comments: comments.data.filter(comment => comment.postId == postId),
        post: post.data
    })
}

export const FetchToDos = () => async dispatch => {
    const todos = await axios.get('https://jsonplaceholder.typicode.com/todos');

    dispatch({
        type: "TODOS",
        payload: todos.data
    })
}

export const ToDoDone = (todo, todos) => dispatch => {
    console.log(todo)
    todo.completed = true;
    console.log(todo);
    const filteredTodos = todos.filter(t => t.id !== todo.id);
    console.log(filteredTodos);
    const updatedTodo = [...filteredTodos, todo];
    console.log(updatedTodo.sort());
    dispatch({
        type: "TODOS",
        payload: updatedTodo.sort((a, b) => a.userId > b.userId)
    })
}

export const ToDoDelete = (todo, todos) => dispatch => {

    const filteredTodos = todos.filter(t => t.id !== todo.id);

    dispatch({
        type: "TODOS",
        payload: filteredTodos
    })
}