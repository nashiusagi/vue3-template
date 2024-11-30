export interface Post {
  id: number;
  title: string;
  body: string;
  thumbnailPath?: string;
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

export interface HeaderItemData {
  id: number;
  title: string;
  link: string;
}

export type StampStatus = "Checked" | "NotChecked" | "Error";

export interface StampData {
  text: string;
  status: StampStatus;
}
