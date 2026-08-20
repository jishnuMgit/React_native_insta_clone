import { Avatar } from "@/components/Avatar";
import { MessageBubble } from "@/components/MessageBubble";
import { chats, messageHistory } from "@/constants/chats";
import { colors } from "@/constants/theme";
import { getUser } from "@/constants/users";
import { Message } from "@/types";
import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import {
    FlatList,
    KeyboardAvoidingView,
    Platform,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";

export default function ChatScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const chatId = Array.isArray(id) ? id[0] : id;
  const chat = chats.find((item) => item.id === chatId) ?? chats[0];
  const user = getUser(chat.userId);
  const [messages, setMessages] = useState<Message[]>(
    messageHistory[chat.id] ?? [],
  );
  const [text, setText] = useState("");
  const send = () => {
    const trimmed = text.trim();
    if (!trimmed) return;
    setMessages((current) => [
      ...current,
      { id: `${Date.now()}`, sender: "me", text: trimmed },
    ]);
    setText("");
  };
  return (
    <KeyboardAvoidingView
      style={styles.screen}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={styles.header}>
        <Pressable onPress={() => router.back()}>
          <Text style={styles.back}>‹</Text>
        </Pressable>
        <Avatar uri={user.avatar} size={38} />
        <View>
          <Text style={styles.username}>{user.username}</Text>
          <Text style={styles.online}>Online now</Text>
        </View>
      </View>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.messages}
        renderItem={({ item }) => <MessageBubble message={item} />}
      />
      <View style={styles.composer}>
        <TextInput
          value={text}
          onChangeText={setText}
          placeholder="Message..."
          placeholderTextColor={colors.muted}
          style={styles.input}
        />
        <Pressable onPress={send} style={styles.send}>
          <Text style={styles.sendText}>Send</Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.canvas },
  header: {
    height: 74,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.line,
  },
  back: { fontSize: 38, color: colors.ink, lineHeight: 38 },
  username: { color: colors.ink, fontWeight: "800", fontSize: 16 },
  online: { color: colors.teal, fontSize: 12, marginTop: 3 },
  messages: { padding: 16, justifyContent: "flex-end", flexGrow: 1 },
  composer: {
    flexDirection: "row",
    gap: 8,
    padding: 12,
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderTopColor: colors.line,
  },
  input: {
    flex: 1,
    height: 42,
    borderRadius: 21,
    backgroundColor: colors.canvas,
    paddingHorizontal: 16,
  },
  send: { paddingHorizontal: 15, justifyContent: "center" },
  sendText: { color: colors.accent, fontWeight: "800" },
});
