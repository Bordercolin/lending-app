import React, { useState } from "react";
import { View, Text, Image, LayoutChangeEvent } from "react-native";
import Button from "@/components/design/Buttons";

export default function ItemCard() {
  const [cardHeight, setCardHeight] = useState<number | null>(null);

  const handleLayout = (event: LayoutChangeEvent) => {
    const { height } = event.nativeEvent.layout;
    setCardHeight(height);
  };

  return (
    <View className="flex-row rounded-2xl border border-gray-200 bg-white w-full p-4 items-start">
      {/* Left side: Text content */}
      <View className="flex-1 pr-4" onLayout={handleLayout}>
        <Text className="text-primary-600 text-xl font-bold mb-1">
          Give Away
        </Text>

        <Text
          className="text-black text-2xl font-extrabold mb-1"
          numberOfLines={3}
        >
          Vintage Bookshelf
        </Text>

        <Text className="text-gray-400 text-xl mb-3">Available now</Text>

        <Button
          title="View"
          size="md"
          borderRadius="full"
          onPress={() => {}}
          className="self-start"
        />
      </View>

      {/* Right side: Image that matches height of text area and remains square */}
      {cardHeight ? (
        <Image
          source={require("@/assets/images/items/bookshelf.jpg")}
          resizeMode="cover"
          style={{
            height: cardHeight,
            width: cardHeight,
            borderRadius: 12,
          }}
        />
      ) : (
        // Placeholder before layout is measured
        <View className="bg-blue-400 rounded-xl w-28 aspect-square" />
      )}
    </View>
  );
}
