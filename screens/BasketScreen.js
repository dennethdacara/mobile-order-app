import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant } from '../features/restaurantSlice';
import { removeFromBasket, selectBasketItems, selectBasketTotal } from '../features/basketSlice';
import SafeViewAndroid from "../components/SafeViewAndroid";
import { XCircleIcon } from 'react-native-heroicons/solid';

const BasketScreen = () => {

    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant);
    const items = useSelector(selectBasketItems);
    const basketTotal = useSelector(selectBasketTotal);
    const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        // loop through items in the basket
        // create an object where by the key, if the key exists, then go ahead and push the item into that key
        const groupedItems = items.reduce((results, item) => {
            (results[item.id] = results[item.id] || []).push(item);
            return results;
        }, {});

        setGroupedItemsInBasket(groupedItems);

    }, [items]);

    return (
        <SafeAreaView style={SafeViewAndroid.AndroidSafeArea} className="flex-1 bg-white">
            <View className="flex-1 bg-gray-100">
                <View className="p-5 border-b border-[#1B75BB] bg-white shadow-xs mb-3"> 
                    <View>
                        <Text className="text-lg font-bold text-center">Basket</Text>
                        <Text className="text-center text-gray-400">
                            {restaurant.title}
                        </Text>
                    </View>

                    <TouchableOpacity
                        onPress={navigation.goBack}
                        className="rounded-full bg-gray-100 absolute top-3 right-5"
                    >
                        <XCircleIcon color="#1B75BB" height={50} width={50} />
                    </TouchableOpacity>
                </View>

                {/* <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
                    <Image 
                        source={{
                            uri: "https://links.papareact.com/wru"
                        }} 
                        className="h-7 w-7 bg-gray-300 p-4 rounded-full"
                    />
                    <Text className="flex-1">Ready in 10-30 minute/s</Text>
                </View> */}

                <ScrollView className="divide-y divide-gray-200">
                    {Object.entries(groupedItemsInBasket).map(([key, items]) => (
                        <View key={key} className="flex-row items-center space-x-3 bg-white py-2 px-5">
                            <Text className="text-[#1B75BB]">{items.length} x</Text>
                            <Image
                                source={{ uri: items[0]?.image }}
                                className="h-12 w-12 rounded-full"
                            />
                            <Text className="flex-1">{items[0]?.name}</Text>

                            <Text className="text-gray-600">
                                ₱{items[0]?.price}
                            </Text>

                            <TouchableOpacity
                                onPress={() => dispatch(removeFromBasket({ id: key }))}
                            >
                                <Text
                                    className="text-[#1B75BB] text-xs"
                                >
                                    Remove
                                </Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </ScrollView>

                <View className="p-5 bg-white mt-5 space-y-4">
                    <View className="flex-row justify-between">
                        <Text className="text-gray-400">Subtotal</Text>
                        <Text className="text-gray-400">
                            ₱{basketTotal}
                        </Text>
                    </View>

                    <View className="flex-row justify-between">
                        <Text>Order Total</Text>
                        <Text className="font-extrabold">
                            ₱{basketTotal}
                        </Text>
                    </View>

                    <TouchableOpacity onPress={() => navigation.navigate('PreparingOrderScreen')} className="rounded-lg bg-[#1B75BB] p-4">
                        <Text className="text-center text-white text-lg font-bold">Place Order</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </SafeAreaView>
    )
}

export default BasketScreen;