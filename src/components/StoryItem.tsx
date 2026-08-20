import { Pressable, StyleSheet, Text } from "react-native";
import { Avatar } from "./Avatar";
import { User } from "@/types";
import { colors } from "@/constants/theme";

export function StoryItem({ user }: { user: User }) {
  return (
    <Pressable style={styles.item}>
      <Avatar uri={user.avatar} size={62} ring />
      <Text style={styles.name} numberOfLines={1}>
        {user.username}
      </Text>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  item: { width: 78, alignItems: "center", gap: 6 },
  name: { color: colors.ink, fontSize: 12 },
});
