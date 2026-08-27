import { getSession } from "@/constants/auth";
import { colors } from "@/constants/theme";
import { router } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

export default function Splash() {
  useEffect(() => {
    let active = true;

    async function redirectFromSession() {
      const session = await getSession();
      if (!active) return;
      router.replace(session ? "/(tabs)/home" : "/login");
    }

    redirectFromSession();
    return () => {
      active = false;
    };
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Text style={styles.logoText}>◎</Text>
      </View>
      <Text style={styles.title}>myinsta</Text>
      <Text style={styles.subtitle}>small moments, shared simply</Text>
      <ActivityIndicator color={colors.accent} style={styles.spinner} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.canvas,
  },
  logo: {
    width: 92,
    height: 92,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.accent,
  },
  logoText: { color: colors.white, fontSize: 62, lineHeight: 72 },
  title: { marginTop: 18, fontSize: 36, fontWeight: "800", color: colors.ink },
  subtitle: { marginTop: 8, color: colors.muted },
  spinner: { marginTop: 30 },
});
