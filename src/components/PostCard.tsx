import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Post } from "@/types";
import { getUser } from "@/constants/users";
import { colors } from "@/constants/theme";
import { Avatar } from "./Avatar";

export function PostCard({ post }: { post: Post }) {
  const user = getUser(post.userId);
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Avatar uri={user.avatar} size={38} />
        <Text style={styles.username}>{user.username}</Text>
        <Text style={styles.more}>•••</Text>
      </View>
      <Image source={{ uri: post.image }} style={styles.image} />
      <View style={styles.actions}>
        <View style={styles.left}>
          <Pressable>
            <Text style={styles.action}>♡</Text>
          </Pressable>
          <Pressable>
            <Text style={styles.action}>◯</Text>
          </Pressable>
          <Pressable>
            <Text style={styles.action}>➤</Text>
          </Pressable>
        </View>
        <Pressable>
          <Text style={styles.action}>⌑</Text>
        </Pressable>
      </View>
      <Text style={styles.likes}>{post.likes} likes</Text>
      <Text style={styles.caption}>
        <Text style={styles.username}>{user.username} </Text>
        {post.caption}
      </Text>
      <Text style={styles.comment}>{post.commentPreview}</Text>
      <Text style={styles.muted}>View all {post.comments} comments</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.line,
    paddingBottom: 16,
  },
  row: {
    minHeight: 58,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  username: { color: colors.ink, fontWeight: "700" },
  more: {
    marginLeft: "auto",
    color: colors.muted,
    fontWeight: "700",
    letterSpacing: 2,
  },
  image: { width: "100%", aspectRatio: 1, backgroundColor: colors.line },
  actions: {
    paddingHorizontal: 16,
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  left: { flexDirection: "row", gap: 18 },
  action: { fontSize: 27, color: colors.ink },
  likes: {
    paddingHorizontal: 16,
    marginTop: 4,
    fontWeight: "700",
    color: colors.ink,
  },
  caption: {
    paddingHorizontal: 16,
    marginTop: 8,
    color: colors.ink,
    lineHeight: 20,
  },
  comment: { paddingHorizontal: 16, marginTop: 5, color: colors.ink },
  muted: { paddingHorizontal: 16, marginTop: 5, color: colors.muted },
});
