import { StyleSheet, ScrollView, Pressable, View } from "react-native";
import { Link } from "expo-router";
import { useEffect } from "react";

import ThemedView from "../components/ThemedView.jsx";
import ThemedText from "../components/ThemedText.jsx";
import ThemedLogo from "../components/ThemedLogo.jsx";
import Spacer from "../components/Spacer.jsx";
import client from "../lib/appwrite.js";

const Home = () => {
  useEffect(() => {
    client
      .ping()
      .then((res) => console.log("Appwrite Connected Successfully!", res))
      .catch((err) => console.log("Appwrite Connection Failed:", err));
  }, []);

  return (
    <ThemedView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header Section */}
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <ThemedLogo />
          </View>

          <ThemedText style={styles.title} title={true}>
            The Number 1
          </ThemedText>

          <ThemedText style={styles.subtitle}>Reading List App</ThemedText>
        </View>

        {/* Navigation Section */}
        <View style={styles.menuContainer}>
          <Link href="/about" asChild>
            <Pressable
              style={({ pressed }) => [
                styles.card,
                pressed && styles.cardPressed,
              ]}
            >
              <ThemedText style={styles.cardText}>About Page</ThemedText>
            </Pressable>
          </Link>

          <Link href="/contact" asChild>
            <Pressable
              style={({ pressed }) => [
                styles.card,
                pressed && styles.cardPressed,
              ]}
            >
              <ThemedText style={styles.cardText}>Contact Page</ThemedText>
            </Pressable>
          </Link>

          <Link href="/login" asChild>
            <Pressable
              style={({ pressed }) => [
                styles.card,
                pressed && styles.cardPressed,
              ]}
            >
              <ThemedText style={styles.cardText}>Login</ThemedText>
            </Pressable>
          </Link>

          <Link href="/register" asChild>
            <Pressable
              style={({ pressed }) => [
                styles.card,
                pressed && styles.cardPressed,
              ]}
            >
              <ThemedText style={styles.cardText}>Register</ThemedText>
            </Pressable>
          </Link>

          <Link href="/profile" asChild>
            <Pressable
              style={({ pressed }) => [
                styles.card,
                pressed && styles.cardPressed,
              ]}
            >
              <ThemedText style={styles.cardText}>Profile</ThemedText>
            </Pressable>
          </Link>
        </View>
      </ScrollView>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 40,
    alignItems: "center",
  },
  header: {
    alignItems: "center",
    marginBottom: 30,
    width: "100%",
  },
  logoContainer: {
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    marginBottom: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitle: {
    marginTop: 4,
    fontSize: 15,
    opacity: 0.6,
    textAlign: "center",
  },
  menuContainer: {
    width: "100%",
    gap: 12,
  },
  card: {
    width: "100%",
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 12,
    backgroundColor: "rgba(0, 0, 0, 0.04)",
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.08)",
    alignItems: "center",
    justifyContent: "center",
  },
  cardPressed: {
    opacity: 0.6,
    transform: [{ scale: 0.98 }],
  },
  cardText: {
    fontSize: 16,
    fontWeight: "600",
  },
});

export default Home;
