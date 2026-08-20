import { AppHeader } from "@/components/AppHeader";
import { ChatListItem } from "@/components/ChatListItem";
import { chats } from "@/constants/chats";
import { colors } from "@/constants/theme";
import { router } from "expo-router";
import {
    FlatList,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";

export default function Messages() {
  return (
    <View style={styles.screen}>
      <AppHeader title="Messages" right={false} />
      <View style={styles.titleRow}>
        <Text style={styles.heading}>Messages</Text>
        <Pressable>
          <Text style={styles.newIcon}>+</Text>
        </Pressable>
      </View>
      <View style={styles.search}>
        <TextInput
          placeholder="Search messages"
          placeholderTextColor={colors.muted}
          style={styles.input}
        />
      </View>
      <FlatList
        data={chats}
        contentContainerStyle={styles.list}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ChatListItem
            chat={item}
            onPress={() => router.push(`/chat/${item.id}`)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.canvas },
  titleRow: {
    paddingHorizontal: 18,
    paddingTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  heading: { color: colors.ink, fontWeight: "800", fontSize: 22 },
  newIcon: { color: colors.accent, fontSize: 30 },
  search: {
    margin: 16,
    height: 42,
    borderRadius: 12,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.line,
    justifyContent: "center",
  },
  input: { paddingHorizontal: 15 },
  list: { paddingHorizontal: 18 },
});
