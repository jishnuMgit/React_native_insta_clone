import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "@/constants/theme";

export function AppHeader({
  title = "myinsta",
  right = true,
}: {
  title?: string;
  right?: boolean;
}) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      {right && (
        <View style={styles.actions}>
          <Pressable>
            <Text style={styles.icon}>♡</Text>
          </Pressable>
          <Pressable>
            <Text style={styles.icon}>⌁</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 58,
    paddingHorizontal: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: colors.line,
    backgroundColor: colors.white,
  },
  title: { fontSize: 25, fontWeight: "800", color: colors.ink },
  actions: { flexDirection: "row", gap: 18 },
  icon: { fontSize: 29, color: colors.ink },
});
