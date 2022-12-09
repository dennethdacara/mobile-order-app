import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import React, { useEffect, useLayoutEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native'; 
import { useDispatch, useSelector } from 'react-redux';
import { setRestaurant } from '../features/restaurantSlice';
import {
    ArrowLeftIcon,
    ChevronRightIcon,
    MapPinIcon,
    StarIcon
} from 'react-native-heroicons/solid';
import { QuestionMarkCircleIcon } from 'react-native-heroicons/outline';
import DishRow from '../components/DishRow';
import BasketIcon from '../components/BasketIcon';

const RestaurantScreen = () => {

    const route = useRoute();
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const {
        params: {
            id,
            imgUrl,
            title,
            rating,
            genre,
            address,
            short_description,
            dishes1,
            long,
            lat,
        }
    } = useRoute();

    useEffect(() => {
        dispatch(setRestaurant({
            id,
            imgUrl,
            title,
            rating,
            genre,
            address,
            short_description,
            dishes1,
            long,
            lat,
        }))
    }, [dispatch]);

    const dishes = [
        {
            id: 1,
            name: 'PERI-PERI Nuts',
            short_description: 'Famous Dish',
            price: 150.00,
            image: 'https://mgi-deliveryportal.s3.amazonaws.com/Regular%20Whole%20Fried%20Chicken%20(Top)%20PWA%20DESKTOP%20680x510%2001.jpg'
        },
        {
            id: 2,
            name: '2 Chicken Wings',
            short_description: 'Famous Dish #2',
            price: 250.00,
            image: 'https://mgi-deliveryportal.s3.amazonaws.com/Crispy%20Pata%20PWA%20DESKTOP%20680x510%2001.jpg'
        },
        {
            id: 3,
            name: '3 Chicken Wings',
            short_description: 'Famous Dish #2',
            price: 250.00,
            image: 'https://mgi-deliveryportal.s3.amazonaws.com/Crispy%20Pata%20PWA%20DESKTOP%20680x510%2001.jpg'
        },
        {
            id: 4,
            name: '4 Chicken Wings',
            short_description: 'Famous Dish #2',
            price: 250.00,
            image: 'https://mgi-deliveryportal.s3.amazonaws.com/Crispy%20Pata%20PWA%20DESKTOP%20680x510%2001.jpg'
        }
    ];

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    return (
        <>
            <BasketIcon />
            <ScrollView>
                <View className="relative">
                    <Image 
                        source={{
                            uri: imgUrl
                        }}
                        className="w-full h-56 bg-gray-300 p-4"
                    />
                    <TouchableOpacity
                        onPress={navigation.goBack}
                        className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full"
                    >
                        <ArrowLeftIcon size={20} color="#1B75BB" /> 
                    </TouchableOpacity>
                </View>

                <View className="bg-white">
                    <View className="px-4 pt-4">
                        <Text className="text-3xl font-bold">{title}</Text>
                        <View className="flex-row space-x-2 my-1">
                            <View className="flex-row items-center space-x-1">
                                <StarIcon color="green" opacity={0.5} size={22} />
                                <Text className="text-xs text-gray-500">
                                    <Text className="text-green-500">{rating}</Text> - {genre}
                                </Text>
                            </View>

                            <View className="flex-row items-center space-x-1">
                                <MapPinIcon color="green" opacity={0.4} size={22} />
                                <Text className="text-xs text-gray-500">
                                    <Text className="text-gray-500">Nearby . {address}</Text>
                                </Text>
                            </View>
                        </View>
                        <Text className="text-gray-500 mt-2 pb-4">
                            {short_description}
                        </Text>
                    </View>

                    <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
                        <QuestionMarkCircleIcon color="gray" opacity={0.6} size={20} />
                        <Text className="pl-2 flex-1 text-md font-bold">
                            Have a voucher coupon?
                        </Text>
                        <ChevronRightIcon color="#1B75BB" />
                    </TouchableOpacity>
                </View>

                <View className="pb-36">
                    <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>

                    {/* Dishrows */}
                    {dishes.map(dish => (
                        <DishRow
                            key={dish.id}
                            id={dish.id}
                            name={dish.name}
                            short_description={dish.short_description}
                            price={dish.price}
                            image={dish.image}
                        />
                    ))}
                </View>
            </ScrollView>
        </>
    );
}

export default RestaurantScreen;