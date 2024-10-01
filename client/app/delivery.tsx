import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useRouter } from 'expo-router'
import tw from 'twrnc'
import MapView, { Marker } from 'react-native-maps'
import { themeColors } from '@/theme'
import { useSelector } from "react-redux";
import { selectRestaurant } from "@/slices/restaurantSlice";
import * as Icon from 'react-native-feather'
import { useDispatch } from 'react-redux'
import { emptyCart } from '@/slices/cartSlice'

export default function delivery() {
    const restaurant = useSelector(selectRestaurant)
    const router = useRouter();
    const dispatch = useDispatch();
    const lng = parseFloat(restaurant.lng)
    const lat = parseFloat(restaurant.lat)
  
    // to avoid crashing if restaurant is not found
  if (!restaurant) {
    return (
      <View style={tw`flex-1 bg-white justify-center items-center`}>
        <Image source={require('@/assets/images/extras/delivery.gif')} style={tw`w-full h-60`} />
      </View>
    );
  }

  const handleBack = () => {
    router.navigate('/')
    dispatch(emptyCart([]))
  }

  return (
    <View style={tw`flex-1`}>
      <TouchableOpacity
            onPress={handleBack}
            style={[
              tw`absolute z-10 rounded-full p-1 shadow top-10 left-4`,
              { backgroundColor: themeColors.bgColor(1) },
            ]}
          >
            <Icon.ArrowLeft stroke='white' strokeWidth={3} />
          </TouchableOpacity>
      {/* map */}
      <MapView
        style={tw`flex-1`}
        initialRegion={{
          latitude: lng,
          longitude: lat,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        mapType="standard"
        >
        <Marker
          coordinate={{
            latitude: lng,
            longitude: lat,
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
            <TouchableOpacity style={[tw`bg-green-500 py-3 mx-5 mt-5 rounded-lg items-center`, { backgroundColor: themeColors.bgColor(1) }]}>
                <Text style={tw`text-white font-semibold text-lg`}>Track Order</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}