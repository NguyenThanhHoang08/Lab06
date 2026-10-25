import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { colors } from "../theme";

interface ErrorBoxProps {
  message: string;
  onRetry: () => void;
}

export function ErrorBox({ message, onRetry }: ErrorBoxProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đã có lỗi xảy ra</Text>
      <Text style={styles.message}>{message}</Text>
      <Pressable style={styles.retryBtn} onPress={onRetry}>
        <Text style={styles.retryText}>THỬ LẠI</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 24,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.red,
    marginBottom: 8,
  },
  message: {
    fontSize: 14,
    color: colors.muted,
    textAlign: "center",
    marginBottom: 20,
  },
  retryBtn: {
    backgroundColor: colors.blue,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 6,
  },
  retryText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
});