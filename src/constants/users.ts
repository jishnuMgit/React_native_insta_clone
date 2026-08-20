import { User } from "@/types";

export const users: User[] = [
  {
    id: "jishnu",
    username: "jishnu",
    name: "Jishnu",
    avatar: "https://i.pravatar.cc/150?img=12",
    bio: "Developer 🚀\nBuilding cool things with React Native",
  },
  {
    id: "sarah",
    username: "sarah.w",
    name: "Sarah Williams",
    avatar: "https://i.pravatar.cc/150?img=47",
  },
  {
    id: "alex",
    username: "alex.m",
    name: "Alex Morgan",
    avatar: "https://i.pravatar.cc/150?img=11",
  },
  {
    id: "john",
    username: "john.d",
    name: "John Davis",
    avatar: "https://i.pravatar.cc/150?img=68",
  },
  {
    id: "emma",
    username: "emma.k",
    name: "Emma Kim",
    avatar: "https://i.pravatar.cc/150?img=44",
  },
  {
    id: "david",
    username: "david.r",
    name: "David Ross",
    avatar: "https://i.pravatar.cc/150?img=13",
  },
  {
    id: "mike",
    username: "mike.t",
    name: "Mike Torres",
    avatar: "https://i.pravatar.cc/150?img=52",
  },
  {
    id: "sophia",
    username: "sophia.l",
    name: "Sophia Lee",
    avatar: "https://i.pravatar.cc/150?img=32",
  },
];

export const currentUser = users[0];

export function getUser(userId: string) {
  return users.find((user) => user.id === userId) ?? currentUser;
}
