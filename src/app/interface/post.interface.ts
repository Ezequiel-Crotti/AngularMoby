export interface PostResponse {
    userId: number;
    id:     number;
    title:  string;
    body:   string;
}

export interface PostComentResponse {
    postId: number;
    id:     number;
    name:   string;
    email:  string;
    body:   string;
}