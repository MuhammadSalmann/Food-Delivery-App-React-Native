import { Text, View, ScrollView, Image, TouchableOpacity, StatusBar } from "react-native";
import tw from "twrnc";
import { useRouter, useLocalSearchParams } from "expo-router";
import * as Icon from "react-native-feather";
import { themeColors } from "@/theme";
import DishRow from "@/components/DishRow";
import CartIcon from "@/components/CartIcon";

export default function RestaurantPage() {
  const router = useRouter();
  const item = useLocalSearchParams();
  // console.log(item);

  // Safely parse the `dishes` array if it's passed as a string
  let dishes = [];
  try {
    if (typeof item.dishes === 'string') {
      dishes = JSON.parse(item.dishes); // Parsing the dishes field
    } else {
      console.error("Expected a string for dishes, but got:", typeof item.dishes);
    }
  } catch (e) {
    console.error("Error parsing dishes:", e);
  }
  console.log(dishes);

  return (
    <View>
      <CartIcon />
      <StatusBar barStyle={"light-content"}/>
      <ScrollView>
        <View style={tw`relative`}>
          <Image source={item.image}  style={tw`w-full h-72`} />
          <TouchableOpacity onPress={() => router.back()} style={tw`absolute top-14 left-4 bg-white p-2 rounded-full shadow`}>
            <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />
          </TouchableOpacity>
        </View>
        <View style={[tw`bg-white -mt-12 pt-6`, { borderTopLeftRadius: 40, borderTopRightRadius: 40 }]}>
          <View style={tw`px-5`}>
            <Text style={tw`text-3xl font-bold`}>{item.name}</Text>
            <View style={tw`flex-row ml-2 my-1`}>
            <View style={tw`flex-row items-center ml-1 mt-1`}>
                    <Icon.Star height="15" width="15" stroke="orange" />
                    <Text style={tw`text-xs`}>
                        <Text style={tw`text-green-700`}>  {item.stars}</Text>
                        <Text style={tw`text-gray-700`}>({item.reviews} review) . <Text style={tw`font-semibold`}>{item.category}</Text></Text>
                    </Text>
            </View>
            <View style={tw`flex-row items-center ml-1 mt-2`}>
                <Icon.MapPin height="15" width="15" stroke="gray" />
                <Text style={tw`text-gray-700 text-xs`}> Nearby {item.address}</Text>
            </View>
            </View>
            <Text style={tw`mt-2 text-gray-500`}>{item.description}</Text>
          </View>
        </View>
        <View style={tw`pb-36 bg-white`}>
          <Text style={tw`px-4 py-4 text-2xl font-bold`}>Menu</Text>
          {/* Dishes */}
          {
            dishes.map((dish: any, index: number) => <DishRow item={{...dish}} key={index} /> )
          }
        </View>
      </ScrollView>
    </View>
  );
}