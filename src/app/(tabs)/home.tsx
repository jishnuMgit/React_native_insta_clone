import { AppHeader } from "@/components/AppHeader";
import { PostCard } from "@/components/PostCard";
import { StoryItem } from "@/components/StoryItem";
import { posts } from "@/constants/posts";
import { colors } from "@/constants/theme";
import { users } from "@/constants/users";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default function Home() {
  return (
    <View style={styles.screen}>
      <AppHeader />
      <FlatList
  data={posts}
  keyExtractor={(item) => item.id}
  renderItem={({ item }) => <PostCard post={item} />}
  ListHeaderComponent={
    <View>
      <Text style={styles.sectionTitle}>Stories</Text>
      <FlatList
        data={users.slice(1)}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.stories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <StoryItem user={item} />}
      />
    </View>
  }
/>
    </View>
  );
}
const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.canvas },
  sectionTitle: {
    paddingHorizontal: 18,
    paddingTop: 16,
    fontSize: 18,
    fontWeight: "800",
    color: colors.ink,
  },
  stories: {
    padding: 16,
    gap: 8,
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.line,
  },
});
