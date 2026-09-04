import { Stack } from "expo-router";
import { Colors } from "../constant/Colors.js";
import { useColorScheme } from "react-native";
import { StatusBar } from "expo-status-bar";
import { UserProvider } from "../contexts/UserContext.jsx";
import { BooksProvider } from "../contexts/BooksContext.jsx";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <UserProvider>
      <BooksProvider>
        <StatusBar value="auto" />
        <Stack
          screenOptions={{
            headerStyle: { backgroundColor: theme.navBackground },
            headerTintColor: theme.title,
          }}
        >
          {/* Groups */}
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          <Stack.Screen name="(dashboard)" options={{ headerShown: false }} />

          {/* Individual Screens */}
          <Stack.Screen name="index" options={{ title: "Home" }} />

          {/* Book details screen */}
          {/* <Stack.Screen name="books/[id]" options={} */}
        </Stack>
      </BooksProvider>
    </UserProvider>
  );
}
