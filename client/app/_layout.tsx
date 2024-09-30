import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="restaurant" />
      <Stack.Screen 
        name="cart" 
        options={{
          presentation: "transparentModal",
          animation: "slide_from_bottom",
        }}
      />
      <Stack.Screen 
        name="order" 
        options={{
          presentation: "fullScreenModal",
          animation: "fade",
        }}
      />
    </Stack>
  );
}
