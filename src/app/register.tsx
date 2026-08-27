import { register } from "@/constants/auth";
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

export default function Register() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const update = (field: keyof typeof values, value: string) =>
    setValues((current) => ({ ...current, [field]: value }));

  async function handleRegister() {
    if (!values.username.trim() || !values.email.trim() || !values.password) {
      setError("Username, email, and password are required.");
      return;
    }
    setError("");
    setLoading(true);
    try {
      await register({
        ...values,
        username: values.username.trim(),
        email: values.email.trim(),
      });
      router.replace({ pathname: "/login", params: { registered: "true" } });
    } catch (requestError) {
      setError(
        requestError instanceof Error
          ? requestError.message
          : "Unable to create your account.",
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
        <Text style={styles.eyebrow}>MYINSTA</Text>
        <Text style={styles.heading}>Make room for more moments.</Text>
        <Text style={styles.subheading}>
          Join a quieter, more personal way to share.
        </Text>
        <View style={styles.form}>
          {(["username", "email", "phone", "password"] as const).map(
            (field) => (
              <View key={field}>
                <Text style={styles.label}>
                  {field === "phone" ? "PHONE (OPTIONAL)" : field.toUpperCase()}
                </Text>
                <TextInput
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType={
                    field === "email"
                      ? "email-address"
                      : field === "phone"
                        ? "phone-pad"
                        : "default"
                  }
                  placeholder={
                    field === "username"
                      ? "Choose a username"
                      : field === "email"
                        ? "you@example.com"
                        : field === "phone"
                          ? "Your phone number"
                          : "Create a password"
                  }
                  placeholderTextColor={colors.muted}
                  secureTextEntry={field === "password"}
                  style={styles.input}
                  value={values[field]}
                  onChangeText={(text) => update(field, text)}
                />
              </View>
            ),
          )}
          {error ? <Text style={styles.error}>{error}</Text> : null}
          <Pressable
            disabled={loading}
            onPress={handleRegister}
            style={styles.button}
          >
            {loading ? (
              <ActivityIndicator color={colors.white} />
            ) : (
              <Text style={styles.buttonText}>Create account</Text>
            )}
          </Pressable>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>Already a member?</Text>
          <Link href="/login" style={styles.link}>
            Log in
          </Link>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.canvas },
  content: { flexGrow: 1, justifyContent: "center", padding: 28 },
  eyebrow: {
    color: colors.accent,
    fontSize: 12,
    fontWeight: "800",
    letterSpacing: 2,
  },
  heading: {
    marginTop: 18,
    color: colors.ink,
    fontSize: 31,
    lineHeight: 38,
    fontWeight: "800",
  },
  subheading: {
    marginTop: 9,
    color: colors.muted,
    fontSize: 15,
    lineHeight: 22,
  },
  form: { marginTop: 20 },
  label: {
    marginTop: 14,
    marginBottom: 7,
    color: colors.muted,
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 1,
  },
  input: {
    height: 52,
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
    marginTop: 20,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.teal,
  },
  buttonText: { color: colors.white, fontSize: 16, fontWeight: "800" },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 5,
    marginTop: 26,
  },
  footerText: { color: colors.muted, fontSize: 14 },
  link: { color: colors.accent, fontSize: 14, fontWeight: "800" },
});
