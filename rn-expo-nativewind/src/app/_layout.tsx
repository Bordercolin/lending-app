import { Stack } from "expo-router";
import "../../global.css";

export default function RootStackLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}
