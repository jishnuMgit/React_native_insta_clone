import { Pressable, StyleSheet, Text, View } from "react-native";
import { Chat } from "@/types";
import { getUser } from "@/constants/users";
import { colors } from "@/constants/theme";
import { Avatar } from "./Avatar";

export function ChatListItem({
  chat,
  onPress,
}: {
  chat: Chat;
  onPress: () => void;
}) {
  const user = getUser(chat.userId);
  return (
    <Pressable onPress={onPress} style={styles.item}>
      <Avatar uri={user.avatar} size={52} />
      <View style={styles.copy}>
        <Text style={styles.username}>{user.username}</Text>
        <Text style={styles.message} numberOfLines={1}>
          {chat.lastMessage}
        </Text>
      </View>
      <Text style={styles.time}>{chat.timestamp}</Text>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 13,
    gap: 12,
  },
  copy: { flex: 1, gap: 4 },
  username: { fontWeight: "700", color: colors.ink, fontSize: 15 },
  message: { color: colors.muted },
  time: { color: colors.muted, fontSize: 12 },
});
