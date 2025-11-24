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
          <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.favoriteButton}>
          <Ionicons name="heart-outline" size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      {/* Restaurant Info */}
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{restaurant.name}</Text>
        
        <View style={styles.metaContainer}>
          <View style={styles.ratingBadge}>
            <Ionicons name="star" size={16} color="#FFB800" />
            <Text style={styles.rating}>{restaurant.rating}</Text>
          </View>
          <Text style={styles.divider}>•</Text>
          <Ionicons name="time-outline" size={16} color="#4A5568" />
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
    backgroundColor: '#0A0E27',
  },
  heroContainer: {
    position: 'relative',
    height: 300,
  },
  heroImage: {
    width: '100%',
    height: '100%',
    backgroundColor: '#2D3748',
  },
  backButton: {
    position: 'absolute',
    top: 60,
    left: 20,
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(26, 31, 54, 0.9)',
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
    backgroundColor: 'rgba(26, 31, 54, 0.9)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoContainer: {
    padding: 20,
  },
  name: {
    fontSize: 28,
    fontWeight: '800',
    color: '#FFFFFF',
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
    backgroundColor: '#1A1F36',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    gap: 4,
  },
  rating: {
    fontSize: 14,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  metaText: {
    fontSize: 14,
    color: '#4A5568',
    fontWeight: '600',
  },
  divider: {
    color: '#4A5568',
    fontSize: 14,
  },
  menuTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  mealsList: {
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
});