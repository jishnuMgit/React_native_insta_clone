import { Chat, Message } from "@/types";

export const chats: Chat[] = [
  {
    id: "chat-sarah",
    userId: "sarah",
    lastMessage: "Hey, how are you?",
    timestamp: "2m",
  },
  {
    id: "chat-alex",
    userId: "alex",
    lastMessage: "Did you see the new post?",
    timestamp: "10m",
  },
  {
    id: "chat-john",
    userId: "john",
    lastMessage: "Let's meet tomorrow",
    timestamp: "1h",
  },
  {
    id: "chat-emma",
    userId: "emma",
    lastMessage: "That's awesome!",
    timestamp: "2h",
  },
];

export const messageHistory: Record<string, Message[]> = {
  "chat-sarah": [
    { id: "s1", sender: "them", text: "Hey!" },
    { id: "s2", sender: "me", text: "Hey Sarah 👋" },
    { id: "s3", sender: "them", text: "How are you?" },
    { id: "s4", sender: "me", text: "I'm doing great!" },
    { id: "s5", sender: "them", text: "Nice!" },
  ],
  "chat-alex": [
    { id: "a1", sender: "them", text: "Did you see the new post?" },
  ],
  "chat-john": [{ id: "j1", sender: "them", text: "Let's meet tomorrow" }],
  "chat-emma": [{ id: "e1", sender: "them", text: "That's awesome!" }],
};
