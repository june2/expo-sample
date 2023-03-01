// import { StyleSheet } from 'react-native';

import { Link } from "expo-router";
import EditScreenInfo from "../../components/EditScreenInfo";
// import { Text, View } from '../../components/Themed';

import React from "react";
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from "react-native";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    link: "webview",
    title: "노션 웹뷰",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    link: "webview2",
    title: "브런치 웹뷰",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    link: "webview3",
    title: "미디엄 웹뷰",
  },
];

const Item = ({ title, link }) => (
  <View style={styles.item}>
    <Link href={link} asChild>
      <Text style={styles.title}>{title}</Text>
    </Link>
  </View>
);

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} link={item.link} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    // backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
