import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function RestaurantCard({ restaurant, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card} activeOpacity={0.9}>
      <Image
        source={{ uri: restaurant.image }}
        style={styles.image}
        resizeMode="cover"
      />
      
      {/* Promo Badge */}
      {restaurant.promo && (
        <View style={styles.promoBadge}>
          <Text style={styles.promoText}>{restaurant.promo}</Text>
        </View>
      )}
      
      {/* Info Container */}
      <View style={styles.infoContainer}>
        <View style={styles.header}>
          <Text style={styles.name} numberOfLines={1}>
            {restaurant.name}
          </Text>
          <View style={styles.ratingBadge}>
            <Ionicons name="star" size={14} color="#FFB800" />
            <Text style={styles.rating}>{restaurant.rating}</Text>
          </View>
        </View>
        
        <View style={styles.metaContainer}>
          <View style={styles.metaItem}>
            <Ionicons name="time-outline" size={14} color="#4A5568" />
            <Text style={styles.metaText}>{restaurant.deliveryTime}</Text>
          </View>
          <Text style={styles.divider}>•</Text>
          <Text style={styles.metaText}>{restaurant.price}</Text>
          {restaurant.tags && (
            <>
              <Text style={styles.divider}>•</Text>
              <Text style={styles.metaText} numberOfLines={1}>
                {restaurant.tags.join(', ')}
              </Text>
            </>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 20,
    backgroundColor: '#1A1F36',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
    backgroundColor: '#2D3748',
  },
  promoBadge: {
    position: 'absolute',
    top: 16,
    right: 16,
    backgroundColor: '#FF6B6B',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  promoText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  infoContainer: {
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  name: {
    fontSize: 20,
    fontWeight: '800',
    color: '#FFFFFF',
    flex: 1,
    marginRight: 12,
  },
  ratingBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0A0E27',
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
  metaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
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
});