// remove post
export function removePost(index) {
    return {
        type: 'REMOVE_POST',
        index: index
    };
}

// adding post
export function addPost(post) {
    return {
        type: 'ADD_POST',
        post
    };
}

// add comments
export function addComment(comment, postId) {
    return {
        type: 'ADD_COMMENT',
        comment,
        postId
    };
}
