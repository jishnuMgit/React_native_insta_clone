import { Pressable, StyleSheet, Text, View } from "react-native";
import { currentUser } from "@/constants/users";
import { colors } from "@/constants/theme";
import { Avatar } from "./Avatar";

export function ProfileHeader() {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Avatar uri={currentUser.avatar} size={86} />
        <View style={styles.stats}>
          <Stat value="12" label="Posts" />
          <Stat value="450" label="Followers" />
          <Stat value="180" label="Following" />
        </View>
      </View>
      <Text style={styles.name}>{currentUser.name}</Text>
      <Text style={styles.bio}>{currentUser.bio}</Text>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </Pressable>
    </View>
  );
}
function Stat({ value, label }: { value: string; label: string }) {
  return (
    <View style={styles.stat}>
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 18,
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.line,
  },
  top: { flexDirection: "row", alignItems: "center", gap: 24 },
  stats: { flex: 1, flexDirection: "row", justifyContent: "space-between" },
  stat: { alignItems: "center" },
  value: { fontWeight: "800", color: colors.ink, fontSize: 16 },
  label: { color: colors.muted, marginTop: 4, fontSize: 12 },
  name: { marginTop: 14, fontWeight: "800", color: colors.ink },
  bio: { marginTop: 4, color: colors.muted, lineHeight: 20 },
  button: {
    height: 36,
    marginTop: 14,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.line,
  },
  buttonText: { fontWeight: "700", color: colors.ink },
});
