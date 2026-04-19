import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShadowVisible: false }}>
      <Stack.Screen 
        name='index' 
        options={{ title: "Pokedex" }} 
      />
      <Stack.Screen 
        name='details' 
        options={{
          title: "Tafsilotlar",
          headerBackButtonDisplayMode: "minimal",
          presentation: "modal",
          sheetAllowedDetents: [0.5, 0.9],
          sheetGrabberVisible: true,
        }} 
      />
    </Stack>
  );
}
