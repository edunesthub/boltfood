import { View, Text, Image, TouchableOpacity } from "react-native";

export default function RestaurantCard({ restaurant, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        marginBottom: 20,
        borderRadius: 15,
        overflow: "hidden",
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 3,
      }}
    >
      <Image
        source={{ uri: restaurant.image }}
        style={{ width: "100%", height: 180 }}
      />
      <View style={{ padding: 15 }}>
        <Text style={{ fontSize: 20, fontWeight: "700" }}>{restaurant.name}</Text>
        <Text style={{ color: "#777", marginTop: 5 }}>
          {restaurant.deliveryTime} • {restaurant.price} • ⭐ {restaurant.rating}
        </Text>
      </View>
    </TouchableOpacity>
  );
}