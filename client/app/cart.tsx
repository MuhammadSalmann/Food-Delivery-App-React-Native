import { featured } from "@/constants";
import { themeColors } from "@/theme";
import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import tw from "twrnc";
import * as Icon from "react-native-feather";

export default function Cart() {
  const router = useRouter();
  const restaurant = featured.restaurants[0];

  return (
    <View style={tw`flex-1 justify-end`}>
      {/* Modal Content */}
      <View style={tw`bg-white h-9.5/10 rounded-tr-3xl rounded-tl-3xl`}>
        {/* back btn */}
        <View style={tw`relative py-4 shadow-sm`}>
          <TouchableOpacity
            onPress={() => router.back()}
            style={[
              tw`absolute z-10 rounded-full p-1 shadow top-5 left-2`,
              { backgroundColor: themeColors.bgColor(1) },
            ]}
          >
            <Icon.ArrowDown stroke='white' strokeWidth={3} />
          </TouchableOpacity>
          <View>
            <Text style={tw`text-center text-xl font-bold`}>Your Cart</Text>
            <Text style={tw`text-center text-gray-500`}>{restaurant.name}</Text>
          </View>
        </View>
        {/* Delivery Time */}
        <View style={[tw`flex-row px-4 items-center`, {backgroundColor: themeColors.bgColor(0.2)}]}>
          <Image source={require('@/assets/images/extras/bikeguy.png')} style={tw`w-20 h-20 rounded-4xl bg-white`} />
          <Text style={tw`flex-1 pl-4`}>Delivery in 20-30 minutes</Text>
          <TouchableOpacity>
            <Text style={[tw`font-bold`, {color: themeColors.text}]}>Change</Text>
          </TouchableOpacity>
        </View>
        {/* dishes */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={tw`bg-white pt-5`}
          contentContainerStyle={{ paddingBottom: 50 }}
        >
          {
            restaurant.dishes.map((dish, i) => {
              return (
                <View key={i} style={tw`flex-row justify-between items-center rounded-3xl bg-white mt-3 px-4 py-2 shadow-md`}>
                  <View style={tw`flex-row items-center`}>
                    <Image source={dish.image} style={tw`w-16 h-16 rounded-2xl`} />
                    <View style={tw`pl-4`}>
                      <Text style={tw`font-bold`}>{dish.name}</Text>
                      <Text style={tw`text-gray-500`}>$ {dish.price}</Text>
                    </View>
                  </View>
                  <View style={tw`flex-row items-center`}>
                    <TouchableOpacity>
                      <Icon.MinusCircle stroke={themeColors.text} strokeWidth={2} />
                    </TouchableOpacity>
                    <Text style={tw`px-2`}>1</Text>
                    <TouchableOpacity>
                      <Icon.PlusCircle stroke={themeColors.text} strokeWidth={2} />
                    </TouchableOpacity>
                  </View>
                </View>
              )
            })
          }
        </ScrollView>
        {/* total */}
        <View style={[tw`p-6 px-8 rounded-t-3xl mt-4`, {backgroundColor: themeColors.bgColor(0.2)}]}>
          <View style={tw`flex-row justify-between`}>
            <Text style={tw`text-gray-700`}>Subtotal</Text>
            <Text style={tw`text-gray-700`}>$20</Text>
          </View>
          <View style={tw`flex-row justify-between mt-2`}>
            <Text style={tw`text-gray-700`}>Delivery Fee</Text>
            <Text style={tw`text-gray-700`}>$2</Text>
          </View>
          <View style={tw`flex-row justify-between mt-2`}>
            <Text style={tw`text-gray-700 font-extrabold`}>Total</Text>
            <Text style={tw`text-gray-700 font-extrabold`}>$22</Text>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => router.push("./order")}
              style={[
                tw`flex-row justify-center items-center rounded-full p-4 mt-4`,
                { backgroundColor: themeColors.bgColor(1) },
              ]}
            >
              <Text style={tw`text-white font-bold`}>Place Order</Text>
            </TouchableOpacity>
          </View>
      </View>
      </View>
    </View>
  );
}