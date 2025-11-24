import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function CartScreen({ route, navigation }) {
  const { name, price, restaurant } = route.params || {};

  const subtotal = price || 0;
  const delivery = 5;
  const total = subtotal + delivery;

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Your Cart</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {name ? (
          <>
            {/* Cart Item */}
            <View style={styles.cartItem}>
              <View style={styles.itemIcon}>
                <Ionicons name="fast-food" size={32} color="#00D9A5" />
              </View>
              <View style={styles.itemInfo}>
                <Text style={styles.itemName}>{name}</Text>
                <Text style={styles.restaurantName}>{restaurant}</Text>
              </View>
              <Text style={styles.itemPrice}>₵{price}</Text>
            </View>

            {/* Summary */}
            <View style={styles.summaryCard}>
              <View style={styles.summaryRow}>
                <Text style={styles.summaryLabel}>Subtotal</Text>
                <Text style={styles.summaryValue}>₵{subtotal}</Text>
              </View>
              <View style={styles.summaryRow}>
                <Text style={styles.summaryLabel}>Delivery Fee</Text>
                <Text style={styles.summaryValue}>₵{delivery}</Text>
              </View>
              <View style={styles.divider} />
              <View style={styles.summaryRow}>
                <Text style={styles.totalLabel}>Total</Text>
                <Text style={styles.totalValue}>₵{total}</Text>
              </View>
            </View>
          </>
        ) : (
          <View style={styles.emptyCart}>
            <View style={styles.emptyIcon}>
              <Ionicons name="cart-outline" size={64} color="#4A5568" />
            </View>
            <Text style={styles.emptyText}>Your cart is empty</Text>
            <Text style={styles.emptySubtext}>
              Add items from restaurants to get started
            </Text>
          </View>
        )}
      </ScrollView>

      {/* Checkout Button */}
      {name && (
        <View style={styles.footer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Checkout")}
            style={styles.checkoutButton}
          >
            <Text style={styles.checkoutText}>Proceed to Checkout</Text>
            <Text style={styles.checkoutPrice}>₵{total}</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0E27',
  },
  header: {
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1A1F36',
    padding: 16,
    borderRadius: 16,
    marginBottom: 20,
  },
  itemIcon: {
    width: 60,
    height: 60,
    borderRadius: 12,
    backgroundColor: '#0A0E27',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  itemInfo: {
    flex: 1,
  },
  itemName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  restaurantName: {
    fontSize: 14,
    color: '#4A5568',
  },
  itemPrice: {
    fontSize: 20,
    fontWeight: '800',
    color: '#00D9A5',
  },
  summaryCard: {
    backgroundColor: '#1A1F36',
    padding: 20,
    borderRadius: 16,
    marginBottom: 20,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  summaryLabel: {
    fontSize: 16,
    color: '#4A5568',
  },
  summaryValue: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  divider: {
    height: 1,
    backgroundColor: '#2D3748',
    marginVertical: 12,
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  totalValue: {
    fontSize: 20,
    fontWeight: '800',
    color: '#00D9A5',
  },
  emptyCart: {
    alignItems: 'center',
    paddingTop: 100,
  },
  emptyIcon: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#1A1F36',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  emptyText: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  emptySubtext: {
    fontSize: 16,
    color: '#4A5568',
    textAlign: 'center',
  },
  footer: {
    paddingHorizontal: 20,
    paddingBottom: 100,
    paddingTop: 20,
  },
  checkoutButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#00D9A5',
    padding: 20,
    borderRadius: 16,
  },
  checkoutText: {
    fontSize: 18,
    fontWeight: '800',
    color: '#0A0E27',
  },
  checkoutPrice: {
    fontSize: 18,
    fontWeight: '800',
    color: '#0A0E27',
  },
});