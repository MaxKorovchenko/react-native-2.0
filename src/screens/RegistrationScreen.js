import { Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

import bg from "../assets/images/bg.jpg";
import { AuthBtn } from "../components/AuthBtn";

export const RegistrationScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={bg} style={styles.background}>
        <View style={styles.form}>
          <Text style={styles.title}>Реєстрація</Text>

          <View style={styles.inputWrapper}>
            <TextInput style={styles.input} placeholder="Логін" />
            <TextInput style={styles.input} placeholder="Адреса електронної пошти" />
            <TextInput style={styles.input} secureTextEntry={true} placeholder="Пароль" />
          </View>

          <AuthBtn text="Зареєстуватися" />

          <TouchableOpacity>
            <Text style={styles.link}>Вже є акаунт? Увійти</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  form: {
    padding: 16,
    backgroundColor: "#fff",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  title: {
    marginTop: 92,
    color: "#212121",
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: 30,
    lineHeight: 35,
    letterSpacing: 0.3,
  },
  inputWrapper: {
    gap: 16,
    marginTop: 33,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",

    padding: 16,
    color: "#212121",
    fontFamily: "Roboto",
    fontSize: 16,
  },
  link: {
    marginTop: 16,
    marginBottom: 78,
    textAlign: "center",
    // fontFamily: "Roboto-Regular",
    color: "#1B4371",
    fontSize: 16,
    lineHeight: 19,
  },
});
