import { View, Text, Image } from 'react-native'
import { featured } from '@/constants'
import { useRouter } from 'expo-router'
import tw from 'twrnc'
import MapView, { Marker } from 'react-native-maps'
import { themeColors } from '@/theme'

export default function delivery() {
    const restaurant = featured.restaurants[0]
    const router = useRouter();
  return (
    <View style={tw`flex-1`}>
      {/* map */}
      <MapView
        style={tw`flex-1`}
        initialRegion={{
          latitude: restaurant.lng,
          longitude: restaurant.lat,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        mapType="standard"
        >
        <Marker
          coordinate={{
            latitude: restaurant.lng,
            longitude: restaurant.lat,
          }}
          title={restaurant.name}
          description={restaurant.address}
          pinColor={themeColors.bgColor(1)}
        />
        </MapView>
        <View style={tw`rounded-t-3xl -mt-12 bg-white relative pb-5`}>
            <View style={tw`flex-row justify-between px-5 pt-10`}>
                <View>
                    <Text style={tw`text-gray-700 font-semibold text-lg`}>Estimated Arrival</Text>
                    <Text style={tw`text-gray-700 font-extrabold text-3xl`}>20-30 Minutes</Text>
                    <Text style={tw`mt-2 text-gray-700 font-semibold`}>Your Order is on its way!</Text>
                </View>
                <Image source={require('@/assets/images/extras/deliveryicon.gif')} style={tw`w-24 h-24`} />
            </View>
        </View>
    </View>
  )
}