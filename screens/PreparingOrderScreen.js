import { View, Text, SafeAreaView } from 'react-native';
import React, { useEffect } from 'react';
import SafeViewAndroid from "../components/SafeViewAndroid";
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native';

{/* <Animatable.Image
    source={require('../assets/orderLoading.gif')}
    animation="slideInUp"
    iterationCount={1}
    className="h-96 w-96"
/> */}

const PreparingOrderScreen = () => {

    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Delivery', {
                kot_num: Math.floor(Math.random() * (9999 - 1000 + 1) + 1000)
            });
        }, 4000);
    }, []);

    return (
        <SafeAreaView className="bg-[#1B75BB] flex-1 justify-center items-center">

            <Animatable.Text
                animation="slideInUp"
                iterationCount={1}
                className="text-lg my-10 text-white font-bold text-center px-5"
            >
                Waiting for Restaurant to accept your order!
            </Animatable.Text>

            {/* <Progress.Pie size={60} indeterminate={true} color="white" /> */}
            <Progress.Circle size={30} indeterminate={true} color="white" />

        </SafeAreaView>
    )
}

export default PreparingOrderScreen