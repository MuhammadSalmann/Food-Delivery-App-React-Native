import { themeColors } from "@/theme";
import { View, Text, TouchableOpacity } from "react-native";
import tw from "twrnc";
import { useRouter } from "expo-router";
import { useSelector } from "react-redux";
import { selectCartItems, selectCartTotal } from "@/slices/cartSlice";

export default function CartIcon() {
  const router = useRouter();
  const cartTotal = useSelector(selectCartTotal);
  const cartItems = useSelector(selectCartItems);
  if(!cartItems.length) return;

  return (
    <View style={tw`absolute bottom-5 w-full z-50`}>
      <TouchableOpacity
        onPress={() => router.push("/cart")}
        style={[
          tw`flex-row justify-between items-center mx-5 rounded-full p-4 py-3 shadow-lg`,
          { backgroundColor: themeColors.bgColor(1) },
        ]}
      >
        <View
          style={[
            tw`p-2 px-4 rounded-full`,
            { backgroundColor: "rgba(255,255,255,0.3)" },
          ]}
        >
          <Text style={tw`text-lg text-white font-extrabold`}>{cartItems.length}</Text>
        </View>
        <Text style={tw`flex-1 text-center text-white font-extrabold`}>
          View Cart
        </Text>
        <Text style={tw`text-lg text-white font-extrabold`}>${cartTotal}</Text>
      </TouchableOpacity>
    </View>
  );
}
