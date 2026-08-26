import { StyleSheet, ScrollView } from "react-native";
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
        showsVerticalScrollIndicator={false} // to hide left right scroll
      >
        <ThemedLogo />
        <Spacer />

        <ThemedText style={styles.title} title={true}>
          The Number 1
        </ThemedText>

        <ThemedText style={{ marginTop: 10, marginBottom: 30 }}>
          Reading List App
        </ThemedText>

        <Link href="/about" style={styles.link}>
          <ThemedText>About Page</ThemedText>
        </Link>

        <Link href="/contact" style={styles.link}>
          <ThemedText>Contact Page</ThemedText>
        </Link>

        <Link href="/login" style={styles.link}>
          <ThemedText>Login</ThemedText>
        </Link>

        <Link href="/register" style={styles.link}>
          <ThemedText>Register</ThemedText>
        </Link>

        <Link href="/profile" style={styles.link}>
          <ThemedText> Profile </ThemedText>
        </Link>
      </ScrollView>
    </ThemedView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    marginVertical: 20,
  },
  scrollContent: {
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  link: {
    marginVertical: 10,
    textDecorationLine: "none",
  },
});
