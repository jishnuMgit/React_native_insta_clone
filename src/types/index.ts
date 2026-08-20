export interface User {
  id: string;
  username: string;
  name: string;
  avatar: string;
  bio?: string;
}

export interface Post {
  id: string;
  userId: string;
  image: string;
  caption: string;
  likes: number;
  comments: number;
  commentPreview: string;
}

export interface Chat {
  id: string;
  userId: string;
  lastMessage: string;
  timestamp: string;
}

export interface Message {
  id: string;
  sender: "me" | "them";
  text: string;
}

export interface Reel {
  id: string;
  userId: string;
  image: string;
  caption: string;
  likes: number;
  comments: number;
}
