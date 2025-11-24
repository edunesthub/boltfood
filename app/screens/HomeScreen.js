import { View, Text, FlatList, TextInput } from "react-native";
import { restaurants } from "../data/restaurants";
import RestaurantCard from "../components/RestaurantCard";

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, paddingTop: 60, paddingHorizontal: 20, backgroundColor: "#f5f5f5" }}>
      <Text style={{ fontSize: 32, fontWeight: "700", marginBottom: 20 }}>Discover</Text>

      <TextInput
        placeholder="Search restaurants or meals"
        style={{
          backgroundColor: "#fff",
          padding: 12,
          borderRadius: 12,
          marginBottom: 20,
          fontSize: 16,
        }}
      />

      <FlatList
        data={restaurants}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <RestaurantCard
            restaurant={item}
            onPress={() => navigation.navigate("Restaurant", { id: item.id })}
          />
        )}
      />
    </View>
  );
}