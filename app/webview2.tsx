import { Link, Stack, useLocalSearchParams, useSearchParams } from "expo-router";
import { StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";
import { WebView } from "react-native-webview";

export default function WebviewScreen() {  
  return (
    <>
      <Stack.Screen options={{ title: "브런치" }} />
      <WebView
        style={styles.container}
        source={{ uri: "https://brunch.co.kr/@lada1719/30" }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: "#2e78b7",
  },
});
