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
            <Ionicons name="star" size={14} color="#FBBF24" />
            <Text style={styles.rating}>{restaurant.rating}</Text>
          </View>
        </View>
        
        <View style={styles.metaContainer}>
          <View style={styles.metaItem}>
            <Ionicons name="time-outline" size={14} color="#6B7280" />
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
    borderRadius: 24,
    backgroundColor: 'rgba(31, 41, 55, 0.6)',
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(75, 85, 99, 0.3)',
  },
  image: {
    width: '100%',
    height: 200,
    backgroundColor: '#374151',
  },
  promoBadge: {
    position: 'absolute',
    top: 16,
    right: 16,
    backgroundColor: '#10B981',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  promoText: {
    color: '#111827',
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
    color: '#F9FAFB',
    flex: 1,
    marginRight: 12,
  },
  ratingBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(17, 24, 39, 0.8)',
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
    color: '#6B7280',
    fontWeight: '600',
  },
  divider: {
    color: '#6B7280',
    fontSize: 14,
  },
});