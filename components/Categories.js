import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import CategoryCard from './CategoryCard';

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/* CategoryCard */}
      <CategoryCard
        title="Offers"
        imgUrl={require('../assets/categories/offers.webp')} 
      />
      
      <CategoryCard 
        title="" 
        imgUrl={require('../assets/categories/category-2.jpg')}
      />

      <CategoryCard 
        title=""
        imgUrl={require('../assets/categories/burgers.jpg')}
      />

      <CategoryCard
        title=""
        imgUrl={require('../assets/categories/category-4.png')}
      />
    </ScrollView>
  )
}

export default Categories;