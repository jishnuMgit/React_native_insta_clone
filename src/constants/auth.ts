import * as SecureStore from "expo-secure-store";
import { Platform } from "react-native";

export interface AuthUser {
  id: number | string;
  username: string;
  email: string;
  phone?: string;
}

export interface AuthSession {
  access: string;
  refresh: string;
  user: AuthUser;
}

const API_URL = (
  process.env.EXPO_PUBLIC_API_URL ?? "http://127.0.0.1:8000/"
).replace(/\/$/, "");
const SESSION_KEY = "myinsta.auth.session";

async function readStoredSession() {
  if (Platform.OS === "web") {
    return globalThis.localStorage?.getItem(SESSION_KEY) ?? null;
  }

  return SecureStore.getItemAsync(SESSION_KEY);
}

async function writeStoredSession(value: string) {
  if (Platform.OS === "web") {
    globalThis.localStorage?.setItem(SESSION_KEY, value);
    return;
  }

  await SecureStore.setItemAsync(SESSION_KEY, value);
}

async function request<T>(path: string, body: Record<string, string>) {
  let response: Response;
  try {
    response = await fetch(`${API_URL}${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
  } catch {
    throw new Error(
      "Unable to reach the server. Check your API URL and connection.",
    );
  }

  const data = (await response.json().catch(() => ({}))) as T & {
    detail?: string;
    message?: string;
    [key: string]: unknown;
  };

  if (!response.ok) {
    const firstFieldError = Object.values(data).find(
      (value) => Array.isArray(value) && value.length > 0,
    );
    const errorMessage = Array.isArray(firstFieldError)
      ? String(firstFieldError[0])
      : (data.detail ??
        data.message ??
        "Something went wrong. Please try again.");
    throw new Error(errorMessage);
  }

  return data;
}

export async function login(identifier: string, password: string) {
  const response = await request<{
    tokens: { access: string; refresh: string };
    user: AuthUser;
  }>("/users/login/", { username: identifier, password });

  const session: AuthSession = { ...response.tokens, user: response.user };
  await writeStoredSession(JSON.stringify(session));
  return session;
}

export async function register(values: {
  username: string;
  email: string;
  password: string;
  phone: string;
}) {
  return request("/register/", values);
}

export async function getSession(): Promise<AuthSession | null> {
  const stored = await readStoredSession();
  if (!stored) return null;

  try {
    return JSON.parse(stored) as AuthSession;
  } catch {
    await clearSession();
    return null;
  }
}

export async function clearSession() {
  if (Platform.OS === "web") {
    globalThis.localStorage?.removeItem(SESSION_KEY);
    return;
  }

  await SecureStore.deleteItemAsync(SESSION_KEY);
}
