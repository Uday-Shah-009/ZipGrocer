import { Pressable, Text, TextInput, View, Image } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { useEffect, useState } from "react";

const SignUpScreen = () => {
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
  const [index, setIndex] = useState(0);
  const [userIn, setIn] = useState(false);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((prevIn) => (prevIn + 1) % titles.length);
        setVisible(true)
      }, 300);
    }, 2000);
    if (userIn) {
      return clearInterval(interval);
    }
  }, []);

  const onSubmit = (data) => {
    console.log("Form Submitted ✅", data);
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
              className="w-[70%] border-2 text-[18px] rounded-md mt-8"
              placeholder="enter your name"
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
              className="w-[70%] border-2  text-[18px] rounded-md mt-8"
              placeholder="enter your email"
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
              placeholder="set your password"
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
            Sign Up
          </Text>
        </Pressable>
      </View>
      <View
        className="bg-green-800 w-full h-[340px] rounded-[50%] flex justify-start
      items-center absolute bottom-[-150px] "
      >
        <Text
          className={`transition-opacity mt-[103px] duration-300 ease-in-out text-3xl text-white font-bold ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          {titles[index]}
        </Text>
      </View>
    </View>
  );
};

export default SignUpScreen;
