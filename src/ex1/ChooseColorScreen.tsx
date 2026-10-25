import React, { useState } from "react";
import { View, Text, Image, Pressable, StyleSheet, SafeAreaView } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SelectPhoneParamList } from "./SelectPhoneApp";
import { formatPrice } from "../theme"; // hoặc formatPrice từ theme
import { Phone, ColorKey } from "../types";
import { PHONE_COLORS } from "../data/phones";
import { COLOR_ORDER } from "../data/phones";

type Props = NativeStackScreenProps<SelectPhoneParamList, "ChooseColor"> & {
  phone: Phone;
};

export function ChooseColorScreen({ navigation, route, phone }: Props) {
  const [picked, setPicked] = useState<ColorKey | undefined>(route.params?.color);
  const [line1, line2] = phone.name.split(" - ");

  return (
    <SafeAreaView style={styles.root}>
      {/* Phần nửa trên: Ảnh nhỏ và thông tin sản phẩm */}
      <View style={styles.header}>
        <Image 
          source={PHONE_COLORS[picked ?? phone.defaultColor].image} 
          style={styles.thumb} 
          resizeMode="contain" 
        />
        <View style={styles.headerText}>
          <Text style={styles.small}>{line1}</Text>
          <Text style={styles.small}>{line2}</Text>
          
          {/* ===== TODO 3: Hiển thị thông tin chi tiết khi đã chọn màu ===== */}
          {picked && (
            <>
              <Text style={styles.detailText}>
                Màu: <Text style={styles.boldText}>{PHONE_COLORS[picked].label}</Text>
              </Text>
              <Text style={styles.detailText}>
                Cung cấp bởi <Text style={styles.boldText}>{phone.supplier}</Text>
              </Text>
              <Text style={styles.priceText}>{formatPrice(phone.price)}</Text>
            </>
          )}
        </View>
      </View>

      {/* Phần nửa dưới: Bảng chọn màu và nút XONG */}
      <View style={styles.body}>
        <Text style={styles.hint}>Chọn một màu bên dưới:</Text>
        <View style={styles.swatches}>
          {COLOR_ORDER.map((key) => (
            <Pressable 
              key={key} 
              onPress={() => setPicked(key)}
              style={[
                styles.swatch, 
                { backgroundColor: PHONE_COLORS[key].hex }, 
                picked === key && styles.swatchOn
              ]} 
            />
          ))}
        </View>

        {/* ===== TODO 4: Nút XONG để lưu màu và quay lại Product ===== */}
        <Pressable 
          style={styles.doneBtn}
          onPress={() => {
            navigation.navigate("Product", { color: picked });
          }}
        >
          <Text style={styles.doneBtnText}>XONG</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    padding: 16,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#C4C4C4",
  },
  thumb: {
    width: 112,
    height: 130,
    marginRight: 16,
  },
  headerText: {
    flex: 1,
    justifyContent: "center",
  },
  small: {
    fontSize: 14,
    color: "#1F2430",
    marginBottom: 4,
  },
  detailText: {
    fontSize: 14,
    color: "#1F2430",
    marginTop: 4,
  },
  boldText: {
    fontWeight: "bold",
  },
  priceText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1F2430",
    marginTop: 4,
  },
  body: {
    flex: 1,
    backgroundColor: "#C4C4C4",
    padding: 16,
    justifyContent: "space-between",
  },
  hint: {
    fontSize: 14,
    color: "#1F2430",
    marginBottom: 12,
  },
  swatches: {
    alignItems: "center",
    gap: 16,
    marginBottom: 20,
  },
  swatch: {
    width: 65,
    height: 65,
    backgroundColor: "#ccc",
  },
  swatchOn: {
    borderWidth: 3,
    borderColor: "#000",
  },
  doneBtn: {
    backgroundColor: "#195CB3",
    height: 48,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  doneBtnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});