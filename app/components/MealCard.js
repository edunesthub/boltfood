import { View, Text, TouchableOpacity } from "react-native";

export default function MealCard({ meal, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        padding: 15,
        marginBottom: 15,
        backgroundColor: "#fff",
        borderRadius: 12,
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2,
      }}
    >
      <Text style={{ fontSize: 18, fontWeight: "600" }}>{meal.name}</Text>
      <Text style={{ marginTop: 5, fontSize: 16 }}>₵{meal.price}</Text>
    </TouchableOpacity>
  );
}