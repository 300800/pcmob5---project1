import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { commonStyles } from "../styles/commonStyles";
import { useSelector } from "react-redux";

export default function IndexScreen({ navigation }) {
  const isDarkModeOn = useSelector((state)) => 
  return (
    <View style={commonStyles.container}>
      <Text>Index Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
