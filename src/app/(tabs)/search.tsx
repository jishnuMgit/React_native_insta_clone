import { posts } from "@/constants/posts";
import { colors } from "@/constants/theme";
import { Image, StyleSheet, TextInput, View } from "react-native";
export default function Search() {
  return (
    <View style={styles.screen}>
      <View style={styles.search}>
        <TextInput
          placeholder="Search"
          placeholderTextColor={colors.muted}
          style={styles.input}
        />
      </View>
      <View style={styles.grid}>
        {[...posts, ...posts].map((post, index) => (
          <Image
            key={`${post.id}-${index}`}
            source={{ uri: post.image }}
            style={styles.image}
          />
        ))}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.canvas },
  search: {
    margin: 16,
    height: 44,
    borderRadius: 12,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.line,
    justifyContent: "center",
  },
  input: { paddingHorizontal: 16, fontSize: 15 },
  grid: { flexDirection: "row", flexWrap: "wrap", gap: 2 },
  image: { width: "32.8%", aspectRatio: 1 },
});
