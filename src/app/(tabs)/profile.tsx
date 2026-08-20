import { AppHeader } from "@/components/AppHeader";
import { ProfileHeader } from "@/components/ProfileHeader";
import { posts } from "@/constants/posts";
import { colors } from "@/constants/theme";
import { FlatList, Image, StyleSheet, View } from "react-native";

export default function Profile() {
  return (
    <View style={styles.screen}>
      <AppHeader title="jishnu" right={false} />
      <FlatList
        data={[...posts, ...posts, ...posts]}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        numColumns={3}
        ListHeaderComponent={<ProfileHeader />}
        renderItem={({ item }) => (
          <Image source={{ uri: item.image }} style={styles.image} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.canvas },
  image: { width: "33.1%", aspectRatio: 1, marginRight: 2, marginBottom: 2 },
});
