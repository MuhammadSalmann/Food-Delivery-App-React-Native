import { categories } from "@/constants";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import tw from "twrnc";
import { Image } from "react-native";
import { useState } from "react";

export default function Categories() {
  const [activeCategory, setActiveCategory] = useState(null);
  return (
    <View style={tw`mt-4`}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={tw`overflow-visible`}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {categories.map((category, index) => {
          let isActive = category.id === activeCategory;
          let btnClass = isActive ? tw`bg-gray-600` : tw`bg-gray-200`;
          let textColor = isActive
            ? tw`font-semibold text-gray-800`
            : tw`text-gray-500`;
          return (
            <View key={index} style={tw`mr-6 flex justify-center items-center`}>
              <TouchableOpacity
                style={[tw`p-1 rounded-full shadow bg-gray-200`, btnClass]}
                onPress={() => setActiveCategory(category.id)}
              >
                <Image
                  source={category.image}
                  style={{ width: 45, height: 45 }}
                />
              </TouchableOpacity>
                <Text style={[tw`text-sm`, textColor]}>{category.name}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
