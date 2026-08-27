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
          <ThemedLogo />
          <Spacer />

          <ThemedText style={styles.title} title={true}>
            The Number 1
          </ThemedText>

          <ThemedText style={styles.subtitle}>Reading List App</ThemedText>
        </View>

        {/* Navigation Cards */}
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
                styles.primaryCard,
                pressed && styles.cardPressed,
              ]}
            >
              <ThemedText style={[styles.cardText, styles.primaryCardText]}>
                Login
              </ThemedText>
            </Pressable>
          </Link>

          <Link href="/register" asChild>
            <Pressable
              style={({ pressed }) => [
                styles.card,
                styles.outlineCard,
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
    paddingVertical: 40,
    alignItems: "center",
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitle: {
    marginTop: 6,
    fontSize: 16,
    opacity: 0.7,
    textAlign: "center",
  },
  menuContainer: {
    width: "100%",
    gap: 12, // প্রতিটি লিঙ্কের মাঝে সমান গ্যাপ
  },
  card: {
    width: "100%",
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 14,
    backgroundColor: "rgba(150, 150, 150, 0.08)", // সাবটল শ্যাডো/কার্ড ফিল
    borderWidth: 1,
    borderColor: "rgba(150, 150, 150, 0.15)",
    alignItems: "center",
    justifyContent: "center",
  },
  cardPressed: {
    opacity: 0.7,
    transform: [{ scale: 0.98 }], // টাচ করলে হালকা চেপে যাবে (UI Feedback)
  },
  cardText: {
    fontSize: 16,
    fontWeight: "600",
  },
  primaryCard: {
    backgroundColor: "#007AFF", // মেইন অ্যাকশন বাটন হিসেবে Login কে হাইলাইট করা
    borderColor: "#007AFF",
  },
  primaryCardText: {
    color: "#FFFFFF",
  },
  outlineCard: {
    borderWidth: 1.5,
    borderColor: "#007AFF",
  },
});

export default Home;
