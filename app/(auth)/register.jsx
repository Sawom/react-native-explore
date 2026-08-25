import { Pressable, StyleSheet, Text } from 'react-native'
import { Link } from 'expo-router'

import ThemedView from "../../components/ThemedView.jsx"
import ThemedText from "../../components/ThemedText.jsx"
import Spacer from "../../components/Spacer.jsx"
import ThemedButton from '../../components/ThemedButton.jsx'

const Register = () => {

  const handleSubmit = async () => {
    console.log('register form submitted')
  }

  return (
    <ThemedView style={styles.container}>

      <Spacer />
      <ThemedText title={true} style={styles.title}>
        Register an Account
      </ThemedText>

      {/* <Pressable
        onPress={handleSubmit}
        style={({ pressed }) => [styles.btn, pressed && styles.pressed]}
      >
        <Text style={{color: "#f2f2f2"}}>Register</Text>
      </Pressable> */}

      <ThemedButton onPress={handleSubmit}>
        <Text style={{ color: '#f2f2f2' }}>Register</Text>
      </ThemedButton>

      <Spacer height={100} />
      <Link href="/login" replace>
        <ThemedText style={{ textAlign: "center" }}>
          Login instead
        </ThemedText>
      </Link>

    </ThemedView>
  )
}

export default Register

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    marginBottom: 30
  },
})