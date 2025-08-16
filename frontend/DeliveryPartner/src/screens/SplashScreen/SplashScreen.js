import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Loader from '../../components/Loader'

const SplashScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
        <View className="flex-1 items-center justify-center gap-5">
            <Image
              source={require("../../../assets/images/logo.png")}
              className="w-[150px] h-[150px] mb-4"
            />
            <Text className="text-green-600 font-bold text-[26px]">Zip Grocer</Text>
        </View>
    </SafeAreaView>
  )
}

export default SplashScreen