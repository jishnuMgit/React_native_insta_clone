import { reels } from "@/constants/posts";
import { colors } from "@/constants/theme";
import { getUser } from "@/constants/users";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
export default function Reels() {
  return (
    <FlatList
      data={reels}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => {
        const user = getUser(item.userId);
        return (
          <View style={styles.reel}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.overlay}>
              <Text style={styles.username}>@{user.username}</Text>
              <Text style={styles.caption}>{item.caption}</Text>
              <Text style={styles.actions}>
                ♡ {item.likes} ◯ {item.comments} ➤
              </Text>
            </View>
          </View>
        );
      }}
    />
  );
}
const styles = StyleSheet.create({
  reel: { height: 560, backgroundColor: colors.ink, position: "relative" },
  image: { width: "100%", height: "100%" },
  overlay: { position: "absolute", left: 18, right: 18, bottom: 24 },
  username: { color: colors.white, fontWeight: "800", fontSize: 16 },
  caption: { color: colors.white, marginTop: 8 },
  actions: { color: colors.white, marginTop: 18, fontSize: 16 },
});
