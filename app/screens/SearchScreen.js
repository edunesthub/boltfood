import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const recentSearches = ['KFC', 'Pizza', 'Burgers', 'Chinese'];
const popularSearches = ['Fast Food', 'Healthy', 'Breakfast', 'Dessert', 'Asian Cuisine'];

export default function SearchScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Search</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={22} color="#4A5568" />
        <TextInput
          placeholder="Search for restaurants or dishes"
          placeholderTextColor="#4A5568"
          style={styles.searchInput}
          autoFocus
        />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Recent Searches */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recent Searches</Text>
            <TouchableOpacity>
              <Text style={styles.clearText}>Clear all</Text>
            </TouchableOpacity>
          </View>
          
          {recentSearches.map((search, index) => (
            <TouchableOpacity key={index} style={styles.searchItem}>
              <View style={styles.searchIcon}>
                <Ionicons name="time-outline" size={20} color="#4A5568" />
              </View>
              <Text style={styles.searchText}>{search}</Text>
              <Ionicons name="arrow-forward" size={20} color="#4A5568" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Popular Searches */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Popular Searches</Text>
          
          <View style={styles.tagsContainer}>
            {popularSearches.map((tag, index) => (
              <TouchableOpacity key={index} style={styles.tag}>
                <Ionicons name="trending-up" size={16} color="#00D9A5" />
                <Text style={styles.tagText}>{tag}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={{ height: 100 }} />
      </ScrollView>
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1A1F36',
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginHorizontal: 20,
    marginBottom: 24,
    gap: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#FFFFFF',
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 32,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: 16,
  },
  clearText: {
    fontSize: 14,
    color: '#00D9A5',
    fontWeight: '700',
  },
  searchItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1A1F36',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  searchIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#0A0E27',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  searchText: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  tag: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1A1F36',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 24,
    gap: 8,
  },
  tagText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#FFFFFF',
  },
});