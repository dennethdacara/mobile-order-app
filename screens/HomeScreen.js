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
    UserCircleIcon,
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
                <View className="flex-1">
                    <Text className="font-bold text-gray-400 text-xs">Order Now!</Text>
                    <Text className="font-bold text-xl">
                        Mobile Order
                        {/* <ChevronDownIcon size={20} color="#1B75BB" /> */}
                    </Text>
                </View>
                <UserCircleIcon size={30} color="#1B75BB" />
            </View>

            {/* Search */}
            <View className="flex-row items-center space-x-2 pb-2 mx-4">
                <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
                    <MagnifyingGlassIcon color="gray" size={20} />
                    <TextInput placeholder="Restaurants and cuisines" keyboardType="default" />
                </View>
                {/* <AdjustmentsHorizontalIcon color="#1B75BB" /> */}
            </View>

            {/* Body */}
            <ScrollView 
                className="bg-gray-100"
                contentContainerStyle={{
                    paddingBottom: 100
                }}
            >
                {/* Categories */}
                <View>
                    <View className="mt-4 flex-row items-center justify-between px-4">
                        <Text className="font-bold text-lg">Categories</Text>
                    </View>
                </View>
                <Categories />

                {/* Featured Rows */}
                <FeaturedRow
                    id="1"
                    title="Featured"
                    description="Discover restaurants near you"
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