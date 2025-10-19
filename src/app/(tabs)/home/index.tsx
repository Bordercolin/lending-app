import Button from "@/components/design/Buttons";
import ItemCard from "@/components/functional/cards/ItemCard";
import React from "react";

import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center px-5">
     <ItemCard />
    </SafeAreaView>
  );
}
