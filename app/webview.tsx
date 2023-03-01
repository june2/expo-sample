import { Link, Stack, useLocalSearchParams, useSearchParams } from "expo-router";
import { StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";
import { WebView } from "react-native-webview";

export default function WebviewScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "노션" }} />
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <WebView
          style={styles.container}
          source={{
            uri: "https://same-chestnut-194.notion.site/1-736ef6ace52b454eaf5a1d15fe17b384",
          }}
        />
        <View>
          <Text>좋아요</Text>
        </View>
      </View>
      {/* <WebView
          style={styles.container}
          source={{
            uri: "https://same-chestnut-194.notion.site/1-736ef6ace52b454eaf5a1d15fe17b384",
          }}
        /> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    top: -50,
    // padding: 20,
    height: "90%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
