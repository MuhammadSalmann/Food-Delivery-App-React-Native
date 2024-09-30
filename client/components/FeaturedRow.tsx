import { themeColors } from "@/theme";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import tw from "twrnc";
import RestaurantCard from "./RestaurantCard";

export default function FeaturedRow({ title, description, restaurants }: any) {
  return (
    <View>
      <View style={tw`flex-row justify-between items-center px-4`}>
        <View>
          <Text style={tw`font-bold text-lg`}>{title}</Text>
          <Text style={tw`text-gray-500 text-xs`}>{description}</Text>
        </View>
        <TouchableOpacity style={tw`p-2 bg-gray-200 rounded-full`}>
          <Text style={[tw`font-semibold`, { color: themeColors.text }]}>
            See All
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15, paddingVertical: 10 }}
        style={tw`overflow-visible py-3`}
      >
        {restaurants.map((restaurant: any, index: number) => {
          return <RestaurantCard key={index} item={restaurant} />;
        })}
      </ScrollView>
    </View>
  );
}
