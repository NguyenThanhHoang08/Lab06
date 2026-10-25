import React from "react";
import { View, Text, Image, Pressable, StyleSheet, SafeAreaView } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SelectPhoneParamList } from "./SelectPhoneApp";
import { formatPrice } from "../theme";
import { Stars } from "../components/Stars";
import { Phone } from "../types";
import { PHONE_COLORS } from "../data/phones";

type Props = NativeStackScreenProps<SelectPhoneParamList, "Product"> & {
  phone: Phone;
};

export function ProductScreen({ navigation, route, phone }: Props) {
  const picked = route.params?.color;
  const shown = picked ?? phone.defaultColor;
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.imageWrap}>
        <Image source={PHONE_COLORS[shown].image} style={styles.image} resizeMode="contain" />
      </View>
      <View style={styles.info}>
        <Text style={styles.name}>{phone.name}</Text>
        <View style={styles.row}>
          <Stars value={phone.rating} />
          <Text style={styles.review}>(Xem {phone.reviewCount} đánh giá)</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.price}>{formatPrice(phone.price)}</Text>
          <Text style={styles.oldPrice}>{formatPrice(phone.oldPrice)}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.badge}>{phone.badge}</Text>
        </View>
 
        {/* ===== TODO 1 + TODO 2 ở bên dưới ===== */}
        <Pressable 
          style={styles.chooseBtn} 
          onPress={() => navigation.navigate("ChooseColor", { color: picked })}
        >
          <Text style={styles.chooseBtnText}>
            {picked ? "4 MÀU-CHỌN LOẠI" : "4 MÀU-CHỌN MÀU"}
          </Text>
          <Text style={styles.arrow}>&gt;</Text>
        </Pressable>

        <Pressable style={styles.buyBtn} onPress={() => {}}>
            <Text style={styles.buyBtnText}>CHỌN MUA</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    root: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  imageWrap: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "80%",
    height: "80%",
  },
  info: {
    marginBottom: 16,
  },
  name: {
    fontSize: 16,
    fontWeight: "500",
    color: "#1F2430",
    marginBottom: 8,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  review: {
    marginLeft: 12,
    color: "#6B7280",
    fontSize: 14,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#E53A2F",
    marginRight: 16,
  },
  oldPrice: {
    fontSize: 14,
    color: "#6B7280",
    textDecorationLine: "line-through",
  },
  badge: {
    fontSize: 12,
    color: "#E53A2F",
    fontWeight: "bold",
  },
  chooseBtn: {
    height: 44,
    borderWidth: 1,
    borderColor: "#C4C4C4",
    borderRadius: 6,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 12,
    position: "relative",
  },
  chooseBtnText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#1F2430",
  },
  arrow: {
    position: "absolute",
    right: 16,
    fontSize: 16,
    fontWeight: "bold",
    color: "#1F2430",
  },
  buyBtn: {
    backgroundColor: "#E53A2F",
    height: 48,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
  },
  buyBtnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
})