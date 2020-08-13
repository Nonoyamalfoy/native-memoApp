import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {MemoList, Appbar} from "./src/components";
import {CircleButton} from "./src/elements";
import {MemoListScreen, MemoDetailScreen} from "./src/screens";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFDF6",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 78
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Appbar/>
      <MemoDetailScreen/>
    </View>
  );
}


