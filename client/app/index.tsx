import { ScrollView, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import { StatusBar } from "react-native";
import * as Icon from "react-native-feather";
import { themeColors } from "@/theme";
import Categories from "@/components/Categories";
import { featured } from "@/constants";
import FeaturedRow from "@/components/FeaturedRow";

export default function Index() {
  return (
    <SafeAreaView style={tw`bg-white`}>
      <StatusBar barStyle="dark-content" />
      {/* search bar */}
      <View style={tw`flex-row items-center ml-2 px-4 pb-2`}>
        <View
          style={tw`flex-row items-center flex-1 p-3 rounded-full border border-gray-300`}
        >
          <Icon.Search height="25" width="25" stroke="gray" />
          <TextInput placeholder="Restaurants" style={tw`flex-1 ml-2`} />
          <View
            style={tw`flex-row items-center ml-1 border-0 border-l-2 pl-2 border-l-gray-300`}
          >
            <Icon.MapPin height="20" width="20" stroke="gray" />
            <Text style={tw`text-gray-600 ml-1`}>Islamabad</Text>
          </View>
        </View>
        <View
          style={[
            tw`p-3 bg-gray-300 rounded-full ml-1`,
            { backgroundColor: themeColors.bgColor(1) },
          ]}
        >
          <Icon.Sliders
            height="20"
            width="20"
            stroke="white"
            strokeWidth={2.5}
          />
        </View>
      </View>

      {/* main */}
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 20 }}>
        <Categories />

          {/* featured */}
        <View style={tw`mt-5`}>
          {
            [featured, featured, featured].map((item, index) => {
              return (
                <FeaturedRow key={index} title={item.title} restaurants={item.restaurants} description={item.description} />
              )
            })
          }
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}
