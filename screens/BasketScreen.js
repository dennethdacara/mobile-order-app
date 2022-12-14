import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant, setKotNum } from '../features/restaurantSlice';
import { removeFromBasket, selectBasketItems, selectBasketTotal } from '../features/basketSlice';
import SafeViewAndroid from "../components/SafeViewAndroid";
import { XCircleIcon } from 'react-native-heroicons/solid';
import axios from 'axios';

const BasketScreen = () => {

    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant);
    const items = useSelector(selectBasketItems);
    const basketTotal = useSelector(selectBasketTotal);
    const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);
    const dispatch = useDispatch();

    const currencyFormat = (amount) => {
        return '₱' + amount.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    }
    
    async function placeOrder() {

        // const baseUrl = 'http://192.168.254.123:8000'; // DEN PC
        // const baseUrl = 'http://192.168.254.141:8000'; // MEL PC
        const baseUrl = 'http://192.168.97.207:8000';

        let productsArr = [];
        {Object.entries(groupedItemsInBasket).map(([key, items]) => (
            productsArr.push({
                product_id: key,
                qty: items.length,
                price: items[0]?.price
            })
        ))};

        const data = {
            products: productsArr,
            service: "Take-out",
            service_channel: "",
            brand_id: "46",
            location_id: "33",
            pax_count: 1,
            tax: 0,
            service_charge_amount: 0,
            other_charges_amt: 0,
            sub_total: basketTotal,
            total: basketTotal,
            dynamic_taxes: [],
            more_details: "",
            terminal_id: "1",
            billed: true,
            customer_info: {
                name: "John Doyle",
                accountID: "3621873621",
                address: "6045 R Palma Street, Poblacion, Makati City"
            }
        };

        axios.post(`${baseUrl}/mobile/order`, {
            headers: {
                'Content-Type': "application/json",
                'Accept': "application/json",
            },
            data
        }).then(function (response) {
            console.log(response.data);
            dispatch(setKotNum(response.data));
            navigation.navigate('PreparingOrderScreen');
        }).catch(function (error) {
            console.log(error);
        });
    }

    useEffect(() => {
        // loop through items in the basket
        // create an object where by the key, if the key exists, then go ahead and push the item into that key
        const groupedItems = items.reduce((results, item) => {
            (results[item.id] = results[item.id] || []).push(item);
            return results;
        }, {});

        setGroupedItemsInBasket(groupedItems);
    }, []);

    // <TouchableOpacity onPress={() => navigation.navigate('PreparingOrderScreen')} className="rounded-lg bg-[#1B75BB] p-4">
    //     <Text className="text-center text-white text-lg font-bold">Place Order</Text>
    // </TouchableOpacity>

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

                <ScrollView className="divide-y divide-gray-200">
                    {Object.entries(groupedItemsInBasket).map(([key, items]) => (
                        <View key={key} className="flex-row items-center space-x-3 bg-white py-2 px-5">
                            <Text className="text-[#1B75BB]">{items.length} x</Text>
                            <Image
                                source={items[0]?.image}
                                className="h-12 w-12 rounded-full"
                            />
                            <Text className="flex-1">{items[0]?.name}</Text>

                            <Text className="text-gray-600">
                                {currencyFormat(items[0]?.price)}
                            </Text>

                            {/* <TouchableOpacity
                                onPress={() => dispatch(removeFromBasket({ id: key }))}
                            >
                                <Text
                                    className="text-[#1B75BB] text-xs"
                                >
                                    Remove
                                </Text>
                            </TouchableOpacity> */}
                        </View>
                    ))}
                </ScrollView>

                <View className="p-5 bg-white mt-5 space-y-4">
                    <View className="flex-row justify-between">
                        <Text className="text-gray-400">Subtotal</Text>
                        <Text className="text-gray-400">
                            {currencyFormat(basketTotal)}
                        </Text>
                    </View>

                    <View className="flex-row justify-between">
                        <Text>Order Total</Text>
                        <Text className="font-extrabold">
                            {currencyFormat(basketTotal)}
                        </Text>
                    </View>

                    <TouchableOpacity onPress={() => placeOrder()} className="rounded-lg bg-[#1B75BB] p-4">
                        <Text className="text-center text-white text-lg font-bold">Place Order</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </SafeAreaView>
    )
}

export default BasketScreen;