import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import RestaurantCard from './RestaurantCard';

const FeaturedRow = ({ title, description, featuredCategory }) => {
  return (
    <View>
        <View className="mt-4 flex-row items-center justify-between px-4">
            <Text className="font-bold text-lg">{title}</Text>
            {/* <ArrowRightIcon color="#1B75BB" /> */}
        </View>

        <Text className="text-xs text-gray-500 px-4">
            {description}
        </Text>

        <ScrollView
            horizontal
            contentContainerStyle={{
                paddingHorizontal: 15
            }}
            showsHorizontalScrollIndicator={false}
            className="pt-4"
        >
            {/* Restaurant Cards */}
            <RestaurantCard 
                id={123}
                imgUrl={require('../assets/restaurants/doyles-diner.webp')} 
                title="Doyle's Diner"
                rating={4.5}
                genre="Fine Dining"
                address="6045 R. Palma St, Makati"
                short_description="Doyle's Diner is a family-friendly restaurant that serves breakfast, lunch and dinner and has a rich history and is involed in the local community."
                dishes={[]}
                long={20}
                lat={0}
            />

            <RestaurantCard 
                id={123}
                imgUrl={require('../assets/restaurants/maxs-restaurant.jpg')} 
                title="Max's Restaurant"
                rating={4.5}
                genre="Fine Dining"
                address="Makati, PH"
                short_description="The House That Fried Chicken Built."
                dishes={[]}
                long={20}
                lat={0}
            />

        </ScrollView>
    </View>
  )
}

export default FeaturedRow