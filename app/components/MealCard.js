import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function MealCard({ meal, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.card}
      activeOpacity={0.9}
    >
      <View style={styles.content}>
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{meal.name}</Text>
          <Text style={styles.price}>₵{meal.price}</Text>
        </View>
        
        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="add" size={24} color="#0A0E27" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1A1F36',
    borderRadius: 16,
    marginBottom: 16,
    overflow: 'hidden',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  infoContainer: {
    flex: 1,
    marginRight: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 6,
  },
  price: {
    fontSize: 20,
    fontWeight: '800',
    color: '#00D9A5',
  },
  addButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#00D9A5',
    justifyContent: 'center',
    alignItems: 'center',
  },
});