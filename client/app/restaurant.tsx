import { Text, View, Button } from "react-native";
import tw from "twrnc";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

export default function RestaurantPage() {
  const router = useRouter();

  return (
    <SafeAreaView style={tw`flex-1 items-center justify-center bg-white`}>
      <Text style={tw`text-lg`}>Restaurant Pages</Text>
      <Button
        title="Go back to Home Screen"
        onPress={() => router.back()}
      />
    </SafeAreaView>
  );
}