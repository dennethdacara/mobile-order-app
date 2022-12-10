import { View, Text, TouchableOpacity, Image, SafeAreaView } from 'react-native'
import React from 'react'
import { selectRestaurant, selectKotNum } from '../features/restaurantSlice';
import { useNavigation, useRoute } from '@react-navigation/native'; 
import { useSelector } from 'react-redux';
import { XMarkIcon } from 'react-native-heroicons/solid';
import * as Progress from 'react-native-progress';

const DeliveryScreen = () => {

    const navigation = useNavigation();
    // const {
    //     params: {
    //         kot_num
    //     }
    // } = useRoute();

    const restaurant = useSelector(selectRestaurant);
    const kotNum = useSelector(selectKotNum);

    return (
        <View className="bg-[#1B75BB] flex-1 pt-5">
            <SafeAreaView>
                <View className="flex-row justify-between items-center p-5 mt-2">
                    <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                        <XMarkIcon color="white" size={30} />
                    </TouchableOpacity>

                    <Text className="font-light text-white text-lg">Order Help</Text>
                </View>

                <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
                    <View className="flex-row justify-between mb-2">
                        <View>
                            <Text className="text-lg font-bold">Order #{kotNum || 'N/A'}</Text>
                            
                            <Text className="text-lg text-gray-400">Estimated Time</Text>
                            <Text className="text-4xl font-bold">15-20 Minutes</Text>
                        </View>
                        <Image
                            source={require('../assets/delivery-icon.png')}
                            className="ml-2 h-20 w-20"
                        />
                    </View>

                    <Progress.Bar size={30} color="#1B75BB" indeterminate={true} />

                    <Text className="mt-3 text-gray-500">
                        Your order at {restaurant.title} is being prepared
                    </Text>
                </View>
            </SafeAreaView>
        </View>
    )
}

export default DeliveryScreen