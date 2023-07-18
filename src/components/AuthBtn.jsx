import { StyleSheet, Text, TouchableOpacity } from "react-native";

export const AuthBtn = ({ text }) => {
  return (
    <TouchableOpacity style={styles.btn} activeOpacity={0.5}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    marginTop: 43,
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 100,
    backgroundColor: "#FF6C00",
  },
  text: {
    alignSelf: "center",
    fontFamily: "Roboto-Regular",
    color: "#ffffff",
    fontSize: 16,
    lineHeight: 19,
  },
});
