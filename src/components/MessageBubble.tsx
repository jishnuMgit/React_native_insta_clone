import { StyleSheet, Text, View } from "react-native";
import { colors } from "@/constants/theme";
import { Message } from "@/types";

export function MessageBubble({ message }: { message: Message }) {
  const mine = message.sender === "me";
  return (
    <View style={[styles.wrap, mine ? styles.mineWrap : styles.theirWrap]}>
      <Text style={[styles.text, mine && styles.mineText]}>{message.text}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  wrap: {
    maxWidth: "78%",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 18,
    marginBottom: 9,
  },
  mineWrap: { alignSelf: "flex-end", backgroundColor: colors.accent },
  theirWrap: {
    alignSelf: "flex-start",
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.line,
  },
  text: { color: colors.ink, fontSize: 15 },
  mineText: { color: colors.white },
});
