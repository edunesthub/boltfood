import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { restaurants } from "../data/restaurants";
import RestaurantCard from "../components/RestaurantCard";

const categories = [
  { id: 'all', name: 'All', icon: 'restaurant' },
  { id: 'pizza', name: 'Pizza', icon: 'pizza' },
  { id: 'burger', name: 'Burgers', icon: 'fast-food' },
  { id: 'asian', name: 'Asian', icon: 'fish' },
  { id: 'dessert', name: 'Dessert', icon: 'ice-cream' },
];

export default function HomeScreen({ navigation }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <View style={styles.container}>
      {/* Premium Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Good afternoon</Text>
          <View style={styles.locationRow}>
            <Ionicons name="location" size={16} color="#00D9A5" />
            <Text style={styles.location}>East Legon, Accra</Text>
            <Ionicons name="chevron-down" size={16} color="#4A5568" />
          </View>
        </View>
        <TouchableOpacity style={styles.notificationBtn}>
          <Ionicons name="heart-outline" size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      {/* Premium Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#4A5568" />
        <TextInput
          placeholder="Search restaurants or dishes"
          placeholderTextColor="#4A5568"
          value={searchQuery}
          onChangeText={setSearchQuery}
          style={styles.searchInput}
        />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Categories */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categoriesScroll}
          contentContainerStyle={styles.categoriesContainer}
        >
          {categories.map((cat) => (
            <TouchableOpacity
              key={cat.id}
              onPress={() => setSelectedCategory(cat.id)}
              style={[
                styles.categoryChip,
                selectedCategory === cat.id && styles.categoryChipActive,
              ]}
            >
              <Ionicons
                name={cat.icon}
                size={18}
                color={selectedCategory === cat.id ? '#0A0E27' : '#FFFFFF'}
              />
              <Text
                style={[
                  styles.categoryText,
                  selectedCategory === cat.id && styles.categoryTextActive,
                ]}
              >
                {cat.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Section Header */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Featured Restaurants</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See all</Text>
          </TouchableOpacity>
        </View>

        {/* Restaurant List */}
        {restaurants.map((item) => (
          <RestaurantCard
            key={item.id}
            restaurant={item}
            onPress={() => navigation.navigate("Restaurant", { id: item.id })}
          />
        ))}

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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greeting: {
    fontSize: 16,
    color: '#4A5568',
    marginBottom: 4,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  location: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  notificationBtn: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#1A1F36',
    justifyContent: 'center',
    alignItems: 'center',
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
  categoriesScroll: {
    marginBottom: 32,
  },
  categoriesContainer: {
    paddingHorizontal: 20,
  },
  categoryChip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1A1F36',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 24,
    marginRight: 12,
    gap: 8,
  },
  categoryChipActive: {
    backgroundColor: '#00D9A5',
  },
  categoryText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  categoryTextActive: {
    color: '#0A0E27',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  seeAll: {
    fontSize: 15,
    color: '#00D9A5',
    fontWeight: '700',
  },
});