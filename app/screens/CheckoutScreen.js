import { View, Text } from "react-native";

export default function CheckoutScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#f5f5f5" }}>
      <Text style={{ fontSize: 28, fontWeight: "700" }}>Checkout</Text>
      <Text style={{ marginTop: 20, color: "#777", fontSize: 18 }}>Payment integration coming soon</Text>
    </View>
  );
}