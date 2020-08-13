import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {MemoList} from "../components/index";
import {CircleButton} from "../elements/index";

const styles = StyleSheet.create({
  container:{
    flex:1,
    width: "100%"
  },
})

const MemoListScreen = () => {
  return(
    <View style={styles.container}>
      <MemoList/>
      <CircleButton>+</CircleButton>
    </View>
  )
}

export default MemoListScreen;