import React from "react";
import { View, Text } from "react-native";
import { HorizontalSlider } from "@/components/ui/slider";
import { Button, ButtonText } from "@/components/ui/button";
import { SafeAreaView } from "react-native-safe-area-context";

const MOCK_BUTTONS = [
  { id: 1, title: "Button 1" },
  { id: 2, title: "Button 2" },
  { id: 3, title: "Button 3" },
  { id: 4, title: "Button 4" },
  { id: 5, title: "Button 5" },
];

export default function Home() {

  const [activeButton, setActiveButton] = React.useState(MOCK_BUTTONS[0].id);

  return (
    <SafeAreaView className="flex-1 items-center px-5">
      <Text className="text-xl font-bold text-blue-500 mb-4">
        Welcome to Nativewind!
      </Text>

      <HorizontalSlider className="-mx-5">
        {MOCK_BUTTONS.map((button) => {
          const isActive = activeButton === button.id;
          return (
            <Button
              key={button.id}
              onPress={() => setActiveButton(button.id)}
              className={`
                px-4 py-2 rounded-full 
                ${isActive ? "" : "bg-gray-200"}
              `}
            >
              <ButtonText
                className={isActive ? "" : "text-gray-700"}
              >
                {button.title}
              </ButtonText>
            </Button>
          );
        })}
      </HorizontalSlider>
    </SafeAreaView>
  );
}
