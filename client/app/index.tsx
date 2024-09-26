import { Button, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  return (
    <SafeAreaView style={tw`flex-1 items-center justify-center bg-white`}>
      <Text>Hello World.</Text>
      <Button
        title="Go to Home Page"
        onPress={() => router.push("./restaurant")}
      />
    </SafeAreaView>
  );
}
