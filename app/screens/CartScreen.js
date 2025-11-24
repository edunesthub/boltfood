import { View, Text, TouchableOpacity } from "react-native";

export default function CartScreen({ route, navigation }) {
  const { name, price, restaurant } = route.params || {};

  return (
    <View style={{ flex: 1, paddingTop: 60, paddingHorizontal: 20, backgroundColor: "#f5f5f5" }}>
      <Text style={{ fontSize: 28, fontWeight: "700", marginBottom: 20 }}>Your Cart</Text>

      {name ? (
        <View style={{ padding: 15, backgroundColor: "#fff", borderRadius: 12, marginBottom: 20 }}>
          <Text style={{ fontSize: 20, fontWeight: "600" }}>{name}</Text>
          <Text style={{ marginTop: 5, fontSize: 18 }}>₵{price}</Text>
        </View>
      ) : (
        <Text style={{ fontSize: 18, color: "#777" }}>Cart is empty</Text>
      )}

      <TouchableOpacity
        onPress={() => navigation.navigate("Checkout")}
        style={{ backgroundColor: "#00cc66", padding: 20, borderRadius: 12 }}
      >
        <Text style={{ textAlign: "center", color: "#fff", fontSize: 20 }}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );
}