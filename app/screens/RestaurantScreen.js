import { View, Text, FlatList } from "react-native";
import { restaurants } from "../data/restaurants";
import MealCard from "../components/MealCard";

export default function RestaurantScreen({ route, navigation }) {
  const { id } = route.params;
  const restaurant = restaurants.find((r) => r.id === id);

  return (
    <View style={{ flex: 1, paddingTop: 60, paddingHorizontal: 20, backgroundColor: "#f5f5f5" }}>
      <Text style={{ fontSize: 28, fontWeight: "700", marginBottom: 10 }}>{restaurant.name}</Text>
      <Text style={{ color: "#777", marginBottom: 20 }}>
        {restaurant.deliveryTime} • {restaurant.price} • ⭐ {restaurant.rating}
      </Text>

      <FlatList
        data={restaurant.meals}
        keyExtractor={(m) => m.id}
        renderItem={({ item }) => (
          <MealCard
            meal={item}
            onPress={() =>
              navigation.navigate("Cart", {
                name: item.name,
                price: item.price,
                restaurant: restaurant.name,
              })
            }
          />
        )}
      />
    </View>
  );
}