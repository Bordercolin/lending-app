import React from "react";
import { View, Text } from "react-native";
import { Button, ButtonText } from "@/components/ui/button";
export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-500">
        Welcome to Nativewind!
      </Text>
      <Button variant="solid" size="md" action="positive">
        <ButtonText>Click me</ButtonText>
      </Button>
    </View>
  );
}
