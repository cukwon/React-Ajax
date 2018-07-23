import ajax import 'axios';

export function getPost(postId) {
    return ajax.get('https://jsonplaceholder.typicode.com/posts/'+ postId);
}

export function getComments(postId) {
    return ajax.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
}