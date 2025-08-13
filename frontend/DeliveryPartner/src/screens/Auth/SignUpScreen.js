import { Pressable, Text, TextInput, View, Image, ScrollView } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignUpScreen = () => {
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const titles = ["Earn Daily", "Be Faster!", "WELCOME"];
  const [index, setIndex] = useState(2);
  const [userIn, setIn] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("triggered");
      setVisible(false);
      setTimeout(() => {
        setIndex((prevIn) => (prevIn + 1) % titles.length);
        setVisible(true);
      }, 300);
    }, 2000);
    if (userIn) {
      return clearInterval(interval);
    }
  },[]);

  const onSubmit = (data) => {
    console.log("Form Submitted ✅", data);
    reset();
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView 
        className="flex-1" 
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-1 justify-center items-center px-6 py-8">
          <View className="w-full max-w-sm items-center">
            <Image
              source={require("../../../assets/images/logo.png")}
              className="w-[150px] h-[150px] mb-4"
            />
            <Text className="text-green-800 text-[24px] font-bold mb-8 text-center">
              Register to Deliver
            </Text>
            
            <Controller
              name="name"
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, value } }) => (
                <TextInput
                  className="w-full border-2 border-gray-300 text-[16px] rounded-md mb-4 px-4 py-3"
                  placeholder="Full Name"
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />
            
            <Controller
              name="email"
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, value } }) => (
                <TextInput
                  className="w-full border-2 border-gray-300 text-[16px] rounded-md mb-4 px-4 py-3"
                  placeholder="Email"
                  onChangeText={onChange}
                  value={value}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              )}
            />
            
            <Controller
              name="password"
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, value } }) => (
                <TextInput
                  className="w-full border-2 border-gray-300 text-[16px] rounded-md mb-6 px-4 py-3"
                  placeholder="Password"
                  onChangeText={onChange}
                  secureTextEntry={true}
                  value={value}
                />
              )}
            />
            
            <Pressable
              onPress={handleSubmit(onSubmit)}
              className="bg-green-600 w-full rounded-lg py-4 mb-4"
            >
              <Text className="text-white text-center font-semibold text-xl">
                Sign Up
              </Text>
            </Pressable>
            
            <Pressable 
              onPress={() => navigation.navigate('Login')}
              className="flex flex-row gap-2 mb-8"
            >
              <Text className="text-gray-600">Already Have an Account?</Text>
              <Text className="underline text-blue-500 font-medium">Login here</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
      
      {/* Decorative Bottom Circle with Animation */}
      <View className="absolute bottom-0 left-0 right-0 h-[240px] overflow-hidden pointer-events-none">
        <View className="bg-green-800 w-full h-[280px] rounded-[50%] absolute bottom-[-110px] justify-start items-center">
          <Text
            className={`mt-[60px] text-2xl text-white font-bold transition-opacity duration-300 ${
              visible ? "opacity-100" : "opacity-0"
            }`}
          >
            {titles[index]}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;
