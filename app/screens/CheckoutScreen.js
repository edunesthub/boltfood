import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function CheckoutScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Checkout</Text>
        <View style={{ width: 44 }} />
      </View>

      <View style={styles.content}>
        {/* Success Icon */}
        <View style={styles.iconContainer}>
          <View style={styles.successCircle}>
            <Ionicons name="checkmark" size={48} color="#00D9A5" />
          </View>
        </View>

        <Text style={styles.title}>Payment Integration</Text>
        <Text style={styles.subtitle}>
          This feature is coming soon. Payment processing will be integrated in the next update.
        </Text>

        {/* Payment Methods Preview */}
        <View style={styles.methodsContainer}>
          <View style={styles.methodItem}>
            <Ionicons name="card-outline" size={24} color="#4A5568" />
            <Text style={styles.methodText}>Credit/Debit Card</Text>
          </View>
          <View style={styles.methodItem}>
            <Ionicons name="phone-portrait-outline" size={24} color="#4A5568" />
            <Text style={styles.methodText}>Mobile Money</Text>
          </View>
          <View style={styles.methodItem}>
            <Ionicons name="wallet-outline" size={24} color="#4A5568" />
            <Text style={styles.methodText}>Digital Wallet</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.buttonText}>Back to Home</Text>
        </TouchableOpacity>
      </View>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#1A1F36',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  iconContainer: {
    marginBottom: 32,
  },
  successCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#1A1F36',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: '#00D9A5',
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: 12,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#4A5568',
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 24,
  },
  methodsContainer: {
    width: '100%',
    marginBottom: 40,
  },
  methodItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1A1F36',
    padding: 20,
    borderRadius: 16,
    marginBottom: 12,
    gap: 16,
  },
  methodText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  button: {
    backgroundColor: '#00D9A5',
    paddingHorizontal: 40,
    paddingVertical: 18,
    borderRadius: 16,
    width: '100%',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '800',
    color: '#0A0E27',
    textAlign: 'center',
  },
});