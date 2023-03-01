import { Link, Stack, useLocalSearchParams, useSearchParams } from "expo-router";
import { StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";
import { WebView } from "react-native-webview";

export default function WebviewScreen() {
  // const { link } = useSearchParams();
  const { user, link } = useLocalSearchParams();

  console.log("test", link);
  return (
    <>
      <Stack.Screen options={{ title: "미디엄" }} />
      <WebView
        style={styles.container}
        source={{ uri: "https://blog.medium.com/what-were-reading-are-you-an-upstander-or-a-bystander-81f618ff072c" }}
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
