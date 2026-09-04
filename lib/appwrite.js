import { Client, Account, Avatars, Databases } from "react-native-appwrite";
import "react-native-url-polyfill/auto";

const client = new Client()
  .setProject("sawom69")
  .setEndpoint("https://sgp.cloud.appwrite.io/v1")
  .setProject("67c5d24d000f9172f860")
  .setPlatform("dev.netninja.sheflie");

export const account = new Account(client);
export const databases = new Databases(client);
export const avatars = new Avatars(client);

export default client;
