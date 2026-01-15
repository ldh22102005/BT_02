import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useState } from "react";

export default function App() {
  const [phone, setPhone] = useState("");

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      {/* Tiêu đề */}
      <Text style={styles.title}>Đăng nhập</Text>

      <View style={styles.content}>
        <Text style={styles.label}>Nhập số điện thoại</Text>

        <Text style={styles.desc}>
          Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản tại
          OneHousing Pro
        </Text>

        {/* Input số điện thoại */}
        <TextInput
          style={styles.input}
          placeholder="Nhập số điện thoại của bạn"
          keyboardType="number-pad"
          value={phone}
          onChangeText={setPhone}
        />
      </View>

      {/* Nút tiếp tục */}
      <TouchableOpacity
        style={[
          styles.button,
          phone.length === 0 && styles.buttonDisabled,
        ]}
        disabled={phone.length === 0}
      >
        <Text style={styles.buttonText}>Tiếp tục</Text>
      </TouchableOpacity>

      <StatusBar style="dark" />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 30,
  },
  content: {
    flex: 1,
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 6,
  },
  desc: {
    fontSize: 14,
    color: "#666",
    marginBottom: 20,
  },
  input: {
    height: 45,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    fontSize: 16,
  },
  button: {
    height: 48,
    backgroundColor: "#dcdcdc",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  buttonDisabled: {
    backgroundColor: "#eee",
  },
  buttonText: {
    fontSize: 16,
    color: "#999",
    fontWeight: "500",
  },
});
