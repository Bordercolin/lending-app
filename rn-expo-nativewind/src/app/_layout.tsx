import { Stack } from "expo-router";

import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import '@/global.css';

export default function RootStackLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    
    <GluestackUIProvider mode="dark">
      <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
    </GluestackUIProvider>
  
  );
}
