import { Image, StyleSheet, View } from "react-native";
import { colors } from "@/constants/theme";

export function Avatar({
  uri,
  size = 44,
  ring = false,
}: {
  uri: string;
  size?: number;
  ring?: boolean;
}) {
  return (
    <View
      style={[
        styles.base,
        ring && styles.ring,
        {
          width: size + (ring ? 6 : 0),
          height: size + (ring ? 6 : 0),
          borderRadius: size / 2 + 3,
        },
      ]}
    >
      <Image
        source={{ uri }}
        style={{ width: size, height: size, borderRadius: size / 2 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  base: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white,
  },
  ring: { borderWidth: 2, borderColor: colors.accent, padding: 2 },
});
