import { View, ScrollView } from "react-native";
import React from "react";

type HorizontalSliderProps = {
  className?: string;
  children: React.ReactNode;
};

const HorizontalSlider = ({ className, children }: HorizontalSliderProps) => {
  return (
    <View className={className}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerClassName="flex-row gap-3 px-5"
      >
        {children}
      </ScrollView>
    </View>
  );
};

export { HorizontalSlider };
