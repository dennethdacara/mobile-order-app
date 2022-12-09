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
            name: 'Wagyu Steak',
            short_description: "If you're looking for a place that serves good steak at such a reasonable price.",
            price: 1500.00,
            image: require('../assets/products/wagyu-steak.jpg')
        },
        {
            id: 2,
            name: 'Sinigang na Baboy (M)',
            short_description: "Sinigang na Baboy is the ultimate comfort food! Made with pork ribs, vegetables, and tamarind-flavored broth, it’s hearty and delicious on its own or served with steamed rice.",
            price: 355.00,
            image: require('../assets/products/sinigang-na-baboy.png')
        },
        {
            id: 3,
            name: 'House Crispy Sisig',
            short_description: "Doyle's House Crispy Sisig is extra crunchy, malinamnam, and, with a little bit of sili, may extra sipa that fans of spicy food will surely enjoy.",
            price: 270.00,
            image: require('../assets/products/house-crispy-sisig.jpg')
        },
        {
            id: 4,
            name: "Doyle's Lechon Belly",
            short_description: "Lechon belly is best-served kamayan style with a side of sinangag (garlic rice), pork BBQ skewers, and some tangy atchara.",
            price: 500.00,
            image: require('../assets/products/crispy-pata.jpg')
        },
        {
            id: 5,
            name: 'Aglio-Olio',
            short_description: "Spaghetti aglio e olio is a traditional Italian pasta dish from Naples. It is a typical dish of Neapolitan cuisine and is widely popular.",
            price: 250.00,
            image: require('../assets/products/aglio.jpg')
        },
        {
            id: 6,
            name: 'Choc. Moist Cake (Sliced)',
            short_description: "Layers of rich moist chocolate cakes with chocolate fudge icing.",
            price: 250.00,
            image: require('../assets/products/moist-cake.jpg')
        },
        {
            id: 7,
            name: "Doyle's Strawberry Cake (Sliced)",
            short_description: "This refreshing strawberry cake recipe uses strawberry puree and strawberry gelatin to make this kid-tested and approved celebration cake.",
            price: 250.00,
            image: require('../assets/products/strawberry-cake.jpg')
        },
        {
            id: 8,
            name: 'Banana Cake Slice',
            short_description: "Banana cake is lighter and is made much similar to the traditional butter cake by creaming butter and sugar.",
            price: 150.00,
            image: require('../assets/products/banana-cake.jpg')
        },
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
                        source={imgUrl}
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