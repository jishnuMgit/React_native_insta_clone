import { login } from "@/constants/auth";
import { colors } from "@/constants/theme";
import { Link, router } from "expo-router";
import { useState } from "react";
import {
    ActivityIndicator,
    KeyboardAvoidingView,
    Platform,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";

export default function Login() {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin() {
    if (!identifier.trim() || !password) {
      setError("Enter your username or email and password.");
      return;
    }

    setError("");
    setLoading(true);
    try {
      await login(identifier.trim(), password);
      router.replace("/(tabs)/home");
    } catch (requestError) {
      setError(
        requestError instanceof Error
          ? requestError.message
          : "Unable to log in.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <KeyboardAvoidingView
      style={styles.screen}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.brandMark}>
          <Text style={styles.mark}>◎</Text>
        </View>
        <Text style={styles.brand}>myinsta</Text>
        <Text style={styles.heading}>Welcome back</Text>
        <Text style={styles.subheading}>
          Your little corner of the internet is waiting.
        </Text>

        <View style={styles.form}>
          <Text style={styles.label}>USERNAME OR EMAIL</Text>
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="jishnu1 or you@example.com"
            placeholderTextColor={colors.muted}
            style={styles.input}
            value={identifier}
            onChangeText={setIdentifier}
          />
          <Text style={styles.label}>PASSWORD</Text>
          <TextInput
            autoCapitalize="none"
            placeholder="Your password"
            placeholderTextColor={colors.muted}
            secureTextEntry
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            onSubmitEditing={handleLogin}
          />
          {error ? <Text style={styles.error}>{error}</Text> : null}
          <Pressable
            disabled={loading}
            onPress={handleLogin}
            style={styles.button}
          >
            {loading ? (
              <ActivityIndicator color={colors.white} />
            ) : (
              <Text style={styles.buttonText}>Log in</Text>
            )}
          </Pressable>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>New here?</Text>
          <Link href="/register" style={styles.link}>
            Create an account
          </Link>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.canvas },
  content: { flexGrow: 1, justifyContent: "center", padding: 28 },
  brandMark: {
    alignSelf: "center",
    width: 64,
    height: 64,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.accent,
  },
  mark: { color: colors.white, fontSize: 42, lineHeight: 48 },
  brand: {
    marginTop: 12,
    color: colors.ink,
    fontSize: 28,
    fontWeight: "800",
    textAlign: "center",
  },
  heading: {
    marginTop: 48,
    color: colors.ink,
    fontSize: 30,
    fontWeight: "800",
  },
  subheading: {
    marginTop: 8,
    color: colors.muted,
    fontSize: 15,
    lineHeight: 22,
  },
  form: { marginTop: 32 },
  label: {
    marginTop: 18,
    marginBottom: 8,
    color: colors.muted,
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 1,
  },
  input: {
    height: 54,
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: 14,
    paddingHorizontal: 16,
    color: colors.ink,
    backgroundColor: colors.white,
    fontSize: 16,
  },
  error: { marginTop: 14, color: "#c53d54", fontSize: 13, lineHeight: 19 },
  button: {
    height: 54,
    marginTop: 22,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.accent,
  },
  buttonText: { color: colors.white, fontSize: 16, fontWeight: "800" },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 5,
    marginTop: 28,
  },
  footerText: { color: colors.muted, fontSize: 14 },
  link: { color: colors.teal, fontSize: 14, fontWeight: "800" },
});
