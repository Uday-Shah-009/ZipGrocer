import { Pressable, Text, TextInput, View, Image } from "react-native";
import { useForm, Controller } from "react-hook-form";

const LoginScreen = () => {
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

  const onSubmit = (data) => {
    console.log(data)
    reset();
  };

  return (
    <View className="flex-1 bg-white relative  items-center">
      <View className="flex-2 justify-start mt-[80px] items-center w-full">
        <Image
          source={require("../../../assets/images/logo.png")}
          className="w-[200px] h-[200px]"
        />
        <Text className="text-green-800 text-[28px] font-bold">
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
              className="w-[70%] border-2  text-[18px] rounded-md mt-8"
              placeholder="email"
              onChangeText={onChange}
              value={value}
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
              className="w-[70%] border-2  text-[18px] rounded-md mt-8"
              placeholder="password"
              onChangeText={onChange}
              secureTextEntry={true}
              value={value}
            />
          )}
        />
        <Pressable
          onPress={handleSubmit(onSubmit)}
          className="bg-green-600 px-6 py-3  w-[70%] rounded-lg mt-9"
        >
          <Text className="text-white text-center  font-semibold text-2xl">
            Login
          </Text>
        </Pressable>
        <View>
          <Pressable className="flex flex-row gap-2 mt-2">
            <Text>New to Zip Grocer</Text>
            <Text className="underline text-blue-500 ">
              create account
            </Text>
          </Pressable>
        </View>
      </View>
      <View
        className="bg-green-800 w-full h-[340px] rounded-[50%] flex justify-start
      items-center absolute bottom-[-150px] "
      ></View>
    </View>
  );
};

export default LoginScreen;
