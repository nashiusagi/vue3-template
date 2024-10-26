export interface Post {
  id: number;
  title: string;
  body: string;
}

export interface PostsData {
  data: {
    posts: Post[];
    maxPage: number;
  };
  isLoaded: boolean;
  error: object;
}

export interface PostData {
  data: Post;
  isLoaded: boolean;
  error: object;
}
