import { StyleSheet, Text, View, Image } from 'react-native'
import logo from '../assets/logo.png'

const Home = () => {
  return (
    <View style={styles.container}>
        <Image source={logo} style={styles.img} ></Image>
        <Text style={styles.title} >The Number 1</Text>
        {/* inline css */}
        <Text style={{ marginTop: 10, marginBottom: 30 }}> listing app </Text>

        {/* card */}
        <View style={styles.card}>
            <Text>Hello, this is a Card</Text>
        </View>
    </View>
  )
}
export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    title: {
        fontWeight: 'bold',
        fotSize: 38
    },

    card: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 5,
        boxShadow: "4px 4px rgba(0,0,0,0.1)"
    },

    img: {
        marginVertical: 20
    },
})