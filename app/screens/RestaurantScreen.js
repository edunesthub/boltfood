import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { restaurants } from "../data/restaurants";
import MealCard from "../components/MealCard";

export default function RestaurantScreen({ route, navigation }) {
  const { id } = route.params;
  const restaurant = restaurants.find((r) => r.id === id);

  return (
    <View style={styles.container}>
      {/* Hero Image with Back Button */}
      <View style={styles.heroContainer}>
        <Image
          source={{ uri: restaurant.image }}
          style={styles.heroImage}
          resizeMode="cover"
        />
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="#F9FAFB" />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.favoriteButton}>
          <Ionicons name="heart-outline" size={24} color="#F9FAFB" />
        </TouchableOpacity>
      </View>

      {/* Restaurant Info */}
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{restaurant.name}</Text>
        
        <View style={styles.metaContainer}>
          <View style={styles.ratingBadge}>
            <Ionicons name="star" size={16} color="#FBBF24" />
            <Text style={styles.rating}>{restaurant.rating}</Text>
          </View>
          <Text style={styles.divider}>•</Text>
          <Ionicons name="time-outline" size={16} color="#6B7280" />
          <Text style={styles.metaText}>{restaurant.deliveryTime}</Text>
          <Text style={styles.divider}>•</Text>
          <Text style={styles.metaText}>{restaurant.price}</Text>
        </View>

        {/* Menu Header */}
        <Text style={styles.menuTitle}>Popular Dishes</Text>
      </View>

      {/* Meals List */}
      <FlatList
        data={restaurant.meals}
        keyExtractor={(m) => m.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.mealsList}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111827',
  },
  heroContainer: {
    position: 'relative',
    height: 300,
  },
  heroImage: {
    width: '100%',
    height: '100%',
    backgroundColor: '#374151',
  },
  backButton: {
    position: 'absolute',
    top: 60,
    left: 20,
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(31, 41, 55, 0.9)',
    borderWidth: 1,
    borderColor: 'rgba(16, 185, 129, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  favoriteButton: {
    position: 'absolute',
    top: 60,
    right: 20,
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(31, 41, 55, 0.9)',
    borderWidth: 1,
    borderColor: 'rgba(16, 185, 129, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoContainer: {
    padding: 20,
  },
  name: {
    fontSize: 28,
    fontWeight: '800',
    color: '#F9FAFB',
    marginBottom: 12,
  },
  metaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 32,
  },
  ratingBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(31, 41, 55, 0.6)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    gap: 4,
    borderWidth: 1,
    borderColor: 'rgba(251, 191, 36, 0.2)',
  },
  rating: {
    fontSize: 14,
    fontWeight: '700',
    color: '#F9FAFB',
  },
  metaText: {
    fontSize: 14,
    color: '#6B7280',
    fontWeight: '600',
  },
  divider: {
    color: '#6B7280',
    fontSize: 14,
  },
  menuTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#F9FAFB',
  },
  mealsList: {
    paddingHorizontal: 20,
    paddingBottom: 120,
  },
});