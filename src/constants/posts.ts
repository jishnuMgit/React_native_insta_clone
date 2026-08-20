import { Post, Reel } from "@/types";

const image = (id: number) =>
  `https://picsum.photos/seed/myinsta-${id}/800/800`;

export const posts: Post[] = [
  {
    id: "post-1",
    userId: "sarah",
    image: image(1),
    caption: "A little sunshine goes a long way.",
    likes: 284,
    comments: 18,
    commentPreview: "alex.m Love this view!",
  },
  {
    id: "post-2",
    userId: "alex",
    image: image(2),
    caption: "Weekend wandering with good company.",
    likes: 176,
    comments: 9,
    commentPreview: "emma.k This is such a vibe.",
  },
  {
    id: "post-3",
    userId: "jishnu",
    image: image(3),
    caption: "Shipping tiny ideas and learning every day.",
    likes: 92,
    comments: 6,
    commentPreview: "john.d Keep building!",
  },
  {
    id: "post-4",
    userId: "emma",
    image: image(4),
    caption: "Coffee, code, and a quiet morning.",
    likes: 231,
    comments: 21,
    commentPreview: "sarah.w Perfect morning.",
  },
];

export const reels: Reel[] = [
  {
    id: "reel-1",
    userId: "mike",
    image: image(21),
    caption: "When the view does all the work.",
    likes: 1204,
    comments: 48,
  },
  {
    id: "reel-2",
    userId: "sophia",
    image: image(22),
    caption: "Slow days, big ideas.",
    likes: 834,
    comments: 31,
  },
  {
    id: "reel-3",
    userId: "david",
    image: image(23),
    caption: "A quick reset between meetings.",
    likes: 651,
    comments: 17,
  },
];
