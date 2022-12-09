import { 
    View, 
    Text, 
    SafeAreaView, 
    Image,
    TextInput,
    ScrollView,
} from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from "@react-navigation/native";
import SafeViewAndroid from "../components/SafeViewAndroid";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";

import {
    UserIcon,
    ChevronDownIcon,
    MagnifyingGlassIcon,
    AdjustmentsHorizontalIcon
} from "react-native-heroicons/outline";

const HomeScreen = () => {
    const navigation = useNavigation();
    useLayoutEffect(() => {
      navigation.setOptions({
        // headerTitle: "Home",
        headerShown: false
      });
    }, []);

    return (
        <SafeAreaView style={SafeViewAndroid.AndroidSafeArea} className="bg-white pt-5">
            {/* Header */}
            <View className="flex-row pb-3 items-center mx-4 space-x-2">
                <Image 
                    source={{
                        uri: 'https://images.prismic.io/dbhq-deliveroo-riders-website/ed825791-0ba4-452c-b2cb-b5381067aad3_RW_hk_kit_importance.png?auto=compress,format&rect=0,0,1753,1816&w=1400&h=1450',
                    }}
                    className="h-7 w-7 bg-gray-300 p-4 rounded-full"
                />

                <View className="flex-1">
                    <Text className="font-bold text-gray-400 text-xs">Order Now!</Text>
                    <Text className="font-bold text-xl">
                        Mosaic Beta v1
                        <ChevronDownIcon size={20} color="#1B75BB" />
                    </Text>
                </View>

                <UserIcon size={30} color="#1B75BB" />
            </View>

            {/* Search */}
            <View className="flex-row items-center space-x-2 pb-2 mx-4">
                <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
                    <MagnifyingGlassIcon color="gray" size={20} />
                    <TextInput placeholder="Restaurants and cuisines" keyboardType="default" />
                </View>
                <AdjustmentsHorizontalIcon color="#1B75BB" />
            </View>

            {/* Body */}
            <ScrollView 
                className="bg-gray-100"
                contentContainerStyle={{
                    paddingBottom: 100
                }}
            >
                {/* Categories */}
                <Categories />

                {/* Featured Rows */}
                <FeaturedRow
                    id="1"
                    title="Featured"
                    description="Paid placements from our partners"
                    featuredCategory="featured"
                />

                <FeaturedRow
                    id="2"
                    title="Tasty Discounts"
                    description="Everyone's been enjoying these juicy discounts!"
                    featuredCategory="featured"
                />

                <FeaturedRow
                    id="3"
                    title="Offers near you!"
                    description="Why not support your local restaurant tonight!"
                    featuredCategory="featured"
                />

            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen