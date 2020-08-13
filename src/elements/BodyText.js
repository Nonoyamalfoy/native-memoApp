import React from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  text: {
    color: "white",
    backgroundColor: "#ccc"
  }
})

const BodyText = (props) => {
  return(
    <View style={styles.text}>
      <Text>
        {props.children}
      </Text>
    </View>
  )
}

export default BodyText;