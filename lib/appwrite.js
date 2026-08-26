import { Client, Account, Databases } from 'react-native-appwrite';
import 'react-native-url-polyfill/auto';

const client = new Client()
    .setProject("sawom69")
    .setEndpoint("https://sgp.cloud.appwrite.io/v1");

export const account = new Account(client);
export const databases = new Databases(client);

export default client;