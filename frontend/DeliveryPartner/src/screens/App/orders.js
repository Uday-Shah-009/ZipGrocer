import { useEffect, useState } from "react";
import { View, Text, Pressable, ScrollView } from "react-native";
import { usePartnerLocation } from "../../utils/getCoords";
import { availableOrders } from "../../api/Orders/availableOrders";
import { FlatList } from "react-native";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const location = usePartnerLocation();

  useEffect(() => {
    if (!location) return;
    try {
      const getOrders = async () => {
        const data = await availableOrders(
          location.latitude,
          location.longitude
        );
        setOrders(data);
      };
      getOrders();
    } catch (err) {
      console.error(err);
    }
  }, [location]);

  

  const renderItems = ({ item }) => (
    <View className="flex flex-row bg-white mb-5 items-center justify-between w-[100%] shadow-2xl p-5  rounded-lg">
      <View className="flex items-center gap-1">
        <Text className="text-black font-semibold text-[16px]">
          {item._id}
        </Text>
        <Text className="text-black text-[16px]">{item.distance} Kms</Text>
      </View>
      <View className="flex flex-row items-center gap-2 ml-3">
        <Pressable className="bg-green-300 text-center py-2 px-3 rounded-md">
          <Text className="text-green-600 font-semibold">Accept</Text>
        </Pressable>
        <Pressable className="bg-red-300 text-center py-2 px-3 rounded-md">
          <Text className="text-red-600 font-semibold">Decline</Text>
        </Pressable>
      </View>
    </View>
  );

  return (
    <View className="flex-1 w-[100%] bg-green-600 items-center p-4">
      <View className="h-[160px] flex justify-end mb-5">
        <Text className="mb-10 text-[28px] font-bold text-teal-50">
          Available Orders
        </Text>
      </View>
      <View className="w-[100%] flex justify-center items-center">
      <ScrollView horizontal>
          <FlatList
            data={orders}
            keyExtractor={(item) => item._id}
            renderItem={renderItems}
          />
      </ScrollView>
       </View>
    </View>
  );
};

export default Orders;
