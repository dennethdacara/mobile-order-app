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
        title="Category 1" 
        imgUrl="https://mgi-deliveryportal.s3.amazonaws.com/Regular%20Whole%20Fried%20Chicken%20(Top)%20PWA%20DESKTOP%20680x510%2001.jpg" 
      />
      
      <CategoryCard 
        title="Category 2" 
        imgUrl="https://mgi-deliveryportal.s3.amazonaws.com/Crispy%20Pata%20PWA%20DESKTOP%20680x510%2001.jpg" 
      />

      <CategoryCard 
        title="Category 3" 
        imgUrl="https://mgi-deliveryportal.s3.amazonaws.com/PWA%20-%20All-Beef%20Kare-Kare.png" 
      />

      <CategoryCard 
        title="Category 4" 
        imgUrl="https://mgi-deliveryportal.s3.amazonaws.com/PWA%20-%20Pancit%20Canton.png" 
      />

      <CategoryCard 
        title="Category 5" 
        imgUrl="https://mgi-deliveryportal.s3.amazonaws.com/Sizzling%20Tofu%20-%20PWA%20Desktop%20-%20680x510.png" 
      />
    </ScrollView>
  )
}

export default Categories;