import { Stack } from "expo-router";
import { Provider } from "react-redux";
import { store } from "@/store";

export default function RootLayout() {
  return (
    <Provider store={store}>
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
      <Stack.Screen 
        name="delivery" 
        options={{
          presentation: "fullScreenModal",
          animation: "fade",
        }}
      />
    </Stack>
    </Provider>
  );
}
