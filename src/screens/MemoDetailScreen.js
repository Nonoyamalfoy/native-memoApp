import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { CircleButton } from "../elements";

const styles = StyleSheet.create({
  container:{
    flex:1,
    width: "100%"
  },
  memoHeader: {
    height: 100,
    backgroundColor: "#17313c",
    justifyContent: "center",
    padding: 10
  },
  memoHeaderTitle:{
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 4
  },
  memoHeaderDate:{
    fontSize: 12,
    color: "#fff"
  },
  memoContents:{
    paddingTop: 30,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "#fff",
    flex: 1
  },
  editButton: {
    top: 75,
  }
});

const MemoDetailScreen = () => {
  return(
    <View style={styles.container}>
      <View>
        <View style={styles.memoHeader}>
          <View>
            <Text style={styles.memoHeaderTitle}>講義のアイデア</Text>
            <Text style={styles.memoHeaderDate}>2020/08/07</Text>
          </View>
        </View>
      </View>

      <View style={styles.memoContents}>
        <Text>
          講義のアイデアです。
        </Text>
      </View>
      <CircleButton style={styles.editButton} color="white">+</CircleButton>
    </View>
  )
}

export default MemoDetailScreen;