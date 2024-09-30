import { View, Text, TouchableWithoutFeedback, Image } from 'react-native'
import tw from 'twrnc'
import * as Icon from 'react-native-feather'
import { themeColors } from '@/theme'
import { useRouter } from 'expo-router'

export default function RestaurantCard({item} : any) {
    const router = useRouter()
  return (
    <TouchableWithoutFeedback
        onPress={() => router.push("./restaurant", { ...item })}
    >
        <View style={[tw`mr-6 bg-white rounded-3xl shadow-lg`, {shadowColor: themeColors.bgColor(5), shadowRadius: 7}]}>
            <Image source={item.image} style={tw`w-64 h-36 rounded-t-3xl`} />
            <View style={tw`px-3 pb-4 mt-2`}>
                <Text style={tw`text-lg font-bold pt-2`}>{item.name}</Text>
                <View style={tw`flex-row items-center ml-1 mt-1`}>
                    <Icon.Star height="15" width="15" stroke="orange" />
                    <Text style={tw`text-xs`}>
                        <Text style={tw`text-green-700`}>  {item.stars}</Text>
                        <Text style={tw`text-gray-700`}>({item.reviews} review). <Text style={tw`font-semibold`}>{item.category}</Text></Text>
                    </Text>
                </View>
            <View style={tw`flex-row items-center ml-1 mt-2`}>
                <Icon.MapPin height="15" width="15" stroke="gray" />
                <Text style={tw`text-gray-700 text-xs`}> Nearby {item.address}</Text>
            </View>
            </View>
        </View>
    </TouchableWithoutFeedback>
  )
}