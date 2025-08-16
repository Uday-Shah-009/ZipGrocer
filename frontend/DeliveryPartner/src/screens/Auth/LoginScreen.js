import { Pressable, Text, TextInput, View, Image, ScrollView } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import '../../global.css'
import { userLogin } from "../../api/Auth/auth.api.js";
import { AuthState } from "../../Services/store/AuthStore.js";

const LoginScreen = () => {
  const login = AuthState((state) => state.login)
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async(data) => {
    console.log(data)
    const res = await userLogin(data);
    login(res);
    reset();
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
        {/* Main Content Container */}
        <View className="flex-1 relative justify-center items-center px-6 mb-[120px]">
          <View className="w-full max-w-sm items-center">
            <Image
              source={require("../../../assets/images/logo.png")}
              className="w-[150px] h-[150px] mb-4"
            />
            <Text className="text-green-800 text-[24px] font-bold mb-8 text-center">
              Welcome Back!
            </Text>
         
            <Controller
            name="email"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <TextInput
                className="w-full border-2 border-gray-300 text-[16px] rounded-md mb-4 px-4 py-3"
                placeholder="email"
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
                placeholder="password"
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
              Login
            </Text>
          </Pressable>
          
          <Pressable 
            onPress={() => navigation.navigate('SignUp')}
            className="flex flex-row gap-2"
          >
            <Text className="text-gray-600">New to Zip Grocer?</Text>
            <Text className="underline text-blue-500 font-medium">Create account</Text>
          </Pressable>
        </View>
      </View>
      
      {/* Decorative Bottom Circle */}
      <View className=" absolute bottom-0 left-0 right-0 h-[240px] overflow-hidden pointer-events-none">
        <View className="bg-green-800 w-full h-[250px] rounded-[50%] absolute bottom-[-90px]" />
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;