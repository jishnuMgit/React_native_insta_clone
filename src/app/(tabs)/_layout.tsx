import { getSession } from "@/constants/auth";
import { colors } from "@/constants/theme";
import { router, Tabs } from "expo-router";
import { useEffect } from "react";
import { Text } from "react-native";

const icons: Record<string, string> = {
  home: "⌂",
  search: "⌕",
  reels: "▣",
  messages: "⌁",
  profile: "○",
};

export default function TabsLayout() {
  useEffect(() => {
    let active = true;
    getSession().then((session) => {
      if (active && !session) router.replace("/login");
    });
    return () => {
      active = false;
    };
  }, []);

  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.accent,
        tabBarInactiveTintColor: colors.muted,
        tabBarStyle: {
          height: 64,
          paddingTop: 8,
          borderTopColor: colors.line,
          backgroundColor: colors.white,
        },
        tabBarLabelStyle: { fontSize: 11 },
        tabBarIcon: ({ color, focused }) => (
          <Text style={{ color, fontSize: focused ? 25 : 23 }}>
            {icons[route.name]}
          </Text>
        ),
      })}
    >
      <Tabs.Screen name="home" options={{ title: "Home" }} />
      <Tabs.Screen name="search" options={{ title: "Search" }} />
      <Tabs.Screen name="messages" options={{ title: "Messages" }} />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
    </Tabs>
  );
}
